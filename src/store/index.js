import Vue from 'vue'
import Vuex from 'vuex'
import VuexPersistence from'vuex-persist'
Vue.use(Vuex)

const vuexLocal =new VuexPersistence({
  storage:window.localStorage

})
export default new Vuex.Store({
  state: {
    wyBirth:'2001-10-29 00:00:00', // 生日
    targetTime:'2001-10-29 00:00:00',                // 目标时间
    loaderFlag:true,              // 转动loading
    festivalVal:1,                // 生效一次的节日flag
    downEndFlag:false,            // 倒计时是否结束
  },
  mutations: {
    changeLoader(state,val){
      state.loaderFlag=val
    },
    changeFesVal(state,val){
      state.festivalVal=val
    },
    changeNewTarget(state,val){
      state.targetTime=val
    },
    changeDownEnd(state,val){
      state.downEndFlag=val
    }
  },
  actions: {
  },
  modules: {
  },
  plugins: [vuexLocal.plugin]
})
