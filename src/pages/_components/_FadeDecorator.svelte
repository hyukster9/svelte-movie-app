<script>
    import { fade, fly } from "svelte/transition";
</script>

<div in:fade={{duration:500}} >
    <slot />
</div>