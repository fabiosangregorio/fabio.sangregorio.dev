module.exports = {
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
  jobs: [
    {
      title:         'Yourbiz',
      link:          'https://www.yourbiz.it',
      role:          'Frontend web developer',
      start:         'July 2016',
      end:           'Current',
      description:   "I've been working at Yourbiz as a part-time developer for 3 years, where I've been building the frontend of the company websites, with special attention to responsiveness, SEO and performance optimization. I've also had experience in the realization of pure HTML/JS web apps, as well as apps based on frameworks such as Angular, AngularJS and React."
    }, {
      title:         'Sorint.LAB',
      link:          'https://www.sorint.it',
      role:          'R&D dpt. school internship',
      start:         'June 2015',
      end:           'June 2015',
      description:   "During the school internship at Sorint I studied the OrientDB graph database, and I built a Java web app for internal use with the Spring framework and Hibernate. I also attended the following corporate training courses: VMware, OrientDB, MySQL, Java, Spring Framework 4.0, Hibernate, Spring Security."
    }
  ],
  education: [
    {
      title:         'Bergamo University',
      link:          'https://www.unibg.it/',
      role:          'Computer engineering Master\'s degree',
      start:         'Sept. 2019',
      end:           'Current',
      description:   "I'm currently attending the first year of my Master's degree in Computer Engineering, where I completed the following core courses: Information Technology 3, Databases 2, Industrial Automation, Software Engineering, Statistics 2, Management Control Systems."
    }, {
      title:         'IIS G. Marconi',
      link:          'https://itisdalmine.edu.it/',
      role:          'IT high school diploma',
      start:         'Sept. 2011',
      end:           'June 2016',
      description:   "Core courses: C#, MVC, web API, Database, Client-Server architecture, HTML/CSS, Javascript, jQuery.<br />Activities: CCNA1 course, \"Impresa in Azione\" project.<br />Thesis: assigning internships to students based on skills levels."
    }
  ],
  skills: [
    [
      ['HTML5 & CSS3', 'Javascript', 'Python', 'Sass'],
      ['jQuery', 'React', 'Git'],
      ['Github']
    ], [
      ['Ruby (on Rails)', 'Typescript', 'MATLAB', 'C#'],
      ['Angular', 'Grunt', 'Node'],
      ['Photoshop']
    ], [
      ['Java', 'C++', 'SQL', 'PHP'],
      ['AngularJS', 'Firebase', 'npm'],
      ['Figma']
    ]
  ],
  coding: [
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
  ],
  photography: [
    {
      image: {
        path: '/images/church.jpg',
        alt: 'Basilica of Santa Maria Maggiore, Bergamo',
        description: 'Basilica of Santa Maria Maggiore, Bergamo'
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
  ],
  drawing: [
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
  ],
}