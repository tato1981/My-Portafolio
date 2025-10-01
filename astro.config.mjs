// @ts-check
import tailwindcss from '@tailwindcss/vite';
import { defineConfig } from 'astro/config';
tailwindcss

// https://astro.build/config
export default defineConfig({
    vite: {
        plugins: [tailwindcss()]
    }
});




