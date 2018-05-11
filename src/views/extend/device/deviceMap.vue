<template>
  <div class="app-container calendar-list-container">
    <el-row :gutter="20">
      <el-col :span="6">
        <div class="grid-content bg-green">
          <i class="iconSet"></i>
          <div class="colBox">
            <div class="colname">当前设备总数</div>
            <div class="colcount">1985</div>
          </div>
        </div>
      </el-col>
      <el-col :span="6">
        <div class="grid-content bg-green">
          <i class="iconSet"></i>
          <div class="colBox">
            <div class="colname">今日设备新增数</div>
            <div class="colcount">0</div>
          </div>
        </div>
      </el-col>
      <el-col :span="6">
        <div class="grid-content bg-green">
          <i class="iconSet"></i>
          <div class="colBox">
            <div class="colname">当前设备故障数</div>
            <div class="colcount">0</div>
          </div>
        </div>
      </el-col>

      <el-col :span="6">
        <div class="grid-content bg-green">
          <i class="iconSet"></i>
          <div class="colBox">
            <div class="colname">今日设备订单日</div>
            <div class="colcount">0</div>
          </div>
        </div>
      </el-col>

    </el-row>

    <!--地图容器-->
    <div id="XSDFXPage" class="XSDFXPage"></div>
  </div>
</template>

<script>

  export default {
    name: 'devicemap',
    data() {
        return {

        };
    },

    mounted() {
      // 百度地图API功能
      // 创建Map实例
      var map = new BMap.Map("XSDFXPage", {enableMapClick: true});
      // 初始化地图,设置中心点坐标和地图级别
      map.centerAndZoom(new BMap.Point(104.114129, 37.550339), 5);
      // 添加地图类型控件
      map.addControl(new BMap.MapTypeControl());
      // 开启鼠标滚轮缩放
      map.enableScrollWheelZoom(true);
      map.addControl(new BMap.ScaleControl({anchor: BMAP_ANCHOR_TOP_LEFT}));
      map.addControl(new BMap.NavigationControl());
      map.addControl(new BMap.NavigationControl({
        anchor: BMAP_ANCHOR_BOTTOM_RIGHT,
        type: BMAP_NAVIGATION_CONTROL_SMALL
      }));
    }
  }
</script>

<style scoped>
  .XSDFXPage{
    width: 100%;
    height: 800px;
    overflow: hidden;
    margin: 0;
    font-family: "微软雅黑";
    margin-top: 30px;
  }
  .el-col {
    border-radius: 4px;
  }

  .grid-content {
    border-radius: 4px;
    height:114px;
    margin-top: 20px;
    padding:27px;
    color:white;
    display: flex;
  }
  .grid-content i{
    display: block;
    width: 60px;
    height: 60px;
    margin-right: 25px;
  }
  .row-bg {
    padding: 10px 0;
    background-color: #f9fafc;
  }
  .colname{
    font-size: 14px;
    margin-top: 5px;
  }
  .colcount{
    font-size: 27px;
  }
</style>
