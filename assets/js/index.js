Vue.component('users-data', {
  props: ['username', 'email', 'role'],
  template:`
  <li>
    <div class="collapsible-header"><i class="material-icons">account_circle</i>{{ username }}</div>
    <div class="collapsible-body">
      <div>{{ email }}</div>
      <div> {{ role }}</div>
    </div>
  </li>`
})

Vue.component('users-container', {
  props: ['users'],
  template:`
  <div class="container">
    <ul class="collapsible" data-collapsible="expandable">
      <users-data
      v-for="user in users"
      :username="user.username"
      :email="user.email"
      :role="user.role">
      </users-data>
    </ul>
  </div>`
})

new Vue({
  el: '#app',
  data: {
    users: ["hay"]
  },
  created () {
    let self = this;
    axios.get('http://localhost:3000/user/', {
      headers: { token: localStorage.getItem('token') }
    })
    .then(function(resp) {
      self.users = resp.data
    })
    .catch(err => console.log(err))
  }
})
