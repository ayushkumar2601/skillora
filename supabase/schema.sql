-- Enable UUID extension
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- Create enum types
CREATE TYPE user_role AS ENUM ('student', 'admin');
CREATE TYPE task_priority AS ENUM ('low', 'medium', 'high');

-- =============================================
-- PROFILES TABLE
-- =============================================
CREATE TABLE profiles (
    id UUID PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
    full_name TEXT NOT NULL,
    role user_role NOT NULL DEFAULT 'student',
    email TEXT NOT NULL UNIQUE,
    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- =============================================
-- STUDENTS TABLE
-- =============================================
CREATE TABLE students (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    profile_id UUID NOT NULL REFERENCES profiles(id) ON DELETE CASCADE,
    gpa NUMERIC(3, 2) DEFAULT 0.00 CHECK (gpa >= 0 AND gpa <= 10),
    stress_index INTEGER DEFAULT 0 CHECK (stress_index >= 0 AND stress_index <= 100),
    career_score INTEGER DEFAULT 0 CHECK (career_score >= 0 AND career_score <= 100),
    department TEXT NOT NULL,
    semester INTEGER DEFAULT 1 CHECK (semester >= 1 AND semester <= 8),
    study_streak INTEGER DEFAULT 0,
    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW(),
    UNIQUE(profile_id)
);

-- =============================================
-- TASKS TABLE (Study Planner)
-- =============================================
CREATE TABLE tasks (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    user_id UUID NOT NULL REFERENCES profiles(id) ON DELETE CASCADE,
    title TEXT NOT NULL,
    subject TEXT NOT NULL,
    deadline TIMESTAMPTZ NOT NULL,
    priority task_priority DEFAULT 'medium',
    completed BOOLEAN DEFAULT FALSE,
    estimated_hours NUMERIC(4, 1) DEFAULT 0,
    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- =============================================
-- PREDICTIONS TABLE
-- =============================================
CREATE TABLE predictions (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    user_id UUID NOT NULL REFERENCES profiles(id) ON DELETE CASCADE,
    predicted_gpa NUMERIC(3, 2) NOT NULL CHECK (predicted_gpa >= 0 AND predicted_gpa <= 10),
    placement_probability INTEGER NOT NULL CHECK (placement_probability >= 0 AND placement_probability <= 100),
    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW(),
    UNIQUE(user_id)
);

-- =============================================
-- SUBJECT SCORES TABLE
-- =============================================
CREATE TABLE subject_scores (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    user_id UUID NOT NULL REFERENCES profiles(id) ON DELETE CASCADE,
    subject TEXT NOT NULL,
    score INTEGER NOT NULL CHECK (score >= 0 AND score <= 100),
    status TEXT DEFAULT 'Intermediate',
    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW(),
    UNIQUE(user_id, subject)
);

-- =============================================
-- INDEXES
-- =============================================
CREATE INDEX idx_profiles_role ON profiles(role);
CREATE INDEX idx_profiles_email ON profiles(email);
CREATE INDEX idx_students_profile_id ON students(profile_id);
CREATE INDEX idx_students_department ON students(department);
CREATE INDEX idx_tasks_user_id ON tasks(user_id);
CREATE INDEX idx_tasks_completed ON tasks(completed);
CREATE INDEX idx_tasks_deadline ON tasks(deadline);
CREATE INDEX idx_predictions_user_id ON predictions(user_id);
CREATE INDEX idx_subject_scores_user_id ON subject_scores(user_id);

-- =============================================
-- ROW LEVEL SECURITY (RLS) POLICIES
-- =============================================

-- Enable RLS on all tables
ALTER TABLE profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE students ENABLE ROW LEVEL SECURITY;
ALTER TABLE tasks ENABLE ROW LEVEL SECURITY;
ALTER TABLE predictions ENABLE ROW LEVEL SECURITY;
ALTER TABLE subject_scores ENABLE ROW LEVEL SECURITY;

-- =============================================
-- PROFILES POLICIES
-- =============================================

-- Users can view their own profile
CREATE POLICY "Users can view own profile"
    ON profiles FOR SELECT
    USING (auth.uid() = id);

-- Users can update their own profile
CREATE POLICY "Users can update own profile"
    ON profiles FOR UPDATE
    USING (auth.uid() = id);

-- Admins can view all profiles
CREATE POLICY "Admins can view all profiles"
    ON profiles FOR SELECT
    USING (
        EXISTS (
            SELECT 1 FROM profiles
            WHERE profiles.id = auth.uid()
            AND profiles.role = 'admin'
        )
    );

-- =============================================
-- STUDENTS POLICIES
-- =============================================

-- Students can view their own data
CREATE POLICY "Students can view own data"
    ON students FOR SELECT
    USING (profile_id = auth.uid());

-- Students can update their own data
CREATE POLICY "Students can update own data"
    ON students FOR UPDATE
    USING (profile_id = auth.uid());

-- Admins can view all students
CREATE POLICY "Admins can view all students"
    ON students FOR SELECT
    USING (
        EXISTS (
            SELECT 1 FROM profiles
            WHERE profiles.id = auth.uid()
            AND profiles.role = 'admin'
        )
    );

-- Admins can update all students
CREATE POLICY "Admins can update all students"
    ON students FOR UPDATE
    USING (
        EXISTS (
            SELECT 1 FROM profiles
            WHERE profiles.id = auth.uid()
            AND profiles.role = 'admin'
        )
    );

-- =============================================
-- TASKS POLICIES
-- =============================================

-- Users can view their own tasks
CREATE POLICY "Users can view own tasks"
    ON tasks FOR SELECT
    USING (user_id = auth.uid());

-- Users can insert their own tasks
CREATE POLICY "Users can insert own tasks"
    ON tasks FOR INSERT
    WITH CHECK (user_id = auth.uid());

-- Users can update their own tasks
CREATE POLICY "Users can update own tasks"
    ON tasks FOR UPDATE
    USING (user_id = auth.uid());

-- Users can delete their own tasks
CREATE POLICY "Users can delete own tasks"
    ON tasks FOR DELETE
    USING (user_id = auth.uid());

-- =============================================
-- PREDICTIONS POLICIES
-- =============================================

-- Users can view their own predictions
CREATE POLICY "Users can view own predictions"
    ON predictions FOR SELECT
    USING (user_id = auth.uid());

-- Admins can view all predictions
CREATE POLICY "Admins can view all predictions"
    ON predictions FOR SELECT
    USING (
        EXISTS (
            SELECT 1 FROM profiles
            WHERE profiles.id = auth.uid()
            AND profiles.role = 'admin'
        )
    );

-- =============================================
-- SUBJECT SCORES POLICIES
-- =============================================

-- Users can view their own subject scores
CREATE POLICY "Users can view own subject scores"
    ON subject_scores FOR SELECT
    USING (user_id = auth.uid());

-- Users can insert their own subject scores
CREATE POLICY "Users can insert own subject scores"
    ON subject_scores FOR INSERT
    WITH CHECK (user_id = auth.uid());

-- Users can update their own subject scores
CREATE POLICY "Users can update own subject scores"
    ON subject_scores FOR UPDATE
    USING (user_id = auth.uid());

-- Admins can view all subject scores
CREATE POLICY "Admins can view all subject scores"
    ON subject_scores FOR SELECT
    USING (
        EXISTS (
            SELECT 1 FROM profiles
            WHERE profiles.id = auth.uid()
            AND profiles.role = 'admin'
        )
    );

-- =============================================
-- FUNCTIONS
-- =============================================

-- Function to automatically update updated_at timestamp
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = NOW();
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Triggers for updated_at
CREATE TRIGGER update_profiles_updated_at BEFORE UPDATE ON profiles
    FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_students_updated_at BEFORE UPDATE ON students
    FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_tasks_updated_at BEFORE UPDATE ON tasks
    FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_predictions_updated_at BEFORE UPDATE ON predictions
    FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_subject_scores_updated_at BEFORE UPDATE ON subject_scores
    FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

-- =============================================
-- FUNCTION: Handle new user signup
-- =============================================
CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS TRIGGER AS $$
BEGIN
    INSERT INTO public.profiles (id, full_name, email, role)
    VALUES (
        NEW.id,
        COALESCE(NEW.raw_user_meta_data->>'full_name', 'User'),
        NEW.email,
        COALESCE((NEW.raw_user_meta_data->>'role')::user_role, 'student')
    );
    
    -- If user is a student, create student record
    IF COALESCE((NEW.raw_user_meta_data->>'role')::user_role, 'student') = 'student' THEN
        INSERT INTO public.students (profile_id, department)
        VALUES (
            NEW.id,
            COALESCE(NEW.raw_user_meta_data->>'department', 'Computer Science')
        );
    END IF;
    
    RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Trigger for new user signup
DROP TRIGGER IF EXISTS on_auth_user_created ON auth.users;
CREATE TRIGGER on_auth_user_created
    AFTER INSERT ON auth.users
    FOR EACH ROW EXECUTE FUNCTION public.handle_new_user();

-- =============================================
-- VIEWS FOR ANALYTICS
-- =============================================

-- View: Student Analytics Summary
CREATE OR REPLACE VIEW student_analytics AS
SELECT 
    p.id,
    p.full_name,
    p.email,
    s.department,
    s.semester,
    s.gpa,
    s.stress_index,
    s.career_score,
    s.study_streak,
    pred.predicted_gpa,
    pred.placement_probability,
    CASE 
        WHEN s.stress_index > 70 THEN 'At Risk'
        WHEN s.career_score >= 80 THEN 'Placement Ready'
        ELSE 'Normal'
    END as status
FROM profiles p
LEFT JOIN students s ON p.id = s.profile_id
LEFT JOIN predictions pred ON p.id = pred.user_id
WHERE p.role = 'student';

-- View: Department Statistics
CREATE OR REPLACE VIEW department_stats AS
SELECT 
    department,
    COUNT(*) as total_students,
    ROUND(AVG(gpa), 2) as avg_gpa,
    ROUND(AVG(stress_index), 2) as avg_stress,
    ROUND(AVG(career_score), 2) as avg_career_score,
    COUNT(CASE WHEN stress_index > 70 THEN 1 END) as high_stress_count
FROM students
GROUP BY department;

-- Grant access to views
GRANT SELECT ON student_analytics TO authenticated;
GRANT SELECT ON department_stats TO authenticated;
