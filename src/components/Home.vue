<template>
  <el-container>
    <el-header>
      <el-button type="primary" size="default" @click="exit">退出</el-button>
    </el-header>
    <el-container>
      <el-aside width="200px">
        <el-aside width="200px" style="background-color: rgb(238, 241, 246)">
          <el-menu :router="true">
            <el-submenu index="1">
              <template slot="title">
                <i class="el-icon-message"></i>
                ECharts图表
              </template>
              <el-submenu index="1-1">
                <template slot="title">柱状图</template>
                <el-menu-item index="basicBar">基础柱状图</el-menu-item>
                <el-menu-item index="stackedColumnBar">堆叠柱状图</el-menu-item>
                <el-menu-item index="dynamicSortingBar">
                  动态排序柱状图
                </el-menu-item>
                <el-menu-item index="ladderBar">阶梯瀑布图</el-menu-item>
              </el-submenu>
              <el-submenu index="2-1">
                <template slot="title">折线图</template>
                <el-menu-item index="basicLine">基础折线图</el-menu-item>
                <el-menu-item index="stackedLine">堆叠折线图</el-menu-item>
                <el-menu-item index="areaLine">区域面积图</el-menu-item>
                <el-menu-item index="smoothLine">平滑曲线图</el-menu-item>
                <el-menu-item index="ladderLine">阶梯线图</el-menu-item>
              </el-submenu>
              <el-submenu index="3-1">
                <template slot="title">饼图</template>
                <el-menu-item index="basicPie">基础饼图</el-menu-item>
                <el-menu-item index="circlularPie">圆环图</el-menu-item>
                <el-menu-item index="rosePie">玫瑰图</el-menu-item>
              </el-submenu>
            </el-submenu>
          </el-menu>
        </el-aside>
      </el-aside>
      <el-main><router-view></router-view></el-main>
    </el-container>
  </el-container>
</template>

<script>
export default {
  data() {
    return {}
  },
  methods: {
    exit() {
      window.sessionStorage.clear()
      this.$router.push('/')
    }
  },
  mounted() {}
}
</script>

<style lang="less" scoped>
.el-container {
  height: 100%;
  .el-header {
    background-color: #b3c0d1;
    color: #333;
    text-align: center;
    line-height: 60px;
  }

  .el-aside {
    background-color: #d3dce6;
    color: #333;
    text-align: center;
    line-height: 200px;
  }

  .el-main {
    background-color: #e9eef3;
    color: #333;
    text-align: center;
    line-height: 160px;
  }
}
</style>
