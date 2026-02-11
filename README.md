# GROW-DEX - AI-Powered Academic Excellence Platform

A comprehensive student success platform with AI-driven features for both students and institutional administrators, powered by Next.js 16 and Supabase.

![GROW-DEX](https://img.shields.io/badge/Status-Production%20Ready-success)
![Next.js](https://img.shields.io/badge/Next.js-16.1.6-black)
![React](https://img.shields.io/badge/React-19.2.3-blue)
![Supabase](https://img.shields.io/badge/Supabase-Integrated-green)
![TypeScript](https://img.shields.io/badge/TypeScript-5.7.3-blue)

## 🌟 Features

### For Students
- 📊 **Personal Dashboard** - Track GPA, career readiness, and stress levels
- 📅 **Smart Study Planner** - AI-optimized task management
- 🎯 **Skill Mastery Tracking** - Monitor subject-wise performance
- 🔮 **Future Predictions** - AI-powered GPA and placement forecasts
- 💼 **Career Guidance** - Real-time placement readiness tracking
- 🤖 **AI Assistant** - Personalized academic guidance
- 🧘 **Wellness Tracker** - Stress management and burnout prevention

### For Administrators
- 🏫 **Campus Dashboard** - Real-time institutional analytics
- 👥 **Student Directory** - Comprehensive student management
- 📈 **Analytics & Insights** - Department-wise performance metrics
- ⚠️ **Risk Alerts** - Early identification of at-risk students
- 🎓 **Placement Tracking** - Monitor placement readiness across campus
- 🔍 **Advanced Search** - Find and filter students efficiently

## 🚀 Quick Start

### Prerequisites
- Node.js 18+
- A Supabase account (free tier works!)

### Installation

1. **Clone and install dependencies**
   ```bash
   npm install --legacy-peer-deps
   ```

2. **Set up Supabase**
   - Create a new project at [supabase.com](https://supabase.com)
   - Copy your project URL and API keys
   - Run the database schema (see below)

3. **Configure environment variables**
   ```bash
   cp .env.local.example .env.local
   # Edit .env.local with your Supabase credentials
   ```

4. **Run the development server**
   ```bash
   npm run dev
   ```

5. **Open [http://localhost:3000](http://localhost:3000)**

📖 **Detailed setup guide**: See [QUICKSTART.md](QUICKSTART.md)

## 📚 Documentation

| Document | Description |
|----------|-------------|
| [QUICKSTART.md](QUICKSTART.md) | Get started in 10 minutes |
| [SUPABASE_SETUP.md](SUPABASE_SETUP.md) | Complete Supabase setup guide |
| [IMPLEMENTATION_SUMMARY.md](IMPLEMENTATION_SUMMARY.md) | Architecture and patterns |
| [API_DOCUMENTATION.md](API_DOCUMENTATION.md) | Server actions reference |
| [TROUBLESHOOTING.md](TROUBLESHOOTING.md) | Common issues and solutions |
| [DEPLOYMENT_COMPLETE.md](DEPLOYMENT_COMPLETE.md) | Implementation checklist |

## 🏗️ Tech Stack

- **Framework**: Next.js 16 (App Router)
- **Language**: TypeScript 5.7
- **UI**: React 19, Tailwind CSS, shadcn/ui
- **Backend**: Supabase (PostgreSQL + Auth)
- **Charts**: Recharts
- **Forms**: React Hook Form + Zod
- **Icons**: Lucide React

## 📁 Project Structure

```
grow-dex/
├── app/                          # Next.js App Router
│   ├── dashboard/
│   │   ├── admin/               # Admin dashboard pages
│   │   └── student/             # Student dashboard pages
│   ├── login/                   # Authentication pages
│   └── signup/
├── components/                   # React components
│   ├── dashboard/               # Dashboard client components
│   ├── ui/                      # shadcn/ui components
│   └── *-sidebar.tsx            # Navigation sidebars
├── lib/
│   ├── supabase/                # Supabase clients
│   ├── actions/                 # Server actions
│   └── types/                   # TypeScript types
├── supabase/
│   ├── schema.sql               # Database schema
│   └── seed.sql                 # Sample data
└── middleware.ts                # Route protection
```

## 🗄️ Database Schema

### Tables
- **profiles** - User profiles (linked to auth.users)
- **students** - Student academic data
- **tasks** - Study planner tasks
- **predictions** - AI predictions
- **subject_scores** - Subject performance

### Security
- ✅ Row Level Security (RLS) enabled on all tables
- ✅ Students can only access their own data
- ✅ Admins can view all student data
- ✅ Secure authentication with Supabase Auth

## 🔐 Authentication

- Email/password authentication
- Role-based access control (Student/Admin)
- Secure session management
- Protected routes with middleware
- Auto-redirect based on user role

## 🎨 Design System

- Modern glassmorphism UI
- Custom color scheme (Primary: Indigo, Secondary: Cyan)
- Bold typography with Inter font
- Smooth animations and transitions
- Fully responsive design

## 🧪 Testing

### Create Test Accounts

**Student Account:**
```
Email: student@test.com
Password: password123
Role: Student
```

**Admin Account:**
```
Email: admin@test.com
Password: password123
Role: Institution Admin
```

## 🚀 Deployment

### Vercel (Recommended)

1. Push code to GitHub
2. Import project in Vercel
3. Add environment variables
4. Deploy!

### Environment Variables

```env
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_anon_key
SUPABASE_SERVICE_ROLE_KEY=your_service_key
```

## 📊 Features Roadmap

### ✅ Phase 1 (Complete)
- Authentication system
- Student dashboard
- Admin dashboard
- Study planner
- Analytics
- Database integration

### 🔄 Phase 2 (Planned)
- Email verification
- Password reset
- Profile editing
- File uploads
- Real-time notifications
- Advanced charts

### 🔮 Phase 3 (Future)
- Actual AI/ML predictions
- Chat system
- Calendar integration
- Mobile app
- API for integrations

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📝 License

This project is licensed under the MIT License.

## 🙏 Acknowledgments

- [Next.js](https://nextjs.org/) - The React framework
- [Supabase](https://supabase.com/) - Backend platform
- [shadcn/ui](https://ui.shadcn.com/) - UI components
- [Tailwind CSS](https://tailwindcss.com/) - Styling
- [Lucide](https://lucide.dev/) - Icons

## 📞 Support

- 📖 Check the [documentation](SUPABASE_SETUP.md)
- 🐛 Report issues on GitHub
- 💬 Join our community discussions
- 📧 Contact: support@growdex.com

## 🌟 Star History

If you find this project useful, please consider giving it a star! ⭐

---

**Built with ❤️ for the future of education**

*Last Updated: February 2026*
