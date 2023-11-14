<script setup>
const state = reactive({
  feeddata: [],
});

const res = await fetch("http://localhost:3000/api/notion");

res.json().then((payload) => {
  state.feeddata = payload;
  console.log(payload);
});

const { pending, data: feeddata } = useFetch(
  "http://localhost:3000/api/notion",
  { lazy: true }
);
</script>
<template>
  <div class="max-w-screen-xl">
    <div v-if="pending">
      <p>Loading ...</p>
    </div>
    <div v-else>
      <div v-if="feeddata">
        <p>Loaded!</p>
        <ul class="my-10">
          <li v-for="item in feeddata" :key="feeddata.id">
            {{ item }}
          </li>
        </ul>
      </div>
    </div>
    <div class="dataTables_wrapper">
      <div class="mb-4">ALF PELL = Alfalfa Pellets</div>

      <table class="text-sm text-left text-gray-500 dark:text-gray-400">
        <thead
          class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400"
        >
          <tr>
            <th scope="col" class="px-6 py-3">Stall</th>
            <th scope="col" class="px-6 py-3">Horse</th>
            <th scope="col" class="px-6 py-3">AM Grain</th>
            <th scope="col" class="px-6 py-3">AM Supplemebts</th>
            <th scope="col" class="px-6 py-3">PM Grain</th>
            <th scope="col" class="px-6 py-3">BP</th>
            <th scope="col" class="px-6 py-3">LC</th>
            <th scope="col" class="px-6 py-3">PM Supplements</th>
          </tr>
        </thead>
        <tbody>
          <tr class="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
            <td class="px-6 py-4">1</td>
            <th
              scope="row"
              class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
            >
              DEWEY
            </th>
            <td class="px-6 py-4">1/4 cup LMF Low Carb</td>
            <td class="px-6 py-4">Baggie</td>
            <td class="px-6 py-4">1/4 cup LMF Low Carb</td>
            <td class="px-6 py-4">1/2 cup AM/PM</td>
            <td class="px-6 py-4">YES</td>
            <td class="px-6 py-4">Baggie 1tbsp Verials Aad</td>
          </tr>

          <tr
            v-for="(horse, index) in state.feeddata"
            :key="state.feeddata.id"
            class="border-b bg-gray-50 dark:bg-gray-800 dark:border-gray-700"
          >
            <td class="px-6 py-4">{{ horse.stall }}</td>
            <th
              scope="row"
              class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
            >
              {{ horse.horse }}
            </th>
            <td class="px-6 py-4">{{ horse.amgrain }}</td>
            <td class="px-6 py-4">{{ horse.pmgrain }}</td>
            <td class="px-6 py-4">{{ horse.amsupplements }}</td>
            <td class="px-6 py-4">{{ horse.bp }}</td>
            <td class="px-6 py-4">{{ horse.lc }}</td>
            <td class="px-6 py-4">{{ horse.pmsupplements }}</td>
          </tr>
        </tbody>
      </table>
    </div>
    <!-- data -->
    <!-- <ul class="my-10">
      <li v-for="(horse, index) in state.feeddata" :key="state.feeddata.id">
        {{ horse }}
      </li>
    </ul> -->
  </div>
</template>
<style scoped>
/* @media (max-width: 600px) {
  table {
    display: block;
    max-width: -moz-fit-content;
    max-width: fit-content;
    margin: 0 auto;
    overflow-x: auto;
    white-space: nowrap;
  }
} */

/* data table wrapper */
.dataTables_wrapper {
  /* width: 500px; */
  /* width: 100vw; */
  /* min-width: 375px; */
  /* max-width: -moz-fit-content;
  max-width: fit-content; */
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
/* th,
td {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
} */
</style>
