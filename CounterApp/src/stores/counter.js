import { ref, computed } from "vue";
import { defineStore } from "pinia";
// define counter store with setup store
export const useCounterStore = defineStore("counter", () => {
  const count = ref(0); // state
  const name = ref("nitin"); //state
  const items = ref([]); // state
  const doubleCount = computed(() => count.value * 2);
  function increment() {
    count.value++;
  }
  function decrement() {
    count.value--;
  }

  return { count, doubleCount, items, name, increment, decrement };
});
