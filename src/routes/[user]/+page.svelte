<script lang="ts">
	import type { PageServerData } from './$types';

	const { data } = $props();

	console.log(data.data)
</script>

<ul>
	{#each data.data as deck}
		<a href={`${data.user}/${deck.publicId}`}>
			<li>
				{deck.name} x
				{#each deck.colors as color}
                {color}    
            {/each}
			</li>
		</a>
	{/each}
</ul>
