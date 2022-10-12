<template>
  <div class="card-body">
    <table class="table">
      <thead>
        <tr>
          <th scope="col">品項</th>
          <th scope="col">顏色</th>
          <th scope="col">單價</th>
          <th scope="col">數量</th>
          <th scope="col">小計</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, key) in orderList" :key="'order' + key">
          <th scope="row">
            {{ item.title }}
          </th>
          <td>{{ item.color }}</td>
          <td>{{ item.price }}</td>
          <td>{{ item.qty }}</td>
          <td class="text-end">{{ item.price * item.qty }}</td>
        </tr>
      </tbody>
    </table>
    <p class="text-end">共 NT$ {{ itemTotal }} 元</p>
    <button @click.prevent="resetOrder()" type="button">重新選擇</button>
  </div>
</template>

<script>
export default {
  data () {
    return {
      orderList: [],
      itemTotal: 0
    }
  },
  methods: {
    resetOrder () {
      this.orderList = []
      localStorage.removeItem('orderTotal')
    },
    getOrderTotal () {
      const temporderTotal = localStorage.getItem('orderTotal')
      if (!temporderTotal || temporderTotal === 'undefined') return
      this.orderList = JSON.parse(temporderTotal)
    },
    itemSum () {
      console.log(this.orderList)
      this.itemTotal = this.orderList.reduce((acc, obj) => acc + (obj.qty * obj.price), 0)
    }
  },

  created () {
    this.getOrderTotal()
    this.itemSum()
  }
}
</script>
