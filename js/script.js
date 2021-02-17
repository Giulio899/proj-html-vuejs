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
    counter: 1
  },
  methods: {
    add() {
      this.counter++;
      console.log(this.counter);
    }
  }
});
