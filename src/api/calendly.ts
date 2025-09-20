import axios from 'axios'
import { env } from '@/config/env'
import { CalendlyEvent, CalendlyInvitee, ApiResponse } from '@/types'

const calendlyApi = axios.create({
  baseURL: 'https://api.calendly.com',
  timeout: env.api.timeout,
  headers: {
    'Content-Type': 'application/json',
  },
})

calendlyApi.interceptors.request.use((config) => {
  const token = (import.meta.env as any).VITE_CALENDLY_API_TOKEN
  if (token) {
    config.headers.Authorization = `Bearer ${token}`
  }
  return config
})

export const calendlyService = {
  async getScheduledEvents(user: string): Promise<ApiResponse<CalendlyEvent[]>> {
    try {
      const response = await calendlyApi.get(`/scheduled_events?user=${user}`)
      return {
        success: true,
        data: response.data.collection,
      }
    } catch (error) {
      return {
        success: false,
        error: error instanceof Error ? error.message : 'Failed to fetch events',
      }
    }
  },

  async getEvent(eventUuid: string): Promise<ApiResponse<CalendlyEvent>> {
    try {
      const response = await calendlyApi.get(`/scheduled_events/${eventUuid}`)
      return {
        success: true,
        data: response.data.resource,
      }
    } catch (error) {
      return {
        success: false,
        error: error instanceof Error ? error.message : 'Failed to fetch event',
      }
    }
  },

  async getEventInvitees(eventUuid: string): Promise<ApiResponse<CalendlyInvitee[]>> {
    try {
      const response = await calendlyApi.get(`/scheduled_events/${eventUuid}/invitees`)
      return {
        success: true,
        data: response.data.collection,
      }
    } catch (error) {
      return {
        success: false,
        error: error instanceof Error ? error.message : 'Failed to fetch invitees',
      }
    }
  },

  async cancelEvent(eventUuid: string, reason?: string): Promise<ApiResponse<void>> {
    try {
      await calendlyApi.post(`/scheduled_events/${eventUuid}/cancellation`, {
        reason: reason || 'Cancelled by user',
      })
      return {
        success: true,
        message: 'Event cancelled successfully',
      }
    } catch (error) {
      return {
        success: false,
        error: error instanceof Error ? error.message : 'Failed to cancel event',
      }
    }
  },
}
