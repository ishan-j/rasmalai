import React from 'react';

function Header({ user, userAnswers, quizTitle }) {
  const attempted = userAnswers.filter(a => a !== null).length;
  const correct = userAnswers.filter(a => a?.ok).length;
  const accuracy = attempted === 0 ? 0 : Math.round((correct / attempted) * 100);
  const total = userAnswers.length;

  return (
    <header className="header">
      <div className="header-content">
        <div className="header-left">
          <div className="user-avatar">
            {user.fullName.charAt(0)}
          </div>
          <div className="user-info-text">
            <div className="truncate">{user.fullName}</div>
            <div className="truncate" style={{ color: 'var(--primary)' }}>
              {quizTitle} Practice
            </div>
          </div>
        </div>
      </div>
      
      <div id="live-stats">
        <div className="stats-grid">
          <div className="stat-item">
            <div className="stat-label">Progress</div>
            <div className="stat-value">
              {attempted}/{total}
            </div>
          </div>
          <div className="stat-item">
            <div className="stat-label">Score</div>
            <div className="stat-value" style={{ color: 'var(--success)' }}>
              {correct}/{attempted || 0}
            </div>
          </div>
          <div className="stat-item">
            <div className="stat-label">Accuracy</div>
            <div className="stat-value" style={{ 
              color: accuracy >= 70 ? 'var(--success)' : accuracy >= 50 ? 'var(--warning)' : 'var(--danger)'
            }}>
              {accuracy}%
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

// Add this export statement
export default Header;