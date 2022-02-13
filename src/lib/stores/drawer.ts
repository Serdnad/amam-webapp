import { writable } from 'svelte/store';

export const isDrawerOpen = writable(false);

export function openDrawer() {
	isDrawerOpen.set(true);
}

export function closeDrawer() {
	isDrawerOpen.set(false);
}
