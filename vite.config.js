/// <reference types="vitest" />
import { defineConfig } from "vite"

export default defineConfig({
    base: "/copyline",
    root: "src",
    build : {
        outDir: "../docs",
        emptyOutDir: true,
    },
    test: {
        include: ["../test/*.{test,spec}.{js,mjs,cjs,ts,mts,cts,jsx,tsx}"],
    },
})

