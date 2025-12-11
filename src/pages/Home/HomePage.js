import React from 'react';
import Layout from '../ui/Layout';
import CarrosselHero from './CarrosselHero/CarrosselHero';
import TesteDeCobertura from './TesteDeCobertura/TesteDeCobertura';
import PlanosFetcher from './PlanosFetcher/PlanosFetcher';
import ValuesSection from './Valores/Valores';
import DestaquePerformance from './DestaquePerformance/DestaquePerformance';
import DepoimentosSection from './Depoimentos/Depoimentos'; // 🎯 NOVO IMPORT

const HomePage = () => {
    return (
        <Layout>
            <CarrosselHero />
            <TesteDeCobertura />
            
            <DestaquePerformance /> 
            
            <PlanosFetcher />
            
            {/* 🎯 REINSERÇÃO DA SEÇÃO DE DEPOIMENTOS */}
            <DepoimentosSection /> 
            
            <ValuesSection />
            
            {/* ... Outras seções ... */}
        </Layout>
    );
};

export default HomePage;