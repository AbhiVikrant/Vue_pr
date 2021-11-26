const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name:'',
      fullName:'',
      enteredEmail: '',
      enteredPassword:'',
      savedEmail: ["abhi@gmail.com"],
      savedPassword: ["Abhi@123"]

    };
  },
  methods: {
    add(num){
      this.counter=this.counter+num;
    },
    reduce(num){
      this.counter=this.counter-num;
    },
    setFullName(event, lastName){
      this.name='Hey ' + event.target.value +' ,' + ' Welcome to TCS, Fill Your Credentials For LogIn.';
    },
    confirmedFullName(){
    this.fullName=this.name;
    },
    getEnteredEmail(event){
     this.enteredEmail=event.target.value;
    },
    getEnteredPassword(event){
    this.enteredPassword=event.target.value;
    },
    sayHello(){
      alert('jjj');
    }
  },
});

app.mount('#events');
