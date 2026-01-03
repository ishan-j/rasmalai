import React from 'react';

function Sidebar({ quizData, currentIdx, userAnswers, isMarked, onQuestionClick, onSubmit, quizType, quizTitle }) {
  const attempted = userAnswers.filter(a => a !== null).length;
  const correct = userAnswers.filter(a => a?.ok).length;
  const flagged = isMarked.filter(m => m).length;
  const total = quizData.length;

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

  return (
    <div className="sidebar">
      <div className="sidebar-header">
        <h3 style={{ margin: 0 }}>Navigator</h3>
        <div className="subject-badge" style={{ background: getSubjectColor(quizType) }}>
          {quizTitle}
        </div>
      </div>
      
      <p style={{ fontSize: '0.8rem', color: '#64748b', marginBottom: '15px' }}>
        Colors: Green (Correct), Red (Wrong), Orange (Flagged)
      </p>
      
      <div className="sidebar-stats">
        <div className="stat-box">
          <div className="stat-value" style={{ color: 'var(--success)' }}>{correct}</div>
          <div className="stat-label">Correct</div>
        </div>
        <div className="stat-box">
          <div className="stat-value" style={{ color: 'var(--danger)' }}>{attempted - correct}</div>
          <div className="stat-label">Wrong</div>
        </div>
        <div className="stat-box">
          <div className="stat-value" style={{ color: 'var(--warning)' }}>{flagged}</div>
          <div className="stat-label">Flagged</div>
        </div>
        <div className="stat-box">
          <div className="stat-value">{attempted}/{total}</div>
          <div className="stat-label">Attempted</div>
        </div>
      </div>
      
      <div className="grid" id="nav-grid">
        {quizData.map((q, idx) => {
          let className = 'grid-btn';
          if (idx === currentIdx) className += ' active';
          if (userAnswers[idx] !== null) {
            className += userAnswers[idx].ok ? ' correct' : ' wrong';
          } else if (isMarked[idx]) {
            className += ' marked';
          }
          return (
            <button
              key={idx}
              className={className}
              onClick={() => onQuestionClick(idx)}
              style={{
                borderColor: idx === currentIdx ? getSubjectColor(quizType) : undefined
              }}
            >
              {q.id}
            </button>
          );
        })}
      </div>
      
      <div style={{ marginTop: '2rem' }}>
        <div style={{ 
          background: 'rgba(59, 130, 246, 0.1)', 
          padding: '15px', 
          borderRadius: '10px',
          marginBottom: '20px',
          border: '1px solid var(--border)'
        }}>
          <div style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', marginBottom: '5px' }}>
            Progress: {attempted} of {total} questions
          </div>
          <div style={{ 
            width: '100%', 
            height: '6px', 
            background: 'var(--border)', 
            borderRadius: '3px',
            overflow: 'hidden'
          }}>
            <div style={{ 
              width: `${(attempted/total)*100}%`, 
              height: '100%', 
              background: getSubjectColor(quizType),
              transition: 'width 0.3s'
            }}></div>
          </div>
        </div>
        
        <button
          className="btn btn-success"
          style={{ width: '100%', marginTop: '1rem', fontSize: '1rem' }}
          onClick={onSubmit}
        >
          Submit {quizTitle} Quiz
        </button>
        
        <button
          className="btn"
          style={{ 
            width: '100%', 
            marginTop: '10px', 
            fontSize: '0.9rem',
            background: 'var(--border)',
            color: 'var(--text-secondary)'
          }}
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
          Back to Top
        </button>
      </div>
    </div>
  );
}

export default Sidebar;