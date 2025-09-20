import { Session, Student, ApiResponse } from '@/types'

let sessions: Session[] = []
let students: Student[] = []

export const bookingService = {
  async createStudent(studentData: Omit<Student, 'id' | 'createdAt'>): Promise<ApiResponse<Student>> {
    try {
      const student: Student = {
        ...studentData,
        id: `student_${Date.now()}`,
        createdAt: new Date().toISOString(),
      }
      
      students.push(student)
      
      return {
        success: true,
        data: student,
        message: 'Student created successfully',
      }
    } catch (error) {
      return {
        success: false,
        error: error instanceof Error ? error.message : 'Failed to create student',
      }
    }
  },

  async getStudentByEmail(email: string): Promise<ApiResponse<Student | null>> {
    try {
      const student = students.find(s => s.email === email)
      return {
        success: true,
        data: student || null,
      }
    } catch (error) {
      return {
        success: false,
        error: error instanceof Error ? error.message : 'Failed to fetch student',
      }
    }
  },

  async createSession(sessionData: Omit<Session, 'id' | 'createdAt'>): Promise<ApiResponse<Session>> {
    try {
      const session: Session = {
        ...sessionData,
        id: `session_${Date.now()}`,
        createdAt: new Date().toISOString(),
      }
      
      sessions.push(session)
      
      return {
        success: true,
        data: session,
        message: 'Session created successfully',
      }
    } catch (error) {
      return {
        success: false,
        error: error instanceof Error ? error.message : 'Failed to create session',
      }
    }
  },

  async getStudentSessions(studentId: string): Promise<ApiResponse<Session[]>> {
    try {
      const studentSessions = sessions.filter(s => s.studentId === studentId)
      return {
        success: true,
        data: studentSessions,
      }
    } catch (error) {
      return {
        success: false,
        error: error instanceof Error ? error.message : 'Failed to fetch sessions',
      }
    }
  },

  async updateSessionStatus(sessionId: string, status: Session['status']): Promise<ApiResponse<Session>> {
    try {
      const sessionIndex = sessions.findIndex(s => s.id === sessionId)
      if (sessionIndex === -1) {
        return {
          success: false,
          error: 'Session not found',
        }
      }
      
      sessions[sessionIndex].status = status
      
      return {
        success: true,
        data: sessions[sessionIndex],
        message: 'Session status updated successfully',
      }
    } catch (error) {
      return {
        success: false,
        error: error instanceof Error ? error.message : 'Failed to update session',
      }
    }
  },

  async handleCalendlyWebhook(eventType: string, eventData: any): Promise<ApiResponse<void>> {
    try {
      switch (eventType) {
        case 'invitee.created':
          console.log('New booking created:', eventData)
          break
        case 'invitee.canceled':
          console.log('Booking cancelled:', eventData)
          break
        default:
          console.log('Unhandled webhook event:', eventType, eventData)
      }
      
      return {
        success: true,
        message: 'Webhook processed successfully',
      }
    } catch (error) {
      return {
        success: false,
        error: error instanceof Error ? error.message : 'Failed to process webhook',
      }
    }
  },
}
