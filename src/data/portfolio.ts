// ---------------------------------------------------------------------------
// Central content file for the portfolio.
// Edit the values below to update anything on the site — personal details,
// skills, experience, projects, certificates, education and social links.
// No other file needs to change when this content is updated.
// ---------------------------------------------------------------------------

export const personalInfo = {
  fullName: 'Thanduxolo Tshiba',
  title: 'Aspiring Software Developer | AI Enthusiast | Problem Solver',
  tagline:
    'I am an adaptable and motivated technology professional passionate about software development, artificial intelligence, problem-solving, and continuous learning. I enjoy building practical digital solutions and developing new skills that create real value.',
  bio: "I'm a technology professional building my path into software development and applied AI. My background spans IT support, client-facing consulting, and hands-on software projects — a mix that taught me how to translate real-world problems into practical, working solutions. I'm currently deepening my skills in Python, REST APIs, and AI tooling, and I care about learning in public: every project and certificate here is a step in that journey.",
  location: 'South Africa',
  email: 'thanduxolo.tshiba@example.com',
  phone: '+27 00 000 0000',
  languages: ['English', 'Xhosa'],
  linkedin: 'https://www.linkedin.com/in/thanduxolo-tshiba',
  github: 'https://github.com/Thanduxol',
  cvFile: '/documents/Thanduxolo-Tshiba-CV.pdf',
  profileImage: '/images/thanduxolo.jpg',
}

export type SkillCategory = {
  title: string
  skills: string[]
}

export const skillCategories: SkillCategory[] = [
  {
    title: 'Software Development',
    skills: ['Software Development', 'Software Testing'],
  },
  {
    title: 'AI & Problem Solving',
    skills: [
      'AI Tools',
      'Prompt Engineering',
      'Critical Thinking',
      'Problem Solving',
    ],
  },
  {
    title: 'IT Support & Systems',
    skills: [
      'Windows',
      'macOS',
      'Basic Linux',
      'TeamViewer',
      'AnyDesk',
      'Chrome Remote Desktop',
      'Microsoft RDP',
      'VPN Setup',
      'Wi-Fi Configuration',
      'Active Directory Basics',
    ],
  },
  {
    title: 'Workplace & Collaboration Tools',
    skills: [
      'Microsoft 365',
      'Google Workspace',
      'Outlook',
      'Microsoft Teams',
      'Zoom',
    ],
  },
]

export type ExperienceItem = {
  company: string
  role: string
  period: string
  highlights: string[]
}

export const experience: ExperienceItem[] = [
  {
    company: 'Byte Orbit',
    role: 'Byte Academy Intern',
    period: '2019',
    highlights: [
      'Contributed to software development tasks including coding and debugging',
      'Carried out technical research to support project decisions',
      'Produced clear technical documentation for internal use',
      'Assisted with data management processes',
      'Engaged directly with clients to understand and support their needs',
    ],
  },
  {
    company: 'Silulo Ulutho Technologies',
    role: 'Consultant',
    period: '2016 – 2017',
    highlights: [
      'Conducted client needs assessments to identify practical business solutions',
      'Delivered training sessions to help clients get the most from their systems',
      'Managed project timelines and reported on progress',
      'Built and maintained strong, lasting client relationships',
    ],
  },
  {
    company: 'AVI / Spitz',
    role: 'General Sales Assistant',
    period: '2013 – 2014',
    highlights: [
      'Delivered friendly, reliable customer service on the sales floor',
      'Supported sales targets through active product engagement',
      'Managed stock levels and replenishment',
      'Maintained merchandising standards and product displays',
    ],
  },
]

export type ProjectTab = {
  key: string
  label: string
  content: string
}

export type Project = {
  slug: string
  title: string
  description: string
  featured: boolean
  liveUrl?: string
  githubUrl?: string
  features: string[]
  tabs: ProjectTab[]
}

export const projects: Project[] = [
  {
    slug: 'ai-workplace-productivity-assistant',
    title: 'AI Workplace Productivity Assistant',
    description:
      'An AI-powered workplace productivity platform designed to help professionals automate everyday tasks and work more efficiently.',
    featured: true,
    liveUrl: 'https://thanduxolo-tshiba-ai-assistant.lovable.app',
    githubUrl: 'https://github.com/Thanduxol/AI-Productivity-Assistant',
    features: [
      'Smart Email Generator',
      'Meeting Notes Summarizer',
      'AI Task Planner',
      'AI Research Assistant',
      'AI Chatbot Interface',
    ],
    tabs: [
      {
        key: 'overview',
        label: 'Overview',
        content:
          'A single workspace that brings together several AI-assisted tools professionals use daily — drafting emails, summarizing meetings, planning tasks, researching topics, and chatting with an AI assistant — so people spend less time on repetitive work and more time on what matters.',
      },
      {
        key: 'problem',
        label: 'Problem',
        content:
          'Knowledge workers lose significant time each day switching between tools to write emails, take meeting notes, plan tasks, and research information. Most of this work is repetitive and well suited to automation, but existing tools are scattered and not built to work together.',
      },
      {
        key: 'solution',
        label: 'Solution',
        content:
          'Built a unified AI assistant platform where each productivity task lives behind a simple, focused interface. Users can generate professional emails, summarize meeting notes, plan tasks with AI assistance, research topics quickly, and interact with a general-purpose chatbot — all from one place.',
      },
      {
        key: 'features',
        label: 'Key Features',
        content:
          'Smart Email Generator for fast, professional email drafts. Meeting Notes Summarizer that condenses long notes into clear action items. AI Task Planner that breaks down goals into manageable steps. AI Research Assistant for quick, structured answers. AI Chatbot Interface for open-ended assistance.',
      },
      {
        key: 'technologies',
        label: 'Technologies',
        content:
          'Built and deployed using modern AI-assisted development tooling (Lovable), with an AI/LLM layer powering each productivity feature and a clean, responsive front-end interface.',
      },
      {
        key: 'challenges',
        label: 'Challenges',
        content:
          'Designing prompts that reliably produced useful, consistent output across different tasks (emails, summaries, plans, research) was the biggest challenge, along with keeping the interface simple despite the number of features on offer.',
      },
      {
        key: 'learned',
        label: 'What I Learned',
        content:
          'Gained hands-on experience with prompt engineering, structuring AI features around real user workflows, and shipping an AI product end-to-end — from idea to a live, working demo.',
      },
      {
        key: 'future',
        label: 'Future Improvements',
        content:
          'Planned improvements include user accounts and saved history, deeper integration between features (e.g. turning meeting summaries directly into planned tasks), and expanding the chatbot with more context awareness.',
      },
    ],
  },
]

export type Certificate = {
  title: string
  issuer: string
  file: string
  verifyUrl?: string
  featured?: boolean
  courses?: string[]
}

export const certificates: Certificate[] = [
  {
    title: 'Google AI Essentials',
    issuer: 'Google / Coursera',
    file: '/certificates/google-ai-essentials.pdf',
    verifyUrl: 'https://coursera.org/verify/specialization/TQP2OIRDM1VB',
    featured: true,
    courses: [
      'Introduction to AI',
      'Maximize Productivity With AI Tools',
      'Discover the Art of Prompting',
      'Use AI Responsibly',
      'Stay Ahead of the AI Curve',
    ],
  },
  {
    title: 'Introduction to AI',
    issuer: 'Google / Coursera',
    file: '/certificates/introduction-to-ai.pdf',
    verifyUrl: 'https://coursera.org/verify/ZEMBVKC1UW7U',
  },
  {
    title: 'Maximize Productivity With AI Tools',
    issuer: 'Google / Coursera',
    file: '/certificates/maximize-productivity-ai-tools.pdf',
    verifyUrl: 'https://coursera.org/verify/NU2CHRVT9DRQ',
  },
  {
    title: 'Discover the Art of Prompting',
    issuer: 'Google / Coursera',
    file: '/certificates/discover-art-of-prompting.pdf',
    verifyUrl: 'https://coursera.org/verify/DSHX26TXNF6R',
  },
  {
    title: 'Use AI Responsibly',
    issuer: 'Google / Coursera',
    file: '/certificates/use-ai-responsibly.pdf',
    verifyUrl: 'https://coursera.org/verify/73S66VDBU7T3',
  },
  {
    title: 'Stay Ahead of the AI Curve',
    issuer: 'Google / Coursera',
    file: '/certificates/stay-ahead-of-ai-curve.pdf',
    verifyUrl: 'https://coursera.org/verify/MOMNN28I9VVK',
  },
  {
    title: 'Build a Python REST API',
    issuer: 'Udemy',
    file: '',
  },
]

export type EducationItem = {
  school: string
  qualification: string
  period: string
}

export const education: EducationItem[] = [
  {
    school: 'Udemy',
    qualification: 'Build a Python REST API',
    period: '2019',
  },
  {
    school: 'Manyano High School',
    qualification: 'Grade 12',
    period: '2010',
  },
]

export type LearningItem = {
  title: string
  description: string
}

export const currentlyLearning: LearningItem[] = [
  {
    title: 'Artificial Intelligence',
    description: 'Deepening my understanding of practical, applied AI.',
  },
  {
    title: 'Software Development',
    description: 'Strengthening core development and problem-solving skills.',
  },
  {
    title: 'Python',
    description: 'Building fluency in Python for real-world projects.',
  },
  {
    title: 'REST APIs',
    description: 'Designing and consuming APIs the right way.',
  },
  {
    title: 'Prompt Engineering',
    description: 'Getting more reliable, useful output from AI tools.',
  },
  {
    title: 'Responsible AI',
    description: 'Using AI tools ethically, safely, and effectively.',
  },
]

export const learningMessage =
  'I believe learning never stops. This section will grow as I complete new courses, build new projects, and develop new technical skills.'

export const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Certificates', href: '#certificates' },
  { label: 'Learning', href: '#learning' },
  { label: 'Contact', href: '#contact' },
]
