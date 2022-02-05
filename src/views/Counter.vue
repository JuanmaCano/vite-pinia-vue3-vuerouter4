<template>
	<h1>Counter: {{ counterStore.counter }}</h1>

	<button type="button" @click="counterStore.increment(1)">+1</button>
	<button type="button" @click="counterStore.increment(2)">+2</button>
	<button type="button" @click="counterStore.increment(5)">+5</button>
</template>

<script lang="ts" setup>
	import {useCounterStore} from '../stores/counter';

	const counterStore = useCounterStore();
</script>
