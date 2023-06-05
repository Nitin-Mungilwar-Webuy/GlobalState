<script setup>
import Acomponent from "./components/Acomponent.vue";
import Bcomponent from "./components/Bcomponent.vue";
import { useCounterStore } from "./stores/counter";
// const CounterStore = useCounterStore();
</script>

<template>
  App component
  <Acomponent /><br />
  <Bcomponent />
</template>

<style scoped></style>
