<template>
  <div class="index">
    <div class="div-title">
      <el-button type="primary" @click="adddRoute()">添加</el-button>
    </div>
    <div class="div-table">
      <el-table
        :data="tableData"
        style="width: 100%;margin-bottom: 20px;"
        border
        :tree-props="{ children: 'children', hasChildren: 'hasChildren' }"
      >
        <el-table-column prop="id" label="ID" align="center"> </el-table-column>
        <el-table-column prop="name" label="路由名称" align="center"> </el-table-column>
        <el-table-column prop="status" label="路由状态" align="center"> </el-table-column>
        <el-table-column prop="type" label="所属类型" align="center"> </el-table-column>
        <el-table-column prop="url" label="路由路径" align="center"> </el-table-column>
        <el-table-column label="操作" align="center">
          <template slot-scope="scope">
            <el-button size="mini" @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
            <el-button size="mini" type="danger" @click="handleDelete(scope.$index, scope.row)">
              删除
            </el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
    <div class="div-dialog">
      <el-dialog
        title="添加路由"
        :visible.sync="dialogVisible"
        width="20%"
        :before-close="handleClose"
      >
        <el-form
          :model="ruleForm"
          :rules="rules"
          ref="ruleForm"
          label-width="100px"
          class="demo-ruleForm"
        >
          <el-form-item label="路由路径" prop="url">
            <el-input v-model="ruleForm.url"></el-input>
          </el-form-item>
          <el-form-item label="路由名称" prop="name">
            <el-input v-model="ruleForm.name"></el-input>
          </el-form-item>
          <el-form-item label="路由备注" prop="remark">
            <el-input v-model="ruleForm.remark"></el-input>
          </el-form-item>
          <el-form-item label="是否有效" prop="status">
            <el-radio v-model="ruleForm.status" :label="1">有效</el-radio>
            <el-radio v-model="ruleForm.status" :label="0">无效</el-radio>
          </el-form-item>
          <el-form-item label="所属类别" prop="status">
            <el-radio v-model="ruleForm.type" :label="0">模块</el-radio>
            <el-radio v-model="ruleForm.type" :label="1">功能</el-radio>
            <el-radio v-model="ruleForm.type" :label="2">功能点</el-radio>
          </el-form-item>
        </el-form>
        <span slot="footer" class="dialog-footer">
          <el-button type="primary" @click="addTable()">确 定</el-button>
        </span>
      </el-dialog>
    </div>
  </div>
</template>

<script>
import { TipsPop } from '@/utils/el_ui.js'
import { addRouter, deleteRouter, findRouter, updateRouter } from '@/api/back-router'
export default {
  name: 'index',
  data() {
    return {
      tableData: [],
      dialogVisible: false,
      ruleForm: {
        name: '',
        remark: '',
        status: 1,
        type: 0,
        url: ''
      },
      rules: {
        name: [{ required: true }],
        status: [{ required: true }],
        url: [{ required: true }]
      }
    }
  },
  computed: {},
  watch: {},
  methods: {
    // 添加路由
    adddRoute() {
      this.dialogVisible = true
    },
    // dialog关闭前执行
    handleClose(done) {
      this.resetFrom()
      done()
    },
    // 添加表格数据
    addTable() {
      // 表单验证
      this.$refs['ruleForm'].validate((data, value) => {
        if (data) {
          let { name, remark, status, type, url } = this.ruleForm
          addRouter({
            name,
            remark,
            status,
            type,
            url
          })
            .then(data => {
              let value = data.data
              this.getRouter()
              this.resetFrom()
              this.dialogVisible = false
            })
            .catch(() => {})
        }
      })
    },
    // 删除表格数据
    handleDelete(index, row) {
      this.$confirm('确认删除该条数据?')
        .then(() => {
          deleteRouter({
            id: row.id
          })
            .then(data => {
              this.getRouter()
            })
            .catch(() => {})
        })
        .catch(() => {})
    },
    // 清除表单
    resetFrom() {
      this.$refs['ruleForm'].resetFields()
    },
    // 过滤数据
    filerData(data) {
      let arr = []
      if (data.length == 0) {
        return []
      }
      data.forEach(item => {
        let { id, name, status, type, url } = item
        let obj = { id, name, status, type, url }
        arr.push(obj)
      })
      return arr
    },
    getRouter() {
      findRouter().then(data => {
        let list = this.filerData(data.data)
        this.tableData = list
      })
    }
  },
  mounted() {
    this.getRouter()
  }
}
</script>

<style scoped lang="scss">
.index {
  > div {
    display: flow-root;
  }
  .div-title {
    margin-bottom: 10px;
  }
}
</style>
