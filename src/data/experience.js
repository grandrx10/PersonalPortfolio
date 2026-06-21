// Your work history, newest first. Each entry becomes one timeline item.
// `image` is the workplace logo — swap the files in public/images/experience/
// (any format; update the path/extension if you use .png or .jpg).
// `link` makes the company name clickable. Leave it '' (or omit) for no link.
// `photos` is a small cluster (2–3) shown beside each job — swap the files in
// public/images/experience/ (any format; omit or use [] for no photos).
// NOTE: please verify these URLs — they're best guesses.
export const experience = [
  {
    role: 'Software Engineering Intern',
    company: 'Geomechanica',
    link: 'https://www.geomechanica.com',
    period: 'May 2025 – Present',
    image: '/images/experience/geomechanica.svg',
    points: [
      'Built an end-to-end React.js licensing platform with REST APIs for user and license management, serving 100+ daily users',
      'Engineered an AI chatbot with a Python RAG pipeline for context-aware document retrieval and responses.',
      'Maintained 99.9% uptime for the Geomechanica Portal on AWS EC2 using Docker and Code Deploy (CI / CD)',
    ],
    tags: ['React', 'Python', 'RAG', 'AWS', 'Docker'],
    photos: [
      // '/images/experience/geo-1.svg',
      // '/images/experience/geo-2.svg',
      // '/images/experience/geo-3.svg',
    ],
  },
  {
    role: 'Undergraduate Researcher',
    company: 'Wainberg Lab',
    link: 'https://wainberglab.org/people',
    period: 'May 2024 – May 2025',
    image: '/images/experience/wainberg.svg',
    points: [
      'Developed new clustering algorithms to efficiently categorize brain cell types from single-cell RNA data.',
      'Used machine learning, Python, and R to process and visualize data from the Allen Institute.',
    ],
    tags: ['Python', 'R', 'Machine Learning'],
    photos: [
      // '/images/experience/wain-1.svg',
      // '/images/experience/wain-2.svg',
    ],
  },
  {
    role: 'Computer Science & Mathematics Tutor',
    company: 'Tutorax',
    link: 'https://www.tutorax.com',
    period: 'May – September 2023',
    image: '/images/experience/tutorax.svg',
    points: [
      'Tutored Java, Python, and Calculus to 10 students aged 12–18 in a supportive classroom environment.',
      'Designed a curriculum to gradually ease students into computer science.',
    ],
    tags: ['Java', 'Python', 'Teaching'],
    photos: [
    ],
  },
  {
    role: 'Software Engineering Intern',
    company: 'Hatch Coding',
    link: '',
    period: 'September 2020 – January 2021',
    image: '/images/experience/hatch.svg',
    points: [
      'Edited and revised 60+ projects on the Hatch platform using p5.js and JavaScript.',
      'Created an interactive lesson series teaching students to build a platformer in JavaScript.',
      'Handled administrative tasks such as organizing and curating projects.',
    ],
    tags: ['JavaScript', 'p5.js'],
    photos: [
    ],
  },
]
