<template>
  <div class="" id="wapper">
    <nav class="navbar navbar-default">
      <div class="container">
        <a href="#" class="navbar-brand">
            <i class="glyphicon glyphicon-time"></i>
            <strong>计划板</strong>
        </a>
        <ul class="nav navbar-nav">
          <li><router-link to="/home">首页</router-link></li>
          <li><router-link to="/time-entries">计划列表</router-link></li>
        </ul>
      </div>
    </nav>

    <div class="container">
      <div class="row">
        <div class="col-sm-3">
          <sidebar></sidebar>
        </div>
        <div class="col-sm-9">
          <router-view><router-view>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Sidebar from './components/Sidebar'

export default {
  name: 'app',
  components: {
    Sidebar
  }
}
</script>

<style scoped>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
