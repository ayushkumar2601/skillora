import { type NextRequest } from 'next/server'
import { updateSession } from '@/lib/supabase/middleware'
import { NextResponse } from 'next/server'
import { createServerClient } from '@supabase/ssr'

export async function middleware(request: NextRequest) {
  const { supabaseResponse, user } = await updateSession(request)

  const { pathname } = request.nextUrl

  // Public routes that don't require authentication
  const publicRoutes = ['/', '/login', '/signup', '/features', '/how-it-works', '/about']
  const isPublicRoute = publicRoutes.some(route => pathname === route || pathname.startsWith('/api/'))

  // If user is not authenticated and trying to access protected route
  if (!user && !isPublicRoute) {
    const url = request.nextUrl.clone()
    url.pathname = '/login'
    return NextResponse.redirect(url)
  }

  // If user is authenticated
  if (user) {
    // Get user role from profiles table
    const supabase = createServerClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL!,
      process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
      {
        cookies: {
          getAll() {
            return request.cookies.getAll()
          },
          setAll(cookiesToSet) {
            cookiesToSet.forEach(({ name, value }) => request.cookies.set(name, value))
          },
        },
      }
    )

    const { data: profile } = await supabase
      .from('profiles')
      .select('role')
      .eq('id', user.id)
      .single()

    const userRole = profile?.role

    // Redirect authenticated users away from auth pages
    if (pathname === '/login' || pathname === '/signup') {
      const url = request.nextUrl.clone()
      url.pathname = userRole === 'admin' ? '/dashboard/admin' : '/dashboard/student'
      return NextResponse.redirect(url)
    }

    // Role-based route protection
    if (userRole === 'student' && pathname.startsWith('/dashboard/admin')) {
      const url = request.nextUrl.clone()
      url.pathname = '/dashboard/student'
      return NextResponse.redirect(url)
    }

    if (userRole === 'admin' && pathname.startsWith('/dashboard/student')) {
      const url = request.nextUrl.clone()
      url.pathname = '/dashboard/admin'
      return NextResponse.redirect(url)
    }
  }

  return supabaseResponse
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - public folder
     */
    '/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)',
  ],
}
