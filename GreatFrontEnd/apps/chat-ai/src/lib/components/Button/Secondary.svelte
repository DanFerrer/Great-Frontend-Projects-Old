<script lang="ts">
	import type { ComponentType } from 'svelte';

	export let icon: ComponentType | null = null;
	export let props: Record<string, any> = {};
</script>

<button
	class="
    w-[155px]
    rounded
    border-neutral-200
		border-solid
		border-1
    bg-white
    pb-[10px]
    pl-[14px]
    pr-[14px] pt-[10px]
    font-noto-sans
    text-sm 
		font-medium
    text-neutral-900
    shadow
    hover:bg-neutral-50
    focus:bg-neutral-50
    focus:ring-4
		focus:ring-buttonFocus
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
