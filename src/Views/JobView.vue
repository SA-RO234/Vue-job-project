<script setup>
import Backbuton from "@/components/Backbuton.vue";
import axios from "axios";
import { reactive, onMounted, pushScopeId } from "vue";
import { RouterLink, useRoute, useRouter } from "vue-router";
import Toast, { useToast } from "vue-toastification";
import PulseLoader from "vue-spinner/src/PulseLoader.vue";
const route = useRoute();
const jobId = route.params.id;

const router = useRouter();
const toast = useToast();
const deleteJob = async () => {
  try {
    const confirm = window.confirm(
      "Are you sure you want to delete this job ?"
    );
    if (confirm) {
      await axios.delete(`/api/job/${jobId}`);
      toast.success("Delete is Successfuly ! ");
      router.push("/jobs");
    }
  } catch (error) {
    console.log("====================================");
    console.log("Error Deleting job ! ", error);
    toast.error("Job not Delete !");
    console.log("====================================");
  }
};
const state = reactive({
  jobs: [],
  isLoading: true,
});

onMounted(async () => {
  try {
    const response = await axios.get(`/api/job/${jobId}`);
    state.jobs = response.data;
  } catch (error) {
    console.log("====================================");
    console.log("Error fetching data ! ", error);
    console.log("====================================");
  } finally {
    state.isLoading = false;
  }
});
</script>

<template>
  <Backbuton />
  <section v-if="!state.isLoading" class="bg-green-50">
    <div class="container m-auto py-10 px-6">
      <div class="grid grid-cols-1 md:grid-cols-70/30 w-full gap-6">
        <main>
          <div
            class="bg-white p-6 rounded-lg shadow-md text-center md:text-left"
          >
            <div class="text-gray-500 mb-4">{{ state.jobs.type }}</div>
            <h1 class="text-3xl font-bold-mb-4">{{ state.jobs.title }}</h1>
            <div
              class="text-gray-500 mb-1 flex align-middle justify-center md:justify-start py-5"
            >
              <i class="pi pi-map-marker text-orange-700 mr-2"></i>
              <p class="text-orange-700">{{ state.jobs.location }}</p>
            </div>
          </div>
          <div class="b-white p-6 rounded-lg shadow-md mt-6 bg-white">
            <h3 class="text-green-800 text-xl font-medium mb-6">
              Job Description
            </h3>
            <p class="mb-4 font-normal">
              {{ state.jobs.description }}
            </p>
            <h3 class="text-green-800 font-bold">Salary</h3>
            <p class="font-normal">{{ state.jobs.salary }} / Year</p>
          </div>
        </main>
        <div class="right-section">
          <div class="top-section mb-10 shadow-md rounded-lg p-7 bg-white">
            <h3 class="font-bold text-2xl mb-5">Company Info</h3>
            <h2 class="text-2xl mb-1">{{ state.jobs.company.name }}</h2>
            <p class="border-b-2 text-lg pb-5 mb-5">
              {{ state.jobs.company.description }}
            </p>
            <h2 class="text-2xl mb-1">Contact Email:</h2>
            <p class="bg-green-100 p-2 text-xl font-bold mb-3">
              {{ state.jobs.company.contactEmail }}
            </p>
            <h2 class="text-2xl mb-1">Contact Phone:</h2>
            <p class="bg-green-100 p-2 text-xl font-bold">
              {{ state.jobs.company.contactPhone }}
            </p>
          </div>
          <div class="bottom-section bg-white shadow-md rounded-lg p-7">
            <h3 class="font-bold text-2xl mb-5">Manage Job</h3>
            <RouterLink
              :to="`/jobs/edit/${state.jobs.id}`"
              class="bg-green-500 hover:bg-green-600 px-7 py-3 text-xl text-white font-extrabold rounded-full w-full block text-center mb-5"
              >Edit Job</RouterLink
            >

            <button
              @click="deleteJob"
              class="bg-red-500 hover:bg-red-600 px-7 py-3 text-xl text-white font-extrabold rounded-full w-[100%]"
            >
              Delete Job
            </button>
          </div>
        </div>
      </div>
    </div>
  </section>

  <div v-else class="text-center text-gray-500 py-6">
    <PulseLoader />
  </div>
</template>
