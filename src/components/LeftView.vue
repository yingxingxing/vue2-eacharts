<!--
 * @Description: 
 * @Author: 莲白
 * @Date: 2022-10-14 19:25:07
 * @LastEditTime: 2022-10-14 20:17:20
 * @LastEditors: 莲白
-->
<template>
  <div class="LeftView">
  <ul class="Left-list">
    <li v-for="item in iconList" :key="item.id" @click="clickItem(item)"><i :class="item.icon"></i><span>{{item.iconTitle}}</span></li>
  </ul>
  </div>
</template>
<script>
import './LeftView.less'
export default{
name:'LeftView',
data() {
  return {
    iconList:[
      {
        id:0,
        icon:`el-icon-edit`,
        iconTitle:'地图'
      },
      {
        id:1,
        icon:`el-icon-edit`,
        iconTitle:'折线图'
      }
    ]
  }
},
methods:{
  clickItem(item){
this.$emit('LeftViewChange',item)
  }
}

}

</script>