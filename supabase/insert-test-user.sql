-- Insert Test User Script
-- This creates a complete test student with all related data

-- First, you need to create the auth user manually through Supabase Dashboard:
-- 1. Go to Authentication > Users
-- 2. Click "Add User"
-- 3. Email: test@student.com
-- 4. Password: password123
-- 5. Auto Confirm User: YES
-- 6. Copy the User ID after creation

-- Then run this script, replacing 'USER_ID_HERE' with the actual UUID

-- STEP 1: Insert Profile
-- Replace 'USER_ID_HERE' with the actual user ID from auth.users
INSERT INTO profiles (id, full_name, email, role, created_at, updated_at)
VALUES (
  'USER_ID_HERE'::uuid,  -- Replace with actual user ID
  'Test Student',
  'test@student.com',
  'student',
  NOW(),
  NOW()
);

-- STEP 2: Insert Student Data
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
  'USER_ID_HERE'::uuid,  -- Replace with actual user ID
  8.42,
  45,
  78,
  'Computer Science',
  4,
  15,
  NOW(),
  NOW()
);

-- STEP 3: Insert Predictions
INSERT INTO predictions (
  user_id,
  predicted_gpa,
  placement_probability,
  created_at,
  updated_at
)
VALUES (
  'USER_ID_HERE'::uuid,  -- Replace with actual user ID
  8.67,
  88,
  NOW(),
  NOW()
);

-- STEP 4: Insert Subject Scores
INSERT INTO subject_scores (user_id, subject, score, status, created_at, updated_at)
VALUES 
  ('USER_ID_HERE'::uuid, 'Data Structures', 92, 'Advanced', NOW(), NOW()),
  ('USER_ID_HERE'::uuid, 'Database Systems', 88, 'Proficient', NOW(), NOW()),
  ('USER_ID_HERE'::uuid, 'Web Development', 90, 'Advanced', NOW(), NOW()),
  ('USER_ID_HERE'::uuid, 'Operating Systems', 75, 'Intermediate', NOW(), NOW());

-- STEP 5: Insert Sample Tasks
INSERT INTO tasks (user_id, title, subject, deadline, priority, completed, estimated_hours, created_at, updated_at)
VALUES 
  ('USER_ID_HERE'::uuid, 'Complete DSA Assignment', 'Data Structures', NOW() + INTERVAL '3 days', 'high', false, 3, NOW(), NOW()),
  ('USER_ID_HERE'::uuid, 'Study for DBMS Quiz', 'Database Systems', NOW() + INTERVAL '5 days', 'medium', false, 2, NOW(), NOW()),
  ('USER_ID_HERE'::uuid, 'Read OS Chapter 5-7', 'Operating Systems', NOW() + INTERVAL '10 days', 'low', false, 2, NOW(), NOW());

-- Verify the data was inserted
SELECT 'Profile created' as status, * FROM profiles WHERE email = 'test@student.com';
SELECT 'Student data created' as status, * FROM students WHERE profile_id = 'USER_ID_HERE'::uuid;
SELECT 'Predictions created' as status, * FROM predictions WHERE user_id = 'USER_ID_HERE'::uuid;
SELECT 'Subject scores created' as status, COUNT(*) as count FROM subject_scores WHERE user_id = 'USER_ID_HERE'::uuid;
SELECT 'Tasks created' as status, COUNT(*) as count FROM tasks WHERE user_id = 'USER_ID_HERE'::uuid;
