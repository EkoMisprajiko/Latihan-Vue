var data = {
  title: 'The 1st Instance',
  showParagraph: false
}

// Membuat 2 Vue Instance
//Vue instance pertama
var vm1 = new Vue({
  //el: '#app', //el diganti dengan method $mount() di akhir instance ini
  data: data,
  methods: {
    show: function() {
      this.showParagraph = true;
      this.updateTitle('The 1st Instance (Updated)');
      // if setTimeout function run this show function
      // this bottom script will change the Text of button with ref="MyButtonVm1"
      // Mengakses $refs (html ref property) dari dalam instance
      this.$refs.myButtonVm1.innerText = "Test";
    },
    updateTitle: function(title) {
      //this.title = title;
      this.title = title;
    }
  },
  computed: {
    lowercaseTitle: function() {
      return this.title.toLowerCase();
    }
  },
  watch: {
    title: function(value) {
      alert('Title changed, new value: ' + value);
    }
  }
});

vm1.$mount('#app');

console.log(vm1.$data === data);

// Mengakses $refs (html ref property) dari luar instance
vm1.$refs.heading.innerText = "Refs";

setTimeout(function() {
  vm1.title = "Changed by Timer";
  vm1.show();
}, 3000);

// Vue instance ke-dua
var vm2 = new Vue({
  el: '#app2',
  data: {
    title: 'The Second Instance'
  },
  // Mengganti title pada vm1
  methods: {
    change: function () {
      vm1.title = 'Changed from vm2 methods!';
      vm1.showParagraph = false;
    }
  }
});


//PROBLEM TIDAK SEPERTI YANG DI VIDEO TUTORIAL KE 71 Maximillian: 
// Ketika title sudah diubah menggunakan $refs pada baris 40: vm1.$refs.heading.innerText = "Refs";
// Title "TIDAK BISA" diubah menggunakan methods "change" pada Vue instance ke 2
// yaitu: vm1.title = 'Changed from vm2 methods!';
// Kodenya harus diganti menjadi: vm1.$refs.heading.innerText = 'Changed from vm2 methods!';
// Begitupun method "show" dan "setTimeout" semuanya harus menggunkan method "$refs"