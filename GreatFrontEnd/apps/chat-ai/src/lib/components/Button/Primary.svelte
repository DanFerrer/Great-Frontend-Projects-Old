<script lang="ts">
	import type { ComponentType } from 'svelte';

	export let icon: ComponentType | null = null;
	export let props: Record<string, any> = {};
</script>

<button
	class="
    focus:ring-button
    w-[155px]
    rounded
    border-none
    bg-indigo-700
    pb-[10px]
    pl-[14px]
    pr-[14px] pt-[10px]
    font-noto-sans
    text-sm 
    font-medium
    text-white
    shadow
    hover:bg-indigo-800
    focus:bg-indigo-800
    focus:ring-4
    disabled:bg-neutral-100
    disabled:text-neutral-400
  "
>
	{#if icon}
		<svelte:component this={icon} {...props} />
	{/if}
	<span class="pl-[2px] pr-[2px]">
		<slot />
	</span>
</button>
