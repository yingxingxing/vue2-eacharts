<!--
 * @Description: 
 * @Author: 莲白
 * @Date: 2022-10-14 19:07:19
 * @LastEditTime: 2022-10-14 20:16:49
 * @LastEditors: 莲白
-->
<template>
  <div class="home">
<!-- 头部 -->
<div class="headPage">
  <HeaderView ></HeaderView>
</div>
<main class="mainPage">
  <LeftView class="main-left" @LeftViewChange="LeftViewChange"></LeftView>
  <MainView class="main-right" :MainView='MainViewList'></MainView>
</main>
<!-- 左侧 -->
<!-- 右侧 -->
  </div>
</template>

<script>
// @ is an alias to /src

import './HomeView.less'
import  HeaderView from '../components/HeaderView.vue' //头部
import  LeftView from '../components/LeftView.vue' //左侧
import  MainView from '../components/mainView.vue' //主体内容部分
export default {
  name: 'HomeView',
  components: {
HeaderView,
LeftView,
MainView
  },
  data(){
return{
  MainViewList:{

  }
}
  },
  methods:{
    LeftViewChange(value){
      this.MainViewList=value
    }
  }
}
</script>
