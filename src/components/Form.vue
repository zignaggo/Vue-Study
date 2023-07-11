<script setup lang="ts">
import { Field, ErrorMessage, Form } from "vee-validate"
import { toTypedSchema } from "@vee-validate/zod"
import * as zod from "zod"

const validationSchema = toTypedSchema(
	zod.object({
		email: zod
			.string()
			.nonempty("This is required")
			.email({ message: "Must be a valid email" }),
		password: zod
			.string()
			.nonempty("This is required")
			.min(8, { message: "Too short" }),
	})
)
function onSubmit(values: {}) {
	alert(JSON.stringify(values, null, 2))
}
</script>

<template>
	<Form
		class="space-y-6 w-full max-w-xl px-6 py-12 lg:px-8"
		:validation-schema="validationSchema"
		@submit="onSubmit"
	>
		<h2 class="text-2xl font-bold text-blue-950">
			Conecte-se em sua Conta!
		</h2>
		<div>
			<label
				for="email"
				class="block text-sm font-medium leading-6 text-gray-900"
				>Email address</label
			>
			<div class="mt-2">
				<Field
					name="email"
					type="email"
					autocomplete="email"
					class="block w-full rounded-md indent-3 border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
				/>
			</div>
			<ErrorMessage name="email" />
		</div>

		<div>
			<div class="flex items-center justify-between">
				<label
					for="password"
					class="block text-sm font-medium leading-6 text-gray-900"
					>Password</label
				>
				<div class="text-sm">
					<a
						href="#"
						class="font-semibold text-indigo-600 hover:text-indigo-500"
						>Forgot password?</a
					>
				</div>
			</div>
			<div class="mt-2">
				<Field
					name="password"
					type="password"
					autocomplete="current-password"
					class="block w-full rounded-md indent-3 border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
				/>
			</div>
			<ErrorMessage name="password" />
		</div>

		<div>
			<button
				type="submit"
				class="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
			>
				Sign in
			</button>
		</div>
	</Form>
</template>

<style scoped>
.read-the-docs {
	color: #888;
}
</style>
