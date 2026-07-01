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
      'Developed and launched a full-stack React.js, Node.js, and PostgreSQL licensing platform with REST APIs for user provisioning, license management, and access control, supporting 100+ daily business users.',
      'Implemented an automated PostgreSQL backup and restore system using AWS S3 and Bash, ensuring data reliability and recovery for the licensing platform.',
      'Ensured 99.9% uptime for the Geomechanica Portal by maintaining Dockerized deployments on AWS EC2 and automating releases through AWS CodeDeploy CI/CD pipelines.',
      "Implemented UI fixes and geomechanical simulation calculations for Irazu, Geomechanica's software, using C++ and Qt6.",
      'Authored unit tests using Jest and conducted code reviews for the licensing portal, ensuring consistent code quality.',
      'Collaborated with senior engineers to deliver new features and resolve bugs across Irazu and the licensing portal.',
    ],
    tags: ['React', 'Node.js', 'PostgreSQL', 'C++', 'Qt6', 'AWS', 'Docker', 'Jest'],
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
      'Built Python- and R-based data processing and visualization workflows to classify large-scale single-cell RNA datasets and translate machine learning outputs into interpretable research insights.',
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
      'Revised and optimized 60+ interactive coding projects on the Hatch platform using p5.js and JavaScript to improve student learning outcomes.',
      'Built an interactive coding lesson series teaching students how to create a platformer in JavaScript, reaching 100+ views.',
      'Handled administrative tasks such as organizing and curating projects.',
    ],
    tags: ['JavaScript', 'p5.js'],
    photos: [
    ],
  },
]
