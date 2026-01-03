import React, { useState, useEffect } from 'react';
import SetupScreen from './componenets/SetupScreen';
import QuizArea from './componenets/QuizArea';
import Sidebar from './componenets/SideBar';
import Header from './componenets/Header';
import ResultScreen from './componenets/ResultScreen';
import Login from './componenets/Login';
import { fcnQuestions } from './data/fcn_quiz';
import { osQuestions } from './data/os_quiz';
import { ndcQuestions } from './data/ndc_quiz';
import { programmingQuestions } from './data/programming_concepts';
import { itimdQuestions } from './data/itimd_quiz';
import { complianceQuestions } from './data/compliance_audit';
import { aptitudeQuestions } from './data/aptitude';
import { pkiQuestions } from './data/pki_quiz';
import { forensicsQuestions } from './data/cyber_forensics';
import { securityQuestions } from './data/security_concepts';
import './styles.css';

function App() {
  const [user, setUser] = useState(null);
  const [quizType, setQuizType] = useState(null);
  const [quizData, setQuizData] = useState([]);
  const [userAnswers, setUserAnswers] = useState([]);
  const [isMarked, setIsMarked] = useState([]);
  const [currentIdx, setCurrentIdx] = useState(0);
  const [showSetup, setShowSetup] = useState(false);
  const [showResults, setShowResults] = useState(false);
  const [startRange, setStartRange] = useState(1);
  const [endRange, setEndRange] = useState(50);
  const [userProgress, setUserProgress] = useState({});
  const [searchTerm, setSearchTerm] = useState('');

  const questionBanks = {
    fcn: { questions: fcnQuestions, title: "FCN", icon: "🌐", desc: "Fundamentals of Computer Networks" },
    os: { questions: osQuestions, title: "OS", icon: "💻", desc: "Operating Systems" },
    ndc: { questions: ndcQuestions, title: "NDC", icon: "🛡️", desc: "Network Defense & Countermeasures" },
    programming: { questions: programmingQuestions, title: "Programming", icon: "👨‍💻", desc: "Programming Concepts & Algorithms" },
    itimd: { questions: itimdQuestions, title: "ITIMD", icon: "📊", desc: "IT Infrastructure Monitoring & Diagnosis" },
    compliance: { questions: complianceQuestions, title: "Compliance", icon: "📋", desc: "Compliance & Audit Standards" },
    aptitude: { questions: aptitudeQuestions, title: "Aptitude", icon: "🧠", desc: "Quantitative & Logical Aptitude" },
    pki: { questions: pkiQuestions, title: "PKI", icon: "🔐", desc: "Public Key Infrastructure" },
    forensics: { questions: forensicsQuestions, title: "Forensics", icon: "🔍", desc: "Cyber Forensics & Investigation" },
    security: { questions: securityQuestions, title: "Security", icon: "🚨", desc: "Security Concepts & Principles" }
  };

  // Load user progress from localStorage
  useEffect(() => {
    if (user) {
      const savedProgress = localStorage.getItem(`progress_${user.username}`);
      if (savedProgress) {
        setUserProgress(JSON.parse(savedProgress));
      }
    }
  }, [user]);

  // Save user progress to localStorage
  const saveProgress = (type, completed) => {
    const newProgress = {
      ...userProgress,
      [type]: {
        lastCompleted: completed,
        lastAttempt: new Date().toISOString(),
        totalAttempts: (userProgress[type]?.totalAttempts || 0) + 1
      }
    };
    setUserProgress(newProgress);
    localStorage.setItem(`progress_${user.username}`, JSON.stringify(newProgress));
  };

  const handleLogin = (userData) => {
    setUser(userData);
    localStorage.setItem('currentUser', JSON.stringify(userData));
  };

  const handleLogout = () => {
    setUser(null);
    setQuizType(null);
    setShowSetup(false);
    setShowResults(false);
    localStorage.removeItem('currentUser');
  };

  const handleQuizTypeSelect = (type) => {
    setQuizType(type);
    const bank = questionBanks[type].questions;
    const lastCompleted = userProgress[type]?.lastCompleted || 0;
    setStartRange(Math.max(1, lastCompleted + 1));
    setEndRange(Math.min(lastCompleted + 50, bank.length));
    setShowSetup(true);
  };

  const startQuiz = () => {
    const bank = questionBanks[quizType].questions;
    const filtered = bank.slice(startRange - 1, endRange);
    setQuizData(filtered);
    setUserAnswers(new Array(filtered.length).fill(null));
    setIsMarked(new Array(filtered.length).fill(false));
    setShowSetup(false);
    setShowResults(false);
    setCurrentIdx(0);
  };

  const submitExam = () => {
    saveProgress(quizType, endRange);
    setShowResults(true);
  };

  const resetQuiz = () => {
    setQuizType(null);
    setShowSetup(true);
    setShowResults(false);
    setQuizData([]);
  };

  // Filter quizzes based on search term
  const filteredQuizzes = Object.entries(questionBanks).filter(([key, quiz]) => {
    return quiz.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
           quiz.desc.toLowerCase().includes(searchTerm.toLowerCase());
  });

  // Check for saved user session
  useEffect(() => {
    const savedUser = localStorage.getItem('currentUser');
    if (savedUser) {
      setUser(JSON.parse(savedUser));
    }
  }, []);

  // If no user is logged in, show login screen
  if (!user) {
    return <Login onLogin={handleLogin} />;
  }

  if (showResults && quizData.length > 0) {
    return (
      <ResultScreen 
        quizData={quizData}
        userAnswers={userAnswers}
        onRestart={resetQuiz}
        user={user}
        quizType={quizType}
        quizTitle={questionBanks[quizType].title}
      />
    );
  }

  if (showSetup && quizType) {
    return (
      <SetupScreen 
        startRange={startRange}
        endRange={endRange}
        setStartRange={setStartRange}
        setEndRange={setEndRange}
        onStart={startQuiz}
        onBack={() => setQuizType(null)}
        maxQuestions={questionBanks[quizType].questions.length}
        quizType={quizType}
        quizTitle={questionBanks[quizType].title}
        quizIcon={questionBanks[quizType].icon}
        userProgress={userProgress[quizType]}
      />
    );
  }

  if (!quizType) {
    return (
      <div className="quiz-selector">
        <div className="user-info">
          <div className="user-avatar">
            {user.fullName.charAt(0)}
          </div>
          <div>
            <div><strong>{user.fullName}</strong></div>
            <div><span>{user.role}</span> • <span>{user.batch || user.department}</span></div>
          </div>
          <button className="logout-btn" onClick={handleLogout}>
            Logout
          </button>
        </div>
        
        <h1>Exam Engine</h1>
        <p className="subtitle">प्यार-व्यार सब धोखा है, पढ़ ले बेटा मौका है।</p>
        
        {/* Search Bar */}
        <div style={{ 
          width: '100%', 
          maxWidth: '600px', 
          margin: '0 auto 30px',
          position: 'relative'
        }}>
          <input
            type="text"
            placeholder="Search quizzes by name or description..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            style={{
              width: '100%',
              padding: '14px 20px 14px 45px',
              borderRadius: '12px',
              border: '1px solid var(--border)',
              background: 'var(--bg-card)',
              color: 'var(--text-primary)',
              fontSize: '1rem'
            }}
          />
          <span style={{
            position: 'absolute',
            left: '15px',
            top: '50%',
            transform: 'translateY(-50%)',
            color: 'var(--text-muted)',
            fontSize: '1.2rem'
          }}>🔍</span>
          {searchTerm && (
            <button
              onClick={() => setSearchTerm('')}
              style={{
                position: 'absolute',
                right: '15px',
                top: '50%',
                transform: 'translateY(-50%)',
                background: 'none',
                border: 'none',
                color: 'var(--text-muted)',
                cursor: 'pointer',
                fontSize: '1.2rem'
              }}
            >
              ×
            </button>
          )}
        </div>
        
        <div className="quiz-grid">
          {filteredQuizzes.map(([key, quiz]) => (
            <div 
              key={key} 
              className="quiz-card"
              onClick={() => handleQuizTypeSelect(key)}
            >
              <div className="quiz-icon">{quiz.icon}</div>
              <h3>{quiz.title} Quiz</h3>
              <p>{quiz.desc}</p>
              <div className="quiz-stats">
                <span className="stat">Questions: {quiz.questions.length}</span>
                {userProgress[key] && (
                  <span className="stat">Progress: {userProgress[key].lastCompleted || 0}/{quiz.questions.length}</span>
                )}
              </div>
              {userProgress[key] && userProgress[key].lastAttempt && (
                <div className="last-attempt">
                  Last attempt: {new Date(userProgress[key].lastAttempt).toLocaleDateString()}
                </div>
              )}
            </div>
          ))}
        </div>
        
        {filteredQuizzes.length === 0 && (
          <div style={{ 
            textAlign: 'center', 
            padding: '40px', 
            color: 'var(--text-muted)' 
          }}>
            No quizzes found matching "{searchTerm}"
          </div>
        )}
        
        <p style={{ marginTop: '40px', color: 'var(--text-muted)', fontSize: '0.9rem' }}>
          {/* Version 3.0 • {Object.keys(questionBanks).length} Subjects • For CDAC PG-DITISS Students Only */}
          Nothing Ventured Nothing Gained
        </p>
        <p style={{ marginTop: '40px', color: 'var(--text-muted)', fontSize: '0.9rem' }}>
          {/* Version 3.0 • {Object.keys(questionBanks).length} Subjects • For CDAC PG-DITISS Students Only */}
          -Ishan The Great
        </p>
      </div>
    );
  }

  return (
    <div className="app">
      <Header user={user} userAnswers={userAnswers} quizTitle={questionBanks[quizType].title} />
      <div className="main-container">
        <QuizArea 
          quizData={quizData}
          currentIdx={currentIdx}
          userAnswers={userAnswers}
          setUserAnswers={setUserAnswers}
          isMarked={isMarked}
          setIsMarked={setIsMarked}
          onPrevious={() => setCurrentIdx(Math.max(0, currentIdx - 1))}
          onNext={() => setCurrentIdx(Math.min(quizData.length - 1, currentIdx + 1))}
          onMark={() => {
            if (userAnswers[currentIdx] === null) {
              const newMarked = [...isMarked];
              newMarked[currentIdx] = !newMarked[currentIdx];
              setIsMarked(newMarked);
            }
          }}
          quizType={quizType}
        />
        <Sidebar 
          quizData={quizData}
          currentIdx={currentIdx}
          userAnswers={userAnswers}
          isMarked={isMarked}
          onQuestionClick={setCurrentIdx}
          onSubmit={submitExam}
          quizType={quizType}
          quizTitle={questionBanks[quizType].title}
        />
      </div>
    </div>
  );
}

export default App;