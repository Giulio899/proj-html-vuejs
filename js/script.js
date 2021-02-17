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
    counter: 1
  },
  methods: {
    add() {
      this.counter++;
      console.log(this.counter);
    }
  }
});
