<template>
  <div>
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/home' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>柱状图</el-breadcrumb-item>
      <el-breadcrumb-item>阶梯瀑布图</el-breadcrumb-item>
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
      var data = [900, 345, 393, -108, -154, 135, 178, 286, -119, -361, -203]
      var help = []
      var positive = []
      var negative = []
      for (var i = 0, sum = 0; i < data.length; ++i) {
        if (data[i] >= 0) {
          positive.push(data[i])
          negative.push('-')
        } else {
          positive.push('-')
          negative.push(-data[i])
        }

        if (i === 0) {
          help.push(0)
        } else {
          sum += data[i - 1]
          if (data[i] < 0) {
            help.push(sum + data[i])
          } else {
            help.push(sum)
          }
        }
      }
      /** @type EChartsOption */
      const option = {
        title: {
          text: 'Waterfall'
        },
        tooltip: { trigger: 'item', triggerOn: 'mousemove' },
        grid: {
          left: '3%',
          right: '4%',
          bottom: '3%',
          containLabel: true
        },
        xAxis: {
          type: 'category',
          splitLine: { show: false },
          data: (function () {
            var list = []
            for (var i = 1; i <= 11; i++) {
              list.push('Oct/' + i)
            }
            return list
          })()
        },
        yAxis: {
          type: 'value'
        },
        series: [
          {
            type: 'bar',
            stack: 'all',
            itemStyle: {
              BorderColor: 'rgba(0,0,0,0)',
              color: 'rgba(0,0,0,0)'
            },
            data: help
          },
          {
            name: 'positive',
            type: 'bar',
            stack: 'all',
            data: positive
          },
          {
            name: 'negative',
            type: 'bar',
            stack: 'all',
            data: negative,
            itemStyle: {
              color: '#f33'
            }
          }
        ]
      }
      myCharts.setOption(option)
    }
  },
  mounted() {
    this.getCharts()
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
