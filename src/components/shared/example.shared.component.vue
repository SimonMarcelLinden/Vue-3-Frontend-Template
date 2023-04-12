<template>
	<div class="example">
		<h1>Example Shared Component</h1>

		<h3>{{ text }}</h3>

		<slot v-if="this.$slots['example-content']" name="example-content"></slot>
	</div>
</template>

<style src="./example.shared.component.scss" lang="scss"/>
<script src="./example.shared.component.ts"></script>
