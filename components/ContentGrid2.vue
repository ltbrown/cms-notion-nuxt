<script setup>
// nuxt ui table info
const columns = [
  {
    key: "id",
    label: "ID",
    sortable: true,
  },
  {
    key: "stall",
    label: "Stall",
  },
  {
    key: "horse",
    label: "Horse",
    sortable: true,
  },
  {
    key: "amgrain",
    label: "AM Grain",
  },

  {
    key: "amsupplements",
    label: "AM Supplements",
  },
  {
    key: "bp",
    label: "BP",
  },
  {
    key: "lc",
    label: "LC",
  },
  {
    key: "pmgrain",
    label: "PM Grain",
  },
  {
    key: "pmsupplements",
    label: "PM Supplements",
  },
  {
    key: "horse",
    label: "Horse",
    sortable: true,
  },
  {
    key: "tags",
    label: "Tags",
    sortable: true,
  },
];

const selectedColumns = ref([...columns]);

const { pending, data: feeddata } = useFetch(
  "http://localhost:3000/api/notion",
  { lazy: true }
);
</script>
<template>
  <div class="max-w-screen-xl">
    <div v-if="pending">
      <UTable
        loading
        :loading-state="{
          icon: 'i-heroicons-arrow-path-20-solid',
          label: 'Loading...',
        }"
        :columns="selectedColumns"
        :rows="feeddata"
        :sort="{ column: 'id' }"
      />
    </div>
    <div v-else>
      <div v-if="feeddata">
        <!-- <p>Loaded!</p> -->
        <div class="dataTables_wrapper">
          <div class="mb-1">ALF PELL = Alfalfa Pellets</div>
          <div
            class="flex px-3 py-3.5 border-b border-gray-200 dark:border-gray-700"
          >
            <USelectMenu
              v-model="selectedColumns"
              :options="columns"
              multiple
              placeholder="Columns"
            />
          </div>
          <!-- <UTable
            loading
            :loading-state="{
              icon: 'i-heroicons-arrow-path-20-solid',
              label: 'Loading...',
            }"
            :columns="selectedColumns"
            :rows="feeddata"
            :sort="{ column: 'id' }"
          /> -->
          <UTable
            :columns="selectedColumns"
            :rows="feeddata"
            :sort="{ column: 'id' }"
          />
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
/* data table wrapper */
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
