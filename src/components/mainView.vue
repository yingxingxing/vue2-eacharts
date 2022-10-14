<!--
 * @Description: 
 * @Author: 莲白
 * @Date: 2022-10-14 19:25:07
 * @LastEditTime: 2022-10-14 21:46:35
 * @LastEditors: 莲白
-->
<template>
  <div class="mainView">
    <h1>{{ MapTitle }}属性配置选项</h1>
    <!-- 属性配置选项 -->

    <div>
<keep-alive>
<component :is="componentId"></component>
</keep-alive>

    </div>
  </div>
</template>
<script>
import lineComponent from '../views/lineComponent/index.vue'
import "./mainView.less";
export default {
  name: "mainView",
  props: {
    MainView: {
      typeof: Object,
      default: () => ({}),
    },
  },
  watch: {
    MainView: {
      handler(oldValue, Value) {
        console.log(`oldValue`, oldValue, `Value`, Value);
        console.log(`oldValue11`, Value == true);
        if (Value == undefined) {
          this.MapTitle = `地图`;
        } else {
          this.MapTitle = oldValue.iconTitle;
        }
      },
      immediate: true,
      deep: true,
    },
  },
  data() {
    return {
      componentId:lineComponent ,
      MapTitle: "",
    };
  },
};
</script>
