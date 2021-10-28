<template>
  <div class="home">
    <div class="timePosition">
      <h1 class="colorFont">考研倒计时</h1>
      <ColorTime :id="key"></ColorTime>
    </div>
    <div class="mitions">
      <h1 class="colorFont">开始添加新的任务</h1>
    </div>
  </div>
</template>

<script>
import ColorTime from "@/components/time.vue";

export default {
  name: "Home",
  components: {
    ColorTime,
  },
  data(){
    return{
      key:1
    }
  },
  methods:{
    clearAll(){
      this.$store.commit('changeLoader',false)
      this.$store.commit('changeFesVal',1)
      this.$store.commit('changeNewTarget','2001-10-29 00:00:00')
      this.$store.commit('changeDownEnd',false)
    }
  },
  mounted() {
    this.$store.commit("changeLoader", true);
    setTimeout(() => {
      this.$store.commit("changeLoader", false);
    }, 1000);
  },
};
</script>
<style lang="scss">

.home {
  background-color: #1c2022;
  height: 100vh;
  &::before {
    display: table;
    content: "";
  }
  .timePosition {
    margin-top: 4rem;
  }
  .mitions {
    margin-top: 0.4rem;
  }
}
@keyframes timeColor {
  to {
    filter: hue-rotate(360deg);
  }
}
</style>