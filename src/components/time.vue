<template>
  <div class="colorTime">
    <div class="days" v-if="day > 0">
      <span class="downTime">{{ this.day }}</span
      ><span class="downTime" style="font-size: 35px; margin-left: 8px"
        >天</span
      >
    </div>
    <span class="downTime" style="margin-left: 20px">{{ nowTime }}</span>
  </div>
</template>

<script>
export default {
  name: "colorTime",
  data() {
    return {
      nowTime: "",
      day: 0,
      interValFlag: null,
      targetTime: "2022-12-22 00:00:00",
    };
  },
  methods: {
    changTime() {
      let times = new Date(); // 当前时间
      let targetTime = new Date(this.targetTime); //目标时间
      const timesValue = times.getTime();
      const targetValue = targetTime.getTime();
      const delta = targetValue - timesValue;
      this.day = Math.floor(delta / 3600 / 1000 / 24);
      const hour = Math.floor((delta / 3600 / 1000) % 24);
      const minute = Math.floor((delta / 60 / 1000) % 60);
      const second = Math.floor((delta / 1000) % 60);
      let str = "" + (hour < 10 ? "0" : "") + hour;
      str += (minute < 10 ? ":0" : ":") + minute;
      str += (second < 10 ? ":0" : ":") + second;
      this.nowTime = str;
    },
  },
  created() {
    this.interValFlag = setInterval(() => this.changTime(), 1000);
  },
  destroyed() {
    clearInterval(this.interValFlag);
  },
};
</script>

<style lang="scss">
/* 页面初始化，清除所有元素的内外边距 */

.colorTime {
  width: 100vw;
  display: flex;
  justify-content: center;
  height: 1.2rem;
  align-items: center;
  .days{
	display: flex;
	align-items: center;
}
}
/* 引入字体文件 */
@font-face {
  /* 这里随便取个名字就可以了 */
  font-family: timeFont;
  /* 这里写上字体的路径 */
  src: url(../assets/font/DS-DIGIT.TTF);
}

/* 试一下有没有成功 */
.downTime {
  /* 给h1设置字体样式 */
  font-family: timeFont;
  /* 成功了！ */
  /* 接下来写一下时间 */

  /* 不太好看，加一点样式 */
  /* 设置字体大小 */
  font-size: 1rem;
  /* 设置字体颜色 */
  /* 没注意，这里不能用bgc,bg就够了 */
  background: linear-gradient(135deg, #14ffe9, #ffeb3b, #ff00e0);
  /* 吓我一跳，没提示我还以为我写错了,继续! */
  /* 这个报错不用管，可以用 */
  background-clip: text;
  -webkit-text-fill-color: transparent;
  animation: timeColor 3s linear infinite;
  /* 变色的具体教程在第一期视频！ */
  /* 让字梦幻一点 */
  text-shadow: 0 0 0.08rem rgba(255, 255, 255, 0.7);
}
@keyframes timeColor {
  to {
    filter: hue-rotate(360deg);
  }
}
</style>
