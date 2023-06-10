import { defineConfig } from "cypress";

export default defineConfig({
  projectId: "zc1t5t",
  experimentalMemoryManagement: true,
  watchForFileChanges: true,
  viewportWidth: 1280,
  viewportHeight: 720,
  retries: {
    runMode: 2,
    openMode: 0,
  },
  env: {
    baseUrl: "http://localhost:3000",
  },
  defaultCommandTimeout: 10000,
  execTimeout: 60000,
  taskTimeout: 60000,
  e2e: {
    specPattern: ["**/e2e/**/*.int.cy.ts", "**/e2e/**/*.e2e.cy.ts"],
  },
  component: {
    devServer: {
      framework: "next",
      bundler: "webpack",
    },
    specPattern: ["**/tests/*.comp.cy.ts"],
  },
});
