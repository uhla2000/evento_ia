import { Speaker, ScheduleEvent } from './types';

export const SPEAKERS: Speaker[] = [
  {
    name: 'Dra. Elena Vaz',
    title: 'Especialista em Ética de IA, DataAI Corp',
    bio: 'Lidera a pesquisa sobre os impactos sociais da IA, focada em criar sistemas justos e transparentes.',
    imageUrl: 'https://picsum.photos/seed/elena/400/400',
  },
  {
    name: 'Marco Lins',
    title: 'Engenheiro de Machine Learning, NeuroTech',
    bio: 'Arquiteto de modelos de linguagem de grande escala que impulsionam a próxima geração de assistentes virtuais.',
    imageUrl: 'https://picsum.photos/seed/marco/400/400',
  },
  {
    name: 'Carla Matos',
    title: 'CEO & Fundadora, Visiona IA',
    bio: 'Pioneira em visão computacional, transformando indústrias com soluções de IA que veem e entendem o mundo.',
    imageUrl: 'https://picsum.photos/seed/carla/400/400',
  },
   {
    name: 'Dr. Tiago Alves',
    title: 'Pesquisador de IA Generativa, QuantumLeap',
    bio: 'Explora novas fronteiras na criação de conteúdo com IA, desde arte e música até códigos complexos.',
    imageUrl: 'https://picsum.photos/seed/tiago/400/400',
  },
  {
    name: 'Sofia Ribeiro',
    title: 'Advogada de Tecnologia, Lex Futura',
    bio: 'Especializada na intersecção entre lei e tecnologia, debatendo a regulamentação da inteligência artificial.',
    imageUrl: 'https://picsum.photos/seed/sofia/400/400',
  },
  {
    name: 'Bruno Rocha',
    title: 'Investidor Anjo, Inova Capital',
    bio: 'Focado em startups de IA com potencial para disruptar mercados tradicionais e criar novas oportunidades.',
    imageUrl: 'https://picsum.photos/seed/bruno/400/400',
  },
];

export const SCHEDULE: ScheduleEvent[] = [
  { time: '09:00 - 09:30', title: 'Credenciamento e Café de Boas-Vindas', description: 'Comece o dia com networking e um bom café.' },
  { time: '09:30 - 10:30', title: 'Keynote: A Próxima Década da Inteligência Artificial', speaker: 'Dra. Elena Vaz', description: 'Uma visão sobre o futuro da IA e seu impacto transformador na sociedade e nos negócios.' },
  { time: '10:30 - 11:30', title: 'Deep Dive: Construindo Modelos de Linguagem para o Mundo Real', speaker: 'Marco Lins', description: 'Desafios e soluções na implementação de LLMs em produtos de larga escala.' },
  { time: '11:30 - 12:00', title: 'Coffee Break', description: 'Pausa para recarregar as energias e conectar-se com outros participantes.' },
  { time: '12:00 - 13:00', title: 'Painel: A Revolução da IA Generativa', speaker: 'Carla Matos e Dr. Tiago Alves', description: 'Um debate sobre o estado da arte em IA generativa, suas aplicações e futuro.' },
  { time: '13:00 - 14:30', title: 'Almoço', description: 'Networking e almoço com opções variadas.' },
  { time: '14:30 - 15:30', title: 'Workshop: Visão Computacional na Prática', speaker: 'Carla Matos', description: 'Sessão interativa para construir um sistema de reconhecimento de imagens do zero.' },
  { time: '15:30 - 16:30', title: 'Debate: Regulamentação e Ética em IA', speaker: 'Sofia Ribeiro e Dra. Elena Vaz', description: 'Como equilibrar inovação e responsabilidade no desenvolvimento de IA.' },
  { time: '16:30 - 17:00', title: 'Encerramento e Próximos Passos', description: 'Resumo do dia e insights sobre como se manter na vanguarda da revolução da IA.' },
];
