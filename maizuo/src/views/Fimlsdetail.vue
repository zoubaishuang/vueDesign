<template>
  <div class="container">
  <i class="iconfont icon-fanhui"  @click="toggle"></i>
      <div class="hotmovie" :style="{opacity:opacity}"> 
          {{data.title}}
      </div>
    <div class="item">
      <img class="top" :src="data.images.large" alt />
    </div>
    <div class="message">
      <p class="title">{{data.title}}</p>
      <p class="pubdate">{{data.pubdate}}上映</p>
      <p>{{data.countries[0]}}|{{data.durations[0]}}</p>
      <div :class="{ expansion : active }" @click="handleClick" class="card-mid">{{data.summary}}</div>
      <!-- <p class="summary">{{data.summary |capitalize}}</p> -->
    </div>
    <p class="small-title">演职人员</p>

      <div class="btn">
        
        <div class="cats" v-for="item of data.casts" :key="item.id">
          <img :src="item.avatars.small" alt />
          <p class="actor-name">{{item.name}}</p>
        </div>
      </div>
      <p class="small-title">剧照</p>
      <div class="photo-btn">
          <div class="photo" v-for="data of data.photos" :key="data.id">
              <img :src="data.image" alt="">
          </div>
      </div>
  
  </div>
</template>

<script>
export default {
  data() {
    return {
      data: [],
      active: true,
        opacity:0
    };
    
  },
  computed: {
    id() {
      return this.$route.query.id;
    }
  },
  mounted() {
    this.axios.get(`v2/movie/subject/${this.id}`).then(res => {
      this.data = res.data;
      console.log(this.data);
    });
        window.addEventListener("scroll",this.handle)
  },

  methods: {
    handleClick() {
      this.active = !this.active;
    },
    handle(){
     var height =document.documentElement.scrollTop;
     if(height>20){
       this.opacity= 1;
     }else{
       this.opacity=0
     }
   },
    toggle(){
          this.$router.back()
      }
  }
};
</script>

<style scoped>
.item {
  width: 10rem;
  height: 240px;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  position: relative;
}
.top {
  width: 100%;
  height: 240px;
}
.message {
  font-size: 14px;
  color: #5d5d5d;
  width: 9rem;
  margin-left: 20px;
}
.title {
  font-size: 19px;
  color: black;
}
.expansion {
  white-space: pre-line;
 
  overflow: hidden;
  -webkit-line-clamp: 3;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-box-orient: vertical;
}
.cats img {
  height: 120px;
  width: 110px;
  margin-right: 10px;
}
.btn ,.photo-btn {
  display: flex;
  justify-content: space-between;
   overflow-x: auto;
   margin-top: 30px;
}
.photo img{
 width: 130px;
 height: 130px;
   margin-right: 10px;
   
}
.small-title{
    font-size: 18px;
    margin-left: 10px;
}
.actor-name{
  font-size: 12px;
 text-align: center;
}
.hotmovie{
 position: fixed;
 top:0;
 z-index:50;
 background: #fff;
 width: 100%;
 text-align: center;
 height: 44px; 
}
.icon-fanhui{
 position: fixed;
 left:3px;
 top:5px;
 z-index: 60;
 width: 30px;
 height: 30px;
 border-radius: 50%;
 background: #fff;
 opacity: 0.5;
 display: flex;
 justify-content: center;
 align-items: center
}

</style>