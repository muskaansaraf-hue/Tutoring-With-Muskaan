import { Clock, Users, Calendar } from 'lucide-react'
import { CalendlyWidget } from './CalendlyWidget'

export const BookingSection = () => {
  return (
    <section id="booking" className="py-20 px-4 sm:px-6 lg:px-8 bg-white/50">
      <div className="max-w-4xl mx-auto text-center">
        <div className="mb-16">
          <h3 className="text-4xl font-bold text-gray-900 mb-4">Book a Session</h3>
          <p className="text-xl text-gray-600 mb-8">
            Schedule your 30-minute homework help session today
          </p>
          <div className="flex items-center justify-center space-x-6 text-gray-600 mb-8">
            <div className="flex items-center space-x-2">
              <Clock className="h-5 w-5" />
              <span>30 minutes</span>
            </div>
            <div className="flex items-center space-x-2">
              <Users className="h-5 w-5" />
              <span>1-on-1 tutoring</span>
            </div>
            <div className="flex items-center space-x-2">
              <Calendar className="h-5 w-5" />
              <span>Flexible scheduling</span>
            </div>
          </div>
        </div>
        
        <div className="bg-white rounded-lg shadow-lg p-8">
          <CalendlyWidget height={600} />
        </div>
      </div>
    </section>
  )
}
