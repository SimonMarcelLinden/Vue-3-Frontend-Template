<template>
	<div id="sidebar" class="sidebar">
		<div class="sidebar-content">
			<div class="menu p-relative">
				<div class="menu-header">
					<span>Navigation</span>
				</div>

				<div class="menu-item active">
					<a href="index.html" class="menu-link p-relative d-flex justify-content-end align-items-center">
						<span class="menu-icon p-relative d-flex justify-content-center align-items-center"><i class="bi bi-cpu"></i></span>
						<span class="menu-text">Dashboard</span>
					</a>
				</div>

				<div class="menu-header">
					<span>User</span>
				</div>
				<div class="menu-item has-sub expand">
					<a href="#" class="menu-link p-relative d-flex justify-content-end align-items-center">
						<div class="menu-icon">
							<i class="bi bi-bag-check"></i>
						</div>
						<div class="menu-text d-flex align-items-center">POS System</div>
						<span class="menu-caret"><b class="caret"></b></span>
					</a>
					<div class="menu-submenu">
						<div class="menu-item p-relative">
							<a href="pos_customer_order.html" target="_blank" class="menu-link p-relative d-flex justify-content-end align-items-center">
								<div class="menu-text">Customer Order</div>
							</a>
						</div>
						<div class="menu-item p-relative">
							<a href="pos_kitchen_order.html" target="_blank" class="menu-link p-relative d-flex justify-content-end align-items-center">
								<div class="menu-text">Kitchen Order</div>
							</a>
						</div>
						<div class="menu-item p-relative">
							<a href="pos_counter_checkout.html" target="_blank" class="menu-link p-relative d-flex justify-content-end align-items-center">
								<div class="menu-text">Counter Checkout</div>
							</a>
						</div>
						<div class="menu-item p-relative">
							<a href="pos_table_booking.html" target="_blank" class="menu-link p-relative d-flex justify-content-end align-items-center">
								<div class="menu-text">Table Booking</div>
							</a>
						</div>
						<div class="menu-item p-relative">
							<a href="pos_menu_stock.html" target="_blank" class="menu-link p-relative d-flex justify-content-end align-items-center">
								<div class="menu-text">Menu Stock</div>
							</a>
						</div>
					</div>
				</div>
			</div>
			<div class="p-3 px-4 mt-auto"></div>
		</div>
	</div>
</template>

<style src="./sidebar.component.scss" lang="scss"/>
<script src="./sidebar.component.ts"></script>
