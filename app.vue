<script setup>
const state = reactive({
  images: [],
});

const res = await fetch("http://localhost:3000/api/gallery");

res.json().then((images) => {
  state.images = images;
});
</script>

<template>
  <div class="o-site">
    <header class="o-site__header flex flex-col items-center mt-10 px-4">
      <h1 class="text-[40px]">ヽ(♡‿♡)ノ</h1>
      <h2 class="text-pink-400 mt-4">Hello Wildwood Equi-Trac</h2>
    </header>
    <main class="o-site__content px-4">
      <div class="db-images my-10">
        <div v-for="(image, index) in state.images" :key="index">
          <img :src="image" />
        </div>
      </div>

      <ContentGrid />
    </main>
    <footer
      class="o-site__footer mt-8 bg-[#121212] w-full py-12 px-4 flex items-center"
    >
      <NuxtLink
        to="https://www.facebook.com/wildwoodstablesOR/photos"
        class="mx-auto inline-block text-[#787878] hover:text-[#c2c2c2] transition-colors duration-150"
        target="_blank"
        >Wildwood Stables Oregon</NuxtLink
      >
    </footer>
  </div>
</template>

<style>
body {
  background: linear-gradient(#111, #222);
}
img {
  width: 100px;
  height: 100px;
  object-fit: cover;
  border-radius: 8px;
  cursor: pointer;
  transition: 600ms cubic-bezier(0.16, 1, 0.3, 1);
  text-align: center;
}
img:hover {
  transform: scale(1.1);
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.2);
}
.db-images {
  display: flex;
  gap: 18px;
  align-items: center;
  justify-content: center;
}
@media (min-width: 480px) {
  .db-images {
    gap: 36px;
  }
}
/* sticky footer */
.o-site {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  color: white;
  background: linear-gradient(#111, #222);
  /* height: 100%; */
  /* min-width: 240px; */
  /* border: 1px solid pink; */
  min-height: 100vh;
}

.o-site__header {
  flex: 0 0 auto;
}

.o-site__content {
  flex: 1 0 auto;
}

.o-site__footer {
  flex: 0 0 auto;
}
</style>
