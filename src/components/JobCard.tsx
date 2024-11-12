import React from 'react';
import { MapPin, Clock, ArrowRight } from 'lucide-react';
import { Job } from '../types/job';

interface JobCardProps {
  job: Job;
  onClick: () => void;
}

export function JobCard({ job, onClick }: JobCardProps) {
  return (
    <div 
      onClick={onClick}
      className="group cursor-pointer bg-white dark:bg-[#131c2a] backdrop-blur-lg rounded-xl p-6 transition-all duration-300 hover:transform hover:scale-102 hover:bg-slate-50 dark:hover:bg-[#1a2433] border border-slate-200 dark:border-[#2a3544]"
    >
      <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-2">{job.title}</h3>
      <p className="text-blue-600 dark:text-blue-400 mb-4">{job.department}</p>
      
      <div className="flex flex-wrap gap-4 mb-6">
        <div className="flex items-center text-slate-600 dark:text-gray-300">
          <MapPin className="h-4 w-4 mr-1" />
          {job.location}
        </div>
        <div className="flex items-center text-slate-600 dark:text-gray-300">
          <Clock className="h-4 w-4 mr-1" />
          {job.type === 'full-time' ? 'Tempo Integral' : job.type === 'part-time' ? 'Meio Período' : 'Contrato'}
        </div>
      </div>

      <p className="text-slate-600 dark:text-gray-300 mb-6 line-clamp-2">
        {job.description}
      </p>

      <div className="flex items-center text-blue-600 dark:text-blue-400 group-hover:translate-x-1 transition-transform">
        Ver mais detalhes
        <ArrowRight className="h-4 w-4 ml-1" />
      </div>
    </div>
  );
}