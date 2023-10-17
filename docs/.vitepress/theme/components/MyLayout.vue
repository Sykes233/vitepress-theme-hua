<template>
	<a-layout>
		<a-layout-header>
			<slot name="header"></slot>
		</a-layout-header>
		<a-layout-content>
			<slot name="content"></slot>
		</a-layout-content>
		<a-layout-footer>
			<slot name="footer"></slot>
		</a-layout-footer>
	</a-layout>
</template>