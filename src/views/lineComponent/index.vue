<!--
 * @Description: 
 * @Author: 莲白
 * @Date: 2022-10-14 21:32:16
 * @LastEditTime: 2022-10-14 22:28:03
 * @LastEditors: 莲白
-->
<template>
  <div class="lineStyle">
    <div>
      <el-button type="success" @click="open1('xAxis')"
        >xAxis解释（必填）</el-button
      >
      <el-button type="success" @click="open1('yAxis')"
        >yAxis解释（必填）</el-button
      >
      <el-button type="success" @click="open1('series')"
        >series解释（必填）</el-button
      >
      <el-form :inline="true" :model="form" class="demo-form-inline">
        <el-form-item label="xAxis">
          <el-input v-model="form.xAxis"></el-input>
        </el-form-item>
        <el-form-item label=" yAxis">
          <el-input v-model="form.name"></el-input>
        </el-form-item>
        <el-form-item label="series">
          <el-input v-model="form.name"></el-input>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>
<script>
export default {
  name: "lineComponent",
  data() {
    return {
      form: {
        name: "",
        xAxis: "",
      },
    };
  },
  methods: {
    open1(value) {
      switch (value) {
        case "xAxis":
          this.$notify({
            title: "提示",
            message: "xAxis为折线图必填项,为执教坐标系中的x轴,一般情况下组件只能放上下两个x轴,大于2个x轴,需要通过配置offset属性防止同个位置多个x轴重叠",
          });
          break;
        case "yAxis":
          this.$notify({
            title: "提示",
            message: "yAxis为折线图必填项,为shu",
          });
          break;
        case "series":
          this.$notify({
            title: "提示",
            message: "series为折线图必填项,为shu",
          });
          break;
      }
    },
  },
};
</script>
