const app = Vue.createApp({
	data(){
		return {
			message: 'Hello, World'
		}
	},
	methods:{
		changeMessage(){
			console.log('changeMessage');
			this.message = 'SantiagoBedoya';
			this.capitalize();
		},
		capitalize(){
			this.message = this.message.toUpperCase();
		}
	}
});

app.mount('#myApp');