<template>
  <div>
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/home' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>饼状图</el-breadcrumb-item>
      <el-breadcrumb-item>南丁格尔图</el-breadcrumb-item>
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
          }
        },
        // 提示框
        tooltip: { trigger: 'item', triggerOn: 'mousemove' },
        series: [
          {
            type: 'pie',
            data: [
              {
                value: 100,
                name: 'A'
              },
              {
                value: 200,
                name: 'B'
              },
              {
                value: 300,
                name: 'C'
              },
              {
                value: 400,
                name: 'D'
              },
              {
                value: 500,
                name: 'E'
              }
            ],
            roseType: 'area'
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
