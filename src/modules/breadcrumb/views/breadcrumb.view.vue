<template>
	<!-- <Breadcrumbs></Breadcrumbs> -->
	<BreadcrumbComponent />

	<h1 class="page-header">
		{{ meta.title }}
		<template v-if="meta.subtitle">
			<small v-html="meta.subtitle" />
		</template>
	</h1>
	<hr class="mb-4">
	<slot></slot>
</template>

<style src="./breadcrumb.view.scss" lang="scss"/>
<script src="./breadcrumb.view.ts"></script>

