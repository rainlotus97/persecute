<template>
  <div id="app">
    <loader v-if="$store.state.loaderFlag"></loader>
    <router-view />
  </div>
</template>

<script>
import Loader from "./components/loader.vue";
export default {
  name: "app",
  components: { Loader },
  data() {
    return {
      screenWidth: document.documentElement.clientWidth, //屏幕宽度
      screenHeight: document.documentElement.clientHeight, //屏幕高度
    };
  },
  watch: {
    screenWidth() {
      this.changeWidth();
    },
  },
  methods: {
    // 调节字体
    changeWidth() {
      // 页面开始加载时修改font-size
      var html = document.getElementsByTagName("html")[0];
      var oWidth =
        document.body.clientWidth || document.documentElement.clientWidth;

      // 这里的750是指设计图的大小,自己根据实际情况改变
      html.style.fontSize = (oWidth / 750) * 100 + "px";
    },
    // 判断节日
    isFestival() {
      const wyBirth = this.$store.state.wyBirth;
      const tempDataArr = wyBirth.split(" ");
      const tempArr = tempDataArr[0].split("-");
      tempArr[0] = new Date().getFullYear() + "";
      const nowBirth = tempArr.join("-") + " 00:00:00";
      const targetTime = new Date(nowBirth).getTime();
      const currentTime = new Date().getTime();
      const delta = targetTime - currentTime;
      const day = Math.floor(delta / 3600 / 1000 / 24);
      const hour = Math.floor((delta / 3600 / 1000) % 24);
      const minute = Math.floor((delta / 60 / 1000) % 60);
      const second = Math.floor((delta / 1000) % 60);

      console.log(
        `${day}-天-${hour}:${minute}:${second}`,
        this.$store.state.festivalVal
      );
      // 当节日来临时
      if (day < 7) {
        this.$store.commit("changeNewTarget", nowBirth);
        console.log(nowBirth,this.$store.state.festivalVal);
      }
      if (day <= 1) {
        // 保证点击浏览之后，取消再次触发
        if (this.$store.state.festivalVal > 0) {
          this.$store.commit("changeLoader", true);
          this.$router.push("/birth");
        }
      } else {
        this.$store.commit("changeFesVal", 1);
      }
    },
  },
  mounted() {
    var _this = this;
    window.onresize = function () {
      // 定义窗口大小变更通知事件
      _this.screenWidth = document.documentElement.clientWidth; //窗口宽度
      _this.screenHeight = document.documentElement.clientHeight; //窗口高度
    };
    setTimeout(() => {
      this.$store.commit("changeLoader", false);
    }, 1000);
    this.changeWidth();
    this.isFestival();
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
}
</style>
