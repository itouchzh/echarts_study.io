<template>
  <div>
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/home' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>柱状图</el-breadcrumb-item>
      <el-breadcrumb-item>堆叠柱状图</el-breadcrumb-item>
    </el-breadcrumb>
    <el-card>
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
      const myCharts1 = echarts.init(document.getElementById('main1'))
      const data = []
      for (let i = 0; i < 5; ++i) {
        data.push(Math.round(Math.random() * 200))
      }
      /** @type EChartsOption */
      const option1 = {
        title: {
          text: '动态排序柱状图',
          textStyle: { color: 'pink' },
          left: 30,
          top: 0
        },
        tooltip: { trigger: 'item', triggerOn: 'mousemove' },
        xAxis: {
          max: 'dataMax'
        },
        yAxis: {
          type: 'category',
          data: ['A', 'B', 'C', 'D', 'E'],
          // y轴从下往上是从小到大
          inverse: true,
          // 第一次排序动画时长
          animationDuration: 300,
          // 第一次以后排序动画时长
          animationDurationUpdate: 300
          // 默认显示所有柱条，可以设置为前n-1个
          // max: 2
        },
        series: [
          {
            realtimeSort: true,
            name: 'x',
            type: 'bar',
            data: data,
            label: {
              show: true,
              position: 'right',
              // 随时修改标签
              valueAnimation: true
            },
            color: 'orange'
          }
        ],
        legend: {
          show: true
        },
        animationDuration: 3000,
        animationDurationUpdate: 3000,
        animationEasing: 'linear',
        animationEasingUpdate: 'linear'
      }
      function update() {
        const data = option1.series[0].data
        for (let i = 0; i < data.length; ++i) {
          if (Math.random() > 0.9) {
            data[i] += Math.round(Math.random() * 2000)
          } else {
            data[i] += Math.round(Math.random() * 200)
          }
        }
        myCharts1.setOption(option1)
      }
      setInterval(() => {
        update()
      }, 3000)
    }
  },
  mounted() {
    this.getECharts()
  }
}
</script>

<style lang="less" scoped>
.el-card {
  #main1 {
    height: 555px;
    margin: 10px auto;
  }
}
</style>
