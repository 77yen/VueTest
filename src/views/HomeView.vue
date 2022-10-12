<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js App" />
    <!-- 屬性名稱必須和子層接收的變數名稱相同 -->
    <TestTest>
      <template #result="test11">
        已選購："商品" x {{ test11.qq }}
      </template>
    </TestTest>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import TestTest from '@/components/TestTest.vue'

export default {
  name: 'HomeView',
  components: {
    HelloWorld,
    TestTest
  },
  data () {
    return {
      hello: 'hello world'
    }
  },
  methods: {
    outside (insideVaule) {
      console.log(insideVaule)
    }
  }
}
</script>
