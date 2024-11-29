<script setup>
import { ref, onMounted } from 'vue';
import { useRoute } from 'vue-router';

const order = ref(null);
const route = useRoute();

onMounted(() => {
  const orderIndex = route.params.id;
  const orders = JSON.parse(localStorage.getItem('orders')) || [];
  order.value = orders[orderIndex];
});
</script>

<template>
  <div class="container" v-if="order">
    <h1>Детали заказа</h1>

    <p><strong>Имя:</strong> {{ order.fullName }}</p>
    <p><strong>Страна:</strong> {{ order.country }}</p>
    <p><strong>Адрес:</strong> {{ order.address }}</p>
    <p><strong>Телефон:</strong> {{ order.phone }}</p>
    <p><strong>Метод доставки:</strong> {{ order.deliveryMethod }}</p>
    <p><strong>Метод оплаты:</strong> {{ order.paymentMethod }}</p>

    <h3>Список товаров</h3>
    <div v-for="(product, index) in order.products" :key="index" class="card mb-3">
      <div class="row g-0">
        <div class="col-md-4">
          <img :src="product.img" class="img-fluid rounded-start" alt="...">
        </div>
        <div class="col-md-8">
          <div class="card-body">
            <h5 class="card-title">{{ product.name }}</h5>
            <p class="card-text">Цена: {{ product.price }} тг.</p>
            <p class="card-text">Количество: {{ product.count }}</p>
          </div>
        </div>
      </div>
    </div>

    <h3>Общая стоимость: {{ order.totalSum }} тг.</h3>
  </div>
</template>

<style scoped>
.card {
  margin-bottom: 20px;
}
</style>
