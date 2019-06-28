<template>
  <div>
    <comhead/>
    <div class="main-container">
      <el-container style="width:100%;height:100%;">
        <el-aside class="main-el-aside">
          左边菜单
          <asideMenu/>
        </el-aside>
        <el-container>
          <div class="main-content">
            <div>面包屑，点击的菜单</div>
            <div class="page-container">
              <router-view></router-view>
            </div>
          </div>
        </el-container>
      </el-container>
    </div>
    <comfoot/>
  </div>
</template>

<script>
import comhead from "./components/comhead";
import asideMenu from "./components/menu";
import comfoot from "./components/comfoot";
export default {
  components: {
    comhead,
    asideMenu,
    comfoot
  },
  data() {
    return {};
  },
  methods: {
    go() {
      this.$router.push("/home");
    }
  }
};
</script>
<style lang="less">
.main-container {
  width: 1200px;
  // background: #ffffff;
  margin: 0 auto;
  min-height: calc(100vh - 473px);
  // min-height: 500px;
  border: 1px solid #eee;
  height: 100%;
  .main-el-aside{
    width:220px !important;
    height:100%;
  }
  .page-container{
    width: 960px;
    margin-left: 20px;
    background: #fff;
    min-height: 200px;
    overflow: hidden;
  }
}
</style>

