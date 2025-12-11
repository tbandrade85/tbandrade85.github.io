import React, { useState } from 'react';
import './CoverageAdmin.css';
import { initialAreasCobertas } from '../../../data/cobertura_areas'; // Importa a lista inicial
import Layout from '../../ui/Layout';

// Função utilitária para padronizar a entrada
const standardizeBairro = (bairro) => {
    return bairro
        .toLowerCase()
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .replace(/\s/g, '');
};

const CoverageAdmin = () => {
    // Usamos a lista importada como estado inicial
    const [areas, setAreas] = useState(initialAreasCobertas);
    const [newBairro, setNewBairro] = useState('');

    // --- Adicionar Novo Bairro ---
    const handleAdd = (e) => {
        e.preventDefault();
        const standardized = standardizeBairro(newBairro);

        if (standardized && !areas.includes(standardized)) {
            // Adiciona o novo bairro à lista e limpa o input
            setAreas([...areas, standardized]);
            setNewBairro('');
            alert(`Bairro '${standardized}' adicionado com sucesso!`);
        } else if (areas.includes(standardized)) {
            alert(`O bairro '${standardized}' já está na lista.`);
        }
    };

    // --- Remover Bairro ---
    const handleRemove = (bairroToRemove) => {
        const updatedAreas = areas.filter(area => area !== bairroToRemove);
        setAreas(updatedAreas);
        alert(`Bairro '${bairroToRemove}' removido.`);
    };

    // ATENÇÃO: Este painel manipula o estado do React, mas NÃO atualiza o arquivo 'cobertura_areas.js' no disco.
    // Para persistir as mudanças, seria necessário um Backend para salvar no banco de dados ou em um arquivo no servidor.

    return (
        <Layout>
            <div className="admin-container">
                <div className="admin-header">
                    <h2>🗺️ Painel de Administração de Cobertura</h2>
                    <p>Gerencie a lista de bairros onde a Alfa Telecom oferece serviço de fibra.</p>
                </div>
                
                <div className="dev-warning">
                    ⚠️ AVISO: As alterações aqui são apenas em memória (frontend) e não são salvas permanentemente. Para persistência, um Backend é necessário.
                </div>

                {/* --- Seção de Adição --- */}
                <h3>Adicionar Novo Bairro</h3>
                <form onSubmit={handleAdd} className="add-form">
                    <input
                        type="text"
                        placeholder="Nome do Bairro (ex: Vila Nova)"
                        value={newBairro}
                        onChange={(e) => setNewBairro(e.target.value)}
                        required
                    />
                    <button type="submit">Adicionar</button>
                </form>

                {/* --- Lista de Bairros Atuais --- */}
                <h3>Bairros Atualmente Cobertos ({areas.length})</h3>
                <p>Lista padronizada: sem acentos, sem espaços e em minúsculas.</p>
                
                {areas.length > 0 ? (
                    <ul className="coverage-list">
                        {areas.map((area, index) => (
                            <li key={index}>
                                <span>{area}</span>
                                <button className="remove-btn" onClick={() => handleRemove(area)}>
                                    Remover
                                </button>
                            </li>
                        ))}
                    </ul>
                ) : (
                    <div className="empty-list">Nenhuma área coberta cadastrada.</div>
                )}
            </div>
        </Layout>
    );
};

export default CoverageAdmin;