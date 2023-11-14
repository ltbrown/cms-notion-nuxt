<script setup>
const state = reactive({
  images: [],
});

const res = await fetch("http://localhost:3000/api/gallery");

res.json().then((images) => {
  state.images = images;
});

// notification checkbox
// const selected = ref(true);

// nuxt ui table info
// const columns = [
//   {
//     key: "id",
//     label: "ID",
//     sortable: true,
//   },
//   {
//     key: "name",
//     label: "Name",
//     sortable: true,
//   },
//   {
//     key: "title",
//     label: "Title",
//     sortable: true,
//   },
//   {
//     key: "email",
//     label: "Email",
//     sortable: true,
//     direction: "desc",
//   },
//   {
//     key: "role",
//     label: "Role",
//   },
// ];

// const people = [
//   {
//     id: 1,
//     name: "Lindsay Walton",
//     title: "Front-end Developer",
//     email: "lindsay.walton@example.com",
//     role: "Member",
//   },
//   {
//     id: 2,
//     name: "Courtney Henry",
//     title: "Designer",
//     email: "courtney.henry@example.com",
//     role: "Admin",
//   },
//   {
//     id: 3,
//     name: "Tom Cook",
//     title: "Director of Product",
//     email: "tom.cook@example.com",
//     role: "Member",
//   },
//   {
//     id: 4,
//     name: "Whitney Francis",
//     title: "Copywriter",
//     email: "whitney.francis@example.com",
//     role: "Admin",
//   },
//   {
//     id: 5,
//     name: "Leonard Krasner",
//     title: "Senior Designer",
//     email: "leonard.krasner@example.com",
//     role: "Owner",
//   },
//   {
//     id: 6,
//     name: "Floyd Miles",
//     title: "Principal Designer",
//     email: "floyd.miles@example.com",
//     role: "Member",
//   },
// ];
const loading = ref(true);
</script>

<template>
  <div class="o-site">
    <header class="o-site__header flex flex-col items-center m-10 px-4">
      <h1 class="text-[40px]">ヽ(♡‿♡)ノ</h1>
      <h2 class="text-pink-400 mt-4">Hello Wildwood Equi-Trac</h2>
    </header>
    <main class="o-site__content px-4">
      <!-- <UCheckbox
        v-model="selected"
        name="notifications"
        label="Notifications"
      /> -->
      <!-- <div>
        <UButton>Button</UButton>
        <br />
        <UButton :loading="loading" label="Button Label" class="mt-4" />
      </div> -->
      <div class="db-images mb-10">
        <div v-for="(image, index) in state.images" :key="index">
          <img :src="image" />
        </div>
      </div>

      <ContentGrid2 />

      <!-- <div class="dataTables_wrapper">
        <UTable
          :columns="columns"
          :rows="people"
          :sort="{ column: 'title' }"
          class="border border-pink-200"
        />
      </div> -->
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
  min-height: 100vh;
}

.o-site__content {
  flex: 1 0 auto;
}

.o-site__footer {
  flex-shrink: 0;
}

.dataTables_wrapper {
  width: 350px;
  overflow-x: auto;
}
@media (min-width: 520px) {
  .dataTables_wrapper {
    width: 500px;
  }
}
@media (min-width: 768px) {
  .dataTables_wrapper {
    width: 740px;
  }
}
@media (min-width: 1020px) {
  .dataTables_wrapper {
    width: 1000px;
  }
}
</style>
