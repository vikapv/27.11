<script setup>
import { useCategoryStore } from '@/stores/category';
import { useProductStore } from '@/stores/product';
import{ref} from 'vue';


const productStore = useProductStore();
const categoryStore = useCategoryStore();
const category = ref(null);
const searchText = ref('');
const products = ref([]);
products.value = productStore.products;


const filterCategory = () => {
  products.value = productStore.productsFilteredByCategoryName(category.value, null);
}

const searchName = () => {
  products.value = productStore.productsFilteredByCategoryName(null, searchText.value);
}

</script>

<template>
<div class="container">
    <div class="row mt-4">
        <div class="col-md-5">
            <select class="form-select" @change="filterCategory" v-model="category" aria-label="Default select example">
                <option :value="null" selected>Select category</option>
                <option
                v-for="category in categoryStore.categories"
                :value="category"
                :key="category"
                >{{ category }}</option>
            </select>
        </div>
        <div class="col-md-5">
            <input type="text" v-model="searchText" class="form-control" id="exampleFormControlInput1" @input="searchName" placeholder="Search bu name...">
        </div>
        <div class="col-md-2">
            <button type="button" class="btn btn-dark">Reset</button>
        </div>
    </div>
    <div class="row row-cols-1 row-cols-md-2 g-4 mt-4">
  <div class="col" v-for="product in products" :key="product.id">
    <div class="card h-100">
      <img :src="product.img" class="card-img-top" alt="...">
      <div class="card-body">
        <h5 class="card-title">{{ product.name }}</h5>
        <p class="card-text">{{ product.price }}</p>
        <p class="card-text">{{ product.category }}</p>
      </div>
      <div class="card-footer text-enm">
        <button type="button" class="btn btn-success me-2">Detail</button>
        <button type="button" class="btn btn-danger">Cart</button>
      </div>
    </div>
  </div>
</div>
</div>
</template>