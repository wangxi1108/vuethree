<template>
  <div>
    登录页面
     <el-button @click='toIndex'>进入首页</el-button>
  </div>
</template>
<script>
export default {
  data(){
    return{

    }
  },
  methods:{
    toIndex(){
      this.$router.push({path: 'index'})
    }
  }
}
</script>

