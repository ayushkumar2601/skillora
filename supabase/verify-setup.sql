-- Verification Script
-- Run this to check your database setup

-- 1. Check if tables exist
SELECT 'Tables Check' as check_type, 
       COUNT(*) as count 
FROM information_schema.tables 
WHERE table_schema = 'public' 
  AND table_name IN ('profiles', 'students', 'tasks', 'predictions', 'subject_scores');

-- 2. Check if trigger exists
SELECT 'Trigger Check' as check_type,
       COUNT(*) as count
FROM information_schema.triggers
WHERE trigger_name = 'on_auth_user_created';

-- 3. Check existing users
SELECT 'Existing Users' as check_type,
       email,
       created_at
FROM auth.users
ORDER BY created_at DESC;

-- 4. Check profiles
SELECT 'Profiles' as check_type,
       p.email,
       p.full_name,
       p.role,
       p.created_at
FROM profiles p
ORDER BY p.created_at DESC;

-- 5. Check students
SELECT 'Students' as check_type,
       p.email,
       s.department,
       s.gpa,
       s.created_at
FROM students s
JOIN profiles p ON s.profile_id = p.id
ORDER BY s.created_at DESC;
