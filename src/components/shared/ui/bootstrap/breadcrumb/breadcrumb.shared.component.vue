<template>
	<ol class="breadcrumb">
		<li class="breadcrumb-item" v-for="(item, index) in breadcrumbList" :key="index"
			:class="{'active': null == item.link }">
			<a v-if="item.link" href="#" @click.prevent="routeTo($event, index)">
				{{ item.title }}
			</a>
			<template v-else>
				{{ item.title }}
			</template>
		</li>
	</ol>
</template>

<style src="./breadcrumb.shared.component.scss" lang="scss"/>
<script src="./breadcrumb.shared.component.ts"></script>
