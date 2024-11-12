import { Job } from '../types/job';
import { Network, Terminal, Shield, Code, Gamepad2 } from 'lucide-react';

export const jobs: Job[] = [
  {
    id: 'linux-network-engineer',
    title: 'Engenheiro de Redes Linux',
    department: 'Divisão de Infraestrutura de Games',
    location: 'São Paulo, SP',
    type: 'full-time',
    description: 'Procuramos um engenheiro de redes Linux experiente para gerenciar nossa infraestrutura de servidores de jogos.',
    responsibilities: [
      'Gerenciar e otimizar redes Linux com foco em alta disponibilidade',
      'Implementar e manter infraestrutura de servidores MMORPG',
      'Desenvolver soluções de mitigação DDoS',
      'Monitorar e otimizar conexões TCP de alta demanda'
    ],
    requirements: [
      'Experiência avançada em redes Linux',
      'Conhecimento em proteção DDoS e segurança de servidores',
      'Proficiência em monitoramento e resolução de problemas',
      'Pensamento crítico e habilidade em resolução de problemas'
    ],
    technicalSkills: [
      { icon: 'Terminal', skill: 'Sistemas Linux' },
      { icon: 'Shield', skill: 'Segurança de Rede' },
      { icon: 'Code', skill: 'Scripts Bash/Python' },
      { icon: 'Network', skill: 'Redes TCP/IP' },
      { icon: 'Gamepad2', skill: 'Infraestrutura de Jogos' },
      { icon: 'Shield', skill: 'Mitigação DDoS' }
    ],
    differentials: [
      'Experiência com servidores rAthena ou HerculesWS',
      'Desenvolvimento de scripts de automação e monitoramento',
      'Experiência ou paixão pela indústria de games'
    ],
    active: true
  }
];