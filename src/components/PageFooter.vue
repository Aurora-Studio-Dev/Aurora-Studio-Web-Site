<template>
  <el-divider style="margin-top: -13px"/>
  <div class="footer">
    <div class="a">
      <img height="125" width="auto" src="@/assets/as.png"/>
      <p>Unleash your creativity, software shapes the future.</p>
    </div>
    <br/>
    <div class="c">
      <a target="_blank" href="https://beian.miit.gov.cn/">粤 ICP 备第 2025371287 号 - 1</a>
      <p>Copyright © {{ VisitingYear }} Aurora Studio. All rights reserved.</p>
    </div>
    <div style="height: 30px"/>
  </div>
</template>

<script lang="js">
import { ref } from 'vue'
const visible = ref(false)
export default {
  data() {
    return {
      VisitingYear: new Date().getFullYear(),
    }
  },
}
</script>

<style lang="scss" scoped>
.footer {
  margin-top: -25px;
  background-color: snow;
  .a{
    margin: 0 auto;
    text-align: center;
    position: relative;
    button: 0;
    p{
      text-align: center;
      margin-top: -20px;
      font-family: Mooli;
    }
  }
  .c{
    margin: 0 auto;
    text-align: center;
    position: relative;
    font-family: Mooli;
  }
}
</style>
