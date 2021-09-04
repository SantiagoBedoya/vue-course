<template>
	<h2>{{customTitle}}</h2>
	<p>{{counter}} <sup>2</sup> = {{squareCounter}}</p>
	<div>
		<button @click="increase">+1</button>
		<button @click="decrease">-1</button>		
	</div>

</template>

<script>
	export default {
		props: {
			title: String,
			start: {
				type: Number,
				default: 10,
				// required: true
				validator(value){
					return value > 0
				}
			}
		},
		data(){
			return {
				counter: this.start
			}
		},
		methods: {
			getSquareValue(){
				return this.counter * this.counter;
			},
			increase(){
				this.counter+=1;
			},
			decrease(){
				this.counter-=1
			}
		},
		computed: {
			squareCounter(){
				return this.counter * this.counter;
			},
			customTitle(){
				return this.title ?? 'Counter'
				
			}
		}
	}
</script>

<style>
	button{
		background-color: dodgerblue;
		margin: 0 5px;
		color: white;
		border-radius: 5px;
		cursor: pointer;
	}
</style>