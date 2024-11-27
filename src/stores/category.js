import { defineStore } from "pinia";


export const useCategoryStore = defineStore ("category", () => {
    const categories = [
        'красные1',
        'красные2',
        'зеленые3',
        'зеленые4'
    ];

    return {
        categories,
    }
});