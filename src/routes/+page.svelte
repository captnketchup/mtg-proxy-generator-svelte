<script lang="ts">
    import Button from "$lib/components/ui/button/button.svelte";
    import Input from "$lib/components/ui/input/input.svelte";
	import { goto } from "$app/navigation";

    let username: string = $state("")
</script>

<div class="grid grid-cols-4 gap-2">
    <Input bind:value={username} class="border-2"/>
    <Button variant="secondary" onclick={() => goto(`/${username}`)}>Find me decks</Button>
</div>