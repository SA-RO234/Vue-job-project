<script setup>
import router from "@/router";
import axios from "axios";
import { onMounted, reactive } from "vue";
import { useRoute, useRouter } from "vue-router";
import { useToast } from "vue-toastification";

const toast = useToast();

const route = useRoute();
// const router = useRouter();
const state = reactive({
  Job: {},
  isLoading: true,
});

const jobId = route.params.id;
const form = reactive({
  type: "Path-Time",
  title: "",
  description: "",
  salary: "",
  location: "",
  company: {
    name: "",
    description: "",
    contactEmail: "",
    contactPhone: "",
  },
});

const handleSubmit = async () => {
  const updateJob = {
    type: form.type,
    title: form.title,
    location: form.location,
    salary: form.salary,
    description: form.description,
    company: {
      name: form.company.name,
      description: form.company.description,
      contactEmail: form.company.contactEmail,
      contactPhone: form.company.contactPhone,
    },
  };
  try {
    const response = await axios.put(`/api/job/${jobId}`,updateJob);
    toast.success("Update is Successfully ... ! ");
    router.push(`/job/${response.data.id}`);

  } catch (error) {
    toast.error("Fail Update ...! ");
    console.log("====================================");
    console.log("Error for Update data .. ! ", error);
    console.log("====================================");
  }
};

onMounted(async () => {
  try {
    const response = await axios.get(`/api/job/${jobId}`);
    state.Job = response.data;
    form.type = state.Job.type;
    form.title = state.Job.title;
    form.description = state.Job.description;
    form.salary = state.Job.salary;
    form.location = state.Job.location;
    form.company.name = state.Job.company.name;
    form.company.description = state.Job.company.description;
    form.company.contactEmail = state.Job.company.contactEmail;
    form.company.contactPhone = state.Job.company.contactPhone;
  } catch (error) {
    console.error("Error fetching data ...! ");
  } finally {
    state.isLoading = true;
  }
});
</script>
<template>
  <section
    class="w-full bg-green-50 auto flex justify-center align-middle h-[90rem]"
  >
    <div
      class="container-form auto w-[40%] h-[80rem] bg-white shadow-md rounded-sm py-7 px-5 mt-20"
    >
      <form @submit.prevent="handleSubmit">                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             
        <h2 class="text-center text-3xl font-bold">Edit Job</h2>
        <label for="jobtype" class="text-xl font-semibold">Job Type</label>
        <select
          v-model="form.type"
          name="jobtype"
          id="jobtype"
          class="px-3 w-full border outline-sky-700 p-2 rounded mt-3 mb-3"
          required
        >
          <option class="bg-gray-400 text-white" value="Full-Time">
            Full-Time
          </option>
          <option class="bg-gray-400 text-white" value="Part-Time">
            Part-Time
          </option>
          <option class="bg-gray-400 text-white" value="Remote">Remote</option>
          <option class="bg-gray-400 text-white" value="Internship">
            Internship
          </option>
        </select>

        <label for="jobname" class="text-xl font-semibold"
          >Job Listing Name</label
        >
        <input
          v-model="form.title"
          type="text"
          class="px-3 p-2 w-full outline-sky-700 border mt-3 mb-7 rounded"
          placeholder="eg. Beautiful Apartment In Miami"
          name=""
          id="jobname"
        />
        <label for="" class="text-xl font-semibold">Decription</label>
        <textarea
          v-model="form.description"
          name=""
          class="p-3 mt-3 mb-3 resize-none w-full border h-[100px] outline-sky-700 rounded"
          placeholder="Add any job duties, expectations, requirements, etc"
          id=""
        ></textarea>
        <label for="jobname" class="text-xl font-semibold">Salary</label>
        <select
          v-model="form.salary"
          name=""
          id=""
          class="px-3 w-full border outline-sky-700 p-2 rounded mt-3 mb-3"
        >
          <option value="Under $50K">under $50K</option>
          <option value="$50K - $60K">$50 - $60K</option>
          <option value="$60K - $70K">$60 - $70K</option>
          <option value="$70K - $80K">$70 - $80K</option>
          <option value="$80K - $90K">$80 - $90K</option>
          <option value="$90K - $100K">$90 - $100K</option>
          <option value="$100K - $125K">$100 - $125K</option>
          <option value="$125K - $150K">$125 - $150K</option>
          <option value="$150K - $175K">$150 - $175K</option>
          <option value="$175K - $200K">$175 - $200K</option>
          <option value="Over $200K">Over $200K</option>
        </select>
        <label for="joblocation" class="text-xl font-semibold">Location</label>
        <input
          v-model="form.location"
          type="text"
          class="px-3 p-2 w-full outline-sky-700 border mt-3 mb-7 rounded"
          placeholder="Company Location"
          name=""
          id="joblocation"
        />
        <h2 class="text-2xl mb-3">Company Infor</h2>
        <label for="companyName" class="text-xl font-semibold"
          >Company Name</label
        >
        <input
          v-model="form.company.name"
          type="text"
          class="px-3 p-2 w-full outline-sky-700 border mt-3 mb-7 rounded"
          placeholder="Company Location"
          name=""
          id="companyName"
        />
        <label for="companyDescription" class="text-xl font-semibold"
          >Company Description</label
        >
        <textarea
          v-model="form.company.description"
          name=""
          class="p-3 mt-3 mb-3 resize-none w-full border h-[100px] outline-sky-700 rounded"
          placeholder="What does your company do ?"
          id="companyDescription"
        ></textarea>
        <label for="contactEmail" class="text-xl font-semibold"
          >Contact Email</label
        >
        <input
          v-model="form.company.contactEmail"
          type="email"
          class="px-3 p-2 w-full border mt-3 mb-7 rounded outline-sky-700"
          placeholder="Email Address for applicats"
          name=""
          id="contactEmail"
          required
        />
        <label for="contactPhone" class="text-xl font-semibold"
          >Contact Phone</label
        >
        <input
          v-model="form.company.contactPhone"
          type="tel"
          class="px-3 p-2 w-full outline-sky-700 border mt-3 mb-7 rounded"
          placeholder="Optional phone for applicants"
          name=""
          id="contactPhone"
          required
        />
        <button
          type="submit"
          class="bg-green-500 w-full px-3 py-2 hover:bg-green-300 rounded-3xl text-2xl font-bold"
        >
          Update Job
        </button>
      </form>
    </div>
  </section>
</template>
