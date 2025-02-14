<template>
  <el-menu
    :default-active="activeIndex"
    mode="horizontal"
    :ellipsis="false"
    v-acrylic
    background-color="transparent"
    @select="handleSelect"
    style="font-family: 'ALMM'"
  >
    <el-menu-item index="0">
      <img style="width: 120px" src="../assets/as.png" alt="Aurora Studio" />
    </el-menu-item>
    <el-menu-item index="1">首页</el-menu-item>
    <!--<el-menu-item index="2">产品</el-menu-item>-->
    <el-menu-item index="3">文档</el-menu-item>
    <el-menu-item index="4">关于</el-menu-item>
  </el-menu>
</template>

<script lang="js" setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const activeIndex = ref('1')
const router = useRouter()

const handleSelect = function (key) {
  const routesMap = {
    1: '/',
    2: '/products',
    4: '/about',
  }
  if (key === '3') {
    window.location.href = 'https://docs.aurorastudio.top'
  } else {
    router.push(routesMap[key] || '/')
  }
}
</script>

<style>
.el-menu--horizontal > .el-menu-item:nth-child(1) {
  margin-right: auto;
}
.el-menu--horizontal {
  --el-menu-horizontal-height: 75px;
}
</style>
