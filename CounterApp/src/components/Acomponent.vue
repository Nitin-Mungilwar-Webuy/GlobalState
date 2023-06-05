<script setup>
// import { storeToRefs } from "pinia";
import { useCounterStore } from "../stores/counter";
const store = useCounterStore();

store.$patch({
  count: 50,
  name: "omsai",
});

//mutating the state passing function
store.$patch((state) => {
  state.items.push("java");
  state.count = 2;
  state.name = "omsai";
});
</script>
<template>
  <hr />
  AComponent count:{{ store.count }}
  <hr />
  {{ store.name }}
  <button @click="store.increment()">Increment</button>
</template>
<style></style>
