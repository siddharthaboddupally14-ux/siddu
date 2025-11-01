
import type { LearningResourceCategory } from './types';

export const LEARNING_RESOURCES: Record<string, LearningResourceCategory> = {
  FRONTEND: {
    name: 'Frontend Development',
    subCategories: {
      HTML_CSS: {
        name: 'HTML & CSS',
        resources: [
          { title: 'HTML & CSS Tutorial', url: 'https://youtu.be/G3e-cpL7ofc?si=HXTMUZWaakGRIbeY', type: 'video' },
          { title: 'HTML Interview Questions', url: 'https://www.geeksforgeeks.org/html/html-interview-questions/', type: 'article' },
          { title: 'HTML Interview Questions', url: 'https://www.interviewbit.com/html-interview-questions/', type: 'article' },
          { title: 'CSS Interview Questions', url: 'https://www.geeksforgeeks.org/css/css-interview-questions/', type: 'article' },
          { title: 'CSS Interview Questions', url: 'https://www.interviewbit.com/css-interview-questions/', type: 'article' },
        ],
      },
      JAVASCRIPT: {
        name: 'JavaScript',
        resources: [
          { title: 'JavaScript Tutorials Playlist', url: 'https://youtube.com/playlist?list=PLTjRvDozrdlxEIuOBZkMAK5uiqp8rHUax&si=sDjiDz-aiB66lPQG', type: 'video' },
          { title: 'Javascript Backend Playlist', url: 'https://youtube.com/playlist?list=PLu71SKxNbfoBGh_8p_NS-ZAh6v7HhYqHW&si=S-tPIfCe24Y7PzDd', type: 'video' },
          { title: 'JavaScript Playlist', url: 'https://youtube.com/playlist?list=PLu71SKxNbfoBuX3f4EOACle2y-tRC5Q37&si=s9zePrg5BCuPp80u', type: 'video' },
          { title: 'JavaScript Tutorial', url: 'https://youtu.be/EerdGm-ehJQ?si=fruy_XCs45cWcIGN', type: 'video' },
          { title: 'JavaScript Interview Questions', url: 'https://www.geeksforgeeks.org/javascript/javascript-interview-questions/', type: 'article' },
          { title: 'JavaScript Interview Questions', url: 'https://www.interviewbit.com/javascript-interview-questions/', type: 'article' },
        ],
      },
      FRAMEWORK_REACT: {
        name: 'React',
        resources: [
          { title: 'Complete React Native Tutorial', url: 'https://youtu.be/UCbRTaX6i7g?si=QrMk0e7He7UqRTk6', type: 'video' },
          { title: 'React Playlist', url: 'https://youtube.com/playlist?list=PLu71SKxNbfoDqgPchmvIsL4hTnJIrtige&si=aXohMiaFiZf5GsOg', type: 'video' },
          { title: 'React Interview Questions', url: 'https://www.geeksforgeeks.org/reactjs/react-interview-questions/', type: 'article' },
          { title: 'React Interview Questions', url: 'https://www.interviewbit.com/react-interview-questions/', type: 'article' },
        ],
      },
    },
  },
  BACKEND: {
    name: 'Backend Development',
    subCategories: {
      NODE_JS: {
        name: 'Node.js',
        resources: [
          { title: 'Node.js Playlist', url: 'https://youtube.com/playlist?list=PLillGF-RfqbZ2ybcoD2OaabW2P7Ws8CWu&si=MsZAYJZEpCu8qLkn', type: 'video' },
          { title: 'Node.js Interview Questions', url: 'https://www.geeksforgeeks.org/node-js/node-interview-questions-and-answers/', type: 'article' },
          { title: 'Node.js Interview Questions', url: 'https://www.interviewbit.com/node-js-interview-questions/', type: 'article' },
        ],
      },
      NEXT_JS: {
        name: 'Next.js',
        resources: [
          { title: 'Full Stack Next.js Playlist', url: 'https://youtube.com/playlist?list=PLu71SKxNbfoBAaWGtn9GA2PTw0HO0tXzq&si=7-ibCshEdfzpwl40', type: 'video' },
          { title: 'Next.js Interview Questions', url: 'https://www.geeksforgeeks.org/reactjs/next-js-interview-questions-answers/', type: 'article' },
        ],
      },
      DJANGO: {
        name: 'Django',
        resources: [
          { title: 'Django Playlist 1', url: 'https://youtube.com/playlist?list=PLu71SKxNbfoDOf-6vAcKmazT92uLnWAgy&si=j5-O_hiYqUK7SAiK', type: 'video' },
          { title: 'Django Playlist 2', url: 'https://youtube.com/playlist?list=PLu71SKxNbfoDOf-6vAcKmazT92uLnWAgy&si=YTps-xrJiRMZDPjs', type: 'video' },
          { title: 'Django Interview Questions', url: 'https://www.geeksforgeeks.org/python/django-interview-questions/', type: 'article' },
          { title: 'Django Interview Questions', url: 'https://www.interviewbit.com/django-interview-questions/', type: 'article' },
        ],
      },
    },
  },
  DATABASE: {
    name: 'Databases',
    subCategories: {
      SQL: {
        name: 'SQL',
        resources: [
          { title: 'SQL Tutorial 1', url: 'https://youtu.be/OT1RErkfLNQ?si=1N0z3jGPGYDyG_cn', type: 'video' },
          { title: 'SQL Tutorial 2', url: 'https://youtu.be/7S_tz1z_5bA?si=QUqWQykDnQ4zcxLj', type: 'video' },
          { title: 'SQL Tutorial 3', url: 'https://youtu.be/hlGoQC332VM?si=iqsA1tuXxKWdtdBE', type: 'video' },
          { title: 'SQL Interview Questions', url: 'https://www.geeksforgeeks.org/sql/sql-interview-questions/', type: 'article' },
          { title: 'SQL Interview Questions', url: 'https://www.interviewbit.com/sql-interview-questions/', type: 'article' },
        ],
      },
      POSTGRESQL: {
        name: 'PostgreSQL',
        resources: [
          { title: 'Free PostgreSQL Course', url: 'https://www.simplilearn.com/free-postgresql-course-skillup', type: 'course' },
          { title: 'PostgreSQL Playlist', url: 'https://youtube.com/playlist?list=PLwvrYc43l1MxAEOI_KwGe8l42uJxMoKeS&si=3ZgjVHMKXEcloAdt', type: 'video' },
          { title: 'PostgreSQL Interview Questions', url: 'https://www.geeksforgeeks.org/postgresql/postgresql-interview-questions/', type: 'article' },
        ],
      },
      MONGODB: {
        name: 'MongoDB',
        resources: [
          { title: 'MongoDB Tutorial Playlist', url: 'https://youtube.com/playlist?list=PL4cUxeGkcC9h77dJ-QJlwGlZlTd4ecZOA&si=Shj6anL1gL1KQ98P', type: 'video' },
        ],
      },
    },
  },
  DEVOPS: {
    name: 'DevOps',
    subCategories: {
      DOCKER: {
        name: 'Docker',
        resources: [
          { title: 'Docker Playlist', url: 'https://youtube.com/playlist?list=PL4cUxeGkcC9hxjeEtdHFNYMtCpjNBm3h7&si=whyKKPYiWMELVz1B', type: 'video' },
          { title: 'Docker Tutorial', url: 'https://youtu.be/3c-iBn73dDE?si=vOyWSjAmQ3zbAVCP', type: 'video' },
          { title: 'Docker Interview Questions', url: 'https://www.geeksforgeeks.org/devops/docker-interview-questions/', type: 'article' },
          { title: 'Docker Interview Questions', url: 'https://www.interviewbit.com/docker-interview-questions/', type: 'article' },
        ],
      },
      KUBERNETES: {
        name: 'Kubernetes',
        resources: [
          { title: 'Complete Kubernetes Course 1', url: 'https://youtu.be/2T86xAtR6Fo?si=K87ffAPrRLzQ3LNd', type: 'video' },
          { title: 'Complete Kubernetes Course 2', url: 'https://youtu.be/X48VuDVv0do?si=GlKIg1gbvbYS36WX', type: 'video' },
          { title: 'Kubernetes Interview Questions', url: 'https://www.geeksforgeeks.org/devops/kubernetes-interview-questions/', type: 'article' },
          { title: 'Kubernetes Interview Questions', url: 'https://www.interviewbit.com/kubernetes-interview-questions/', type: 'article' },
        ],
      },
    },
  },
  SYSTEMS: {
    name: 'Systems & Tools',
    subCategories: {
      LINUX: {
        name: 'Linux',
        resources: [
          { title: 'Linux Command Line Basics', url: 'https://www.udemy.com/course/the-basics-of-linux-command-line/?couponCode=A3B42980E33F683696FC', type: 'course' },
          { title: 'Linux Zero to Hero Playlist', url: 'https://youtube.com/playlist?list=PLdpzxOOAlwvIBIRWcReRV-m2kgIW6V6gr&si=BmBBBgNHCaLcYFuL', type: 'video' },
          { title: 'Linux Interview Questions', url: 'https://www.geeksforgeeks.org/linux-unix/linux-interview-questions/', type: 'article' },
          { title: 'Linux Interview Questions', url: 'https://www.interviewbit.com/linux-interview-questions/', type: 'article' },
        ],
      },
      VERSION_CONTROL: {
        name: 'Version Control (Git)',
        resources: [
          { title: 'Complete Git and GitHub Tutorial', url: 'https://www.youtube.com/watch?v=Ez8F0nW6S-w', type: 'video' },
          { title: 'Git & GitHub Playlist', url: 'https://youtube.com/playlist?list=PLRAV69dS1uWT4v4iK1h6qejyhGObFH9_o&si=zI0xOTFjkY7jgmoW', type: 'video' },
          { title: 'GitHub Actions Tutorial', url: 'https://youtu.be/R8_veQiYBjI?si=GFDPYt66g_H9vbul', type: 'video' },
          { title: 'Git Branching and Merging', url: 'https://youtu.be/Q1kHG842HoI?si=mMr3qtiGrnC8LH1O', type: 'video' },
        ],
      },
    },
  },
};
