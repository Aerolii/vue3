<template>
  <div id="cinema" ref="demo">
    <h1>{{ a }}</h1>
    <button @click="onClick">click me</button>
    <slot name="sl1"></slot>
  </div>
</template>

<script>
// import { ref } from 'vue'
import { a, onClick } from '@utils/demo'
import { onMounted } from 'vue'
export default {
  name: 'Cinema',
  // data() {
  //   return {
  //     demo: true
  //   }
  // },
  setup(props, ctx) {
    ;(function() {
      for (var i = 0; i < 10; i++) {
        // ;(function(i) {
        //   console.log('i :>> ', i)
        // })(i)
        const printLn = function(i) {
          console.log('i :>> ', i)
        }
        printLn(i)
        // setTimeout(
        //   (i => {
        //     console.log('i :>> ', i)
        //   }).bind(null, i),
        //   1
        // )
      }
    })()
    function _const(key, value) {}
    // console.log('i :>> ', i)

    //  1.写一个 mySetInterVal(fn, a, b),每次间隔 a,a+b,a+2b 的时间，然后写一个 myClear，停止上面的 mySetInterVal
    const mySetInterVal = (fn, a, b) => {
      const timmer = {}
      const f = (fn, a, b) => {
        timmer.id = setTimeout(() => {
          fn(a)
          f(fn, a + b, b)
        }, a)
      }
      f(fn, a, b)
      return timmer
    }
    const s = mySetInterVal(console.log, 1000, 1000)
    console.log('s :>> ', s)
    const myClear = timmer => {
      timmer && clearTimeout(timmer.id)
    }
    setTimeout(() => {
      myClear(s)
    }, 5000)

    /**
     * 合并二维有序数组为一维有序数组
     * let arr1 = [[1,2,3],[4,5,6],[7,8,9],[1,2,3],[4,5,6]];
     * let arr2 = [[1,4,6],[7,8,10],[2,6,9],[3,7,13],[1,5,12]];
     */
    let arr1 = [
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 9],
      [1, 2, 3],
      [4, 5, 6],
      [1, 4, 6],
      [7, 8, 10],
      [2, 6, 9],
      [3, 7, 13],
      [1, 5, 12],
      [1, 5, 12],
      [1, 4, 6],
      [7, 8, 10],
      [2, 6, 9],
      [3, 7, 13],
      [1, 5, 12],
      [1, 5, 12],
      [1, 4, 6],
      [7, 8, 10],
      [2, 6, 9],
      [3, 7, 13],
      [1, 5, 12],
      [1, 5, 12],
      [1, 4, 6],
      [7, 8, 10],
      [2, 6, 9],
      [3, 7, 13],
      [1, 5, 12],
      [1, 5, 12],
      [1, 4, 6],
      [7, 8, 10],
      [2, 6, 9],
      [3, 7, 13],
      [1, 5, 12],
      [1, 5, 12],
      [1, 4, 6],
      [7, 8, 10],
      [2, 6, 9],
      [3, 7, 13],
      [1, 5, 12],
      [1, 5, 12],
      [1, 4, 6],
      [7, 8, 10],
      [2, 6, 9],
      [3, 7, 13],
      [1, 5, 12],
      [1, 5, 12],
      [1, 4, 6],
      [7, 8, 10],
      [2, 6, 9],
      [3, 7, 13],
      [1, 5, 12],
      [1, 5, 12],
      [1, 4, 6],
      [7, 8, 10],
      [2, 6, 9],
      [3, 7, 13],
      [1, 5, 12],
      [1, 5, 12],
      [1, 4, 6],
      [7, 8, 10],
      [2, 6, 9],
      [3, 7, 13],
      [1, 5, 12],
      [1, 5, 12],
      [1, 4, 6],
      [7, 8, 10],
      [2, 6, 9],
      [3, 7, 13],
      [1, 5, 12],
      [1, 5, 12]
    ]
    let arr2 = [
      [1, 4, 6],
      [7, 8, 10],
      [2, 6, 9],
      [3, 7, 13],
      [1, 5, 12],
      [1, 5, 12],
      [1, 4, 6],
      [7, 8, 10],
      [2, 6, 9],
      [3, 7, 13],
      [1, 5, 12],
      [1, 5, 12]
    ]
    const sortFn = (arr, ele) => {
      const c = Math.floor(arr.length / 2)
    }
    const mergeS = arr => {
      const result = []
      while (arr.length) {
        const s = arr.shift()
        while (s.length) {
          result.push(s.shift())
        }
      }
      return result.sort((a, b) => a - b)
    }
    const t1 = new Date()
    const ms = mergeS(arr1)
    // // return Array.(result)
    const t2 = new Date()
    console.log('ms :>> ', ms)
    console.log('t2-t1 :>> ', t2 - t1)

    function merge(arr1, arr2) {
      var result = []
      while (arr1.length > 0 && arr2.length > 0) {
        if (arr1[0] < arr2[0]) {
          /*shift()方法用于把数组的第一个元素从其中删除，并返回第一个元素的值。*/
          result.push(arr1.shift())
        } else {
          result.push(arr2.shift())
        }
      }
      return result.concat(arr1).concat(arr2)
    }

    function mergeSort(arr) {
      let lengthArr = arr.length
      if (lengthArr === 0) {
        return []
      }
      while (arr.length > 1) {
        let arrayItem1 = arr.shift()
        let arrayItem2 = arr.shift()
        let mergeArr = merge(arrayItem1, arrayItem2)
        arr.push(mergeArr)
      }
      return arr[0]
    }

    let arr3 = [
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 9],
      [1, 2, 3],
      [4, 5, 6],
      [1, 4, 6],
      [7, 8, 10],
      [2, 6, 9],
      [3, 7, 13],
      [1, 5, 12],
      [1, 5, 12],
      [1, 4, 6],
      [7, 8, 10],
      [2, 6, 9],
      [3, 7, 13],
      [1, 5, 12],
      [1, 5, 12],
      [1, 4, 6],
      [7, 8, 10],
      [2, 6, 9],
      [3, 7, 13],
      [1, 5, 12],
      [1, 5, 12],
      [1, 4, 6],
      [7, 8, 10],
      [2, 6, 9],
      [3, 7, 13],
      [1, 5, 12],
      [1, 5, 12],
      [1, 4, 6],
      [7, 8, 10],
      [2, 6, 9],
      [3, 7, 13],
      [1, 5, 12],
      [1, 5, 12],
      [1, 4, 6],
      [7, 8, 10],
      [2, 6, 9],
      [3, 7, 13],
      [1, 5, 12],
      [1, 5, 12],
      [1, 4, 6],
      [7, 8, 10],
      [2, 6, 9],
      [3, 7, 13],
      [1, 5, 12],
      [1, 5, 12],
      [1, 4, 6],
      [7, 8, 10],
      [2, 6, 9],
      [3, 7, 13],
      [1, 5, 12],
      [1, 5, 12],
      [1, 4, 6],
      [7, 8, 10],
      [2, 6, 9],
      [3, 7, 13],
      [1, 5, 12],
      [1, 5, 12],
      [1, 4, 6],
      [7, 8, 10],
      [2, 6, 9],
      [3, 7, 13],
      [1, 5, 12],
      [1, 5, 12],
      [1, 4, 6],
      [7, 8, 10],
      [2, 6, 9],
      [3, 7, 13],
      [1, 5, 12],
      [1, 5, 12]
    ]
    let arr4 = [
      [1, 4, 6],
      [7, 8, 10],
      [2, 6, 9],
      [3, 7, 13],
      [1, 5, 12],
      [1, 5, 12]
    ]
    const t3 = new Date()
    const m1 = mergeSort(arr3)
    // const m2 = mergeSort(arr4)
    console.log('m1,m2 :>> ', m1)
    const t4 = new Date()
    console.log('t4-t3 :>> ', t4 - t3)
    // const a = 59
    // if (a > 79) {
    //   console.log('1 :>> ', 1)
    // } else if (a < 60) {
    //   console.log('2 :>> ', 2)
    // } else if (a > 59 && a < 80) {
    //   console.log('3 :>> ', 3)
    // }
    // const fn = () => {
    //   console.log('1 :>> ', 1)
    //   return 1
    // }
    // const a = fn
    // const newClick = onClick()
    // console.log('newClick :>> ', newClick)
    // console.log('newClick :>> ', newClick)
    // console.log('props :>> ', props)
    // console.log('ctx :>> ', ctx.slots)
    // console.log('a,onClick :>> ', a, onClick)
    // const a = ref(123)
    // console.log('a :>> ', a)
    // const onClick = () => {
    //   a.value += 1
    //   // this.a = 789
    //   // console.log('this.a :>> ', this.a)
    // }
    // const s1 = new Set([1, 2, 3, 4])
    // const s2 = new Set([3, 4, 5, 6])
    // const difference = (setA, setB) => {
    //   const diff = new Set(setA)
    //   for (const item of setB) {
    //     diff.has(item) ? diff.delete(item) : diff.add(item)
    //   }
    //   return diff
    // }

    // const diff = difference(s1, s2)
    // console.log('diff :>> ', diff)

    // const p1 = new Proxy(
    //   {},
    //   {
    //     get(target, prop) {
    //       console.log('target,prop :>> ', target, prop)
    //       return target[prop]
    //     },
    //     set(target, prop, value, reciver) {
    //       console.log('target,prop,reciver :>> ', target, prop, reciver)
    //       return (target[prop] = value)
    //     }
    //   }
    // )
    // p1.name = '123'
    // // console.log('p1.name :>> ', p1.name)
    // const obj = Object.create(p1)
    // console.log('obj :>> ', obj)
    // console.log('obj.name :>> ', obj.name)

    // const hanlder = {
    //   get(target, name) {
    //     if (name === 'prototype') {
    //       return Object.prototype
    //     }
    //     return 'Hello' + name
    //   },
    //   apply(target, thisBinding, args) {
    //     // console.log('target, thisBinding, args :>> ', target, thisBinding, args)
    //     // // return args[0]
    //     // return target(args)
    //     return target(...args)
    //   },
    //   construct(target, args) {
    //     console.log('target, args :>> ', target, args)
    //     return { value: args[1] }
    //   }
    // }

    // const fproxy = new Proxy(function(x, y) {
    //   console.log('x, y :>> ', x, y)
    //   return x + y
    // }, hanlder)
    // const sf = fproxy(1, 2)
    // console.log('sf :>> ', sf)

    // const gfn = function*() {
    //   let a
    //   yield (a = 3 + 5)
    //   return a
    // }
    // const s = gfn()
    // console.log('s :>> ', s)
    // console.log('s.next() :>> ', s.next())
    // console.log('s.next() :>> ', s.next())

    // const a1 = Symbol('a1')
    // const a2 = Symbol('a2')
    // class MyClass {
    //   foo(val) {
    //     this[a1](val)
    //   }
    //   [a1](val) {
    //     return (this[a2] = val)
    //   }
    // }
    // const mc = new MyClass()
    // mc.foo(10)
    // console.log('mc :>> ', mc)
    console.log(1)
    setTimeout(() => {
      console.log(2)
      // process.nextTick(() => {
      //   console.log(3)
      // })
      new Promise(resolve => {
        console.log(4)
        resolve()
      }).then(() => {
        console.log(5)
      })
    })
    new Promise(resolve => {
      console.log(7)
      resolve()
    }).then(() => {
      console.log(8)
    })
    // process.nextTick(() => {
    //   console.log(6)
    // })
    setTimeout(() => {
      console.log(9)
      // process.nextTick(() => {
      //   console.log(10)
      // })
      new Promise(resolve => {
        console.log(11)
        resolve()
      }).then(() => {
        console.log(12)
      })
    })
    function side(arr) {
      console.log('arr :>> ', arr)
      arr[0] = arr[2]
    }
    function a(a, b, c = 3) {
      c = 10
      side(arguments)
      console.log('c :>> ', c)
      console.log('a,b,c :>> ', a, b, c)
      return a + b + c
    }
    const sa = a(1, 1, 1) // 12
    console.log('sa :>> ', sa)
    var a = [0]
    if (a) {
      console.log('!!a :>> ', !!a)
      console.log('a.toString() :>> ', a.toString())
      console.log('a.valueOf() == true :>> ', a.valueOf() == true)
      console.log(a == true)
    } else {
      console.log(a)
    }
    console.log('function f(){} :>> ', function f() {}.valueOf())
    // ;(function() {
    //   var e = (d = 5)
    // })()
    // console.log('d :>> ', d)
    // console.log('e :>> ', e)
    var x = 1
    if (function f() {}) {
      x += typeof f
    }
    console.log(x)
    return {
      a,
      onClick
    }
  },
  created() {
    // console.log('this :>> ', this)
    // this.a = 456
  }
  // methods: {
  //   onClick() {
  //     this.a = 789
  //     console.log('this.a :>> ', this.a)
  //   }
  // }
}
</script>

<style lang="scss" scoped>
#cinema {
  min-height: 100vh;
  width: 100vw;
}
</style>
