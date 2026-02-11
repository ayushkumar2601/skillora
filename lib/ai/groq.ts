import Groq from 'groq-sdk'

const groq = new Groq({
  apiKey: process.env.GROQ_API_KEY,
})

export async function calculateCareerReadiness(studentData: {
  gpa: number
  department: string
  semester: number
  subjectScores?: any[]
  tasks?: any[]
}) {
  try {
    const prompt = `You are an AI career advisor for students. Based on the following student data, calculate a career readiness score (0-100):

Student Profile:
- GPA: ${studentData.gpa}/10
- Department: ${studentData.department}
- Current Semester: ${studentData.semester}
- Subject Scores: ${studentData.subjectScores?.length || 0} subjects tracked
- Pending Tasks: ${studentData.tasks?.length || 0} tasks

Consider:
1. Academic performance (GPA)
2. Progress through program (semester)
3. Subject mastery
4. Task completion rate

Respond with ONLY a JSON object in this exact format:
{
  "career_score": <number 0-100>,
  "reasoning": "<brief explanation>"
}`

    const completion = await groq.chat.completions.create({
      messages: [{ role: 'user', content: prompt }],
      model: 'llama-3.3-70b-versatile',
      temperature: 0.3,
      max_tokens: 200,
    })

    const response = completion.choices[0]?.message?.content || '{}'
    const parsed = JSON.parse(response)
    return parsed.career_score || 50
  } catch (error) {
    console.error('Error calculating career readiness:', error)
    return 50 // Default fallback
  }
}

export async function calculateStressIndex(studentData: {
  gpa: number
  semester: number
  pendingTasks: number
  upcomingDeadlines: number
}) {
  try {
    const prompt = `You are an AI wellness advisor for students. Calculate a stress index (0-100) based on:

Student Workload:
- GPA: ${studentData.gpa}/10
- Semester: ${studentData.semester}
- Pending Tasks: ${studentData.pendingTasks}
- Upcoming Deadlines: ${studentData.upcomingDeadlines}

Consider:
1. Academic pressure (low GPA = higher stress)
2. Workload (more tasks = higher stress)
3. Time pressure (deadlines)
4. Semester intensity

Respond with ONLY a JSON object:
{
  "stress_index": <number 0-100>,
  "level": "<low|moderate|high>",
  "advice": "<brief tip>"
}`

    const completion = await groq.chat.completions.create({
      messages: [{ role: 'user', content: prompt }],
      model: 'llama-3.3-70b-versatile',
      temperature: 0.3,
      max_tokens: 200,
    })

    const response = completion.choices[0]?.message?.content || '{}'
    const parsed = JSON.parse(response)
    return parsed.stress_index || 30
  } catch (error) {
    console.error('Error calculating stress index:', error)
    return 30 // Default fallback
  }
}

export async function predictGPA(studentData: {
  currentGPA: number
  semester: number
  subjectScores?: any[]
  studyStreak: number
}) {
  try {
    const avgSubjectScore = studentData.subjectScores?.length 
      ? studentData.subjectScores.reduce((sum, s) => sum + s.score, 0) / studentData.subjectScores.length 
      : 75

    const prompt = `You are an AI academic advisor. Predict the final GPA for this student:

Current Status:
- Current GPA: ${studentData.currentGPA}/10
- Semester: ${studentData.semester}/8
- Average Subject Score: ${avgSubjectScore}%
- Study Streak: ${studentData.studyStreak} days

Predict their final GPA at graduation considering:
1. Current trajectory
2. Remaining semesters
3. Study consistency
4. Subject performance

Respond with ONLY a JSON object:
{
  "predicted_gpa": <number 0-10>,
  "confidence": <number 0-100>,
  "factors": "<key factors>"
}`

    const completion = await groq.chat.completions.create({
      messages: [{ role: 'user', content: prompt }],
      model: 'llama-3.3-70b-versatile',
      temperature: 0.3,
      max_tokens: 200,
    })

    const response = completion.choices[0]?.message?.content || '{}'
    const parsed = JSON.parse(response)
    return parsed.predicted_gpa || studentData.currentGPA
  } catch (error) {
    console.error('Error predicting GPA:', error)
    return studentData.currentGPA
  }
}

export async function chatWithAI(message: string, context?: {
  studentName?: string
  gpa?: number
  department?: string
  semester?: number
}) {
  try {
    const systemPrompt = `You are GROW-DEX AI Assistant, a helpful and encouraging academic advisor for college students. 

${context ? `Student Context:
- Name: ${context.studentName || 'Student'}
- GPA: ${context.gpa || 'N/A'}/10
- Department: ${context.department || 'N/A'}
- Semester: ${context.semester || 'N/A'}` : ''}

Your role:
- Provide academic guidance and study tips
- Help with career planning and placement preparation
- Offer stress management advice
- Motivate and encourage students
- Be concise, friendly, and actionable

Keep responses under 150 words.`

    const completion = await groq.chat.completions.create({
      messages: [
        { role: 'system', content: systemPrompt },
        { role: 'user', content: message }
      ],
      model: 'llama-3.3-70b-versatile',
      temperature: 0.7,
      max_tokens: 300,
    })

    return completion.choices[0]?.message?.content || 'I apologize, but I encountered an error. Please try again.'
  } catch (error) {
    console.error('Error in AI chat:', error)
    return 'I apologize, but I encountered an error. Please try again.'
  }
}
