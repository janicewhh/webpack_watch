<template>
  <div>
    <!-- <div>{{name1}} 22222</div> -->
     <testCom :isName="name1"></testCom>

  </div>

</template>
<script>
import testCom from '../../components/testCom'
export default {
  data () {
    return {
      name1:'jack'
    }
  },
  methods:{

  },
  components: {
    testCom
  },
  mounted(){

  }

}
</script>
<style lang="less" src="./index.less"></style>
