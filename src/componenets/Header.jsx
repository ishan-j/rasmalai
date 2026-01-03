import React from 'react';

function Header({ user, userAnswers, quizTitle }) {
  const attempted = userAnswers.filter(a => a !== null).length;
  const correct = userAnswers.filter(a => a?.ok).length;
  const accuracy = attempted === 0 ? 0 : Math.round((correct / attempted) * 100);
  const total = userAnswers.length;

  return (
    <header className="header">
      <div className="header-left">
        <div className="user-avatar">
          {user.fullName.charAt(0)}
        </div>
        <div>
          <div style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
            {user.fullName}
          </div>
          <div style={{ fontSize: '0.8rem', color: 'var(--primary)', fontWeight: '600' }}>
            {quizTitle} Practice
          </div>
        </div>
      </div>
      <div id="live-stats">
        <div style={{ display: 'flex', gap: '20px' }}>
          <div>
            <div style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>Progress</div>
            <div style={{ fontSize: '1.1rem', fontWeight: 'bold' }}>
              {attempted}/{total} ({Math.round((attempted/total)*100)}%)
            </div>
          </div>
          <div>
            <div style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>Score</div>
            <div style={{ fontSize: '1.1rem', fontWeight: 'bold', color: 'var(--success)' }}>
              {correct}/{attempted || 0}
            </div>
          </div>
          <div>
            <div style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>Accuracy</div>
            <div style={{ 
              fontSize: '1.1rem', 
              fontWeight: 'bold',
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

export default Header;