/* eslint-disable eslint-comments/disable-enable-pair */
/* eslint-disable spaced-comment */
/* eslint-disable import/no-default-export */
/// <reference types="vitest" />

// Configure Vitest (https://vitest.dev/config/)

/* @flow */

import { defineConfig } from "vite";
import { flowPlugin, esbuildFlowPlugin } from "@bunchtogether/vite-plugin-flow";

 
// $FlowIssue
export default defineConfig({
  esbuild: {
    define: {
      __DEBUG__: false,
    },
  },
  define: {
    __DEBUG__: false,
  },
  test: {
    environment: "happy-dom",
    include: ['**/button/logger.test.js']
  },
  optimizeDeps: {
    esbuildOptions: {
      plugins: [
        esbuildFlowPlugin(),
      ],
    },
  },
  plugins: [
    // $FlowIssue
    flowPlugin({
      exclude: "",
    }),
  ],
});
