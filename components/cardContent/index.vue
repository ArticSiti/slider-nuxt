<template>
  <div class="content">
    <div class="content-container">

    </div>
  </div>
</template>
<script>
export default {
  name: 'Content',
  data (){
    return{
      posts: [],
    }
  },
  methods:{
    cat(){
      axios
        .then()
    }
  },
  mounted() {
    axios
  }

}
</script>
<style lang="scss" scoped>
.content{
  &-container{
    width: 100px;
    height: 100px;
    background: red;
  }
}
</style>
