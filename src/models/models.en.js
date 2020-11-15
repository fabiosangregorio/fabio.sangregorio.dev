module.exports = {
  meta: {
    lang: 'en',
    title: 'developer, student and ski lover',
    description: 'I’m a computer engineering graduate currently working as a frontend web developer in Bergamo, Italy. I can help you with building all-things web and software.'
  },
  header: {
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
      line2: 'I’m Fabio, developer, student and ski lover.',
    },
    subtitle: 'I’m a computer engineering graduate currently working as a frontend web developer in Bergamo, Italy. I can help you with building all-things web - especially web apps - and software.<br>How can I help you?',
    jobs: 'I worked with amazing people.',
    education: 'I\'m also currently studying.',
    skills: 'They allowed me to learn some powerful skills.',
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
      line2: 'Seriously, more than 7,000 episodes registered on'
    },
    description: `
    Being born in Bergamo, italian is my mother tongue. I also know English fairly well though, so sometimes I help out translating the web, with tools such as Wikipedia and Google Translate Community.<br>
    I love working out at the gym in the morning, before heading to work and university. I love organization. I love coffee. I love matte black.
    `
  },
  jobs: [
    {
      title: 'Yourbiz',
      link: 'https://www.yourbiz.it',
      role: 'Frontend web developer',
      start: 'Sept. 2019',
      end: 'Oct 2020',
      description: "I worked at Yourbiz as a part-time developer for 4 years, where I've built the frontend of the company websites, with special attention to responsiveness, SEO and performance optimization. I also had experience in the realization of pure HTML/JS web apps, as well as apps based on frameworks such as Angular, AngularJS and React."
    }, {
      title: 'Sorint.LAB',
      link: 'https://www.sorint.it',
      role: 'R&D dpt. school internship',
      start: 'June 2015',
      end: 'June 2015',
      description: "During the school internship at Sorint I studied the OrientDB graph database, and I built a Java web app for internal use with the Spring framework and Hibernate. I also attended the following corporate training courses: VMware, OrientDB, MySQL, Java, Spring Framework 4.0, Hibernate, Spring Security."
    }
  ],
  education: [
    {
      title: 'Bergamo University',
      link: 'https://www.unibg.it/',
      role: 'Computer Engineering Master’s degree',
      start: 'Sept. 2019',
      end: 'Current',
      description: "I'm currently attending the last year of my Master's degree in Computer Engineering, where I completed the following core courses: Software design, Algorithms, Artificial Intelligence, Model Identification and Data Analysis, Information and Transmission Theory, Optimization Models and Algorithms, Business Administration."
    }, {
      title: 'Bergamo University',
      link: 'https://www.unibg.it/',
      role: 'Computer Engineering Bachelor’s degree',
      start: 'Sept. 2016',
      end: 'Sept. 2019',
      description: "After high school I achieved my bacherlor's degree in Computer Science Engineering, where I completed the following core courses: Information Technology 2, Databases 2, Industrial Automation, Software Engineering, Statistics 2, Management Control Systems."
    }
  ],
  skills: [
    {
      title: 'Frontend Web Development',
      description: `
        <p>5 years work experience in the field, building websites, javascript plugins and web apps.</p>
        <p>Main technologies: HTML5 & CSS3, Sass, Javascript, jQuery, Grunt, Figma, Photoshop, SEO, Responsiveness.</p>
        <p>Worked with: React, Angular, Typescript.</p>`
    }, {
      title: 'Software Development',
      description: `
        <p>I have been coding since high school for personal, work and academic production-ready projects.</p>
        <p>Main technologies: Python, NodeJS, C#, Java, Open Source.</p>
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
        <p>I love being organized, and time mangement is a must if working while studying for university.</p>
        <p>Organization (Notion freak), flexibility, time management, teamwork.</p>`
    }
  ],
  coding: {
    title: 'Coding.',
    description: 'I occasionally contribute to open source projects on Github, but mainly I spend my time searching for answers on stackoverflow. I also have some personal projects that I never have time to pursue, here are some of them.',
    items: [
      {
        title: 'telereddit',
        description: 'A reddit bot for Telegram written in python. When the user sends a message containing the name of a subreddit (e.g. “r/funny”), the bot will send a random post from that subreddit. When a link from reddit is shared in the chat, the bot will retrieve the post and send it as a message.',
        link: {
          url: 'https://github.com/fabiosangregorio/telereddit',
          title: 'github/telereddit'
        }
      }, {
        title: 'remindme',
        description: 'A reminder bot for Telegram.<br/>You can reply to a Telegram message with “!remindme 2h 5m” and the bot will remind you that message (with a link to it) in two hours and five minutes. As you might have guessed, I really like reddit and Telegram :)',
        link: {
          url: 'https://github.com/fabiosangregorio/remindme',
          title: 'github/remindme'
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
    description: 'I recently inherited my father’s DSLR and I have been treasuring it ever since. I’m certainly not the best photographer out there, but I love discovering all the facets this new world has to offer.',
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
    description: 'When I was a child, I saw a playworker drawing on a small piece of paper: a beautiful forest drawn with a black ballpoint. I was astonished, so I asked if I could have it. When I got home I threw away hundreds sheets of paper trying to reproduce it, adding my own flavor to it. That’s how I started drawing. I now rarely do it anymore, but I cherish that small piece of paper to this day.',
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
  // projects: [
  //   {
  //     id:            'noku',
  //     title:         'Noku TokenRaise',
  //     description:   'Noku TokenRaise is a web app that provides you with the best service on the market to customize your crowdsale on Ethereum Blockchain, without writing a line of code and in a matter of minutes.',
  //     category:      'React web app',
  //     year:          '2018',
  //     link: {
  //       text:        'tokenraise.noku.io',
  //       url:         'https://www.noku.io/tokenraise/'
  //     },
  //     desktopImages: '4',
  //     mobileImages:  '3',
  //     role:          'to do'
  //   }, {
  //     id:            'netmedicare',
  //     title:         'Net Medicare',
  //     description:   'to do',
  //     category:      'HTML/jQuery web app',
  //     year:          '2017',
  //     link: {
  //       text:        'netmedi.care',
  //       url:         'https://www.netmedi.care/'
  //     },
  //     desktopImages: '4',
  //     mobileImages:  '3',
  //     role:          'to do'
  //   }, {
  //     id:            'parlux',
  //     title:         'MyParlux',
  //     description:   'to do',
  //     category:      'HTML/jQuery website',
  //     year:          '2016',
  //     role:          'to do',
  //     desktopImages: '4',
  //     mobileImages:  '3',
  //   }
  // ],
  // skillstable: [
  //   [
  //     ['HTML5 & CSS3', 'Javascript', 'Python', 'Sass'],
  //     ['jQuery', 'React', 'Git'],
  //     ['Github']
  //   ], [
  //     ['Ruby (on Rails)', 'Typescript', 'MATLAB', 'C#'],
  //     ['Angular', 'Grunt', 'Node'],
  //     ['Photoshop']
  //   ], [
  //     ['Java', 'C++', 'SQL', 'PHP'],
  //     ['AngularJS', 'Firebase', 'npm'],
  //     ['Figma']
  //   ]
  // ],
}