export interface Student {
  id: string
  name: string
  email: string
  grade: string
  subjects: string[]
  createdAt: string
}

export interface Session {
  id: string
  studentId: string
  subject: string
  scheduledAt: string
  duration: number
  status: 'scheduled' | 'completed' | 'cancelled'
  notes?: string
  createdAt: string
}

export interface Feedback {
  id: string
  studentName: string
  parentName?: string
  rating: number
  comment: string
  subject: string
  createdAt: string
  isPublic: boolean
}

export interface CalendlyEvent {
  uri: string
  name: string
  status: string
  start_time: string
  end_time: string
  event_type: string
  invitees: CalendlyInvitee[]
}

export interface CalendlyInvitee {
  uri: string
  name: string
  email: string
  status: string
  created_at: string
}

export interface ApiResponse<T> {
  success: boolean
  data?: T
  error?: string
  message?: string
}
