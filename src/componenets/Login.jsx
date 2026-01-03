import React, { useState } from 'react';
import { validateUser } from '../data/users';

function Login({ onLogin }) {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setError('');
        setIsLoading(true);

        // Simulate API call delay
        setTimeout(() => {
            const user = validateUser(username, password);
            
            if (user) {
                // Remove password before storing user data
                const { password: _, ...userData } = user;
                onLogin(userData);
            } else {
                setError('Invalid username or password');
            }
            setIsLoading(false);
        }, 500);
    };

    return (
        <div className="login-container">
            <div className="login-card">
                <h1>COPAIN</h1>
                <h3>Don't hack here</h3>
                
                {error && (
                    <div className="error-message">
                        {error}
                    </div>
                )}
                
                <form className="login-form" onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="username">Username</label>
                        <input
                            type="text"
                            id="username"
                            className="form-input"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            placeholder="Enter your username"
                            required
                            autoFocus
                        />
                    </div>
                    
                    <div className="form-group">
                        <label htmlFor="password">Password</label>
                        <input
                            type="password"
                            id="password"
                            className="form-input"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder="Enter your password"
                            required
                        />
                    </div>
                    
                    <button 
                        type="submit" 
                        className="login-btn"
                        disabled={isLoading}
                    >
                        {isLoading ? 'Signing in...' : 'Sign In'}
                    </button>
                </form>
                
              
            </div>
            
        </div>
    );
}

export default Login;