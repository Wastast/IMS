<template>
  <div class="index">
    <el-table :data="tableData" border style="width: 100%">
      <el-table-column prop="id" label="ID"> </el-table-column>
      <el-table-column prop="name" label="姓名"> </el-table-column>
      <el-table-column label="操作">
        <template slot-scope="scope">
          <el-button size="mini">编辑</el-button>
          <el-button size="mini" type="danger">删除</el-button>
          <el-button size="mini" type="success">授权</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
import { findRole } from '@/api/role'
export default {
  name: 'index',
  data() {
    return {
      tableData: []
    }
  },
  computed: {},
  watch: {},
  methods: {
    // 过滤角色数据
    filterRole(data) {
      let arr = []
      return data
    }
  },
  mounted() {
    findRole().then(data => {
      let list = this.filterRole(data.data.list)
      this.tableData = list
    })
  }
}
</script>

<style scoped lang="scss"></style>
