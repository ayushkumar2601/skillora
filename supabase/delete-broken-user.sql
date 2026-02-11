-- Delete the broken user account
-- Run this in Supabase SQL Editor

DELETE FROM auth.users WHERE email = 'ayush@test.com';
