<template>
  <div>
    hello,{{isName}}
  </div>
</template>

<style lang="stylus" scoped>
  .demo{
    width 500px
    height 500px
    border 2px solid red
  }
</style>
<script>
   export default{
    data(){
      return {

      }
    },
    props:['isName']

  }
</script>
