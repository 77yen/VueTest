<template>
  <div class="container">
    <div class="img_box">
      <img :src="tempProduct.img" class="product_img" alt="" />
    </div>
    <div class="content">
      <h1>{{ tempProduct.title }}</h1>
      <p>顏色：{{ tempProduct.color }}</p>
      <p>單價：{{ tempProduct.price }}</p>
      <div class="btn_box">
        <button @click="reduce_order(tempProduct.qty)" type="button">-</button>
        <p>{{ tempProduct.qty }}</p>
        <button @click="add_order(tempProduct.qty)" type="button">+</button>
      </div>
      <div class="order_btn_box">
        <!-- <button>直接購買</button> -->
        <button @click="addToOrder(tempProduct)" type="button">加入購物車</button>
      </div>
      <h3>合計：{{ tempProduct.price * tempProduct.qty }}</h3>
    </div>
  </div>
  <router-link to="/campcart" >查看購物車</router-link>
  <router-view />
</template>

<style>
.wrap {
  display: flex;
  justify-content: center;
}

.container {
  max-width: 1200px;
  margin-left: auto;
  margin-right: auto;
}

.item,
.btn_box {
  display: flex;
}

.content {
  padding: 1rem;
}

.btn_box button {
  padding: 10px;
  margin: 10px;
}

.product_img {
  vertical-align: top;
}

.order_btn_box {
  display: flex;
  flex-direction: column;
}

.order_btn_box button {
  margin: 5px;
}

.check_order {
  justify-content: space-between;
  background-color: #e5e5e5;
}

.check_order,
.check_out {
  display: flex;
}
</style>

<script>
export default {
  data () {
    return {
      orderList: [],
      tempProduct: {}
    }
  },
  methods: {
    reduce_order (qty) {
      if (qty !== 1) {
        this.tempProduct.qty -= 1
      }
    },
    add_order (qty) {
      this.tempProduct.qty += 1
    },
    selectedProduct (product) {
      this.itemSelected = {
        ...product
      }
    },
    addToOrder (product) {
      this.orderList.push({ ...product })
      this.setStorage(this.orderList)
    },
    setStorage (data) {
      const orderTotal = JSON.stringify(data)
      localStorage.setItem('orderTotal', orderTotal)
    },
    getStorage () {
      const tempProduct = localStorage.getItem('gogobuy')
      if (!tempProduct || tempProduct === 'undefined') return
      this.tempProduct = JSON.parse(tempProduct)
    },
    getOrderTotal () {
      const temporderTotal = localStorage.getItem('orderTotal')
      if (!temporderTotal || temporderTotal === 'undefined') return
      this.orderList = JSON.parse(temporderTotal)
    }
  },
  created () {
    this.getStorage()
    this.getOrderTotal()
  }
}
</script>
