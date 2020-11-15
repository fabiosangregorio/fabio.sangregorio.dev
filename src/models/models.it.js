module.exports = {
  meta: {
    lang: 'it',
    title: 'developer, studente e amante degli sci',
    description: 'Sono un laureando di ingegneria informatica e sto attualmente lavorando come frontend web developer a Bergamo. Posso aiutarti a costruire qualsiasi cosa web e software.',
  },
  header: {
    about: 'su di me',
    contact: 'contattami'
  },
  footer: {
    title: 'Fammi sapere se posso aiutarti in qualche modo.',
    goodbye: 'Abbi una fantastica giornata! :)'
  },
  email_alt: 'Mandami una mail :)',
  home: {
    title: {
      line1: 'Hey!',
      line2: 'Sono Fabio, developer, studente e amante degli sci.',
    },
    subtitle: 'Sono un laureando di ingegneria informatica e sto attualmente lavorando come frontend web developer a Bergamo. Posso aiutarti a costruire qualsiasi cosa web e software.<br>Come posso aiutarti?',
    jobs: 'Ho lavorato con persone meravigliose.',
    education: 'Sto anche attualmente studiando.',
    skills: 'Mi hanno permesso di apprendere alcune abilità potenti.',
    about: {
      title: 'Vuoi sapere di più su di me?',
      link: 'Visita la mia pagina "Su di me"'
    },
  },
  about: {
    title: {
      line1: 'Fatto di programmazione, caffè, sci',
      line2: 'e serie tv.'
    },
    notes: {
      line1: 'Risultato in 1 dito rotto e 1 spalla fratturata & lussata *per ora*',
      line2: 'Seriamente, più di 7,000 episodi registrati su'
    },
    description: `
    Essendo nato a Bergamo, l'italiano è la mia lingua madre. Conosco anche abbastanza bene l'inglese però, quindi a volte aiuto a tradurre il web, con strumenti come Wikipedia e la community di Google Translate.<br>
    Amo allenarmi in palestra al mattino, prima di andare al lavoro e università. Amo l'organizzazione. Amo il caffè. Amo il nero opaco.
    `
  },
  jobs: [
    {
      title: 'Yourbiz',
      link: 'https://www.yourbiz.it',
      role: 'Frontend web developer',
      start: 'Luglio 2016',
      end: 'Corrente',
      description: "Lavoro a Yourbiz come developer part-time da 3 anni, dove ho costruito il frontend dei siti realizzati dall'azienda, con particolare attenzione al responsive, SEO e ottimizzazione delle performance. Ho anche avuto esperienza nella realizzazione di web app HTML/JS pure, oltre ad app basate su framework come Angular, AngularJS e React."
    }, {
      title: 'Sorint.LAB',
      link: 'https://www.sorint.it',
      role: 'Stage scolastico nel dipartimento R&D',
      start: 'Giugno 2015',
      end: 'Giugno 2015',
      description: "Durante lo stage scolastico a Sorint ho studiato il database a grafi OrientDB, e ho costruito una web app Java ad uso interno mediante il framework Spring e Hibernate. Ho anche partecipato ai seguenti corsi di training aziendali: Mware, OrientDB, MySQL, Java, Spring Framework 4.0, Hibernate, Spring Security."
    }
  ],
  education: [
    {
      title: 'Università di Bergamo',
      link: 'https://www.unibg.it/',
      role: 'Laurea Magistrale in Ingegneria Informatica',
      start: 'Sett. 2019',
      end: 'Corrente',
      description: "Sto attualmente frequentando il primo anno di Laurea Magistrale in Ingegneria Informatica, in cui ho completato i seguenti corsi: Informatica 3, Basi di dati 2, Automazione Industriale, Ingegneria del Software, Statistica 2, Sistemi di Controllo di Gestione"
    }, {
      title: 'IIS G. Marconi',
      link: 'https://itisdalmine.edu.it/',
      role: 'Diploma di Scuola Superiore',
      start: 'Sett. 2011',
      end: 'Giugno 2016',
      description: "Corsi frequentati: C#, MVC, web API, Database, architettura Client-Server, HTML/CSS, Javascript, jQuery.<br />Attività: corso CCNA1, progetto \"Impresa in Azione\".<br />Tesi: assegnamento di tirocini basato sui livelli di abilità degli studenti."
    }
  ],
  skills: [
    {
      title: 'Frontend Web Development',
      description: `
        <p>5 anni di esperienza lavorativa nel costruire siti web, plugin javascript e web app.</p>
        <p>Tecnologie principali: HTML5 & CSS3, Sass, Javascript, jQuery, Grunt, Figma, Photoshop, SEO, Responsiveness.</p>
        <p>Lavorato con: React, Angular, Typescript.</p>`
    }, {
      title: 'Software Development',
      description: `
        <p>Programmo dalle scuole superiori per progetti production-ready personali, lavorativi e accademici.</p>
        <p>Tecnologie principali: Python, NodeJS, C#, Java, Open Source.</p>
        <p>Lavorato con: Firebase, Scala, MATLAB, C++, Ruby (on Rails), SQL.</p>`
    }, {
      title: 'DevOps',
      description: `
        <p>2 anni di esperienza in CI/CD per testing, linting e deploy di progetti lavorativi e personali.</p>
        <p>Tecnologie principali: git, Github, Github Actions, Vim, git-crypt.</p>
        <p>Lavorato con: Travis CI, Gitlab CI, Docker.</p>`
    }, {
      title: 'Soft Skills',
      description: `
        <p>Amo essere organizzato, e la gestione del tempo è un must quando si lavora mentre si studia all'università.</p>
        <p>Organizzazione (Notion freak), flessibilità, gestione del tempo, teamwork.</p>`
    }
  ],
  coding: {
    title: 'Coding.',
    description: 'Contribuisco occasionalmente a progetti open source su Github, ma principalmente spendo il mio tempo a cercare risposte su stackoverflow. Ho anche alcuni progetti personali che non ho mai il tempo di perseguire, eccone alcuni.',
    items: [
      {
        title: 'telereddit',
        description: 'Un bot di Telegram per reddit scritto in python. Quando un utente invia un messaggio contenente il nome di un subreddit (es. "r/funny"), il bot invierà un post casuale da quel subreddit. Quando un link da reddit viene condiviso nella chat, il bot recupererà il post e lo invierà come messaggio.',
        link: {
          url: 'https://github.com/fabiosangregorio/telereddit',
          title: 'github/telereddit'
        }
      }, {
        title: 'remindme',
        description: 'Un reminder bot per Telegram.<br/>Puoi rispondere a un messaggio di Telegram con “!remindme 2h 5m” e il bot ti ricorderà quel messsaggio (con un link ad esso) in due ore e cinque minuti. Come puoi immaginare mi piacciono reddit e Telegram :)',
        link: {
          url: 'https://github.com/fabiosangregorio/remindme',
          title: 'github/remindme'
        }
      }, {
        title: 'links-disabler',
        description: 'Mi capita spesso di fare cambiamenti nella Chrome Dev Tools quando programmo, e a volte cliccavo accidentalmente su un link, perdendoli. Questa è un\'estensione di Chrome molto semplice che permette di disabilitare velocemente tutti i link in una pagina web.',
        link: {
          url: 'https://github.com/fabiosangregorio/links-disabler',
          title: 'github/links-disabler'
        }
      }
    ]
  },
  photography: {
    title: 'Un nuovo amore.',
    description: 'Ho recentemente ereditato la Reflex di mio padre e da allora ne ho fatto tesoro. Non sono certamente il miglior fotografo che esista, ma adoro scoprire tutte le sfaccettature che questo nuovo mondo ha da offrire.',
    items: [
      {
        image: {
          path: '/images/venice.jpg',
          alt: 'Un canale a Venezia, Italia',
          description: 'Un canale a Venezia, Italia'
        },
        link: {
          url: 'https://instagram.com/fabio.sang',
          title: 'instagram/fabio.sang'
        }
      }, {
        image: {
          path: '/images/orlandini.jpg',
          alt: 'Un artista con la sua opera',
          description: 'Un artista con la sua opera'
        },
        link: {
          url: 'https://photography.fabiosangregorio.tk',
          title: 'fabiosangregorio/photography'
        }
      }, {
        image: {
          path: '/images/guitar2.jpg',
          alt: 'Una chitarra custom @ Music Wall, Pizzighettone',
          description: 'Una chitarra custom @ Music Wall, Pizzighettone'
        },
        link: {
          url: 'https://unsplash.com/fabiosangregorio',
          title: 'unsplash/fabiosangregorio'
        }
      }
    ]
  },
  drawing: {
    title: 'È il momento di una storia.',
    description: 'Quando ero bambino, vidi un animatore disegnare su un piccolo pezzo di carta: una bellissima foresta ritratta con una penna a sfera nera. Fui sbalordito, quindi chiesi se potevo averlo. Una volta tornato a casa, buttai via centinaia di fogli cercando di riprodurlo, aggiungendovi il mio gusto personale. È così che ho iniziato a disegnare. Ora raramente lo faccio più, ma ho conservato con cura quel piccolo pezzo di carta fino ad oggi.',
    items: [
      {
        image: {
          path: '/images/hands.jpg',
          alt: 'Due mani intrecciate.',
          description: 'Due mani intrecciate.'
        },
      }, {
        image: {
          path: '/images/skull.jpg',
          alt: 'Una rosa che emerge da un teschio.',
          description: 'Una rosa che emerge da un teschio.'
        },
      }, {
        image: {
          path: '/images/head.jpg',
          alt: 'Metà pelle e metà teschio.',
          description: 'Metà pelle e metà teschio.'
        },
      }
    ]
  }
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