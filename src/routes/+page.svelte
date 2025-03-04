<script lang="ts">
	import { goto } from "$app/navigation";

    let username: string = $state("")
</script>

<input bind:value={username} class="border-2">
<button onclick={() => goto(`/${username}`)}>Find me decks</button>