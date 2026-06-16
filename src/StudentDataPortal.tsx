import { useState } from 'react'
import { Menu, ChevronLeft, ChevronRight, FileText, Mail, CheckSquare } from 'lucide-react'

function StudentDataPortal() {
  const [view, setView] = useState<'daily' | 'list'>('daily')
  const [busDay, setBusDay] = useState('Tuesday')
  const [busMode, setBusMode] = useState<'Day' | 'Week'>('Day')

  const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday']
  const currentDayIndex = days.indexOf(busDay)

  const prevBusDay = () => {
    if (currentDayIndex > 0) setBusDay(days[currentDayIndex - 1])
  }
  const nextBusDay = () => {
    if (currentDayIndex < days.length - 1) setBusDay(days[currentDayIndex + 1])
  }

  return (
    <div className="min-h-screen bg-gray-100 font-sans">
      {/* Top Header Bar */}
      <header className="bg-[#1a3a5c] text-white flex items-center justify-between px-4 py-3 sticky top-0 z-50 shadow-md">
        <div className="flex items-center gap-3">
          <Menu className="w-6 h-6 cursor-pointer" />
          <span className="text-lg font-semibold tracking-wide">Student Data</span>
        </div>
        <div className="flex items-center gap-2 bg-[#2a4a6c] rounded-full pl-2 pr-1 py-1">
          <ChevronLeft className="w-4 h-4" />
          <ChevronLeft className="w-4 h-4 -ml-2" />
          <span className="text-sm font-medium mr-1">Muskaan</span>
          <div className="w-8 h-8 rounded-full bg-gray-300 overflow-hidden border-2 border-white">
            <img
              src="https://ui-avatars.com/api/?name=MS&background=c7a86e&color=fff&size=64"
              alt="Profile"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </header>

      <main className="max-w-4xl mx-auto bg-white min-h-screen">
        {/* Student Profile Section */}
        <section className="p-4 pb-2">
          <div className="flex items-start gap-4">
            {/* Student Photo */}
            <div className="w-24 h-28 bg-gray-200 rounded overflow-hidden flex-shrink-0 border border-gray-300">
              <img
                src="https://ui-avatars.com/api/?name=MS&background=8fa5b8&color=fff&size=200&font-size=0.4"
                alt="Student Photo"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Student Info */}
            <div className="flex-1">
              <h1 className="text-2xl font-bold text-gray-800">Muskaan Saraf</h1>
              <p className="text-gray-600 text-sm">Livingston High School</p>
              <p className="text-gray-600 text-sm">
                Student ID: <span className="font-bold">275272</span>
              </p>
              <p className="text-gray-600 text-sm">
                State ID:{' '}
                <a href="#" className="text-blue-600 underline">
                  2885083581
                </a>
              </p>
            </div>
            {/* Grade */}
            <div className="text-right flex-shrink-0">
              <span className="text-gray-500 text-sm">Grade:</span>
              <div className="text-5xl font-bold text-gray-800 leading-none">11</div>
            </div>
          </div>
        </section>

        {/* Divider */}
        <div className="mx-4 border-t-2 border-[#4a9bd9]" />

        {/* Print Schedule */}
        <section className="px-4 py-3 flex items-center justify-center gap-6">
          <span className="text-gray-700 font-medium">Print Schedule:</span>
          <a href="#" className="flex items-center gap-1 text-blue-600 hover:underline">
            <FileText className="w-4 h-4 text-red-600" />
            <span>List</span>
          </a>
          <a href="#" className="flex items-center gap-1 text-blue-600 hover:underline">
            <FileText className="w-4 h-4 text-red-600" />
            <span>Bell</span>
          </a>
        </section>

        {/* Today's Cycle */}
        <section className="px-4 pb-2">
          <p className="font-bold text-gray-800 mb-2">Today's Cycle: D (T)</p>

          {/* Schedule Carousel */}
          <div className="flex items-center gap-2">
            <button className="text-[#1a3a5c] p-1">
              <ChevronLeft className="w-8 h-8" strokeWidth={3} />
            </button>
            <div className="flex-1">
              <div className="bg-[#a8e6a8] text-center py-2 rounded-t-lg font-bold text-gray-800">
                Tue, 06/16 (D, T)
              </div>
              <div className="bg-[#fffde0] text-center py-2 font-semibold text-gray-700">
                Wed, 06/17 (A, W)
              </div>
              <div className="bg-white text-center py-2 rounded-b-lg font-semibold text-gray-700 border-b border-x border-gray-200">
                Thu, 06/18 (A, R)
              </div>
            </div>
            <button className="text-[#1a3a5c] p-1">
              <ChevronRight className="w-8 h-8" strokeWidth={3} />
            </button>
          </div>
        </section>

        {/* View Toggle Buttons */}
        <section className="px-4 py-4 flex justify-center gap-3">
          <button
            onClick={() => setView('list')}
            className={`px-6 py-2 rounded-full border-2 font-medium text-sm transition ${
              view === 'list'
                ? 'bg-[#1a3a5c] text-white border-[#1a3a5c]'
                : 'bg-white text-[#1a3a5c] border-[#1a3a5c]'
            }`}
          >
            List View
          </button>
          <button
            onClick={() => setView('daily')}
            className={`px-6 py-2 rounded-full border-2 font-medium text-sm transition ${
              view === 'daily'
                ? 'bg-[#1a3a5c] text-white border-[#1a3a5c]'
                : 'bg-white text-[#1a3a5c] border-[#1a3a5c]'
            }`}
          >
            Daily View
          </button>
        </section>

        {/* Schedule Card */}
        <section className="px-4 pb-4">
          <div className="rounded-lg overflow-hidden border border-gray-200 shadow-sm">
            {/* Schedule Header */}
            <div className="bg-[#1a3a5c] text-white text-center py-3 font-semibold text-sm">
              End of Year Periods 7 &amp; 8 Schedule (06/16)
            </div>
            {/* Period 7 */}
            <div className="p-4 border-b border-gray-200">
              <div className="flex gap-4">
                <div className="text-sm text-gray-600">
                  <p className="font-bold text-gray-800">Period 7</p>
                  <p>8:00AM</p>
                  <p>9:30AM</p>
                </div>
                <div className="text-sm">
                  <p className="font-bold text-gray-800">ENGLISH 3 H</p>
                  <p className="text-gray-600">Biss, Maureen</p>
                  <p className="text-gray-600">Room A212</p>
                </div>
              </div>
            </div>
            {/* Period 8 */}
            <div className="p-4">
              <div className="flex gap-4">
                <div className="text-sm text-gray-600">
                  <p className="font-bold text-gray-800">Period 8</p>
                  <p>10:30AM</p>
                  <p>12:00PM</p>
                </div>
                <div className="text-sm">
                  <p className="font-bold text-gray-800">AP COMPUTER SCIENCE PRINCIPLES</p>
                  <p className="text-gray-600">Zhang, Hongkai</p>
                  <p className="text-gray-600">Room B133</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Divider */}
        <div className="mx-4 border-t-2 border-[#4a9bd9]" />

        {/* Bus Info */}
        <section className="px-4 py-4">
          <div className="rounded-lg overflow-hidden border border-gray-200 shadow-sm">
            {/* Bus Header */}
            <div className="bg-[#1a3a5c] text-white px-4 py-3 flex items-center justify-between">
              <span className="font-bold text-lg">Bus Info</span>
              <a href="#" className="flex items-center gap-1 text-white hover:underline text-sm">
                <FileText className="w-4 h-4 text-red-400" />
                <span>View Bus Pass</span>
              </a>
            </div>
            {/* Bus Day Selector */}
            <div className="flex items-center justify-between px-4 py-2 bg-gray-50 border-b border-gray-200">
              <div className="flex items-center gap-2 text-sm">
                <button
                  onClick={() => setBusMode('Week')}
                  className={`${busMode === 'Week' ? 'font-bold underline' : 'text-gray-600'}`}
                >
                  Week
                </button>
                <span>/</span>
                <button
                  onClick={() => setBusMode('Day')}
                  className={`${busMode === 'Day' ? 'font-bold underline' : 'text-gray-600'}`}
                >
                  Day
                </button>
              </div>
              <div className="flex items-center gap-2">
                <button onClick={prevBusDay}>
                  <ChevronLeft className="w-5 h-5 text-[#1a3a5c]" />
                </button>
                <span className="font-medium text-sm min-w-[80px] text-center">{busDay}</span>
                <button onClick={nextBusDay}>
                  <ChevronRight className="w-5 h-5 text-[#1a3a5c]" />
                </button>
              </div>
            </div>
            {/* AM Route */}
            <div className="flex border-b border-gray-200">
              <div className="bg-[#1a3a5c] text-white font-bold text-sm px-3 py-3 flex items-center">
                AM
              </div>
              <div className="p-3 text-sm">
                <p>
                  <span className="font-bold">Route:</span> LH2AM
                </p>
                <p>
                  <span className="font-bold">Time:</span> 06:31 AM
                </p>
                <p>
                  <span className="font-bold">Pick Up / Drop Off:</span>
                </p>
              </div>
            </div>
            {/* PM Route */}
            <div className="flex">
              <div className="bg-[#1a3a5c] text-white font-bold text-sm px-3 py-3 flex items-center">
                PM
              </div>
              <div className="p-3 text-sm">
                <p>
                  <span className="font-bold">Route:</span> LH2PM
                </p>
                <p>
                  <span className="font-bold">Pick Up / Drop Off:</span>
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* This Week Attendance */}
        <section className="px-4 py-4">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="bg-[#1a3a5c] text-white">
                <th className="py-2 px-3 text-left font-semibold">This Week</th>
                <th className="py-2 px-3 text-center font-semibold">M</th>
                <th className="py-2 px-3 text-center font-semibold">T</th>
                <th className="py-2 px-3 text-center font-semibold">W</th>
                <th className="py-2 px-3 text-center font-semibold">R</th>
                <th className="py-2 px-3 text-center font-semibold">F</th>
              </tr>
            </thead>
            <tbody>
              <tr className="bg-[#4a9bd9] text-white">
                <td className="py-2 px-3 font-semibold">Attendance</td>
                <td className="py-2 px-3 text-center">CP</td>
                <td className="py-2 px-3 text-center">EDL</td>
                <td className="py-2 px-3 text-center">-</td>
                <td className="py-2 px-3 text-center">-</td>
                <td className="py-2 px-3 text-center bg-yellow-300 text-gray-800"></td>
              </tr>
              <tr className="bg-[#4a9bd9] text-white">
                <td className="py-2 px-3 font-semibold">Assignments</td>
                <td className="py-2 px-3 text-center">
                  <a href="#" className="underline">
                    0
                  </a>
                </td>
                <td className="py-2 px-3 text-center">
                  <a href="#" className="underline">
                    0
                  </a>
                </td>
                <td className="py-2 px-3 text-center">
                  <a href="#" className="underline">
                    0
                  </a>
                </td>
                <td className="py-2 px-3 text-center">
                  <a href="#" className="underline">
                    0
                  </a>
                </td>
                <td className="py-2 px-3 text-center">
                  <a href="#" className="underline">
                    0
                  </a>
                </td>
              </tr>
            </tbody>
          </table>
        </section>

        {/* Information Section */}
        <section className="px-4 py-4">
          <h2 className="text-xl font-bold text-gray-800 mb-1">Information</h2>
          <div className="border-t-2 border-[#4a9bd9] mb-4" />

          <div className="divide-y divide-gray-200">
            {/* Counselor */}
            <div className="flex py-3 bg-gray-50 px-3">
              <span className="w-2/5 text-gray-600 text-sm">Counselor:</span>
              <div className="w-3/5 text-sm">
                <p className="font-bold text-gray-800">Goldstein, Eryn</p>
                <a
                  href="mailto:ergoldstein@livingston.org"
                  className="text-blue-600 flex items-center gap-1"
                >
                  <Mail className="w-4 h-4" />
                  ergoldstein@livingston.org
                </a>
              </div>
            </div>
            {/* Age */}
            <div className="flex py-3 px-3">
              <span className="w-2/5 text-gray-600 text-sm">Age:</span>
              <span className="w-3/5 font-bold text-gray-800 text-sm">16</span>
            </div>
            {/* Birthdate - CHANGED to 05/21/2009 */}
            <div className="flex py-3 bg-gray-50 px-3">
              <span className="w-2/5 text-gray-600 text-sm">Birthdate:</span>
              <span className="w-3/5 font-bold text-gray-800 text-sm">05/21/2009</span>
            </div>
            {/* Lunch PIN */}
            <div className="flex py-3 px-3">
              <span className="w-2/5 text-gray-600 text-sm">Lunch PIN #:</span>
              <span className="w-3/5 font-bold text-gray-800 text-sm">6617</span>
            </div>
            {/* Lunch Balance */}
            <div className="flex py-3 bg-gray-50 px-3">
              <span className="w-2/5 text-gray-600 text-sm">Lunch Balance:</span>
              <span className="w-3/5 font-bold text-gray-800 text-sm"> $27.10</span>
            </div>
            {/* Locker */}
            <div className="flex py-3 px-3">
              <span className="w-2/5 text-gray-600 text-sm">Locker:</span>
              <span className="w-3/5 font-bold text-gray-800 text-sm">B20715 ()</span>
            </div>
            {/* Network UserID */}
            <div className="flex py-3 bg-gray-50 px-3">
              <span className="w-2/5 text-gray-600 text-sm">Network UserID:</span>
              <span className="w-3/5 font-bold text-gray-800 text-sm">muskaan.saraf</span>
            </div>
            {/* Student Email */}
            <div className="flex py-3 px-3">
              <span className="w-2/5 text-gray-600 text-sm">Student Email Address:</span>
              <span className="w-3/5 font-bold text-gray-800 text-sm">
                muskaan.saraf@lps-students.org
              </span>
            </div>
            {/* Phys Ed Locker */}
            <div className="flex py-3 bg-gray-50 px-3">
              <span className="w-2/5 text-gray-600 text-sm">Phys Ed Locker:</span>
              <span className="w-3/5 font-bold text-gray-800 text-sm">767</span>
            </div>
            {/* Open Campus Lunch */}
            <div className="flex py-3 px-3 items-center">
              <span className="w-2/5 text-gray-600 text-sm">Open Campus Lunch Signed:</span>
              <span className="w-3/5">
                <CheckSquare className="w-5 h-5 text-teal-500" />
              </span>
            </div>
            {/* Junior Prom */}
            <div className="flex py-3 bg-gray-50 px-3 items-center">
              <span className="w-2/5 text-gray-600 text-sm">
                Junior Prom ED Permission Slip Signed:
              </span>
              <span className="w-3/5">
                <CheckSquare className="w-5 h-5 text-teal-500" />
              </span>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="text-center py-6 text-gray-500 text-sm border-t border-gray-200 mt-4">
          &copy;Copyright Genesis Educational Services, Inc.
        </footer>
      </main>
    </div>
  )
}

export default StudentDataPortal
