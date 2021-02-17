var app = new Vue({
  el: '#app',
  data: {
    menuItems: [
      {
        name: 'Home',
        url: '#',
      },
      {
        name: 'About',
        url: '#',
      },
      {
        name: 'Services',
        url: '#'
      },
      {
        name: 'Team',
        url: '#'
      },
      {
        name: 'Blog',
        url: '#'
      }
    ],
    contact: [
      {
        type: "opening",
        info: "Open Hours: Mon - Sat - 9:00 - 18:00",
        icon: "fas fa-clock"
      },
      {
        type: "telephone",
        info: "+1 (305) 1234-5678",
        icon: "fas fa-phone-alt"
      },
      {
        type: "mail",
        info: "hello@example.com",
        icon: "fas fa-envelope"
      },
      {
        type: "map",
        info: "Main Avenue, 987",
        icon: "fas fa-map-marker-alt"
      }
    ],
    social: [
      {
        type: "facebook",
        icon: "fab fa-facebook-f",
        url: "#"
      },
      {
        type: "twitter",
        icon: "fab fa-twitter",
        url: "#"
      },
      {
        type: "linkedin",
        icon: "fab fa-linkedin-in",
        url: "#"
      }
    ],
    footerInfo: [
      {
        category: "About",
        subcategory: [
          {
            name: "The Company",
            url: "#"
          },
          {
            name: "Istitutional",
            url: "#"
          },
          {
            name: "Social & Events",
            url: "#"
          },
          {
            name: "Innovation",
            url: "#"
          },
          {
            name: "Environment",
            url: "#"
          },
          {
            name: "Technology",
            url: "#"
          }
        ]
      },
      {
        category: "Services",
        subcategory: [
          {
            name: "Audit & Assurance",
            url: "#"
          },
          {
            name: "Financial Advisory",
            url: "#"
          },
          {
            name: "Analytics M&A",
            url: "#"
          },
          {
            name: "Middle Marketing",
            url: "#"
          },
          {
            name: "Legal Consulting",
            url: "#"
          },
          {
            name: "Regulatory Risk",
            url: "#"
          }
        ]
      },
      {
        category: "Support",
        subcategory: [
          {
            name: "Responsibility",
            url: "#"
          },
          {
            name: "Terms of Use",
            url: "#"
          },
          {
            name: "About Cookies",
            url: "#"
          },
          {
            name: "Privacy Policy",
            url: "#"
          },
          {
            name: "Accessibility",
            url: "#"
          },
          {
            name: "Information",
            url: "#"
          }
        ]
      }
    ],
    results: [
      {
        title: "Certifications",
        data: 128
      },
      {
        title: "Employees",
        data: 230
      },
      {
        title: "Customers",
        data: 517
      },
      {
        title: "Countries Served",
        data: 94
      }
    ],
    services: [
      {
        name: "Audit & Assurance",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
        icon: "fas fa-network-wired"
      },
      {
        name: "Financial Advisory",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
        icon: "fas fa-suitcase"
      },
      {
        name: "Analytics and M&A",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
        icon: "fas fa-chart-bar"
      },
      {
        name: "Middle Marketing",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
        icon: "fas fa-plane"
      },
      {
        name: "Legal Marketing",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
        icon: "fas fa-globe-americas"
      },
      {
        name: "Regulatory Risk",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
        icon: "fas fa-inbox"
      }
  ],
    team: [
      {
        name: "David Cooper",
        role: "Cto & co-founder",
        image: "david-cooper.jpg",
        social: [
          {
            type: "facebook",
            icon: "fab fa-facebook-f",
            url: "#"
          },
          {
            type: "twitter",
            icon: "fab fa-twitter",
            url: "#"
          },
          {
            type: "linkedin",
            icon: "fab fa-linkedin-in",
            url: "#"
          }
        ]
      },
      {
        name: "Oliver Jones",
        role: "Chief procurement",
        image: "oliver-jones.jpg",
        social: [
          {
            type: "facebook",
            icon: "fab fa-facebook-f",
            url: "#"
          },
          {
            type: "twitter",
            icon: "fab fa-twitter",
            url: "#"
          },
          {
            type: "linkedin",
            icon: "fab fa-linkedin-in",
            url: "#"
          }
        ]
      },
      {
        name: "Emma Lopez",
        role: "Chief marketing",
        image: "emma-lopez.jpg",
        social: [
          {
            type: "facebook",
            icon: "fab fa-facebook-f",
            url: "#"
          },
          {
            type: "twitter",
            icon: "fab fa-twitter",
            url: "#"
          },
          {
            type: "linkedin",
            icon: "fab fa-linkedin-in",
            url: "#"
          }
        ]
      },
      {
        name: "T. Johnson",
        role: "Ceo & president",
        image: "t-johnson.jpg",
        social: [
          {
            type: "facebook",
            icon: "fab fa-facebook-f",
            url: "#"
          },
          {
            type: "twitter",
            icon: "fab fa-twitter",
            url: "#"
          },
          {
            type: "linkedin",
            icon: "fab fa-linkedin-in",
            url: "#"
          }
        ]
      }
    ],

    counter: 1
  },
  methods: {
    add() {
      this.counter++;
      console.log(this.counter);
    }
  }
});
