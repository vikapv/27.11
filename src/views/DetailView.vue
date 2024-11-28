<script setup>
import { useProductStore } from '@/stores/product';
import { useRoute } from 'vue-router';


const productStore = useProductStore();
const route = useRoute();
const product = productStore.findProductById(route.params.id)
</script>

<template>
    <div class="container">
        <div class="row ">
     <div class="col">
    <div class="card h-100">
      <img :src="product.img" class="card-img-top" alt="...">
      <div class="card-body">
        <h5 class="card-title">{{ product.name }}</h5>
        <p class="card-text">{{ product.description }}</p>
        <p class="card-text">{{ product.price }}</p>
        <p class="card-text">{{ product.category }}</p>
        <p class="card-text">{{ product.publish_at }}</p>
      </div>
      <div class="card-footer text-enm">
        <button type="button" class="btn btn-danger">Cart</button>
      </div>
    </div>
  </div>
</div>
    </div>
    
</template>