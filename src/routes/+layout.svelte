<script lang="ts">
	import '../app.css';
	let { children } = $props();
</script>

<div class="container mx-auto py-5">
	{@render children()}
</div>
