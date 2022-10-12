<template>
  <div class="container">
    <div class="item" v-for="(item, index) in itemList" :key="'item' + index">
      <router-link to="/campprodinfo" @click.prevent="itemClick(item)">
        <div class="img_box">
          <img :src="item.img" alt="" />
        </div>
        <div class="content">
          <p>{{ item.title }}</p>
          <p>{{ `NT. ${item.price}` }}</p>
        </div>
      </router-link>
    </div>
  </div>
  <router-view />
</template>

<style>
.container {
  display: flex;
  flex-wrap: wrap;
}

.item {
  border: 1px blue solid;
}
</style>

<script>
export default {
  data () {
    return {
      tempProduct: {},
      itemList: [
        {
          id: 'hat_1',
          img: require('../assets/images.png'),
          title: '營火叢不怕風吹帽',
          price: 2680,
          qty: 1,
          color: 'green'
        },
        {
          id: 'hat_2',
          img: 'https://picsum.photos/300/300?random=40',
          title: '營火叢漁夫帽',
          price: 2680,
          qty: 1,
          color: 'white'
        },
        {
          id: 'mug_1',
          img: 'https://picsum.photos/300/300?random=40',
          title: '營火叢金勾杯',
          price: 2680,
          qty: 1,
          color: 'white'
        },
        {
          id: 'bottle_1',
          img: 'https://picsum.photos/300/300?random=40',
          title: '營火叢多喝水瓶',
          price: 2680,
          qty: 1,
          color: 'blue'
        },
        {
          id: 'top_1',
          img: 'https://picsum.photos/300/300?random=40',
          title: '營火叢帽t',
          price: 2680,
          qty: 1,
          color: 'white'
        },
        {
          id: 'top_2',
          img: 'https://picsum.photos/300/300?random=40',
          title: '營火叢t-shirt',
          price: 2680,
          qty: 1,
          color: 'black'
        }
      ]
    }
  },
  methods: {
    setStorage (data) {
      const orderStorage = JSON.stringify(data)
      localStorage.setItem('gogobuy', orderStorage)
    },
    itemClick (product) {
      this.setStorage(product)
    }
  }
}
</script>
