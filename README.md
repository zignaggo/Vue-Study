# Studying Vue 3 for internship

### Getting started

-   Install Vue 3 + Typescript + Vite
    > `npm create vite@latest vue-study -- --template vue-ts`
-   Configure Tailwind, if you want of course...
    > `npm install -D tailwindcss postcss autoprefixer ` > `npx tailwindcss init -p`
-   Add this code in your talwind.config.js file

```javascript
/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
	theme: {
		extend: {},
	},
	plugins: [],
}
```

-   if you already have src/style.css created add this line of css, else create and paste.

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

---

### Introduction

To add props to your component, you need to define a prop with defineProps function.

-   First Way(typescript)

```typescript
defineProps<{ email: string; password: string }>()
```

-   Second Way

```javascript
defineProps(["email", "password"])
```

-   Third Way

```javascript
defineProps({
	title: String,
	likes: Number,
})
```

Passing props to your component

-   Static Props

```jsx
<BlogPost title="My journey with Vue" />
```

-   Dynamic Props
    > to use some variable, you must use this way.

```HTML
<BlogPost v-bind:title="posts" />
// shorcut
<BlogPost :title="posts" />
```

### Emit Events

Basically when you need to get a event of custom component, you need to use emit function.

1.  first of all define emit on your custom component and pass to primitive component, you need to create a props to pass the data that gonna be changed

```vue
<script setup lang="ts">
defineProps<{ email: string; password: string }>()
defineEmits(["update:email", "update:password"])
</script>

<template>
	<input
		:value="email"
		@input="
			$emit('update:email', ($event.target as HTMLInputElement).value)
		"
	/>
</template>
```

2. When you call the custom component, pass your function and variables.

```vue
<script setup lang="ts">
const fields = reactive<{ email: string; password: string }>({
	email: "",
	password: "",
})
</script>

<template>
	<div
		class="flex w-screen min-h-screen flex-col items-center justify-center px-6 py-12 lg:px-8"
	>
		<!-- First Way -->
		<Form v-model:email="fields.email" v-model:password="fields.password" />
		<!-- Second Way -->
		<Form
			:password="password"
			@update:password="(newValue) => (password = newValue)"
			:email="email"
			@update:email="(newValue) => (email = newValue)"
		/>
	</div>
</template>
```
