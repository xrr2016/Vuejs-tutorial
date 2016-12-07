<template lang="html">
  <div class="wapper">
    <router-link
      v-if="$route.path !== '/time-entries/log-time'"
      to="/time-entries/log-time"
      class="btn btn-primary ">
      创建一个计划
    </router-link>

    <div  v-if="$route.path === '/time-entries/log-time'">
      <h3>创建一个计划</h3>
    </div>

    <hr class="divider">

    <router-view></router-view>
    <div class="container">
      <div class="row">
        <div class="col-md-8">

    <div class="time-entries">
      <p v-if="!plans.length"><strong>还没有任何计划</strong></p>
      <ul class="list-group">
        <li class="list-group-itme" v-for="(plan,index) of plans">
          <div class="row">
            <div class="col-sm-2 user-details">
              <img :src="plan.avatar" class="avatar img-circle img-responsive">
              <p class="text-center">
                <strong>{{plan.name}}</strong>
              </p>
            </div>
            <div class="col-sm-2 text-center time-block">
              <p class="label label-primary text-center">
                <i class="glyphicon glyphicon-calendar"></i>
                {{ plan.date }}
              </p>
              <h3 class="list-group-item-text total-time">
                 {{plan.totalTime}} 小时
              </h3>
            </div>
            <div class="col-sm-7 col-md-7 comment-section">
              <p>{{plan.comment}}</p>
            </div>
            <button type="button" class="btn  btn-danger delete-button pull-right"
            @click="deletePlan(index)"
            >删除计划</button>
          </div>
        </li>
      </ul>
      </div>
    </div>
    </div>
  </div>
  </div>
</template>

<script>
export default {
  name:'TimeEntries',
  computed:{
    plans(){
      return this.$store.state.list
    }
  },
  methods:{
    deletePlan(idx){
      this.$store.dispatch('decTotalTime',this.plans[idx].totalTime)
      this.$store.dispatch('deletePlan',idx)
    }
  }
}
</script>

<style lang="css">
.wapper{
  background-color: #f4f4f4;
}
.avatar{
  height: 75px;
  margin: 0 auto;
  margin-top: 10px;
  margin-bottom: 10px;
}
.user-details{
  background-color: #f5f5f5;
  border-right: 1px solid #ddd;
  margin: -10px 0;
}
.time-block{
  padding: 10px;
}
.comment-section{
  padding: 20px;
}
</style>
