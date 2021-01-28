<template>
  <div id="home" @touchend="handler">
    <p>home</p>
    <p>{{ animatedNumber }}</p>
    <button @click="shuffle">click me</button>
    <transition-group name="flip-list" tag="ul">
      <li v-for="item in items" :key="item">
        {{ item }}
      </li>
    </transition-group>
    <p>{{ ipt }}</p>
    <input
      ref="iptEle"
      type="text"
      @change="onChange"
      @blur="blurMsgHandler"
      @focus="focusHandler"
      v-model="ipt"
      pattern="[0-9]*"
    />
    <span @click="clickBtn">点我</span>
    <p>{{ blurMsg }}</p>
    <p>{{ isFocus }}</p>
  </div>
</template>

<script>
import { ref, watch, onMounted } from 'vue'
export default {
  name: 'Home',
  setup() {
    const items = ref([4, 9, 6, 7, 10, 1, 8, 3, 2, 5])
    let animatedNumber = ref(0)
    const createRandomNum = (min, max) => Math.floor(Math.random() * (min + max) + min)
    const movePos = () => {
      const index1 = createRandomNum(0, 10)
      const index2 = createRandomNum(0, 10)
      const num = items.value.splice(index1, 1)
      items.value.splice(index2, 0, ...num)
    }
    const isFocus = ref(false)
    let start
    const shuffle = e => {
      blurMsg.value = 333
      // if (isFocus) {
      //   e.preventDefault()
      // }
      // console.log('e :>> ', e)
      // for (let i = 0; i < 5; i++) {
      //   movePos()
      // }
      items.value.sort((a, b) => a - b)
    }
    const handler = e => {
      if (isFocus.value) {
        console.log('2 :>> ', 2)
        blurMsg.value += 4444
        e.preventDefault()
      } else {
        blurMsg.value = 3
        console.log('3 :>> ', 3)
      }
    }

    const iptEle = ref()
    const onChange = e => {
      console.log('e :>> ', e)
      console.log('ipt :>> ', ipt)
    }

    const clickBtn = () => {
      console.log('iptEle :>> ', iptEle)
      iptEle.value.focus()
    }
    const focusHandler = () => {
      isFocus.value = true
    }
    const ipt = ref('')

    const blurMsg = ref('')
    const blurMsgHandler = () => {
      blurMsg.value += 1
    }

    onMounted(() => {
      let originHeight = document.documentElement.clientHeight || document.body.clientHeight
      window.addEventListener(
        'resize',
        e => {
          let resizeHeight = document.documentElement.clientHeight || document.body.clientHeight
          if (originHeight <= resizeHeight) {
            iptEle.value.blur()
            isFocus.value = false
          }
        },
        false
      )
    })

    watch(ipt, val => {
      // console.log('ipt :>> ', ipt)
      // console.log('val.value :>> ', val.value)
      console.log('val :>> ', val)
      ipt.value = val.replace(/([^\d]|\.)/g, '')
      console.log('ipt.value :>> ', ipt.value)
    })
    return {
      items,
      shuffle,
      animatedNumber,
      ipt,
      onChange,
      iptEle,
      clickBtn,
      blurMsgHandler,
      blurMsg,
      isFocus,
      focusHandler,
      handler
    }
  }
}
</script>

<style lang="scss" scoped>
#home {
  min-height: 100vh;
  width: 100vw;
  .flip-list-move {
    transition: transform 0.8s ease;
  }
  input {
    background-color: #eaeaea;
  }
}
</style>
