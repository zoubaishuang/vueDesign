<template>
  <div class="about">
    <div class="add" @click="toggle">
      <span>
        {{this.$store.state.city}}
        <i class="iconfont icon-weibiaoti1"></i>
      </span>
    </div>
    <div class="nav" v-show="ismovie" > <span class="nav-city">
        {{this.$store.state.city}}
        <i class="iconfont icon-weibiaoti1"></i>
      </span>
      <span>
        电影
        </span>
        <span>
          </span></div>
    <van-swipe :autoplay="3000">
      <van-swipe-item v-for="(image, index) in images" :key="index">
        <img v-lazy="image" />
      </van-swipe-item>
    </van-swipe>
    <div class="hotmovie" :class="{active:isActive}">
      <router-link to="/detail/nowPlaying">正在热映</router-link>
      <router-link to="/detail/comingSoon">即将上映</router-link>
    </div>
    <router-view></router-view>
  </div>
</template>
<script>
export default {
  data() {
    return {
      subjects: [],
      images: [
        require("../assets/imags/da.jpg"),
        require("../assets/imags/ee.jpg")
      ],
      isActive: false,
      ismovie:false
    };
  },

  mounted() {
    window.addEventListener("scroll", this.handle);
  },
  methods: {
    handle() {
      var height = document.documentElement.scrollTop;
      if (height > 250) {
        this.isActive = true;
        this.ismovie = true
      } else {
        this.isActive = false;
        this.ismovie = false
      }
    },
    toggle() {
      this.$router.back();
    }
  }
};
</script>
<style scoped>
img {
  width: 100%;
  height: 250px;
}
.hotmovie {
  font-size: 25px;
  display: flex;
  justify-content: space-around;
}
.active {
  position: fixed;
  top: 44px;
  width: 10rem;
  background: #fff;
}
.add {
  position: absolute;
  z-index: 50;
  height: 30px;
  width: 60px;
  background: rgb(90, 87, 87);
  border-radius: 20px 20px;
  font-size: 13px;
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0.4;
  color: #fff;
}
.nav{
  height: 44px;
  width: 100%;
  line-height: 44px;
  display: flex;
  justify-content: space-between;
  position: fixed;
  top: 0;
  background: #fff;
  z-index: 40;
}
.nav span{
  width: 33.3%;
  text-align: center;
}
.nav-city{
      font-size: 13px;
    max-width: 58px;
    overflow: hidden;
    -o-text-overflow: ellipsis;
    text-overflow: ellipsis;
    white-space: nowrap;
    color: #191a1b;
    padding-right: 5px;
}
</style>