<script lang="ts">
	import '../app.css';
	import { slide } from 'svelte/transition'; 
	let { children, data } = $props();
</script>

{#key data.url}
	<div class="container mx-auto py-5"
		in:slide={{ duration: 300, axis: 'y' }}
		out:slide={{ duration: 300, axis: 'y'}}>
		{@render children()}
	</div>
{/key}