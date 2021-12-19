<template>
  <div>
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/home' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>饼状图</el-breadcrumb-item>
      <el-breadcrumb-item>圆环图</el-breadcrumb-item>
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
          textStyle: {
            color: '#82CEE2',
            fontSize: 30
          },
          left: 'center',
          top: 'center'
        },
        // 提示框
        tooltip: { trigger: 'item', triggerOn: 'mousemove' },
        series: [
          {
            type: 'pie',
            data: [
              { value: 23, name: 'A' },
              { value: 34, name: 'B' },
              { value: 45, name: 'C' }
            ],
            radius: ['40%', '70%']
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
