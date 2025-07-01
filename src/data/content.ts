import { Content, Skill } from '../types';

export const content: Record<'en' | 'pt', Content> = {
  en: {
    nav: {
      about: 'About',
      projects: 'Projects',
      skills: 'Skills',
      contact: 'Contact'
    },
    hero: {
      greeting: 'Hello, I\'m',
      name: 'Henrique Ribeiro',
      title: 'Junior Developer',
      subtitle: 'Building the future with Python, Node.js & AI',
      cta: 'View My Work'
    },
    projects: {
      title: 'Featured Projects',
      items: [
        {
          id: '1',
          title: 'AI-Powered Chat Assistant',
          description: 'An intelligent chatbot built with Python and machine learning algorithms that can understand context and provide meaningful responses.',
          githubUrl: 'https://github.com',
          liveUrl: 'https://demo.com',
          technologies: ['Python', 'TensorFlow', 'FastAPI']
        },
        {
          id: '2',
          title: 'E-commerce API',
          description: 'A robust RESTful API built with Node.js and Express, featuring user authentication, payment processing, and real-time inventory management.',
          githubUrl: 'https://github.com',
          technologies: ['Node.js', 'Express', 'MongoDB']
        },
        {
          id: '3',
          title: 'Data Analytics Dashboard',
          description: 'Interactive dashboard for visualizing complex datasets with real-time updates and predictive analytics capabilities.',
          githubUrl: 'https://github.com',
          liveUrl: 'https://demo.com',
          technologies: ['Python', 'Pandas', 'React']
        },
        {
          id: '4',
          title: 'Task Management System',
          description: 'A collaborative task management application with real-time synchronization, team collaboration features, and productivity analytics.',
          githubUrl: 'https://github.com',
          liveUrl: 'https://demo.com',
          technologies: ['Node.js', 'Socket.io', 'PostgreSQL']
        }
      ]
    },
    skills: {
      title: 'Technical Skills',
      subtitle: 'Technologies I work with to bring ideas to life'
    },
    about: {
      title: 'About Me',
      description: [
        'I\'m a passionate junior developer with a strong foundation in Python, Node.js, and artificial intelligence. My journey in tech began with a fascination for solving complex problems through code.',
        'With a global mindset and ambition to work with international teams, I\'m constantly learning new technologies and improving my skills. I believe in writing clean, efficient code and building solutions that make a real impact.',
        'Currently seeking opportunities to contribute to innovative projects and grow within dynamic, forward-thinking organizations.'
      ]
    }
  },
  pt: {
    nav: {
      about: 'Sobre',
      projects: 'Projetos',
      skills: 'Habilidades',
      contact: 'Contato'
    },
    hero: {
      greeting: 'Olá, eu sou',
      name: 'Alex Thompson',
      title: 'Desenvolvedor Júnior',
      subtitle: 'Construindo o futuro com Python, Node.js e IA',
      cta: 'Ver Meu Trabalho'
    },
    projects: {
      title: 'Projetos em Destaque',
      items: [
        {
          id: '1',
          title: 'Assistente de Chat com IA',
          description: 'Um chatbot inteligente construído com Python e algoritmos de machine learning que pode entender contexto e fornecer respostas significativas.',
          githubUrl: 'https://github.com',
          liveUrl: 'https://demo.com',
          technologies: ['Python', 'TensorFlow', 'FastAPI']
        },
        {
          id: '2',
          title: 'API de E-commerce',
          description: 'Uma API RESTful robusta construída com Node.js e Express, com autenticação de usuário, processamento de pagamentos e gerenciamento de estoque em tempo real.',
          githubUrl: 'https://github.com',
          technologies: ['Node.js', 'Express', 'MongoDB']
        },
        {
          id: '3',
          title: 'Dashboard de Análise de Dados',
          description: 'Dashboard interativo para visualizar conjuntos de dados complexos com atualizações em tempo real e capacidades de análise preditiva.',
          githubUrl: 'https://github.com',
          liveUrl: 'https://demo.com',
          technologies: ['Python', 'Pandas', 'React']
        },
        {
          id: '4',
          title: 'Sistema de Gestão de Tarefas',
          description: 'Uma aplicação colaborativa de gestão de tarefas com sincronização em tempo real, recursos de colaboração em equipe e análise de produtividade.',
          githubUrl: 'https://github.com',
          liveUrl: 'https://demo.com',
          technologies: ['Node.js', 'Socket.io', 'PostgreSQL']
        }
      ]
    },
    skills: {
      title: 'Habilidades Técnicas',
      subtitle: 'Tecnologias que uso para dar vida às ideias'
    },
    about: {
      title: 'Sobre Mim',
      description: [
        'Sou um desenvolvedor júnior apaixonado com uma base sólida em Python, Node.js e inteligência artificial. Minha jornada na tecnologia começou com o fascínio por resolver problemas complexos através do código.',
        'Com uma mentalidade global e ambição de trabalhar com equipes internacionais, estou constantemente aprendendo novas tecnologias e aprimorando minhas habilidades. Acredito em escrever código limpo e eficiente e construir soluções que causem um impacto real.',
        'Atualmente busco oportunidades para contribuir com projetos inovadores e crescer dentro de organizações dinâmicas e visionárias.'
      ]
    }
  }
};

export const skills: Skill[] = [
  { name: 'Python', icon: 'Code2' },
  { name: 'Node.js', icon: 'Server' },
  { name: 'Express', icon: 'Zap' },
  { name: 'MongoDB', icon: 'Database' },
  { name: 'Git', icon: 'GitBranch' },
  { name: 'AI/ML', icon: 'Brain' },
  { name: 'APIs', icon: 'Plug' },
  { name: 'React', icon: 'Layers' }
];