<template>
  <div>
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/home' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>柱状图</el-breadcrumb-item>
      <el-breadcrumb-item>堆叠柱状图</el-breadcrumb-item>
    </el-breadcrumb>
    <el-card>
      <div id="main"></div>
      <div id="main1"></div>
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
          text: '演示两个柱状图',
          textStyle: { color: '#82CEE2', fontSize: 30, left: 1, top: 1 }
        },
        // 提示框
        tooltip: { trigger: 'item', triggerOn: 'mousemove' },
        legend: { data: ['数据', '分数'] },
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
            type: 'bar',
            // 设置两个柱条之间的宽度和两组数据之间的宽度
            barGap: '30%',
            barCategoryGap: '40%'
          },
          {
            name: '分数',
            type: 'bar',
            data: [23, 44, 55, 66, 77, 88, 99]
          }
        ]
      }
      myChart.setOption(option)
    },
    getEChartsDouble() {
      const myChart1 = echarts.init(document.getElementById('main1'))
      /** @type EChartsOption */
      const option1 = {
        //   标题
        title: {
          text: '演示折叠柱状图',
          textStyle: { color: '#82CEE2', fontSize: 30, left: 1, top: 1 }
        },
        // 提示框
        tooltip: { trigger: 'item', triggerOn: 'mousemove' },
        legend: { data: ['数据', '分数'] },
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
            type: 'bar',
            // 通过stack属性来设置折叠
            stack: 'double',
            barWidth: '40%'
          },
          {
            name: '分数',
            type: 'bar',
            data: [23, 44, 55, 66, 77, 88, 99],
            stack: 'double'
          }
        ]
      }
      myChart1.setOption(option1)
    }
  },
  mounted() {
    this.getECharts()
    this.getEChartsDouble()
  }
}
</script>

<style lang="less" scoped>
.el-card {
  #main,
  #main1 {
    height: 555px;
    margin: 10px auto;
  }
}
</style>
