<template>
    <div class="loader-body">
        <div class="loader"></div>
    </div>
</template>

<script>
export default {
    name:'fantasyLoader',
}
</script>

<style lang="scss">  
  .loader-body {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100vw;
    height: 100vh;
    background-color: #414141;
    position: absolute;
    z-index: 9999;
  }
  
  .loader {
    position: relative;
    width: 3rem;
    height: 3rem;
    border-radius: 50%;
    background: linear-gradient(45deg, transparent, transparent 40%, #e5f403);
    animation: animate 2s linear infinite;
  }
  
  .loader::before {
    content: "";
    position: absolute;
    top: 0.12rem;
    left: 0.12rem;
    right: 0.12rem;
    bottom: 0.12rem;
    background-color: #414141;
    border-radius: 50%;
    z-index: 1000;
  }
  
  .loader::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(45deg, transparent, transparent 40%, #e5f403);
    border-radius: 50%;
    z-index: 100;
    filter: blur(0.04rem);
  }
  
  /* la animacion */
  
  @keyframes animate {
    0% {
      transform: rotate(0deg);
      filter: hue-rotate(0deg);
    }
  
    100% {
        transform: rotate(360deg);
        filter: hue-rotate(360deg);
    }
  }
  
</style>