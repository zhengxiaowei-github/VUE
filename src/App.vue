<template><!--模板的视图渲染-->

  <div id="app">
    <router-link to="/login">login</router-link>
    <router-view></router-view>
  </div>
</template>

<script>

export default {
  name: 'App',   //这个文件对外暴露的标识
}
</script>

