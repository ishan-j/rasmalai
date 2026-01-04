import React from 'react';

function ResultScreen({ quizData, userAnswers, onRestart, user }) {
  const correct = userAnswers.filter(a => a?.ok).length;
  const total = quizData.length;
  const percentage = Math.round((correct / total) * 100);
  
  let performance = '';
  let color = 'var(--text-primary)';
  
  if (percentage >= 90) {
    performance = 'Outstanding!';
    color = 'var(--success)';
  } else if (percentage >= 75) {
    performance = 'Good Job!';
    color = 'var(--primary)';
  } else if (percentage >= 60) {
    performance = 'Fair';
    color = 'var(--warning)';
  } else {
    performance = 'Need Improvement';
    color = 'var(--danger)';
  }

  return (
    <div id="result-screen">
      <div style={{ 
        background: 'var(--bg-card)', 
        padding: '30px', 
        borderRadius: '16px', 
        marginBottom: '40px',
        width: '100%',
        maxWidth: '800px',
        border: '1px solid var(--border)'
      }}>
        <h1 style={{textAlign: 'center', marginBottom: '10px'}}>Practice Performance Report</h1>
        <p style={{textAlign: 'center', color: 'var(--text-secondary)', marginBottom: '30px'}}>
          CDAC PG-DITISS • {user.fullName} • {user.batch || user.role}
        </p>
        
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', 
          gap: '20px',
          marginBottom: '40px'
        }}>
          <div style={{ 
            background: 'rgba(59, 130, 246, 0.1)', 
            padding: '20px', 
            borderRadius: '12px',
            textAlign: 'center',
            border: '1px solid var(--border)'
          }}>
            <div style={{ fontSize: '2.5rem', fontWeight: 'bold', color: 'var(--primary)' }}>
              {correct}/{total}
            </div>
            <div style={{ color: 'var(--text-secondary)' }}>Score</div>
          </div>
          
          <div style={{ 
            background: 'rgba(16, 185, 129, 0.1)', 
            padding: '20px', 
            borderRadius: '12px',
            textAlign: 'center',
            border: '1px solid var(--border)'
          }}>
            <div style={{ fontSize: '2.5rem', fontWeight: 'bold', color: 'var(--success)' }}>
              {percentage}%
            </div>
            <div style={{ color: 'var(--text-secondary)' }}>Accuracy</div>
          </div>
          
          <div style={{ 
            background: 'rgba(245, 158, 11, 0.1)', 
            padding: '20px', 
            borderRadius: '12px',
            textAlign: 'center',
            border: '1px solid var(--border)'
          }}>
            <div style={{ fontSize: '2.5rem', fontWeight: 'bold', color: color }}>
              {performance}
            </div>
            <div style={{ color: 'var(--text-secondary)' }}>Performance</div>
          </div>
        </div>
      </div>
      
      <div id="full-history-list" style={{display: 'flex', flexDirection: 'column', alignItems: 'center', width: '100%'}}>
        <h2 style={{ marginBottom: '20px', color: 'var(--text-primary)' }}>Detailed Review</h2>
        {quizData.map((q, idx) => {
          const userAnswer = userAnswers[idx];
          return (
            <div key={idx} className="review-item">
              <div style={{ 
                display: 'flex', 
                justifyContent: 'space-between', 
                alignItems: 'center',
                marginBottom: '15px'
              }}>
                <h4 style={{ margin: 0, color: 'var(--text-primary)' }}>
                  Question {q.id}
                </h4>
                {userAnswer ? (
                  userAnswer.ok ? 
                    <span style={{
                      background: 'var(--success)', 
                      color: 'white', 
                      padding: '4px 12px',
                      borderRadius: '20px',
                      fontSize: '0.8rem',
                      fontWeight: '600'
                    }}>CORRECT</span> :
                    <span style={{
                      background: 'var(--danger)', 
                      color: 'white', 
                      padding: '4px 12px',
                      borderRadius: '20px',
                      fontSize: '0.8rem',
                      fontWeight: '600'
                    }}>INCORRECT</span>
                ) : (
                  <span style={{
                    background: 'var(--warning)', 
                    color: 'white', 
                    padding: '4px 12px',
                    borderRadius: '20px',
                    fontSize: '0.8rem',
                    fontWeight: '600'
                  }}>SKIPPED</span>
                )}
              </div>
              <p style={{fontWeight: 'bold', color: 'var(--text-primary)', marginBottom: '20px'}}>{q.q}</p>
              {q.a.map((opt, optIdx) => {
                let className = 'option';
                if (optIdx === q.c) className += ' opt-correct';
                if (userAnswer?.sel === optIdx && optIdx !== q.c) {
                  className += ' opt-wrong';
                }
                return (
                  <div key={optIdx} className={className} style={{ marginBottom: '10px' }}>
                    {opt}
                  </div>
                );
              })}
              <div className="explanation" style={{display: 'block', marginTop: '20px'}}>
                <strong>Explanation:</strong> {q.exp}
              </div>
            </div>
          );
        })}
      </div>
      <div style={{display: 'flex', gap: '15px', justifyContent: 'center', margin: '40px 0'}}>
        <button className="btn btn-primary" onClick={onRestart}>
          Back to Subjects
        </button>
        <button className="btn btn-success" onClick={() => window.print()}>
          Print Report
        </button>
        <button className="btn" style={{background: 'var(--border)'}} onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}>
          Back to Top
        </button>
      </div>
    </div>
  );
}

export default ResultScreen;