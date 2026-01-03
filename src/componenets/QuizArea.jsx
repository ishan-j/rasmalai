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
  onMark
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

  if (!q) return null;

  return (
    <div className="quiz-area">
      <div className="card">
        <h3 id="q-num-display" style={{color: 'var(--primary)', marginTop: 0}}>
          Question {q.id}
        </h3>
        <p id="q-text" style={{fontSize: '1.2rem', lineHeight: '1.5', fontWeight: 500}}>
          {q.q}
        </p>
        <div id="options-box">
          {q.a.map((option, idx) => {
            let className = 'option';
            if (userAnswers[currentIdx] !== null) {
              if (idx === q.c) className += ' opt-correct';
              if (idx === userAnswers[currentIdx]?.sel && idx !== q.c) {
                className += ' opt-wrong';
              }
            }
            return (
              <button
                key={idx}
                className={className}
                onClick={() => handleOptionClick(idx)}
                disabled={userAnswers[currentIdx] !== null}
              >
                {option}
              </button>
            );
          })}
        </div>
        {userAnswers[currentIdx] !== null && (
          <div id="exp-box" className="explanation" style={{display: 'block'}}>
            <strong>DITISS Learning Note:</strong><br />
            {q.exp}
          </div>
        )}
      </div>
      <div style={{display: 'flex', gap: '12px', width: '100%', maxWidth: '700px'}}>
        <button className="btn" style={{background: '#64748b'}} onClick={onPrevious}>
          Previous
        </button>
        <button className="btn btn-warn" onClick={onMark}>
          {isMarked[currentIdx] ? 'Unflag' : 'Flag for Review'}
        </button>
        <button className="btn btn-primary" onClick={onNext}>
          Next Question
        </button>
      </div>
    </div>
  );
}

export default QuizArea;