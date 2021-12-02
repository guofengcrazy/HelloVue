<template>
  <el-container>
    <el-aside width="200px">Aside</el-aside>
    <el-container>
      <el-header>Header</el-header>
      <el-main>
        <el-form :model="form">
          <el-form-item label="姓名">
            <el-input v-model="form.name"></el-input>
          </el-form-item>
          <el-form-item label="年龄">
            <el-input-number v-model="form.age"></el-input-number>
          </el-form-item>
          <el-form-item label="性别">
            <el-select v-model="form.sex">
              <el-option label="男" value="0"></el-option>
              <el-option label="女" value="1"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item>
            <el-button @click="handleSubmit">提交</el-button>
          </el-form-item>
        </el-form>
        <div v-if="isShowRed" style="width: 200px; height: 200px; background: red">小红</div>
        <div v-if="!isShowRed" style="width: 200px; height: 200px; background: blue">小蓝</div>
        <el-button @click="handleChange">切换</el-button>
        <ul>
          <li v-for="item in list" :key="item.value">{{ item.label}}</li>
        </ul>
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