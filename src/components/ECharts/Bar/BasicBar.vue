<template>
  <div>
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/home' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>柱状图</el-breadcrumb-item>
      <el-breadcrumb-item>基础柱状图</el-breadcrumb-item>
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
    getECharts() {
      const myChart = echarts.init(document.getElementById('main'))
      /** @type EChartsOption */
      const option = {
        //   标题
        title: {
          text: '演示',
          textStyle: { color: '#82CEE2', fontSize: 30, left: 1, top: 1 }
        },
        // 提示框
        tooltip: { trigger: 'item', triggerOn: 'mousemove' },
        legend: { data: ['数据'] },
        // x轴
        xAxis: {
          type: 'category',
          data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
        },
        yAxis: {
          type: 'value'
        },
        series: [
          {
            name: '数据',
            data: [120, 200, 150, 80, 70, 110, 130],
            type: 'bar'
          }
        ]
      }
      myChart.setOption(option)
    }
  },
  mounted() {
    this.getECharts()
  }
}
</script>

<style lang="less" scoped>
.el-card {
  #main {
    height: 555px;
    margin: 10px auto;
  }
}
</style>
