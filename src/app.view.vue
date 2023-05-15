<template>
	<template v-if="isAuthenticated" >
		<sidebar id="sidebar" class="app-sidebar" />

		<div id="content" class="app-content">
			<router-view/>
		</div>
	</template>
	<template v-else>
		<div class="h-100">
			<router-view/>
		</div>
	</template>
</template>

<style src="./app.view.scss" lang="scss"/>
<script src="./app.view.ts"></script>

