<script setup lang="ts"></script>
<template>
	<header class="w-full bg-indigo-500 flex flex-row p-2 gap-3">
		<RouterLink to="sign" v-slot="{ isActive, href, navigate }">
			<a
				class="flex p-2 font-bold w-fit px-4 rounded-md"
				:class="isActive ? 'text-green-400  ' : 'text-white'"
				>Login</a
			>
		</RouterLink>
		<RouterLink to="/" v-slot="{ isActive, href, navigate }">
			<a
				class="flex p-2 font-bold w-fit px-4 rounded-md"
				:class="isActive ? 'text-green-400  ' : 'text-white'"
				>Home</a
			>
		</RouterLink>
	</header>
</template>
