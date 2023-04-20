<template>
	<h6 class="mb-4">Login</h6>
	<form class="form" @submit.prevent="this.handleSignIn()">
		<fieldset class="form-group has-float-label mb-4" id="__BVID__31">
			<legend tabindex="-1" class="bv-no-focus-ring col-form-label pt-0" id="__BVID__31__BV_label_">
				E-mail
			</legend>
			<div>
				<!-- <input type="text" class="form-control is-valid" id="__BVID__32"> -->
				<input id="email" type="email" placeholder="E-Mail" name="email" v-model="credentials.email"/>
			</div>
			<div>
				<span v-if="this.error.field == 'email'">
					{{ this.error.message }}
				</span>
			</div>
		</fieldset>
		<fieldset class="form-group has-float-label mb-4" id="__BVID__33">
			<legend tabindex="-1" class="bv-no-focus-ring col-form-label pt-0" id="__BVID__33__BV_label_">
				Password
			</legend>
			<div>
				<!-- <input type="password" class="form-control is-valid" id="__BVID__34"> -->
				<input id="password"  type="password" placeholder="*********" name="password" :isRequired="true" v-model="credentials.password" icon="shared-eye-icon" iconDir="right"/>
			</div>
			<div>
				<span v-if="this.error.field == 'password'">
					{{ this.error.message }}
				</span>
			</div>
		</fieldset>
		<div class="d-flex justify-content-between align-items-center">
			<a href="/user/forgot-password" class="">
				Forget password?
			</a>
			<button type="submit" class="btn btn-primary btn-lg btn-multiple-state btn-shadow">
				<span class="spinner d-inline-block">
					<span class="bounce1"></span>
					<span class="bounce2"></span>
					<span class="bounce3"></span>
				</span>
				<span class="icon success">
					<i class="simple-icon-check"></i>
				</span>
				<span class="icon fail">
					<i class="simple-icon-exclamation"></i>
				</span>
				<span class="label">
					LOGIN
				</span>
			</button>
		</div>
	</form>
</template>

<style src="./login.view.module.scss" lang="scss" scoped />
<script src="./login.view.module.ts"></script>
