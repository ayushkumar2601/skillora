-- Seed data for GROW-DEX platform
-- Run this after running schema.sql

-- Note: You'll need to create auth users manually through Supabase dashboard or signup
-- This script assumes you have some auth users created

-- Sample data for testing
-- Replace these UUIDs with actual user IDs from your auth.users table

-- Example: Insert sample profiles (if not auto-created by trigger)
-- INSERT INTO profiles (id, full_name, email, role)
-- VALUES 
--   ('user-uuid-1', 'Aarav Kumar', 'aarav@test.com', 'student'),
--   ('user-uuid-2', 'Priya Patel', 'priya@test.com', 'student'),
--   ('user-uuid-3', 'Rahul Sharma', 'rahul@test.com', 'student'),
--   ('user-uuid-4', 'Admin User', 'admin@test.com', 'admin');

-- Sample student data
-- Replace profile_id with actual UUIDs from your profiles table
/*
INSERT INTO students (profile_id, gpa, stress_index, career_score, department, semester, study_streak)
VALUES 
  ('user-uuid-1', 8.42, 45, 78, 'Computer Science', 4, 15),
  ('user-uuid-2', 9.10, 30, 92, 'Electronics & Communication', 4, 22),
  ('user-uuid-3', 7.20, 82, 42, 'Mechanical Engineering', 3, 5),
  ('user-uuid-4', 8.75, 55, 85, 'Computer Science', 3, 18),
  ('user-uuid-5', 6.90, 75, 50, 'Civil Engineering', 2, 8);

-- Sample predictions
INSERT INTO predictions (user_id, predicted_gpa, placement_probability)
VALUES 
  ('user-uuid-1', 8.67, 88),
  ('user-uuid-2', 9.30, 95),
  ('user-uuid-3', 7.50, 65),
  ('user-uuid-4', 9.00, 90),
  ('user-uuid-5', 7.20, 55);

-- Sample subject scores
INSERT INTO subject_scores (user_id, subject, score, status)
VALUES 
  -- Student 1 (Aarav)
  ('user-uuid-1', 'Data Structures', 92, 'Advanced'),
  ('user-uuid-1', 'Database Systems', 88, 'Proficient'),
  ('user-uuid-1', 'Web Development', 90, 'Advanced'),
  ('user-uuid-1', 'Operating Systems', 75, 'Intermediate'),
  
  -- Student 2 (Priya)
  ('user-uuid-2', 'Digital Electronics', 95, 'Advanced'),
  ('user-uuid-2', 'Signal Processing', 92, 'Advanced'),
  ('user-uuid-2', 'Communication Systems', 90, 'Advanced'),
  ('user-uuid-2', 'Microprocessors', 88, 'Proficient'),
  
  -- Student 3 (Rahul)
  ('user-uuid-3', 'Thermodynamics', 70, 'Intermediate'),
  ('user-uuid-3', 'Fluid Mechanics', 65, 'Intermediate'),
  ('user-uuid-3', 'Machine Design', 75, 'Intermediate'),
  ('user-uuid-3', 'Manufacturing', 72, 'Intermediate');

-- Sample tasks
INSERT INTO tasks (user_id, title, subject, deadline, priority, completed, estimated_hours)
VALUES 
  -- Student 1 tasks
  ('user-uuid-1', 'Complete DSA Assignment on Trees', 'Data Structures', NOW() + INTERVAL '3 days', 'high', false, 3),
  ('user-uuid-1', 'Study for DBMS Quiz', 'Database Systems', NOW() + INTERVAL '5 days', 'medium', false, 2),
  ('user-uuid-1', 'Finish Web Project Frontend', 'Web Development', NOW() + INTERVAL '7 days', 'high', false, 5),
  ('user-uuid-1', 'Read OS Chapter 5-7', 'Operating Systems', NOW() + INTERVAL '10 days', 'low', false, 2),
  ('user-uuid-1', 'Practice Coding Problems', 'Data Structures', NOW() - INTERVAL '2 days', 'medium', true, 2),
  
  -- Student 2 tasks
  ('user-uuid-2', 'Lab Report - Digital Circuits', 'Digital Electronics', NOW() + INTERVAL '2 days', 'high', false, 3),
  ('user-uuid-2', 'Signal Processing Assignment', 'Signal Processing', NOW() + INTERVAL '6 days', 'medium', false, 4),
  ('user-uuid-2', 'Prepare for Viva', 'Communication Systems', NOW() + INTERVAL '4 days', 'high', false, 2),
  
  -- Student 3 tasks
  ('user-uuid-3', 'Thermodynamics Problem Set', 'Thermodynamics', NOW() + INTERVAL '5 days', 'medium', false, 3),
  ('user-uuid-3', 'CAD Drawing Assignment', 'Machine Design', NOW() + INTERVAL '8 days', 'low', false, 4);
*/

-- Helper query to get user IDs after signup
-- Run this to see your user IDs:
-- SELECT id, email, raw_user_meta_data->>'full_name' as name FROM auth.users;

-- Helper query to check if data was inserted correctly
-- SELECT p.full_name, p.email, s.gpa, s.department, s.semester
-- FROM profiles p
-- LEFT JOIN students s ON p.id = s.profile_id
-- WHERE p.role = 'student';
