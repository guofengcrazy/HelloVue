<template>
  <el-container>
    <el-aside width="200px">
      <el-menu>
        <el-sub-menu>
          <router-link to="/first"><el-menu-item index="1-1">first</el-menu-item></router-link>
          <router-link to="/second"><el-menu-item index="1-2">second</el-menu-item></router-link>
        </el-sub-menu>
      </el-menu>
    </el-aside>
    <el-container>
      <el-header>Header</el-header>
      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
import { defineComponent, reactive, ref } from 'vue'
export default defineComponent({
  name: 'helloWorld',
  props: {
  },
  components: {
  },
  setup () {
    const form = reactive({
      name: '',
      age: 0,
      sex: '0'
    })
    const list = reactive([
      {label: 1, value: 1},
      {label: 2, value: 2},
      {label: 3, value: 3},
      {label: 4, value: 4},
    ])
    const isShowRed = ref(false)
    const handleSubmit = () => {
      console.log(form)
    }
    const handleChange = () => {
      isShowRed.value = !isShowRed.value
    }
    return {
      form,
      handleSubmit,
      handleChange,
      isShowRed,
      list
    }
  }
})
</script>
<style scoped>
.el-header,
.el-footer {
  background-color: #b3c0d1;
  color: var(--el-text-color-primary);
  text-align: center;
  line-height: 60px;
  height: 60px;
}

.el-aside {
  background-color: #d3dce6;
  color: var(--el-text-color-primary);
  text-align: center;
  line-height: 200px;
  height: 100vh;
}

.el-main {
  background-color: #e9eef3;
  color: var(--el-text-color-primary);
  text-align: center;
  line-height: 160px;
  height: calc(100vh - 80px)
}
</style>