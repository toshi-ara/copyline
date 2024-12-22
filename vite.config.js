import { defineConfig } from "vite"

export default defineConfig({
    base: "/copyline",
    root: "src",
    build : {
        outDir: "../docs",
        emptyOutDir: true,
    },
})

