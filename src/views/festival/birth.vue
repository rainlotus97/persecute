<template>
  <div
    class="birth"
    :class="{
      pinkBc: !isShow,
      colorsBc: isShow,
    }"
  >
    <div class="birthDown" v-if="!isShow">
      <CakeAnimation :yourName="targetName"></CakeAnimation>
      <div class="color-time" v-if="!$store.state.downEndFlag">
        <ColorTime :targetTime="$store.state.targetTime" :id="key"></ColorTime>
      </div>
      <div class="welcome" v-if="$store.state.downEndFlag" @click="setIsShow()">
        Welcome
      </div>
    </div>
    <div class="happyBirth" v-if="isShow">
      <NewCake></NewCake>
      <div class="continued" @click="sayGoodBye()">To BeContinued</div>
      <div class="tryAgain" @click="reSet()">Try Again</div>
      <button
        @click="playMusic"
        id="playButton"
        v-trigger
        style="position: absolute; top: 0; right: 0; z-index: -1; display: none"
      >
        Play Music
      </button>

      <audio ref="audioPlay" src="@/assets/music/happyBirthday.mp3"></audio>
    </div>
    <!-- <h1 class="colorFont">今日闲暇</h1>
    <h1 class="colorFont">注意劳逸结合</h1> -->
  </div>
</template>

<script>
import ColorTime from "@/components/time.vue";
import CakeAnimation from "@/components/cake.vue";
import NewCake from "@/components/newCake.vue";

export default {
  name: "birth",
  components: {
    CakeAnimation,
    ColorTime,
    NewCake,
  },
  data() {
    return {
      targetName: "WangYuan",
      key: 2,
      isShow: false,
    };
  },
  methods: {
    sayGoodBye() {
      this.$store.commit("changeFesVal", 0);
      this.$router.replace("/home");
    },
    reSet() {
      this.$store.commit("changeFesVal", 1);
      this.$store.commit("changeDownEnd", false); // 倒计时还没有结束
      const newDate = new Date(new Date().getTime() + 1000 * 10);
      const newValue = this.calcTime(newDate);
      this.$store.commit("changeNewTarget", newValue);
      this.isShow=false
    },
    calcTime(value) {
      const year = value.getFullYear();
      const mon = value.getMonth() + 1;
      const day = value.getDate();

      const hour = value.getHours();
      const min = value.getMinutes();
      const sec = value.getSeconds();
      return `${year}-${mon}-${day} ${hour}:${min}:${sec}`;
    },
    playMusic() {
      this.$refs.audioPlay.play();
      this.$refs.audioPlay.onended = function () {
        this.$refs.audioPlay.play();
      };
    },
    setIsShow() {
      this.isShow = true;
    },
  },
  mounted() {
    this.$store.commit("changeNewTarget", "2021-10-29 00:00:00");
    this.$store.commit("changeLoader", true);
    this.$store.commit("changeFesVal", 1);
    this.$store.commit("changeDownEnd", false);
    this.isShow = this.$store.state.downEndFlag;
  },
  computed: {},
  created() {
    setTimeout(() => {
      this.$store.commit("changeLoader", false);
    }, 1000);
  },
  directives: {
    trigger: {
      inserted(el, binging) {
        el.click();
      },
    },
  },
  beforeDestroy() {
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/birth/birth.scss";
@import url("https://fonts.googleapis.com/css?family=Codystar|Quicksand:300,400,700");

.pinkBc {
  background: #ee9ca7;
}
.colorsBc {
  background: linear-gradient(
    to right,
    #e2b8f7,
    #d4bafa,
    #c7bcfb,
    #b9befb,
    #acbff9
  );
  cursor: crosshair;
  perspective: 20rem;
  transform-style: preserve-3d;
  font-family: "Pacifico", cursive;
}
html {
  overflow: hidden;
}
body {
  background: none;
}
.birth {
  &::before {
    display: table;
    content: "";
  }
  height: 100vh;
  overflow: hidden;
  .birthDown {
    // margin-top: 4rem;
    .color-time {
      margin-top: 0.8rem;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    .welcome {
      display: flex;
      align-items: center;
      justify-content: center;
      margin-top: 0.8rem;
      font-family: "Quicksand", sans-serif;
      font-size: 0.7rem;
      font-weight: 700;
      line-height: 0.8rem;
      color: #eeeeff;
      text-shadow: 0 0 0.02rem #41277c, 0 0 0.3rem rgb(238 238 255 / 85%);
    }
  }
  ::v-deep .downTime {
    min-width: 45%;
    font-family: timeFont;
    font-size: 1rem;
    background: linear-gradient(135deg, #14ffe9, #ffeb3b, #ff00e0);
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
    -webkit-animation: timeColor 3s linear infinite;
    animation: timeColor 3s linear infinite;
    text-shadow: 0 0 0.01rem rgb(255 255 255 / 70%);
  }
  .happyBirth {
    position: relative;
    .continued {
      position: absolute;
      right: 0.3rem;
      bottom: 0.2rem;
      z-index: 99;
      font-family: "Quicksand", sans-serif;
      font-size: 0.4rem;
      font-weight: 700;
      line-height: 0.8rem;
      color: #eeeeff;
      text-shadow: 0 0 0.02rem #41277c, 0 0 0.3rem rgb(238 238 255 / 85%);
    }
    .tryAgain {
      position: absolute;
      right: 0.3rem;
      bottom: 1.2rem;
      z-index: 99;
      font-family: "Quicksand", sans-serif;
      font-size: 0.4rem;
      font-weight: 700;
      line-height: 0.8rem;
      color: #eeeeff;
      text-shadow: 0 0 0.02rem #41277c, 0 0 0.3rem rgb(238 238 255 / 85%);
    }
  }
}
</style>