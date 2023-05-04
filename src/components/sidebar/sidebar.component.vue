<template>
	<div id="sidebar" class="sidebar" ref="sidebar">
		<div class="sidebar-content">
			<div class="menu p-relative">
				<template v-for="(groupRoutes, groupName) in filteredRoutes()">
					<div v-if="groupRoutes.length > 0" class="menu-header">
						{{ groupName }}
					</div>
					<div v-for="route in groupRoutes" :key="route.name"  class="menu-item" :class="{'active' : $route.matched.some(({ name }) => name === route.name) , 'has-sub' : route.children}">
						<a v-if="route.children" href="#" class="menu-link p-relative d-flex justify-content-end align-items-center" @click.prevent="handleOpenSub">
							<span class="menu-icon p-relative d-flex justify-content-center align-items-center">
								<i class="bi" :class="route.meta.icon ? route.meta.icon : 'bi-question'"></i>
							</span>
							<span class="menu-text">{{ route.meta.title ? route.meta.title : route.name }}</span>
							<span class="menu-caret"><b class="caret"></b></span>
						</a>
						<router-link v-else :to="route.path" class="menu-link p-relative d-flex justify-content-end align-items-center" @click.prevent="handleOpenSub">
							<span class="menu-icon p-relative d-flex justify-content-center align-items-center">
								<i class="bi" :class="route.meta.icon ? route.meta.icon : 'bi-question'"></i>
							</span>
							<span class="menu-text">{{ route.meta.title ? route.meta.title : route.name }}</span>
						</router-link>

						<div v-if="route.children" class="menu-submenu">
							<div v-for="item in route.children" class="menu-item">
								<router-link :to="item.path"  class="menu-link p-relative d-flex justify-content-end align-items-center">
									<span class="menu-text">{{ item.meta.title ? item.meta.title : item.name }}</span>
								</router-link>
							</div>
						</div>
					</div>
				</template>
			</div>
			<div class="p-3 px-4 mt-auto"></div>
		</div>
	</div>
</template>

<style src="./sidebar.component.scss" lang="scss"/>
<script src="./sidebar.component.ts"></script>
