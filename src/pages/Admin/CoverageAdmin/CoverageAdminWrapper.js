import React, { useState, useEffect } from 'react';
import CoverageAdmin from './CoverageAdmin'; // Importa o painel real
import AdminLogin from '../AdminLogin/AdminLogin'; // Importa a tela de login

const CoverageAdminWrapper = () => {
    // Verifica se o usuário já logou na sessão atual
    const [isLoggedIn, setIsLoggedIn] = useState(
        sessionStorage.getItem('isAdminLoggedIn') === 'true'
    );

    // Função que será chamada ao digitar a senha correta
    const handleLoginSuccess = () => {
        setIsLoggedIn(true);
    };

    // Renderiza o painel real se o login for verdadeiro
    if (isLoggedIn) {
        return <CoverageAdmin />;
    }

    // Caso contrário, renderiza a tela de login
    return <AdminLogin onLoginSuccess={handleLoginSuccess} />;
};

export default CoverageAdminWrapper;