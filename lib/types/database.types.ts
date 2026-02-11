export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export interface Database {
  public: {
    Tables: {
      profiles: {
        Row: {
          id: string
          full_name: string
          role: 'student' | 'admin'
          email: string
          created_at: string
          updated_at: string
        }
        Insert: {
          id: string
          full_name: string
          role: 'student' | 'admin'
          email: string
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          full_name?: string
          role?: 'student' | 'admin'
          email?: string
          created_at?: string
          updated_at?: string
        }
      }
      students: {
        Row: {
          id: string
          profile_id: string
          gpa: number
          stress_index: number
          career_score: number
          department: string
          semester: number
          study_streak: number
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          profile_id: string
          gpa?: number
          stress_index?: number
          career_score?: number
          department: string
          semester?: number
          study_streak?: number
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          profile_id?: string
          gpa?: number
          stress_index?: number
          career_score?: number
          department?: string
          semester?: number
          study_streak?: number
          created_at?: string
          updated_at?: string
        }
      }
      tasks: {
        Row: {
          id: string
          user_id: string
          title: string
          subject: string
          deadline: string
          priority: 'low' | 'medium' | 'high'
          completed: boolean
          estimated_hours: number
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          user_id: string
          title: string
          subject: string
          deadline: string
          priority?: 'low' | 'medium' | 'high'
          completed?: boolean
          estimated_hours?: number
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          user_id?: string
          title?: string
          subject?: string
          deadline?: string
          priority?: 'low' | 'medium' | 'high'
          completed?: boolean
          estimated_hours?: number
          created_at?: string
          updated_at?: string
        }
      }
      predictions: {
        Row: {
          id: string
          user_id: string
          predicted_gpa: number
          placement_probability: number
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          user_id: string
          predicted_gpa: number
          placement_probability: number
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          user_id?: string
          predicted_gpa?: number
          placement_probability?: number
          created_at?: string
          updated_at?: string
        }
      }
      subject_scores: {
        Row: {
          id: string
          user_id: string
          subject: string
          score: number
          status: string
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          user_id: string
          subject: string
          score: number
          status?: string
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          user_id?: string
          subject?: string
          score?: number
          status?: string
          created_at?: string
          updated_at?: string
        }
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      user_role: 'student' | 'admin'
      task_priority: 'low' | 'medium' | 'high'
    }
  }
}
