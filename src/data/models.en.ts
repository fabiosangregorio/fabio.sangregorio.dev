import { SiteModel } from './types';

export const modelsEn: SiteModel = {
  lang: 'en',
  meta: {
    title: "I'm Fabio, I'm a software engineer.",
    description: "I'm currently working as an Android Engineer at Bending Spoons in Milan, Italy. I can help you with building all-things software and web. How can I help you?"
  },
  header: {
    langlink: 'it',
    about: 'about',
    contact: 'contact'
  },
  footer: {
    title: 'Let me know if I can help you with anything.',
    goodbye: 'Have a wonderful day! :)'
  },
  email_alt: 'Send me an email :)',
  home: {
    title: {
      line1: 'Hey there!',
      line2: "I'm Fabio, I'm a software engineer.",
    },
    subtitle: "I'm currently working as an Android Engineer at Bending Spoons in Milan, Italy. I can help you with building all-things software and web. <br>How can I help you?",
    jobs: 'I worked with amazing people.',
    education: 'I also had brilliant professors.',
    skills: 'They enabled me to learn some powerful skills.',
    competitions: 'I love participating in coding competitions.',
    about: {
      title: 'Want to know more about me?',
      link: 'Visit my about page'
    },
  },
  about: {
    title: {
      line1: 'Made of coding, coffee, ski',
      line2: 'and tv shows.'
    },
    notes: {
      line1: 'Resulted in 1 broken finger and 1 fractured & dislocated shoulder *so far*',
      line2: 'Seriously, more than 8,000 episodes registered on'
    },
    description: `
    Italian is my mother tongue (I was born in Bergamo!). I also know English fairly well though, so sometimes I help out translating the web, with tools such as Wikipedia and Google Translate Community.<br>
    I love working out at the gym in the morning, before heading to work. I love organization. I love coffee (as well as tea!). I love matte black.
    `
  },
  jobs: [
    {
      title: 'Bending Spoons',
      link: 'https://www.bendingspoons.com/',
      role: 'Backend & Android Engineer',
      start: 'Sept. 2021',
      end: 'Current',
      description: 'I worked as an Android Software Engineer at Bending Spoons, developing the beautiful <a href="https://spliceapp.com/" target="_blank" class="link--decorate">Splice</a> app: one of the most powerful video editors for mobile, used by millions of people. I also worked on <a href="https://alightmotion.com/" target="_blank" class="link--decorate">Alight Motion</a>, a powerful animation editor app. I\'m now moving to backend engineering, working in the <a href="https://evernote.com/" target="_blank" class="link--decorate">Evernote</a> team to build the most well-known note-taking app out there. It\'s gonna be so exciting!\''
    }, {
      title: 'SAP Labs France',
      link: 'https://www.sap.com/',
      role: 'Security Research Intern',
      start: 'Nov. 2020',
      end: 'Apr. 2021',
      description: "In my five-months-long internship in the Cyber Threat Intelligence team of SAP Security Research, I developed the public repository Credential Digger, a Github scanning tool to prevent and identify data leaks in code repositories such as passwords and API keys. My goal was to enhance its usability, performance and reliability."
    }, {
      title: 'Yourbiz',
      link: 'https://www.yourbiz.it',
      role: 'Frontend web developer',
      start: 'June 2016',
      end: 'Oct. 2020',
      description: "I worked at Yourbiz as a part-time developer for 4 years, where I've built the frontend of the company websites, with special attention to responsiveness, SEO and performance optimization. I also had experience in the realization of pure HTML/JS web apps, as well as apps based on frameworks such as Angular, AngularJS and React."
    },
  ],
  education: [
    {
      title: 'Bergamo University',
      link: 'https://www.unibg.it/',
      role: "Computer Engineering Master's degree",
      start: 'Sept. 2019',
      end: 'Lug. 2021',
      description: "I obtained my Master's degree in Computer Engineering, where I completed the following core courses: Software design, Algorithms, Computer Systems Security, Model Identification and Data Analysis, Optimization Models and Algorithms, Business Administration.<br>Thesis: Cyber Threat Intelligence: Data Leaks Prevention and Identification."
    }, {
      title: 'Bergamo University',
      link: 'https://www.unibg.it/',
      role: "Computer Engineering Bachelor's degree",
      start: 'Sept. 2016',
      end: 'Sept. 2019',
      description: "After high school I achieved my bacherlor's degree in Computer Science Engineering, where I completed the following core courses: Information Technology 2, Databases 2, Industrial Automation, Software Engineering, Statistics 2, Management Control Systems.<br>Thesis: Tool to search for a systemic bias in bibliography linked to the composition of the program committee of scientific conferences."
    }, {
      title: 'IIS G. Marconi',
      link: 'https://itisdalmine.edu.it/',
      role: 'IT high school diploma',
      start: 'Sept. 2011',
      end: 'June 2016',
      description: "Core courses: C#, MVC, web API, Database, Client-Server architecture, HTML/CSS, Javascript, jQuery.<br />Activities: CCNA1 course, \"Impresa in Azione\" project.<br />Thesis: assigning internships to students based on skills levels."
    }
  ],
  skills: [
    {
      title: 'Frontend Web Development',
      description: `
        <p>5 years work experience in the field, building websites, javascript plugins and web apps.</p>
        <p>Main technologies: HTML5 & CSS3, Sass, Javascript, jQuery, Grunt, React, Typescript, SEO, Responsiveness, Figma, Photoshop.</p>
        <p>Worked with: Angular, AngularJS.</p>`
    }, {
      title: 'Software Development',
      description: `
        <p>I have been coding since high school for personal, work and academic production-ready projects.</p>
        <p>Main technologies: Kotlin, Python, C#, Java, Open Source.</p>
        <p>Worked with: Firebase, Scala, MATLAB, C++, Ruby (on Rails), SQL.</p>`
    }, {
      title: 'DevOps',
      description: `
        <p>2 years experience in CI/CD for testing, linting and deploying work and personal projects.</p>
        <p>Main technologies: git, Github, Github Actions, Vim, git-crypt.</p>
        <p>Worked with: Travis CI, Gitlab CI, Docker.</p>`
    }, {
      title: 'Soft Skills',
      description: `
        <p>I love being organized, and time mangement is a must, especially when working while studying for university.</p>
        <p>Organization (Notion freak), flexibility, time management, teamwork.</p>`
    }
  ],
  competitions: [
    {
      year: '2022',
      title: '47th place worldwide at Reply Code Challenge',
      description: `
      Completed the 4-hour-long coding challenge with the team Green.Code, totalizing 33.061.092 points and ending 47th place worldwide. The solution was developed in Python. <a href="https://github.com/GiorgioBertolotti/reply-qualification-round-2022" target="_blank" class="link--decorate">Here</a> you can find the solution repository.
      `
    }, {
      year: '2020',
      title: 'Winning team for the "Download Innovation" hackathon',
      description: `
      Won the 2500€ prize for the "best realization" award with the team SSH-IMPATICI, where we realized the mobile app "Beelder" in the 48-hour-long hackathon organized by Sorint.LAB. The repository can be found <a href="https://github.com/ssh-impatici/download-hackathon-2020" target="_blank" class="link--decorate">here</a> and the certificate can be found <a href="/documents/download-innovation.pdf" target="_blank" class="link--decorate">here</a>.
      `
    }, {
      year: '2020',
      title: '127th place worldwide at Reply Code Challenge',
      description: `
      Completed the 4-hour-long coding challenge with the team Replallari, totalizing 16.769.647 points and ending 127th place worldwide. The solution was developed in Scala. <a href="/documents/reply-challenge.pdf" target="_blank" class="link--decorate">Here</a> you can find the certificate of attendance and the <a href="https://github.com/ssh-impatici/reply-2020-online" target="_blank" class="link--decorate">solution repository</a>.`
    }, {
      year: '2020',
      title: '163th place in Italy at Google Hash code',
      description: `
      Completed the 4-hour-long Google Hash code online qualification round with the team hashipicchia, totalizing 22.470.857 points and finishing 163th place in Italy. The solution repository can be found <a href="https://github.com/ssh-impatici/hashcode-2020-online" target="_blank" class="link--decorate">here</a>.`
    }
  ],
  coding: {
    title: 'Coding.',
    description: "I always keep on studying to get better at coding. Right now I'm reading Dive Into Design Patterns by Alexander Shvets and Clean Architecture by Uncle Bob. I occasionally contribute to open source projects on Github, and I also have some personal projects that I never have time to pursue. Here are some of them.",
    items: [
      {
        title: 'telereddit',
        description: 'A reddit bot for Telegram written in python. When the user sends a message containing the name of a subreddit (e.g. "r/funny"), the bot will send a random post from that subreddit. When a link from reddit is shared in the chat, the bot will retrieve the post and send it as a message.',
        link: {
          url: 'https://github.com/fabiosangregorio/telereddit',
          title: 'github/telereddit'
        }
      }, {
        title: 'google-calendar-quick-duplicate',
        description: 'A simple Chrome Extension to quickly duplicate events on Google Calendar. This extension adds a "Duplicate event" icon on the event preview card, letting you quickly duplicate it with one click.',
        link: {
          url: 'https://github.com/fabiosangregorio/google-calendar-quick-duplicate',
          title: 'github/google-calendar-quick-duplicate'
        }
      }, {
        title: 'links-disabler',
        description: 'I often find myself making some changes in the Chrome Dev Tools while developing, and sometimes I would accidentally click a link, losing them. This is a really simple Chrome extension which you can use to quickly disable all the links in a web page.',
        link: {
          url: 'https://github.com/fabiosangregorio/links-disabler',
          title: 'github/links-disabler'
        }
      }
    ]
  },
  photography: {
    title: 'A new found love.',
    description: "I recently inherited my father's DSLR and I have been treasuring it ever since. I'm certainly not the best photographer out there, but I love discovering all the facets this new world has to offer.",
    items: [
      {
        image: {
          path: '/images/venice.jpg',
          alt: 'A canal in Venice, Italy',
          description: 'A canal in Venice, Italy'
        },
        link: {
          url: 'https://instagram.com/fabio.sang',
          title: 'instagram/fabio.sang'
        }
      }, {
        image: {
          path: '/images/orlandini.jpg',
          alt: 'An artist with his artwork',
          description: 'An artist with his artwork'
        },
        link: {
          url: 'https://photography.fabiosangregorio.tk',
          title: 'fabiosangregorio/photography'
        }
      }, {
        image: {
          path: '/images/guitar2.jpg',
          alt: 'A custom guitar @ Music Wall, Pizzighettone',
          description: 'A custom guitar @ Music Wall, Pizzighettone'
        },
        link: {
          url: 'https://unsplash.com/fabiosangregorio',
          title: 'unsplash/fabiosangregorio'
        }
      }
    ]
  },
  drawing: {
    title: 'Story time.',
    description: "When I was a child, I saw a playworker drawing on a small piece of paper: a beautiful forest drawn with a black ballpoint. I was astonished, so I asked if I could have it. When I got home I threw away hundreds sheets of paper trying to reproduce it, adding my own flavor to it. That's how I started drawing. I now rarely do it anymore, but I cherish that small piece of paper to this day.",
    items: [
      {
        image: {
          path: '/images/hands.jpg',
          alt: 'Two hands joined together.',
          description: 'Two hands joined together.'
        },
      }, {
        image: {
          path: '/images/skull.jpg',
          alt: 'A rose growing from a dead skull.',
          description: 'A rose growing from a dead skull.'
        },
      }, {
        image: {
          path: '/images/head.jpg',
          alt: 'Half skin half skull.',
          description: 'Half skin half skull.'
        },
      }
    ]
  },
};
