// store/catStore.js
import { defineStore } from "pinia";
import { getCatFact, getCatImages } from "~/services/api";

export const useCatStore = defineStore("catStore", {
  state: () => ({
    facts: [],
    currentFactIndex: 0,
    images: [],
  }),
  actions: {
    async fetchCatFact() {
      if (
        this.facts.length === 0 ||
        this.currentFactIndex >= this.facts.length - 1
      ) {
        const fact = await getCatFact();
        this.facts.push(fact);
        this.currentFactIndex = this.facts.length - 1;
      } else {
        this.currentFactIndex++;
      }
    },
    async fetchCatImages() {
      this.images = await getCatImages();
    },
  },
  getters: {
    currentFact: (state) =>
      state.facts[state.currentFactIndex] || "No cat fact available.",
  },
});
