<template>
  <div class="min-h-screen flex flex-col items-center bg-beige font-jost">
    <div class="bg-navy text-off-white w-full py-12 header">
      <h1 class="text-center text-6xl">THE DEFSAFE CAT FACTS PAGE</h1>
    </div>
    <div class="flex flex-row mt-8 w-3/4">
      <div class="flex-1 p-6 relative content">
        <div class="cat-fact-title">
          <h2 class="text-navy text-5xl mb-4">CAT FACT:</h2>
        </div>
        <div class="cat-fact-text">
          <p class="text-purple text-4xl mb-6" v-html="catFact"></p>
        </div>
        <button
          @click="fetchCatFact"
          class="flex items-center justify-center bg-purple text-off-white px-9 py-5 rounded-lg shadow-lg hover:bg-navy transition-all duration-300 refresh-button"
          style="width: 500px"
        >
          <span class="material-icons mr-2">autorenew</span>
          GET A RANDOM CAT FACT
        </button>
      </div>
      <div class="flex flex-row items-start space-x-4 ml-auto images-container">
        <img
          v-if="images.length > 0"
          :src="images[0].url"
          alt="Cat Image"
          class="rounded-lg shadow-lg large-image"
        />
        <div class="flex flex-col space-y-4">
          <img
            v-if="images.length > 1"
            :src="images[1].url"
            alt="Cat Image"
            class="rounded-lg shadow-lg small-image"
          />
          <img
            v-if="images.length > 2"
            :src="images[2].url"
            alt="Cat Image"
            class="rounded-lg shadow-lg small-image"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, onMounted } from "vue";

export default {
  setup() {
    const catFact = ref(
      "Cat families usually play best in <br> even numbers. Cats and kittens <br> should be acquired in pairs <br> whenever possible."
    );
    const images = ref([
      { url: "/images/kitty1.webp" },
      { url: "/images/kitty2.webp" },
      { url: "/images/kitty3.webp" },
    ]);

    const fetchCatFact = async () => {
      try {
        const factResponse = await fetch("https://meowfacts.herokuapp.com/");
        const factData = await factResponse.json();
        catFact.value = factData.data[0];

        const imagesResponse = await fetch(
          "https://api.thecatapi.com/v1/images/search?limit=3"
        );
        const imagesData = await imagesResponse.json();
        images.value = imagesData;
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    onMounted(fetchCatFact);

    return {
      catFact,
      images,
      fetchCatFact,
    };
  },
};
</script>

<style scoped>
.header {
  height: 25%;
}

.content {
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  height: 100%;
}

.cat-fact-title,
.cat-fact-text,
.refresh-button {
  margin-left: -140px;
}

.cat-fact-title {
  margin-top: 40px;
}

.cat-fact-text {
  margin-top: 20px;
  min-height: 200px; /* Define uma altura mínima para o texto */
  max-height: 200px; /* Define uma altura máxima para o texto */
  overflow: hidden; /* Esconde o excesso de texto */
}

.refresh-button {
  margin-top: 20px;
  margin-bottom: -140px;
  position: relative;
}

.material-icons {
  vertical-align: middle;
}

.large-image {
  width: 630px;
  height: 600px;
  margin-right: 20px;
  margin-top: 20px;
  object-fit: cover;
}

.small-image {
  width: 330px;
  height: 240px;
  margin-top: 70px;
  object-fit: cover;
}

.images-container {
  margin-right: -140px;
}

.flex.flex-col.space-y-4 {
  display: flex;
  flex-direction: column;
  gap: 16px;
}
</style>
