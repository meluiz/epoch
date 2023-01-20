import { defineConfig } from "tsup"

export default defineConfig({
  entry: ["src/*.ts"],
  moduleResolution: "node",
  dts: true,
  minify: true,
  splitting: false,
  outDir: ".",
  legacyOutput: false
})
