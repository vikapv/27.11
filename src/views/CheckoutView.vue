<script setup>
import { useCartStore } from '@/stores/cart';
import { ref } from 'vue';
import { useRouter } from 'vue-router';  

const cartStore = useCartStore();
const router = useRouter();  

const fullName = ref('');
const gender = ref('');
const country = ref('');
const address = ref('');
const phone = ref('');
const deliveryMethod = ref('');
const paymentMethod = ref('');

const saveOrder = () => {
  const order = {
    fullName: fullName.value,
    gender: gender.value,
    country: country.value,
    address: address.value,
    phone: phone.value,
    deliveryMethod: deliveryMethod.value,
    paymentMethod: paymentMethod.value,
    products: cartStore.cartList, 
    totalSum: cartStore.totalSum, 
    date: new Date().toISOString(), 
  };

  let orders = JSON.parse(localStorage.getItem('orders')) || [];
  orders.push(order);
  localStorage.setItem('orders', JSON.stringify(orders));
};

const handleSubmit = () => {
  console.log('Форма отправлена');
  saveOrder(); 
  cartStore.carts = []; 
  router.push('/orders'); 
};

const handleCancel = () => {
  cartStore.carts = [];
  console.log('Заказ отменен');
};
</script>

<template>
  <div class="container">
    <h1>Оформление заказа</h1>

    <form @submit.prevent="handleSubmit">
      <div class="mb-3">
        <label for="fullName" class="form-label">Ф.И.О.</label>
        <input type="text" class="form-control" id="fullName" v-model="fullName" required />
      </div>

      <div class="mb-3">
        <label for="gender" class="form-label">Пол</label>
        <select class="form-select" id="gender" v-model="gender" required>
          <option value="">Выберите пол</option>
          <option value="male">Мужской</option>
          <option value="female">Женский</option>
        </select>
      </div>

      <div class="mb-3">
        <label for="country" class="form-label">Страна</label>
        <select class="form-select" id="country" v-model="country" required>
          <option value="">Выберите страну</option>
          <option value="rus">Россия</option>
          <option value="usa">США</option>
          <option value="uk">Казахстан</option>
        </select>
      </div>

      <div class="mb-3">
        <label for="address" class="form-label">Адрес</label>
        <input type="text" class="form-control" id="address" v-model="address" required />
      </div>

      <div class="mb-3">
        <label for="phone" class="form-label">Телефон</label>
        <input type="text" class="form-control" id="phone" v-model="phone" required />
      </div>

      <div class="mb-3">
        <label for="deliveryMethod" class="form-label">Способ доставки</label>
        <select class="form-select" id="deliveryMethod" v-model="deliveryMethod" required>
          <option value="">Выберите способ доставки</option>
          <option value="standard">Стандартная доставка</option>
          <option value="express">Экспресс доставка</option>
        </select>
      </div>

      <div class="mb-3">
        <label for="paymentMethod" class="form-label">Способ оплаты</label>
        <select class="form-select" id="paymentMethod" v-model="paymentMethod" required>
          <option value="">Выберите способ оплаты</option>
          <option value="creditCard">Кредитная карта</option>
          <option value="paypal">Наличка</option>
        </select>
      </div>

      <div class="mb-3">
        <h3>Общая стоимость заказа: {{ cartStore.totalSum }} тг.</h3>
      </div>

      <div class="mb-3">
        <button type="submit" class="btn btn-primary">Отправить заказ</button>
        <button type="button" class="btn btn-secondary" @click="handleCancel">Отменить</button>
      </div>
    </form>

    <h2>Товары в корзине</h2>
    <div v-for="(product, index) in cartStore.cartList" :key="product.id" class="card mb-3">
      <div class="row g-0">
        <div class="col-md-4">
          <img :src="product.img" class="img-fluid rounded-start" alt="...">
        </div>
        <div class="col-md-8">
          <div class="card-body">
            <h5 class="card-title">{{ product.name }}</h5>
            <p class="card-text">Цена: {{ product.price }} тг.</p>
            <p class="card-text">Количество: {{ product.count }}</p>
            <button class="btn btn-danger" @click="cartStore.removeProductById(product.id)">Удалить</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
form {
  max-width: 600px;
  margin: 0 auto;
}

.card {
  margin-bottom: 20px;
}
</style>
