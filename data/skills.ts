export type SkillCategory = {
  name: string
  technologies: string[]
}

export const skills: SkillCategory[] = [
  {
    name: 'Programming Languages',
    technologies: ['C#', 'C', 'C++', 'Python'],
  },
  {
    name: 'Cloud & DevOps',
    technologies: [
      'AWS (EC2, S3, Lambda, API Gateway, Fargate, SNS, IAM)',
      'Docker',
      'Terraform',
      'Infrastructure as Code',
      'Ansible',
      'Linux',
      'Bash',
      'Git',
      'GitHub',
      'CI/CD Basics',
    ],
  },
  {
    name: 'Databases',
    technologies: ['SQL', 'MongoDB', 'Amazon RDS', 'DynamoDB'],
  },
  {
    name: 'Mobile & Web Development',
    technologies: ['Flutter', 'Dart', 'Android Studio', 'HTML', 'CSS'],
  },
  {
    name: 'Software Testing',
    technologies: [
      'Test Case Design',
      'SDLC/STLC',
      'Exploratory Testing',
      'Automated Testing',
      'Playwright Basics',
      'Jira',
      'API Testing Fundamentals',
    ],
  },
  {
    name: 'Machine Learning',
    technologies: ['scikit-learn', 'Data Cleaning', 'Preprocessing', 'Visualization'],
  },
]
