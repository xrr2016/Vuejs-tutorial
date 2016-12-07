<template lang="html">
  <div class="panel panel-deafult">
    <div class="panel-heading">
      <h1 class="text-center">已有时长</h1>
    </div>

  <div class="panel-body">
    <h1 class="text-center">{{ totalTime }}小时</h1>
  </div>
</div>
</template>

<script>
export default {
  name:'Sidebar',
  computed:{
    totalTime(){
      return this.$store.state.totalTime
    }
  }
}
</script>

<style lang="css">
</style>
