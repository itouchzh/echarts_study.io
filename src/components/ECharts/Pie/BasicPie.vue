<template>
  <div>
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/home' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>饼状图</el-breadcrumb-item>
      <el-breadcrumb-item>基础饼状图</el-breadcrumb-item>
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
        // legend: { data: ['数据'] },
        // x轴
        series: [
          {
            type: 'pie',
            data: [
              {
                value: 335,
                name: '直接访问'
              },
              {
                value: 234,
                name: '联盟广告'
              },
              {
                value: 1548,
                name: '搜索引擎'
              }
            ]
            // radius: ['50%']
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
