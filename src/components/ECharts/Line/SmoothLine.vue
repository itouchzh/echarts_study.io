<template>
  <div>
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/home' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>折线图</el-breadcrumb-item>
      <el-breadcrumb-item>光滑折线图</el-breadcrumb-item>
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
          text: '平滑曲线图',
          textStyle: { fontSize: 30 },
          link: 'http://www.baidu.com'
        },
        tooltip: {
          trigger: 'axis',
          triggerOn: 'mousemove'
        },
        legend: {
          data: ['数字', '数字1']
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
            name: '数字',
            data: [130, 230, 224, 218, 135, 147, 260],
            type: 'line',
            // 设置折线的样式
            lineStyle: {
              color: 'green',
              width: 4,
              type: 'dashed'
            },
            // 设置折线上点的样式
            itemStyle: {
              color: 'pink',
              borderWidth: 2,
              borderColor: 'red'
            },
            // 折线的数据点的标签
            label: {
              show: true,
              position: 'top',
              fontSize: 20
            },
            smooth: true
          },
          {
            name: '数字1',
            data: [30, 20, 30, 40, 50, 60, 70],
            type: 'line',
            lineStyle: { color: 'yellow' },
            label: { show: true, position: 'top', fontSize: 20 },
            // 设置重叠区域样式
            // 平滑曲线图
            smooth: true
            // stack: 'data'
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
