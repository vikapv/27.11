<script setup>
import { ref, onMounted } from 'vue';

const orders = ref([]);

onMounted(() => {
  orders.value = JSON.parse(localStorage.getItem('orders')) || [];
});
</script>

<template>
  <div class="container">
    <h1>История заказов</h1>

    <div v-if="orders.length === 0">
      <p>У вас нет заказов.</p>
    </div>

    <div v-else>
      <div v-for="(order, index) in orders" :key="index" class="card mb-3">
        <div class="card-body">
          <h5 class="card-title">Заказ от {{ new Date(order.date).toLocaleDateString() }}</h5>
          <p class="card-text">Имя: {{ order.fullName }}</p>
          <p class="card-text">Статус: {{ order.paymentMethod === 'creditCard' ? 'Оплачен' : 'Не оплачен' }}</p>
          <router-link :to="'/order/' + index" class="btn btn-info">Посмотреть заказ</router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.card {
  margin-bottom: 20px;
}
</style>
