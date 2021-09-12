<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
  </div>
  <button @click="goToDayBook" class="btn btn-primary">primary</button>
  <button class="btn btn-secondary">secondary</button>
  <button class="btn btn-success">success</button>
</template>

<script>
// @ is an alias to /src

export default {
  methods: {
    goToDayBook(){
      this.$router.push({name: 'daybook'})
    }
  }
}
</script>
