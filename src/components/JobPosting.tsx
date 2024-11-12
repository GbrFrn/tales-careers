import React from 'react';
import { Network, Users, Shield, Cpu, Code, Gamepad2, Terminal, Star, MapPin, Clock } from 'lucide-react';
import { Job } from '../types/job';

const iconMap: { [key: string]: typeof Network } = {
  Network, Users, Shield, Cpu, Code, Gamepad2, Terminal, Star
};

interface JobPostingProps {
  job: Job;
}

export function JobPosting({ job }: JobPostingProps) {
  return (
    <div className="bg-white dark:bg-[#131c2a] backdrop-blur-xl rounded-2xl p-8 shadow-xl border border-slate-200 dark:border-[#2a3544]">
      <div className="flex items-center space-x-4 mb-8">
        <Network className="h-10 w-10 text-blue-600 dark:text-blue-400" />
        <div>
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white">
            {job.title}
          </h2>
          <p className="text-blue-600 dark:text-blue-400">{job.department}</p>
        </div>
      </div>

      <div className="flex flex-wrap gap-4 mb-8">
        <div className="flex items-center text-slate-600 dark:text-gray-300">
          <MapPin className="h-5 w-5 mr-2" />
          {job.location}
        </div>
        <div className="flex items-center text-slate-600 dark:text-gray-300">
          <Clock className="h-5 w-5 mr-2" />
          {job.type === "full-time"
            ? "Tempo Integral"
            : job.type === "part-time"
            ? "Meio Período"
            : "Contrato"}
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-8 mb-12">
        <div className="bg-slate-50 dark:bg-[#1a2433] rounded-xl p-6 border border-slate-200 dark:border-[#2a3544]">
          <h3 className="flex items-center text-xl font-semibold text-slate-900 dark:text-white mb-4">
            <Users className="h-6 w-6 mr-2 text-blue-600 dark:text-blue-400" />
            Responsabilidades
          </h3>
          <ul className="space-y-3 text-slate-600 dark:text-gray-300">
            {job.responsibilities.map((item, index) => (
              <li key={index} className="flex items-start">
                <span className="h-6 w-6 mr-2 flex-shrink-0">•</span>
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div className="bg-slate-50 dark:bg-[#1a2433] rounded-xl p-6 border border-slate-200 dark:border-[#2a3544]">
          <h3 className="flex items-center text-xl font-semibold text-slate-900 dark:text-white mb-4">
            <Shield className="h-6 w-6 mr-2 text-blue-600 dark:text-blue-400" />
            Requisitos
          </h3>
          <ul className="space-y-3 text-slate-600 dark:text-gray-300">
            {job.requirements.map((item, index) => (
              <li key={index} className="flex items-start">
                <span className="h-6 w-6 mr-2 flex-shrink-0">•</span>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="mb-12">
        <h3 className="flex items-center text-xl font-semibold text-slate-900 dark:text-white mb-6">
          <Cpu className="h-6 w-6 mr-2 text-blue-600 dark:text-blue-400" />
          Conhecimentos Técnicos
        </h3>
        <div className="grid md:grid-cols-3 gap-4">
          {job.technicalSkills.map((item, index) => {
            const Icon = iconMap[item.icon];
            return (
              <div
                key={index}
                className="bg-slate-50 dark:bg-[#1a2433] rounded-lg p-4 flex items-center space-x-3 border border-slate-200 dark:border-[#2a3544]"
              >
                {Icon && (
                  <Icon className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                )}
                <span className="text-slate-600 dark:text-gray-300">
                  {item.skill}
                </span>
              </div>
            );
          })}
        </div>
      </div>

      <div className="bg-slate-50 dark:bg-[#1a2433] rounded-xl p-6 mb-12 border border-slate-200 dark:border-[#2a3544]">
        <h3 className="flex items-center text-xl font-semibold text-slate-900 dark:text-white mb-4">
          <Star className="h-6 w-6 mr-2 text-blue-600 dark:text-blue-400" />
          Diferenciais
        </h3>
        <ul className="space-y-3 text-slate-600 dark:text-gray-300">
          {job.differentials.map((item, index) => (
            <li key={index} className="flex items-start">
              <span className="h-6 w-6 mr-2 flex-shrink-0">•</span>
              {item}
            </li>
          ))}
        </ul>
      </div>

      <div className="text-center">
        <a href="mailto:ragnatalesbr@gmail.com?subject=Vaga Engenheiro de Redes Linux&body=Segue em anexo meu currículo">
          <button className="bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 text-white font-semibold py-4 px-8 rounded-xl transition duration-300 transform hover:scale-105">
            Candidate-se Agora
          </button>
        </a>
        <p className="mt-4 text-slate-500 dark:text-gray-400">
          Envie seu currículo e resumo de experiências para{" "}
          <a
            href="mailto:ragnatalesbr@gmail.com"
            className="text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300"
          >
            ragnatalesbr@gmail.com
          </a>
        </p>
      </div>
    </div>
  );
}