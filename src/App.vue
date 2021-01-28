<template>
  <div id="app">
    <router-view v-slot="{ Component }">
      <transition :name="'fade'">
        <keep-alive>
          <component :is="Component"></component>
        </keep-alive>
      </transition>
    </router-view>
    <footer class="tab-bar">
      <router-link to="/home" class="tab-item">home</router-link>
      <router-link to="/cinema" class="tab-item">cinema</router-link>
      <router-link to="/profile" class="tab-item">profile</router-link>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style lang="scss">
#app {
  font-size: 14px;
  min-height: 100vh;
  width: 100vw;
  overflow: hidden;
  .h1 {
    color: red;
  }
  .tab-bar {
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    height: 40px;
    background-color: red;
    color: #ffffff;
    padding: 5px 20px;
    display: flex;
    align-items: center;
    .tab-item {
      flex: 1;
      text-align: center;
    }
  }
  .fade-enter-from,
  .fade-leave-to {
    transform: translateX(100vw);
  }
  .fade-enter-active {
    transition: all 0.8s ease;
  }
}
</style>
