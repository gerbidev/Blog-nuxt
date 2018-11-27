<template>
  <div class="container">
    <el-main>
      <el-form ref="form" :model="form" label-width="120px">
        <el-form-item label="Title">
          <el-input v-model="form.title"></el-input>
        </el-form-item>
        <el-form-item label="Description">
          <el-input v-model="form.description"></el-input>
        </el-form-item>
      </el-form>
    </el-main>
  </div>
</template>

<script>
  export default {
    name: 'editPost',
    data(){
      return {
        form: {
          title: '',
          description: ''
        }
      }
    }
  }
</script>

<style scoped>

</style>
