<template>
  <div class="pt-5 bg-gray-100 grid grid-cols-2">

    <div class="border-r border-gray-300">
      <h2 class="underline">Insert your Cat age</h2>

      <div class="flex h-56 px-4">
        <div class="self-center w-full">

          <div class="self-center">
            <label for="type">Select between Years & Months</label>
            <select id="type" v-model="type" class="w-full">
              <option value="y" selected="selected">Years</option>
              <option value="m">Months</option>
            </select>

            <label for="age">Enter the age of your cat</label>
            <input id="age" type="number" class="w-full" v-model="age" placeholder="Enter your Cat's age">

            <div class="mt-3">
              <button @click="sendAge()" class="bg-green-400 border border-green-500 p-2">Calculate</button>
            </div>
          </div>
        </div>
      </div>



    </div>

    <div class="flex">
      <div class="self-center px-2 font-bold italic w-full">
        <span v-if="result">
          your cat is {{ result }} years old in Human math <span @mouseover="disclaimer = true" class="text-xs cursor-pointer">(?)</span>
        </span>
        <span v-else>Enter Your Cat's age to see magic</span>

        <div v-if="disclaimer" class="text-xs text-red-400 bg-red-100 p-2 font-bold italic relative">
          <div class="absolute top-0 right-1 cursor-pointer" @click="disclaimer = false">x</div>
          This app was made in a rush.<br>
          Even tho the values shown here are realistic, might be some error due to rush.
        </div>
      </div>
    </div>

  </div>
</template>


<script>
import CatAgeCalculator from "@/engine/CatAgeCalculator";
const catAgeC = new CatAgeCalculator();

export default {
  name: "CatAgeForm",
  data: () => {
    return {
      result: "",
      age: "",
      type: "y",
      disclaimer: false
    }
  },
  methods: {
    sendAge() {
      const ageInput = parseInt(this.age);
      const ageType = this.type;
      let ageOutput;
      if (ageType === 'y') {
        let isValid = catAgeC.validateYears(ageInput);

        if (!isValid) {
          alert("Your cat can't really be that old!");
          this.result = "";
          this.age = "";
          return false;
        }

        ageOutput = catAgeC.convertYearsToMonths(ageInput);
      } else {
        ageOutput = ageInput;
      }

      this.result = catAgeC.calculateAge(ageOutput);
      this.age = "";
    }
  }
}
</script>