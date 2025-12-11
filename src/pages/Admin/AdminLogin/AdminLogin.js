import React, { useState } from 'react';
import './AdminLogin.css';

// ⚠️ SENHA ESTÁTICA: MUDE ISTO IMEDIATAMENTE!
const ADMIN_PASSWORD = 'alfa-admin-2025'; 

const AdminLogin = ({ onLoginSuccess }) => {
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null);

    const handleSubmit = (e) => {
        e.preventDefault();
        setError(null);

        // Verifica se a senha digitada corresponde à senha estática
        if (password === ADMIN_PASSWORD) {
            // Chama a função passada pelo componente pai (CoverageAdminWrapper)
            onLoginSuccess();
            // Opcional: Salvar estado de login no sessionStorage para evitar login repetido
            sessionStorage.setItem('isAdminLoggedIn', 'true');
        } else {
            setError('Senha incorreta. Tente novamente.');
            setPassword('');
        }
    };

    return (
        <div className="login-container-admin">
            <div className="login-box-admin">
                <h2>🔐 Acesso Restrito</h2>
                <p>Insira a senha de administrador para gerenciar a cobertura.</p>
                
                <form onSubmit={handleSubmit}>
                    <div className="input-group-admin">
                        <label htmlFor="password">Senha de Acesso</label>
                        <input
                            id="password"
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </div>

                    {error && <p className="error-message-admin">{error}</p>}
                    
                    <button type="submit" className="btn-login-admin">
                        Acessar Painel
                    </button>
                </form>
            </div>
            <p className="footer-link">
                <a href="/">Voltar para a Home</a>
            </p>
        </div>
    );
};

export default AdminLogin;