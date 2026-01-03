import React from 'react';

function QuizArea({
  quizData,
  currentIdx,
  userAnswers,
  setUserAnswers,
  isMarked,
  setIsMarked,
  onPrevious,
  onNext,
  onMark,
  quizType
}) {
  const q = quizData[currentIdx];

  const handleOptionClick = (optionIdx) => {
    if (userAnswers[currentIdx] !== null) return;
    
    const newAnswers = [...userAnswers];
    newAnswers[currentIdx] = {
      sel: optionIdx,
      ok: optionIdx === q.c
    };
    setUserAnswers(newAnswers);
    
    // Remove mark if answer is selected
    if (isMarked[currentIdx]) {
      const newMarked = [...isMarked];
      newMarked[currentIdx] = false;
      setIsMarked(newMarked);
    }
  };

  if (!q) return (
    <div className="quiz-area">
      <div className="card">
        <p style={{ textAlign: 'center', color: 'var(--text-secondary)' }}>
          Loading question...
        </p>
      </div>
    </div>
  );

  return (
    <div className="quiz-area">
      <div className="card">
        <div style={{ 
          display: 'flex', 
          justifyContent: 'space-between', 
          alignItems: 'flex-start',
          marginBottom: '15px',
          flexWrap: 'wrap',
          gap: '10px'
        }}>
          <h3 id="q-num-display" style={{color: 'var(--primary)', margin: 0}}>
            Question {q.id}
          </h3>
          <div style={{
            display: 'flex',
            gap: '8px',
            alignItems: 'center'
          }}>
            {isMarked[currentIdx] && (
              <span style={{
                background: 'var(--warning)',
                color: 'white',
                padding: '4px 10px',
                borderRadius: '12px',
                fontSize: '0.8rem',
                fontWeight: '600'
              }}>
                ⚑ Flagged
              </span>
            )}
            {userAnswers[currentIdx] && (
              <span style={{
                background: userAnswers[currentIdx].ok ? 'var(--success)' : 'var(--danger)',
                color: 'white',
                padding: '4px 10px',
                borderRadius: '12px',
                fontSize: '0.8rem',
                fontWeight: '600'
              }}>
                {userAnswers[currentIdx].ok ? '✓ Correct' : '✗ Incorrect'}
              </span>
            )}
          </div>
        </div>
        
        <p id="q-text">
          {q.q}
        </p>
        
        <div id="options-box">
          {q.a.map((option, idx) => {
            let className = 'option';
            let optionLabel = '';
            
            // Add correct/wrong styling if answer is selected
            if (userAnswers[currentIdx] !== null) {
              if (idx === q.c) {
                className += ' opt-correct';
                optionLabel = ' ✓';
              }
              if (idx === userAnswers[currentIdx]?.sel && idx !== q.c) {
                className += ' opt-wrong';
                optionLabel = ' ✗';
              }
            }
            
            return (
              <button
                key={idx}
                className={className}
                onClick={() => handleOptionClick(idx)}
                disabled={userAnswers[currentIdx] !== null}
              >
                <div style={{ 
                  display: 'flex', 
                  alignItems: 'center',
                  gap: '12px',
                  width: '100%'
                }}>
                  <div style={{
                    width: '28px',
                    height: '28px',
                    borderRadius: '50%',
                    background: userAnswers[currentIdx] !== null ? 
                      (idx === q.c ? 'var(--success)' : 
                       idx === userAnswers[currentIdx]?.sel ? 'var(--danger)' : 'var(--border)') : 
                      'var(--border)',
                    color: 'white',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontWeight: 'bold',
                    fontSize: '0.9rem',
                    flexShrink: 0
                  }}>
                    {String.fromCharCode(65 + idx)} {/* A, B, C, D */}
                  </div>
                  <div style={{ 
                    flex: 1,
                    textAlign: 'left',
                    lineHeight: '1.5'
                  }}>
                    {option}
                  </div>
                  {optionLabel && (
                    <span style={{ 
                      fontSize: '1.2rem',
                      fontWeight: 'bold',
                      color: idx === q.c ? 'var(--success)' : 'var(--danger)'
                    }}>
                      {optionLabel}
                    </span>
                  )}
                </div>
              </button>
            );
          })}
        </div>
        
        {userAnswers[currentIdx] !== null && (
          <div id="exp-box" className="explanation">
            <div style={{ 
              display: 'flex', 
              alignItems: 'center', 
              gap: '8px',
              marginBottom: '10px'
            }}>
              <span style={{
                background: 'var(--primary)',
                color: 'white',
                width: '28px',
                height: '28px',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '0.9rem'
              }}>
                💡
              </span>
              <strong style={{ fontSize: '1rem' }}>DITISS Learning Note</strong>
            </div>
            <div style={{ fontSize: '0.95rem', lineHeight: '1.6' }}>
              {q.exp}
            </div>
          </div>
        )}
      </div>
      
      <div className="quiz-nav-buttons">
        <button 
          className="btn" 
          style={{background: '#64748b'}} 
          onClick={onPrevious}
          disabled={currentIdx === 0}
        >
          <span className="hide-on-mobile">Previous</span>
          <span className="show-on-mobile">← Prev</span>
        </button>
        
        <button 
          className="btn btn-warn" 
          onClick={onMark}
          style={{
            background: isMarked[currentIdx] ? '#d97706' : 'var(--warning)'
          }}
        >
          <span className="hide-on-mobile">
            {isMarked[currentIdx] ? 'Unflag' : 'Flag for Review'}
          </span>
          <span className="show-on-mobile">
            {isMarked[currentIdx] ? '⚑ Unflag' : '⚐ Flag'}
          </span>
        </button>
        
        <button 
          className="btn btn-primary" 
          onClick={onNext}
          disabled={currentIdx === quizData.length - 1}
        >
          <span className="hide-on-mobile">Next Question</span>
          <span className="show-on-mobile">Next →</span>
        </button>
      </div>
      
      {/* Mobile progress indicator */}
      <div className="show-on-mobile" style={{
        width: '100%',
        maxWidth: '700px',
        marginTop: '20px',
        padding: '12px',
        background: 'var(--bg-card)',
        borderRadius: '12px',
        border: '1px solid var(--border)'
      }}>
        <div style={{ 
          display: 'flex', 
          justifyContent: 'space-between',
          alignItems: 'center',
          marginBottom: '8px'
        }}>
          <span style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>
            Progress: {currentIdx + 1} of {quizData.length}
          </span>
          <span style={{ 
            fontSize: '0.85rem', 
            color: 'var(--primary)',
            fontWeight: '600'
          }}>
            {Math.round(((currentIdx + 1) / quizData.length) * 100)}%
          </span>
        </div>
        <div style={{
          width: '100%',
          height: '6px',
          background: 'var(--border)',
          borderRadius: '3px',
          overflow: 'hidden'
        }}>
          <div style={{
            width: `${((currentIdx + 1) / quizData.length) * 100}%`,
            height: '100%',
            background: 'var(--primary)',
            transition: 'width 0.3s ease'
          }}></div>
        </div>
      </div>
    </div>
  );
}

export default QuizArea;