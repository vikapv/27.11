<script setup>
import { useCartStore } from '@/stores/cart';


const cartStore = useCartStore ();
const updateCount = (id, event) => {
    cartStore.updateCountCartById(id, event.target.value);
}
</script>

<template>
<div class="container">
    <div class="row">
        <div class="col">
            <table class="table">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col" class="w-25">Image</th>
      <th scope="col">Name</th>
      <th scope="col">Price</th>
      <th scope="col">Count</th>
      <th scope="col"></th>
    </tr>
  </thead>
  <tbody>
    <tr v-for="product, index in cartStore.cartList" :key="product.id">
        <th scope="row">{{ index + 1 }}</th>
        <td><img :src="product.img" class="img-thumbnail" alt="..."></td>
        <td>{{ product.name }}</td>
        <td>${{  product.price }}</td>
        <td>
          <input type="number" @input="updateCount(product.id, $event)" class="form-control" :value="product.count">
        </td>
        <td>
            <button type="button" class="btn me-2 mx-4 btn-outline-info" @click="$router.push(`/detail/${product.id}`)">Detail</button>
        <button type="button" @click="cartStore.removeProductById(product.id)" class="btn btn-outline-success mx-4">Delete</button>
      </td>
    </tr>
  </tbody>
</table>
    
</div>
        <div class="row">
            <div class="col text-end">
                <h3 class="text-end">Total:{{ cartStore.totalSum }}</h3>
                <router-link to="/checkout" class="btn me-2 btn-outline-success btn-lg">
        <i class="bi bi-cart-check"></i> Оформить заказ
      </router-link>
            </div>
        </div>
    </div>
</div>
</template>