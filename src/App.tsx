import { useState } from 'react'
import { Menu, X, BookOpen, User, Mail, Star, CheckCircle } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { BookingSection } from '@/components/BookingSection'
import { env } from '@/config/env'
import './App.css'

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
    setIsMenuOpen(false)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-md shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-2">
              <BookOpen className="h-8 w-8 text-purple-600" />
              <h1 className="text-2xl font-bold text-gray-900">Tutoring with Muskaan</h1>
            </div>
            
            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-8">
              <button 
                onClick={() => scrollToSection('classes')}
                className="text-gray-700 hover:text-purple-600 transition-colors"
              >
                Class Offerings
              </button>
              <button 
                onClick={() => scrollToSection('feedback')}
                className="text-gray-700 hover:text-purple-600 transition-colors"
              >
                Feedback
              </button>
              <button 
                onClick={() => scrollToSection('booking')}
                className="text-gray-700 hover:text-purple-600 transition-colors"
              >
                Book a Session
              </button>
              <button 
                onClick={() => scrollToSection('about')}
                className="text-gray-700 hover:text-purple-600 transition-colors"
              >
                About Muskaan
              </button>
            </nav>

            {/* Mobile menu button */}
            <button
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden pb-4">
              <div className="flex flex-col space-y-2">
                <button 
                  onClick={() => scrollToSection('classes')}
                  className="text-left py-2 text-gray-700 hover:text-purple-600 transition-colors"
                >
                  Class Offerings
                </button>
                <button 
                  onClick={() => scrollToSection('feedback')}
                  className="text-left py-2 text-gray-700 hover:text-purple-600 transition-colors"
                >
                  Feedback
                </button>
                <button 
                  onClick={() => scrollToSection('booking')}
                  className="text-left py-2 text-gray-700 hover:text-purple-600 transition-colors"
                >
                  Book a Session
                </button>
                <button 
                  onClick={() => scrollToSection('about')}
                  className="text-left py-2 text-gray-700 hover:text-purple-600 transition-colors"
                >
                  About Muskaan
                </button>
              </div>
            </div>
          )}
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Tutoring with Muskaan
          </h2>
          <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Personalized math and homework help for middle and high school students.
          </p>
          <Button 
            onClick={() => scrollToSection('booking')}
            className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 text-lg rounded-full"
          >
            Book Your Session Today
          </Button>
        </div>
      </section>

      {/* Class Offerings Section */}
      <section id="classes" className="py-20 px-4 sm:px-6 lg:px-8 bg-white/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-bold text-gray-900 mb-4">Class Offerings</h3>
            <p className="text-xl text-gray-600">Comprehensive math support tailored to your needs</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="hover:shadow-lg transition-shadow bg-gradient-to-br from-purple-100 to-pink-100">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <CheckCircle className="h-6 w-6 text-purple-600" />
                  <span>Geometry</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-700">
                  Master shapes, angles, proofs, and spatial reasoning with clear explanations and visual aids.
                </CardDescription>
                <Button variant="outline" className="mt-4 w-full">Learn More</Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow bg-gradient-to-br from-blue-100 to-purple-100">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <CheckCircle className="h-6 w-6 text-blue-600" />
                  <span>Algebra</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-700">
                  Build strong foundations in equations, functions, and problem-solving techniques.
                </CardDescription>
                <Button variant="outline" className="mt-4 w-full">Learn More</Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow bg-gradient-to-br from-pink-100 to-blue-100">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <CheckCircle className="h-6 w-6 text-pink-600" />
                  <span>Pre-Algebra</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-700">
                  Prepare for advanced math with fundamental concepts and number operations.
                </CardDescription>
                <Button variant="outline" className="mt-4 w-full">Learn More</Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow bg-gradient-to-br from-green-100 to-blue-100">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <CheckCircle className="h-6 w-6 text-green-600" />
                  <span>Homework Help</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-700">
                  Get personalized assistance with daily assignments across all math subjects.
                </CardDescription>
                <Button variant="outline" className="mt-4 w-full">Learn More</Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Feedback Section */}
      <section id="feedback" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-bold text-gray-900 mb-4">Student & Parent Feedback</h3>
            <p className="text-xl text-gray-600">See what families are saying about their experience</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-white shadow-lg">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-700 mb-4">
                  "Muskaan helped my daughter understand algebra concepts that she was struggling with for months. Her patience and clear explanations made all the difference!"
                </p>
                <div className="text-sm text-gray-500">- Sarah M., Parent</div>
              </CardContent>
            </Card>

            <Card className="bg-white shadow-lg">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-700 mb-4">
                  "I went from failing geometry to getting A's on my tests. Muskaan makes math actually make sense and is super encouraging!"
                </p>
                <div className="text-sm text-gray-500">- Alex T., 10th Grade</div>
              </CardContent>
            </Card>

            <Card className="bg-white shadow-lg">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-700 mb-4">
                  "The homework help sessions are amazing. Muskaan doesn't just give answers - she teaches me how to think through problems myself."
                </p>
                <div className="text-sm text-gray-500">- Emma L., 8th Grade</div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <BookingSection />

      {/* About Muskaan Section */}
      <section id="about" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-bold text-gray-900 mb-4">About Muskaan</h3>
            <p className="text-xl text-gray-600">Your dedicated math tutor and learning partner</p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <div className="space-y-6">
                <p className="text-lg text-gray-700 leading-relaxed">
                  Hi! I'm Muskaan, and I'm passionate about helping students discover their potential in mathematics. 
                  With years of experience tutoring middle and high school students, I believe that every student 
                  can succeed with the right guidance and support.
                </p>
                
                <p className="text-lg text-gray-700 leading-relaxed">
                  My teaching style focuses on patience, clarity, and building confidence. I work with each student 
                  to identify their unique learning style and adapt my approach accordingly. Whether you're struggling 
                  with basic concepts or looking to excel in advanced topics, I'm here to help you achieve your goals.
                </p>

                <div className="grid sm:grid-cols-2 gap-4 mt-8">
                  <div className="bg-purple-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-purple-800 mb-2">Teaching Philosophy</h4>
                    <p className="text-sm text-purple-700">Patient, encouraging, and focused on building understanding</p>
                  </div>
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-blue-800 mb-2">Specialties</h4>
                    <p className="text-sm text-blue-700">Algebra, Geometry, Pre-Algebra, and homework support</p>
                  </div>
                  <div className="bg-pink-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-pink-800 mb-2">Experience</h4>
                    <p className="text-sm text-pink-700">Helping students improve grades and build confidence</p>
                  </div>
                  <div className="bg-green-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-green-800 mb-2">Approach</h4>
                    <p className="text-sm text-green-700">Personalized lessons tailored to each student's needs</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="order-1 lg:order-2">
              <div className="relative">
                <div className="aspect-square bg-gradient-to-br from-purple-200 to-pink-200 rounded-2xl flex items-center justify-center">
                  <User className="h-32 w-32 text-purple-600" />
                </div>
                <div className="absolute -bottom-4 -right-4 bg-white rounded-full p-4 shadow-lg">
                  <BookOpen className="h-8 w-8 text-purple-600" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <BookOpen className="h-6 w-6 text-purple-400" />
                <h4 className="text-xl font-bold">Tutoring with Muskaan</h4>
              </div>
              <p className="text-gray-400">
                Empowering students to achieve their mathematical potential through personalized, patient instruction.
              </p>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <div className="space-y-2">
                <button 
                  onClick={() => scrollToSection('classes')}
                  className="block text-gray-400 hover:text-white transition-colors"
                >
                  Class Offerings
                </button>
                <button 
                  onClick={() => scrollToSection('feedback')}
                  className="block text-gray-400 hover:text-white transition-colors"
                >
                  Feedback
                </button>
                <button 
                  onClick={() => scrollToSection('booking')}
                  className="block text-gray-400 hover:text-white transition-colors"
                >
                  Book a Session
                </button>
                <button 
                  onClick={() => scrollToSection('about')}
                  className="block text-gray-400 hover:text-white transition-colors"
                >
                  About Muskaan
                </button>
              </div>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Contact</h4>
              <div className="space-y-2">
                <div className="flex items-center space-x-2 text-gray-400">
                  <Mail className="h-4 w-4" />
                  <span>{env.contact.email}</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Tutoring with Muskaan. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
