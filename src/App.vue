<template>
  <div id="app">
    <loader v-if="loaderFlag"></loader>
    <router-view />
  </div>
</template>

<script>
import Loader from './components/loader.vue';
export default {
  name: "app",
  components:{Loader}
  ,
  data() {
    return {
      screenWidth: document.documentElement.clientWidth, //屏幕宽度
      screenHeight: document.documentElement.clientHeight, //屏幕高度
      loaderFlag:true
    };
  },
  watch: {
    screenWidth() {
      this.changeWidth();
    },
  },
  methods: {
    changeWidth() {
      // 页面开始加载时修改font-size
      var html = document.getElementsByTagName("html")[0];
      var oWidth =
        document.body.clientWidth || document.documentElement.clientWidth;

      // 这里的750是指设计图的大小,自己根据实际情况改变
      html.style.fontSize = (oWidth / 750) * 100 + "px";
    },
  },
  mounted() {
    var _this = this;
    window.onresize = function () {
      // 定义窗口大小变更通知事件
      _this.screenWidth = document.documentElement.clientWidth; //窗口宽度
      _this.screenHeight = document.documentElement.clientHeight; //窗口高度
    };
    setTimeout(()=>{this.loaderFlag=false},1000)
    this.changeWidth();
  },
};
</script>

<style lang="scss">
@import "@/assets/common/common.scss";
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  height: 100vh;
  background-color: #1c2022;
}
</style>
