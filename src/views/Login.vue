<template>
  <div class="login">
    <el-row
      type="flex"
      justify="center"
      align="middle"
      style="height: 100vh; margin-bottom: 0"
    >
      <el-col :span="4">
        <el-container direction="vertical">
          <el-row>
            <el-col>
              <p>Por favor entre com suas credenciais</p>
            </el-col>
          </el-row>
          <el-row type="flex" justify="center">
            <el-col :span="24">
              <el-input placeholder="E-mail" v-model="input" clearable>
              </el-input>
            </el-col>
          </el-row>
          <el-row type="flex" justify="center">
            <el-col :span="24">
              <el-input placeholder="E-mail" v-model="input" clearable>
              </el-input>
            </el-col>
          </el-row>
          <el-row type="flex" justify="end">
            <el-col class="col-end" :span="8">
              <el-button type="success">Login</el-button>
            </el-col>
          </el-row>
        </el-container>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      input: "",
    }
  },
  name: "Login",
  components: {},
}
</script>

<style lang="scss" scoped>
.el-row {
  margin-bottom: 20px;
}

.col-end {
  display: flex;
  justify-content: flex-end;
}
</style>
