import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import SpeakerCard from './components/SpeakerCard';
import { SPEAKERS, SCHEDULE } from './constants';

const BrainIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M15 21v-3.414a1 1 0 01.293-.707l2.414-2.414a1 1 0 00.293-.707V10.5a2.5 2.5 0 00-5 0v.793a1 1 0 00.293.707l2.414 2.414a1 1 0 01.293.707V21zm-6-15.5a4.5 4.5 0 019 0V7a2 2 0 01-4 0V5.5z" />
  </svg>
);

const CodeIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
  </svg>
);

const ChartBarIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
    </svg>
);


const App: React.FC = () => {
  return (
    <div className="bg-slate-900 text-slate-300 font-sans">
      <Header />

      <main>
        {/* Hero Section */}
        <section id="home" className="relative h-screen flex items-center justify-center text-center text-white overflow-hidden">
          <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1620712943543-26fc7631b818?q=80&w=2070&auto=format&fit=crop')" }}></div>
          <div className="absolute inset-0 bg-slate-900/70 backdrop-blur-sm"></div>
          <div className="relative z-10 p-6">
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black uppercase tracking-wider bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-purple-500">
              Futuro IA
            </h1>
            <p className="mt-4 text-lg md:text-2xl font-light max-w-3xl mx-auto">
              Explore as fronteiras da Inteligência Artificial em um evento imersivo com os maiores especialistas da área.
            </p>
            <a href="#inscricao" className="mt-8 inline-block bg-cyan-500 hover:bg-cyan-400 text-white font-bold py-3 px-8 rounded-full text-lg transition-all duration-300 transform hover:scale-105 shadow-lg shadow-cyan-500/30">
              Garanta seu Ingresso
            </a>
          </div>
        </section>

        {/* About Section */}
        <section id="sobre" className="py-20 bg-slate-900">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white">Sobre o Evento</h2>
              <p className="mt-4 text-lg text-slate-400 max-w-2xl mx-auto">Uma imersão completa no universo da Inteligência Artificial.</p>
            </div>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="space-y-8">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0"><BrainIcon/></div>
                  <div>
                    <h3 className="text-xl font-semibold text-white">Conhecimento de Ponta</h3>
                    <p className="text-slate-400 mt-2">Aprenda com líderes que estão definindo o futuro da IA, cobrindo desde LLMs e IA Generativa até ética e regulação.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0"><CodeIcon/></div>
                  <div>
                    <h3 className="text-xl font-semibold text-white">Aplicações Práticas</h3>
                    <p className="text-slate-400 mt-2">Participe de workshops e veja demonstrações de como a IA está resolvendo problemas reais em diversas indústrias.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0"><ChartBarIcon/></div>
                  <div>
                    <h3 className="text-xl font-semibold text-white">Networking Estratégico</h3>
                    <p className="text-slate-400 mt-2">Conecte-se com pesquisadores, desenvolvedores, empreendedores e investidores que formam o ecossistema de IA.</p>
                  </div>
                </div>
              </div>
              <div>
                <img src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=2070&auto=format&fit=crop" alt="Pessoas colaborando em um projeto de tecnologia" className="rounded-lg shadow-2xl" />
              </div>
            </div>
          </div>
        </section>

        {/* Speakers Section */}
        <section id="palestrantes" className="py-20 bg-slate-800/50">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white">Palestrantes de Renome</h2>
              <p className="mt-4 text-lg text-slate-400 max-w-2xl mx-auto">Mentes brilhantes que estão moldando o amanhã.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {SPEAKERS.map((speaker, index) => (
                <SpeakerCard key={index} speaker={speaker} />
              ))}
            </div>
          </div>
        </section>

        {/* Schedule Section */}
        <section id="agenda" className="py-20">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white">Agenda do Evento</h2>
              <p className="mt-4 text-lg text-slate-400 max-w-2xl mx-auto">Um dia intenso de aprendizado e conexões.</p>
            </div>
            <div className="max-w-3xl mx-auto">
              <div className="relative border-l-2 border-cyan-500/30 pl-8 space-y-12">
                {SCHEDULE.map((event, index) => (
                  <div key={index} className="relative">
                    <div className="absolute -left-10 h-5 w-5 bg-cyan-500 rounded-full border-4 border-slate-900"></div>
                    <p className="text-cyan-400 font-semibold">{event.time}</p>
                    <h3 className="text-xl font-bold text-white mt-1">{event.title}</h3>
                    {event.speaker && <p className="text-md text-slate-300 font-medium mt-1">com {event.speaker}</p>}
                    <p className="text-slate-400 mt-2">{event.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Location Section */}
        <section id="local" className="py-20 bg-slate-800/50">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-4xl font-bold text-white">Localização</h2>
            <p className="mt-4 text-lg text-slate-400 max-w-2xl mx-auto">Um espaço inovador para um evento transformador.</p>
            <div className="mt-12 max-w-4xl mx-auto bg-slate-800 rounded-lg shadow-2xl p-8 grid md:grid-cols-2 gap-8 items-center">
                <div className="text-left">
                    <h3 className="text-2xl font-bold text-white">InovaHub São Paulo</h3>
                    <p className="mt-2 text-slate-300">Av. das Nações Unidas, 12901</p>
                    <p className="text-slate-400">Brooklin Novo, São Paulo - SP</p>
                    <a href="#" className="mt-4 inline-block text-cyan-400 hover:text-cyan-300 transition-colors">Ver no mapa &rarr;</a>
                </div>
                <div className="h-64 md:h-full w-full bg-cover bg-center rounded-lg" style={{backgroundImage: "url('https://images.unsplash.com/photo-1594122230689-45899d9e6f69?q=80&w=1932&auto=format&fit=crop')"}}>
                    {/* Placeholder for an interactive map */}
                </div>
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
        <section id="inscricao" className="py-20 bg-gradient-to-r from-cyan-500 to-purple-600">
             <div className="container mx-auto px-6 text-center text-white">
                <h2 className="text-4xl font-bold">Não Perca a Chance de Fazer Parte do Futuro</h2>
                <p className="mt-4 text-lg max-w-2xl mx-auto">Os ingressos são limitados. Garanta sua vaga agora e junte-se aos líderes da revolução da IA.</p>
                <a href="#inscricao" className="mt-8 inline-block bg-white hover:bg-slate-100 text-purple-600 font-bold py-4 px-10 rounded-full text-xl transition-all duration-300 transform hover:scale-105 shadow-2xl">
                    Inscreva-se Agora
                </a>
             </div>
        </section>

      </main>

      <Footer />
    </div>
  );
};

export default App;
