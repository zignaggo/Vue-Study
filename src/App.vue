<script setup lang="ts">
import { reactive } from "vue"
import Form from "./components/Form.vue"
const fields = reactive<{ email: string; password: string }>({
	email: "",
	password: "",
})
</script>

<template>
	<div
		class="flex w-screen min-h-screen flex-col items-center justify-center px-6 py-12 lg:px-8"
	>
		<Form v-model:email="fields.email" v-model:password="fields.password" />
	</div>
</template>

<style scoped></style>
