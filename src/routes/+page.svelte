<script lang="ts">
    let { data } = $props()
</script>

<div>
    {#each data.data as card}
        {card.id}
        {card.name}
        {card.image}
        <br>
    {/each}
</div>