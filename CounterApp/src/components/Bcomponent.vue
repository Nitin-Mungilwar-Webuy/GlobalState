<script setup>
import { useCounterStore } from "../stores/counter";
const stores = useCounterStore();
</script>
<template>
  <hr />
  BComponent
  <h1>count:{{ stores.count }}</h1>
  <h2>doubleCount:{{ stores.doubleCount }}</h2>
</template>
<style></style>
