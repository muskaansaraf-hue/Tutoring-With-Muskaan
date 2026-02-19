import { Routes, Route } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import HomePage from "./pages/Home";
import AboutPage from "./pages/About";
import TeamPage from "./pages/Team";
import TeamsPage from "./pages/Teams";
import RecordingsPage from "./pages/Recordings";
import ProjectsPage from "./pages/Projects";
import SignUpPage from "./pages/SignUp";
import ContactPage from "./pages/Contact";

export function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/team" element={<TeamPage />} />
          <Route path="/teams" element={<TeamsPage />} />
          <Route path="/recordings" element={<RecordingsPage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/signup" element={<SignUpPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}
