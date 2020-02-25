<template>
  <div class="home">
    <div class="this-city">当前城市-</div>
    <div class="search">
      <i class="iconfont icon-sousuo"  ></i>
  <input type="text" value="输入城市名或拼音">
  </div>
    <p class="title">GPS定位你所在的城市</p>
    <p class="city">定位失败</p>
    <p class="title">热门城市</p>
     <router-link to="/detail"  v-for="item of play.hotCities" :key="item.id" @click.native="handleCity(item.name)"  >
      <span class="city">{{item.name}}</span>
         </router-link> 
          <van-index-bar >
            <div  v-for="(value,index) of play.cities" :key="index">
            <van-index-anchor :index="index" />
              <router-link to="/detail"  >
            <van-cell v-for="(val,i) in value" :key="i" :title="val.name" @click.native="handleCity(val.name)"/>
             </router-link> 
             </div>
        </van-index-bar>
  </div>
</template>
<script>
export default {
  name: 'home',
  data() {
    return {
      play:[]
    }
  },
  mounted(){
    
    this.axios.get('http://192.168.14.32:8080/city').then(res=>{
      console.log(res.data);
      this.play = res.data.data
    })
    
  },
  methods:{
   /*  toggle(){
      this.$router.push(`/detail`) */
      handleCity(city){
        this.$store.dispatch("changeCity",city)
      },
      handle(){
     var height =document.documentElement.scrollTop;
     if(height>250){
       this.isActive= true;
     }else{
        this.isActive = false
     }
   }
  }
}
</script>
<style  scoped>
.city{
  background: #f0e9e9;
    width: 80px;
    text-align: center;
    margin-right: 30px;
    display:inline-block;
    margin-bottom: 30px;
    color:#333;
}
.title{
  color:#5d5d5d;
  font-size: 15px;
}
input{
 width: 8rem;
 height: 20px;
 margin-top: 8px;
}
.search{
  background: #ebe7e7;
  height: 40px;
  text-align: center;
  margin-top: 10px;
  position: relative;
}
.search i {
  position: absolute;
  top:15px;
  left: 30px;
}
.home{
  font-size: 12px;
}
.home input{
  color:rgb(190, 183, 183);
  padding-left: 30px;
}
.this-city{
  font-size: 25px;
  text-align: center;
}

</style>
