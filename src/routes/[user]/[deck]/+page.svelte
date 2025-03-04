<script lang="ts">
    import Button from '$lib/components/ui/button/button.svelte';
    const { data } = $props()
    console.log(data)
</script>

<ul class="grid grid-cols-4 gap-4">
    {#each data.cards as card}
    <li>
        <img class="aspect-[2.5/3.5]" src={card.image} alt={card.name}/>
    </li>
    {/each}
</ul>

<div class="fixed bottom-0 right-0 p-4">
    <Button variant="secondary">Katt rám</Button>
</div>