export type ProjectLink = {
  label: string
  url: string
}

export type Project = {
  title: string
  slug: string
  description: string
  problem?: string
  whatIBuilt?: string
  engineering?: string
  technologies: string[]
  poster?: string
  github?: string
  liveDemo?: string
  additionalLinks?: ProjectLink[]
  featured?: boolean
  layout?: 'standard' | 'wide'
  status?: string
}

export const projects: Project[] = [
  {
    title: 'AI-Integrated Test Case Management System',
    slug: 'ai-test-case-management',
    description:
      'An AI-powered platform for automated test case generation and management, built as part of the Silicon Stack industry project.',
    problem:
      'Manual test case creation is time-consuming, inconsistent, and difficult to scale across large codebases. Teams spend significant effort writing boilerplate test cases that could be systematically generated.',
    whatIBuilt:
      'A full-stack web application that integrates with the Gemini API to automatically generate structured test cases from user requirements. The platform provides a management interface for organising, reviewing, and exporting generated test cases.',
    engineering:
      'Built with a React/Next.js frontend and a Flask/Python backend. The AI pipeline processes requirement descriptions through Gemini API to produce structured test cases with preconditions, steps, and expected outcomes. Test case data is persisted in PostgreSQL with a Prisma ORM layer.',
    technologies: [
      'React',
      'Next.js',
      'TypeScript',
      'Python',
      'Flask',
      'Gemini API',
      'PostgreSQL',
      'Prisma',
      'REST APIs',
    ],
    poster: '/images/projects/ai-test-case.svg',  // replace with your actual image
    github: 'https://github.com/ninadbelorkar/ai-test-case-management',
    featured: true,
    layout: 'wide',
    status: 'Completed',
  },
  {
    title: 'VideoVault',
    slug: 'videovault',
    description:
      'An intelligent video data-hiding service that embeds and extracts hidden data within video files using cloud-native infrastructure.',
    problem:
      'Securely transmitting hidden information within video content requires combining steganography algorithms with reliable, scalable cloud infrastructure, a non-trivial engineering challenge.',
    whatIBuilt:
      'A cloud-native service that accepts video uploads, processes them through an OpenCV-based steganography pipeline to embed or extract hidden data, and returns the processed output. The entire service is containerised and deployed on AWS Fargate.',
    engineering:
      'The processing pipeline is built in Python using OpenCV for frame-level steganography. Docker containers are pushed to AWS ECR and orchestrated via AWS Fargate for serverless execution. Infrastructure is provisioned with Terraform. The deployment pipeline is automated through GitHub Actions.',
    technologies: [
      'Python',
      'OpenCV',
      'AWS',
      'Docker',
      'Terraform',
      'AWS Fargate',
      'ECR',
      'GitHub Actions',
    ],
    poster: '/images/projects/videovault.svg',  // replace with your actual image
    github: 'https://github.com/ninadbelorkar/videovault',
    featured: true,
    layout: 'wide',
    status: 'Completed',
  },
]
