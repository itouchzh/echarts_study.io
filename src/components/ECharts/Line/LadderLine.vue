<template>
  <div>
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/home' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>折线图</el-breadcrumb-item>
      <el-breadcrumb-item>阶梯线图</el-breadcrumb-item>
    </el-breadcrumb>
    <el-card>
      <div id="main"></div>
    </el-card>
  </div>
</template>

<script>
import * as echarts from 'echarts'
export default {
  data() {
    return {}
  },
  methods: {
    getCharts() {
      const myCharts = echarts.init(document.getElementById('main'))
      /** @type EChartsOption */
      const option = {
        title: {
          text: '阶梯线图',
          textStyle: { fontSize: 30 },
          link: 'http://www.baidu.com'
        },
        tooltip: {
          trigger: 'axis',
          triggerOn: 'mousemove'
        },
        legend: {
          data: ['Step Start', 'Step Middle', 'Step End']
        },
        xAxis: {
          type: 'category',
          data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
        },
        yAxis: {
          type: 'value'
        },
        series: [
          {
            name: 'Step Start',
            type: 'line',
            step: 'start',
            data: [120, 132, 101, 134, 90, 230, 210]
          },
          {
            name: 'Step Middle',
            type: 'line',
            step: 'middle',
            data: [220, 282, 201, 234, 290, 430, 410]
          },
          {
            name: 'Step End',
            type: 'line',
            step: 'end',
            data: [450, 432, 401, 454, 590, 530, 510]
          }
        ]
      }
      myCharts.setOption(option)
    }
  },
  mounted() {
    this.getCharts()
  },
  created() {}
}
</script>

<style lang="less" scoped>
#main {
  // background-color: pink;
  width: 100%;
  height: 500px;
}
</style>
