import React, { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { JobPosting } from './components/JobPosting';
import { JobCard } from './components/JobCard';
import { Footer } from './components/Footer';
import { ThemeProvider } from './context/ThemeContext';
import { jobs } from './data/jobs';

function App() {
  const [selectedJobId, setSelectedJobId] = useState<string | null>(null);
  const selectedJob = jobs.find(job => job.id === selectedJobId);

  return (
    <ThemeProvider>
      <div className="min-h-screen bg-gradient-to-b from-slate-50 to-slate-100 dark:from-[#0e1622] dark:to-[#1a2433] transition-colors duration-300">
        <Header />
        <Hero />
        <main className="container mx-auto px-6 py-16">
          {selectedJob ? (
            <div>
              <button
                onClick={() => setSelectedJobId(null)}
                className="mb-8 text-blue-600 dark:text-blue-400 hover:underline flex items-center"
              >
                ← Voltar para todas as vagas
              </button>
              <JobPosting job={selectedJob} />
            </div>
          ) : (
            <div>
              <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-8">Vagas Disponíveis</h2>
              <div className="grid md:grid-cols-2 gap-6">
                {jobs.filter(job => job.active).map(job => (
                  <JobCard
                    key={job.id}
                    job={job}
                    onClick={() => setSelectedJobId(job.id)}
                  />
                ))}
              </div>
            </div>
          )}
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;