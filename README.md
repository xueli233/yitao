## 配置
- main.js
  - 引入vue-axios,axios,rooter
  ```
  Vue.use() //使用插件
  ```
### 模块
- 导航
### vuex状态管理
> 1,4.navList.vue => dispatch,render
```
  // computed: 获取state,提交dispatch
  computed: {
    navList () {
      return this.$store.state.navList
    },
    created () {
      this.$store.dispatch('getNavData')
    }
  }
```
> 2,3.store/index.js => active(commit)mutations
```
const mutations = {
  setNavData (state, navListData) {
    state.navList = navListData
  }
}
const actions = {
  getNavData ({commit}) {
    axios.get('http://h6.duchengjiu.top/shop/api_cat.php').then(res=>{
      commit('setNavData', res.data.data)
    })
  }
}

```
> 5.使用
