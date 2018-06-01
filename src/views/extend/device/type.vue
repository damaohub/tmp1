<template>
  <div class="app-container calendar-list-container">
    <div class="filter-container">
      <el-input @keyup.enter.native="handleFilter"   placeholder="类型名称" style="width: 200px;" class="filter-item"
                v-model="listQuery.groupName">
      </el-input>
      <el-button class="filter-item" type="primary" v-waves icon="el-icon-search" @click="handleFilter">查询</el-button>

    </div>

    <el-table :data="list" v-loading="listLoading" element-loading-text="加载中" border fit highlight-current-row
              style="width: 100%">

      <el-table-column min-width="50px" label="Id">
        <template scope="scope">
          <span>{{scope.row.id}}</span>
        </template>
      </el-table-column>

      <el-table-column min-width="100px" label="名称">
        <template scope="scope">
          <span>{{scope.row.typeName}}</span>
        </template>
      </el-table-column>
      <el-table-column min-width="200px" label="类型图标">
        <template scope="scope">
          <img :src="scope.row.icon" height="80" width="80"></img>
        </template>
      </el-table-column>
      <el-table-column min-width="200px" label="传感器列表">
        <template scope="scope">
          <span>{{scope.row.sensorList}}</span>
        </template>
      </el-table-column>
      <el-table-column min-width="200px" label="功能列表">
        <template scope="scope">
          <span>{{scope.row.funcList}}</span>
        </template>
      </el-table-column>

      <el-table-column align="left" label="操作"  width="250">
        <template scope="scope">
          <el-button size="small" type="success" @click="handleUpdate(scope.row)">编辑
          </el-button>

        </template>
      </el-table-column>
    </el-table>
    <el-dialog :title="textMap[dialogStatus]" :visible.sync="dialogFormVisible" close = "onClose">
      <el-form class="small-space" :model="temp" label-position="left" label-width="70px"
               style='width: 400px; margin-left:50px;'>
        <el-form-item label="类型名称">
          <el-input v-model="temp.typeName"></el-input>
        </el-form-item>

      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="updateData">确 定</el-button>
      </div>
    </el-dialog>
    <div class="pagination-container">
      <el-pagination background @size-change="handleSizeChange" @current-change="handleCurrentChange"
                     :current-page="listQuery.page" :page-sizes="[10,20,30, 50]"
                     :page-size="listQuery.limit"
                     layout="total, sizes, prev, pager, next, jumper" :total="total">
      </el-pagination>
    </div>

  </div>
</template>

<script>
  import { queryDeviceTypeList, queryDeviceTypeCount, updateDeviceType,createDeviceType } from '@/api/device'

  import waves from '@/directive/waves'

  export default {
    name: 'complexTable',
    directives: {
      waves
    },
    data() {
      return {
        tableKey: 0,
        list: null,
        total: null,
        listLoading: true,
        listQuery: {
          page: 1,
          limit: 20,
          groupName: ''
        },
        temp: {

        },
        dialogFormVisible: false,
        dialogStatus: '',
        textMap: {
          update: '编辑',
          create: '创建'
        },
        dialogPvVisible: false,
        downloadLoading: false
      }
    },
    filters: {},
    created() {
      this.getList()
    },
    methods: {
      getList() {
        this.listLoading = true
        queryDeviceTypeCount(this.listQuery).then(response => {
          this.total = response.data.data
        })
        queryDeviceTypeList(this.listQuery).then(response => {
          this.list = response.data.data
          this.listLoading = false
        })
      },
      handleFilter() {
        this.listQuery.page = 1
        this.getList()
      },
      handleSizeChange(val) {
        this.listQuery.limit = val
        this.getList()
      },
      handleCurrentChange(val) {
        this.listQuery.page = val
        this.getList()
      },
      handleModifyStatus(row, status) {
        this.$message({
          message: '操作成功',
          type: 'success'
        })
        row.status = status
      },
      resetTemp() {
        this.temp = {
          id: undefined
        }
      },

      handleUpdate(row) {
        this.temp = {
          id: row.id,
          groupName: row.groupName,
          videoUrl: row.videoUrl,
          memo: row.memo,
          coverUrl: row.videoCover,
          icon: row.icon

        }
        this.dialogStatus = 'update'
        this.dialogFormVisible = true
      },
      onClose() {
        console.log('关闭对话框')
      },
      updateData() {
        debugger
        const tempData = Object.assign({}, this.temp)
        updateDeviceType(tempData).then(() => {
          this.dialogFormVisible = false
          this.$notify({
            title: '成功',
            message: '更新成功',
            type: 'success',
            duration: 2000
          })
          this.handleFilter()
        })
      }
    }
  }
</script>
