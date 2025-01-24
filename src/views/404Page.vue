<template>
  <div>
    <el-result icon="error" title="404 Not Found" sub-title="页面未找到！">
      <template #extra>
        <el-button @click="dialogVisible = true" size="large" type="danger">详细信息</el-button>
        <el-button @click="linkTo" size="large" type="primary">返回主页</el-button>
        <el-dialog
          v-model="dialogVisible"
          title="我为什么会看到此页面？"
          width="500"
          :before-close="handleClose"
        >
          <span
            >这个页面可能去旅行了，也可能翘班了，总之，它消失在这世界上了，希望你能够理解这些调皮的页面。</span
          >
          <template #footer>
            <el-button type="primary" @click="dialogVisible = false">我已了解</el-button>
          </template>
        </el-dialog>
      </template>
    </el-result>
  </div>
</template>
<script setup>
import { useRouter } from 'vue-router'
import { ref } from 'vue'
import { ElMessageBox } from 'element-plus'

const router = useRouter()
const linkTo = () => {
  router.push('/')
}

const dialogVisible = ref(false)
</script>

<style lang="scss" scoped>
div {
  height: 100vh;
}
</style>
