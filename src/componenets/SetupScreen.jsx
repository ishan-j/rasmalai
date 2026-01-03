import React, { useEffect } from 'react';

function SetupScreen({
  startRange,
  endRange,
  setStartRange,
  setEndRange,
  onStart,
  onBack,
  maxQuestions,
  quizType,
  quizTitle,
  quizIcon,
  userProgress
}) {
  useEffect(() => {
    const lastEnd = localStorage.getItem(`lastQFinished_${quizType}`);
    if (lastEnd) {
      const nextStart = parseInt(lastEnd) + 1;
      setStartRange(nextStart);
      setEndRange(Math.min(nextStart + 50, maxQuestions));
    }
  }, [quizType, maxQuestions, setStartRange, setEndRange]);

  const handleStart = () => {
    localStorage.setItem(`lastQFinished_${quizType}`, endRange);
    onStart();
  };

  const getSubjectColor = (type) => {
    const colors = {
      programming: '#8b5cf6',
      itimd: '#06b6d4',
      compliance: '#10b981',
      aptitude: '#f59e0b',
      pki: '#ef4444',
      forensics: '#6366f1',
      security: '#ec4899',
      fcn: '#3b82f6',
      os: '#3b82f6',
      ndc: '#3b82f6'
    };
    return colors[type] || '#3b82f6';
  };

  const quizDescriptions = {
    programming: "Programming Concepts & Algorithms covering data structures, algorithms, and software development principles.",
    itimd: "IT Infrastructure Monitoring & Diagnosis focusing on system monitoring, performance analysis, and troubleshooting.",
    compliance: "Compliance & Audit Standards including PCI DSS, GDPR, HIPAA, and other regulatory frameworks.",
    aptitude: "Quantitative & Logical Aptitude covering mathematical reasoning, logical thinking, and problem-solving.",
    pki: "Public Key Infrastructure covering digital certificates, encryption, and secure communication protocols.",
    forensics: "Cyber Forensics & Investigation focusing on evidence collection, analysis, and incident response.",
    security: "Security Concepts & Principles covering CIA triad, threat models, and security best practices."
  };

  return (
    <div id="setup-screen">
      <div className="setup-card">
        <div style={{ 
          fontSize: '4rem', 
          marginBottom: '20px',
          filter: 'drop-shadow(0 0 20px rgba(59, 130, 246, 0.3))'
        }}>
          {quizIcon}
        </div>
        
        <div style={{ 
          background: `linear-gradient(135deg, ${getSubjectColor(quizType)}30, transparent)`,
          padding: '20px',
          borderRadius: '15px',
          marginBottom: '25px',
          border: `1px solid ${getSubjectColor(quizType)}30`
        }}>
          <h1 style={{marginTop: 0, color: getSubjectColor(quizType) }}>{quizTitle} Practice</h1>
          <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem' }}>
            {quizDescriptions[quizType] || "Comprehensive practice questions for exam preparation"}
          </p>
        </div>
        
        {userProgress && (
          <div style={{ 
            background: 'rgba(59, 130, 246, 0.1)', 
            padding: '15px', 
            borderRadius: '10px',
            margin: '20px 0',
            border: '1px solid var(--border)'
          }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <div>
                <div style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
                  Previous Progress
                </div>
                <div style={{ fontSize: '1.1rem', fontWeight: 'bold', color: 'var(--primary)' }}>
                  {userProgress.lastCompleted || 0} / {maxQuestions} questions
                </div>
              </div>
              <div style={{ textAlign: 'right' }}>
                <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>
                  Attempts: {userProgress.totalAttempts || 0}
                </div>
                <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>
                  Last: {userProgress.lastAttempt ? new Date(userProgress.lastAttempt).toLocaleDateString() : 'Never'}
                </div>
              </div>
            </div>
            <div style={{ 
              width: '100%', 
              height: '8px', 
              background: 'var(--border)', 
              borderRadius: '4px',
              marginTop: '10px',
              overflow: 'hidden'
            }}>
              <div style={{ 
                width: `${((userProgress.lastCompleted || 0) / maxQuestions) * 100}%`, 
                height: '100%', 
                background: getSubjectColor(quizType),
                transition: 'width 0.3s'
              }}></div>
            </div>
          </div>
        )}
        
        <p style={{ color: 'var(--text-secondary)', margin: '20px 0', fontSize: '1.1rem' }}>
          Select question range to practice:
        </p>
        
        <div style={{ 
          background: 'rgba(255, 255, 255, 0.05)', 
          padding: '25px', 
          borderRadius: '15px',
          margin: '25px 0',
          border: '1px solid var(--border)'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '20px', marginBottom: '20px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <span style={{ color: 'var(--text-secondary)', minWidth: '50px' }}>From:</span>
              <input 
                type="number" 
                id="start-q" 
                value={startRange}
                onChange={(e) => {
                  const val = Math.max(1, parseInt(e.target.value) || 1);
                  setStartRange(val);
                  if (val > endRange) setEndRange(val);
                }}
                min="1"
                max={maxQuestions}
                style={{ 
                  width: '100px',
                  borderColor: getSubjectColor(quizType)
                }}
              />
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <span style={{ color: 'var(--text-secondary)', minWidth: '50px' }}>To:</span>
              <input 
                type="number" 
                id="end-q" 
                value={endRange}
                onChange={(e) => {
                  const val = parseInt(e.target.value) || maxQuestions;
                  const newVal = Math.min(Math.max(startRange, val), maxQuestions);
                  setEndRange(newVal);
                }}
                min={startRange}
                max={maxQuestions}
                style={{ 
                  width: '100px',
                  borderColor: getSubjectColor(quizType)
                }}
              />
            </div>
          </div>
          
          <div style={{ 
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'space-between',
            padding: '15px',
            background: 'rgba(59, 130, 246, 0.1)',
            borderRadius: '10px',
            border: '1px solid rgba(59, 130, 246, 0.3)'
          }}>
            <div>
              <div style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>Selected Range</div>
              <div style={{ fontSize: '1.2rem', fontWeight: 'bold', color: getSubjectColor(quizType) }}>
                {startRange} - {endRange}
              </div>
            </div>
            <div style={{ textAlign: 'right' }}>
              <div style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>Total Questions</div>
              <div style={{ fontSize: '1.2rem', fontWeight: 'bold', color: 'var(--text-primary)' }}>
                {endRange - startRange + 1}
              </div>
            </div>
          </div>
        </div>
        
        <div style={{display: 'flex', gap: '10px', marginBottom: '15px'}}>
          <button 
            className="btn" 
            style={{
              background: 'var(--border)', 
              flex: 1,
              border: `1px solid ${getSubjectColor(quizType)}30`
            }} 
            onClick={onBack}
          >
            ← Back to Subjects
          </button>
          <button 
            className="btn btn-primary" 
            style={{
              flex: 2,
              background: getSubjectColor(quizType)
            }} 
            onClick={handleStart}
          >
            Start {quizTitle} Practice Session
          </button>
        </div>
        
        <p style={{fontSize: '0.75rem', color: 'var(--text-muted)', marginTop: '20px'}}>
          Total questions available: {maxQuestions} • Questions served in sequential order
        </p>
      </div>
    </div>
  );
}

export default SetupScreen;