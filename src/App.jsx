import { useState } from 'react'
import './App.css'
import { BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom';
import AboutSection from './pages/about';
import QuizSection from './pages/quiz';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomeScreen />} />
        <Route path="/quiz" element={<QuizSection />} />
        <Route path="/about" element={<AboutSection />} />
      </Routes>
    </BrowserRouter>
  );
}

function HomeScreen() {
  const navigate = useNavigate();

  const handleStartQuiz = () => {
    navigate('/quiz');
  };

  const handleAbout = () => {
    navigate('/about');
  };

  return (
    <div>
      <h1>What's Your Superhero Persona?</h1>
      <div>
        <button style={{ marginRight: '20px' }} onClick={handleStartQuiz}> Start Quiz </button>
        <button onClick={handleAbout}> All Personas </button>
      </div>
      <footer style={{marginTop: '50px', fontSize: '14px'}}>
        <a /*href="https://github.com/Dylyn" target="_blank"*/>&copy; 2024 Dylan Chipun</a>
      </footer>
    </div>
    
  );
}

export default App;
