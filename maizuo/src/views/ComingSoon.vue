<template>
  <div class="container">
      <div class="item" v-for="item of subjects" :key="item.id" @click="handleclick(item.id)">
          <img  class="link" :src="item.images.large" alt="">
          <div class="message">
              <p>{{item.title}}</p>
              <p>观众评分 {{item.rating.average}}</p>
              <p> 主演 {{item.casts[0].name}} |{{item.casts[1].name}}  |{{item.casts[2].name}} </p>
          </div>
          <button>预购</button>
      </div>
  </div>
</template>

<script>
export default {
    data() {
        return {
            subjects:[]
        }
    },
mounted() {
    var url = `v2/movie/top250`;
    this.axios.get(url).then(res => {
      this.subjects = res.data.subjects;
    });
  }, 
  methods:{
      handleclick(id){
      this.$router.push(`/fimlsdetail?id=${id}`)
      }
  }
}
</script>

<style >
.link{
    width: 80px;
    height: 100px;
}
.item{
    font-size: 13px;
      display: flex;
      margin-top: 10px;
}
.message{
    margin-left: 30px;
    display: block;
    width:200px;
}
button{
    width:60px;
    height: 30px;
    margin-top: 20px;
    color:#FF5f16;
    border:1px solid #FF5f15;
    background: none;
}

</style>