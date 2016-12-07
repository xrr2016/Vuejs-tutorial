<template lang="html">
  <div class="form-horizontal">
    <div class="form-group">
      <div class="col-sm-6">
        <label >日期</label>
        <input type="date" v-model="date" placehoder="Date" class="form-control">
      </div>
      <div class="col-sm-6">
        <label>时间</label>
        <input type="number" class="form-control" v-model="totalTime" placeholder="Hours">
      </div>
    </div>
    <div class="form-group">
      <div class="col-sm-12">
        <label>备注</label>
        <input type="text" class="form-control" v-model="comment" placeholder="Comment">
      </div>
    </div>
    <button type="button" class="btn btn-primary" @click="save()">保存</button>
    <router-link to="/time-entries" class="btn btn-danger">取消</router-link>
    <hr>
  </div>
</template>

<script>
export default {
  name:'LogTime',
  data(){
    return{
      date:'',
      totalTime:'',
      comment:''
    }
  },
  methods:{
    save(){
      const plan = {
        name:'someone',
        image:'https://sfault-avatar.b0.upaiyun.com/247/437/2474377559-57ecb0ecc1038_huge256',
        date:this.date,
        totalTime:this.totalTime,
        comment:this.comment
      }
      this.$store.dispatch('savePlan',plan)
      this.$store.dispatch('addTotalTime',this.totalTime)
      this.$router.go(-1)
    }
  }
}
</script>

<style lang="css">
</style>
