export interface Job {
  id: string;
  title: string;
  department: string;
  location: string;
  type: 'full-time' | 'part-time' | 'contract';
  description: string;
  responsibilities: string[];
  requirements: string[];
  technicalSkills: { icon: string; skill: string; }[];
  differentials: string[];
  active: boolean;
}