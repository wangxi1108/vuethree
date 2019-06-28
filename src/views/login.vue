<template>
  <div>
  <comhead />
    登录页面
     <el-button @click='toIndex'>进入首页</el-button>
  </div>
</template>
<script>
import comhead from './layout/components/comhead'
export default {
  components:{comhead},
  data(){
    return{

    }
  },
  methods:{
    toIndex(){
      this.$router.push('/home')
    }
  }
}
</script>

