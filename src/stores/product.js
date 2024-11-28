import { defineStore } from "pinia";
import { computed, ref } from "vue";


export const useProductStore = defineStore ('product', () => {
    const products = ref([
        {
            id:1,
            name:'Яблоки 1',
            img:'https://greenfermer.pro/wp-content/uploads/2022/04/garden.jpg',
            price:1000,
            category: 'красные1',
            description:'Яблоки',
            publish_at:'27.11.24',
        },
        {
            id:2,
            name:'Яблоки 2',
            img:'https://avatars.mds.yandex.net/i?id=ec07f8fd2d0d00b510dea87d9a4aaf58_l-7985106-images-thumbs&n=13',
            price:1100,
            category: 'красные2',
            description:'Яблоки',
            publish_at:'27.11.24',
        },
        {
            id:3,
            name:'Яблоки 3',
            img:'https://storage.delikateska.ru/e/2/ab559f6f-c2f8-4dbd-81e1-c3fcedf51bd0.jpg',
            price:1200,
            category: 'зеленые3',
            description:'Яблоки',
            publish_at:'27.11.24',
        },
        {
            id:4,
            name:'Яблоки 4',
            img:'https://artkvartal.ru/media/articles/2021/06/iablochki.jpg',
            price:1500,
            category: 'зеленые4',
            description:'Яблоки',
            publish_at:'27.11.24',
        },
    ]);

    const productsFilteredByCategoryName = computed(() => {
        return (category, searchText) => {
            if (category) {
                return products.value.filter((product) => product.category === category);
            }
            if (searchText) {
                return products.value.filter((product) => product.name.includes(searchText));
            }

            return products.value;
        };
    });

    const findProductById = computed (() => {
        return (id) =>{
            return products.value.find((product) => product.id == id );
        }
    })

    return{
        products,
        productsFilteredByCategoryName,
        findProductById,
    }
});