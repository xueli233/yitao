import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import VueAxios from 'vue-axios'

Vue.use(Vuex)
Vue.use(VueAxios, axios)

const state = {
  navList: []
}
const mutations = {
  setNavData (state, navListData) {
    state.navList = navListData
  }
}
const actions = {
  getNavData ({commit}) {
    axios.get('http://h6.duchengjiu.top/shop/api_cat.php').then(res => {
      commit('setNavData', res.data.data)
    })
  }
}
export default new Vuex.Store({
  state,
  mutations,
  actions
})
