import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import StudentDataPortal from './StudentDataPortal.tsx'

const isStudentPortal = window.location.hash === '#student-data'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    {isStudentPortal ? <StudentDataPortal /> : <App />}
  </StrictMode>,
)
