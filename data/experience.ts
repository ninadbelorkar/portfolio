export type Experience = {
  company: string
  role: string
  period: string
  description: string
  technologies?: string[]
  logo?: string       // optional: public/images/experience/company.png
  featured: boolean
}

export const experience: Experience[] = [
  {
    company: 'ifm',
    role: 'Software Intern',
    period: 'May 2026 – Present',
    description:
      'Working on software engineering and testing at ifm, contributing to internal tooling, quality assurance workflows, and backend systems. Gaining hands-on experience in professional software development practices.',
    technologies: ['Software Engineering', 'Testing', 'Cloud'],
    // logo: '/images/experience/ifm.png',
    featured: true,
  },
  {
    company: 'Edunet Foundation',
    role: 'AI & Data Analytics Intern',
    period: 'Dec 2024 – Jan 2025',
    description:
      'Completed an AI and data analytics internship, working with machine learning concepts, data pipelines, and AI-driven solutions. Built practical skills in applying AI/ML tools to real-world problem domains.',
    technologies: ['Python', 'TensorFlow', 'Keras', 'scikit-learn', 'Data Analytics'],
    // logo: '/images/experience/edunet.png',
    featured: false,
  },
]
