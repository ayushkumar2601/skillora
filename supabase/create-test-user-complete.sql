-- Complete Test User Creation Script
-- This creates a test student user with all data in one go

-- IMPORTANT: First create the auth user in Supabase Dashboard:
-- 1. Go to Authentication > Users > Add User
-- 2. Email: test@student.com
-- 3. Password: password123
-- 4. Check "Auto Confirm User"
-- 5. Click "Create User"
-- 6. Copy the User ID (UUID) that appears
-- 7. Replace 'PASTE_USER_ID_HERE' below with that UUID

DO $$
DECLARE
  test_user_id UUID := 'PASTE_USER_ID_HERE'; -- Replace with actual user ID from auth.users
BEGIN
  -- Insert Profile
  INSERT INTO profiles (id, full_name, email, role, created_at, updated_at)
  VALUES (
    test_user_id,
    'Test Student',
    'test@student.com',
    'student',
    NOW(),
    NOW()
  )
  ON CONFLICT (id) DO NOTHING;

  -- Insert Student Data
  INSERT INTO students (
    profile_id,
    gpa,
    stress_index,
    career_score,
    department,
    semester,
    study_streak,
    created_at,
    updated_at
  )
  VALUES (
    test_user_id,
    8.42,
    45,
    78,
    'Computer Science',
    4,
    15,
    NOW(),
    NOW()
  )
  ON CONFLICT (profile_id) DO NOTHING;

  -- Insert Predictions
  INSERT INTO predictions (
    user_id,
    predicted_gpa,
    placement_probability,
    created_at,
    updated_at
  )
  VALUES (
    test_user_id,
    8.67,
    88,
    NOW(),
    NOW()
  )
  ON CONFLICT (user_id) DO NOTHING;

  -- Insert Subject Scores
  INSERT INTO subject_scores (user_id, subject, score, status, created_at, updated_at)
  VALUES 
    (test_user_id, 'Data Structures', 92, 'Advanced', NOW(), NOW()),
    (test_user_id, 'Database Systems', 88, 'Proficient', NOW(), NOW()),
    (test_user_id, 'Web Development', 90, 'Advanced', NOW(), NOW()),
    (test_user_id, 'Operating Systems', 75, 'Intermediate', NOW(), NOW())
  ON CONFLICT (user_id, subject) DO NOTHING;

  -- Insert Sample Tasks
  INSERT INTO tasks (user_id, title, subject, deadline, priority, completed, estimated_hours, created_at, updated_at)
  VALUES 
    (test_user_id, 'Complete DSA Assignment', 'Data Structures', NOW() + INTERVAL '3 days', 'high', false, 3, NOW(), NOW()),
    (test_user_id, 'Study for DBMS Quiz', 'Database Systems', NOW() + INTERVAL '5 days', 'medium', false, 2, NOW(), NOW()),
    (test_user_id, 'Read OS Chapter 5-7', 'Operating Systems', NOW() + INTERVAL '10 days', 'low', false, 2, NOW(), NOW());

  RAISE NOTICE 'Test user data created successfully for user ID: %', test_user_id;
END $$;

-- Verify the data
SELECT 'Verification Results' as info;
SELECT 'Profile:' as table_name, * FROM profiles WHERE email = 'test@student.com';
SELECT 'Student:' as table_name, * FROM students WHERE profile_id IN (SELECT id FROM profiles WHERE email = 'test@student.com');
SELECT 'Predictions:' as table_name, * FROM predictions WHERE user_id IN (SELECT id FROM profiles WHERE email = 'test@student.com');
SELECT 'Subject Scores:' as table_name, COUNT(*) as count FROM subject_scores WHERE user_id IN (SELECT id FROM profiles WHERE email = 'test@student.com');
SELECT 'Tasks:' as table_name, COUNT(*) as count FROM tasks WHERE user_id IN (SELECT id FROM profiles WHERE email = 'test@student.com');
