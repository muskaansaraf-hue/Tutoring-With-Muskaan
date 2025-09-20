import { InlineWidget } from 'react-calendly'
import { env } from '@/config/env'

interface CalendlyWidgetProps {
  url?: string
  height?: number
  className?: string
}

export const CalendlyWidget = ({ 
  url = env.calendly.embedUrl, 
  height = 700,
  className = ""
}: CalendlyWidgetProps) => {
  return (
    <div className={`calendly-widget ${className}`}>
      <InlineWidget
        url={url}
        styles={{
          height: `${height}px`,
          width: '100%',
        }}
        pageSettings={{
          backgroundColor: 'ffffff',
          hideEventTypeDetails: false,
          hideLandingPageDetails: false,
          primaryColor: '9333ea',
          textColor: '4a5568',
        }}
        prefill={{
          customAnswers: {
            a1: 'Tutoring with Muskaan Website',
          },
        }}
        utm={{
          utmCampaign: 'tutoring-website',
          utmSource: 'website',
          utmMedium: 'inline-widget',
        }}
      />
    </div>
  )
}
