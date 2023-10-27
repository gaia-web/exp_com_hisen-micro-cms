import { startApp } from "deno-micro-cms";

await startApp({
  FE_USE_SPA: "TRUE",
  FE_ROOT_PATH: `${Deno.cwd()}/www/dist`,
});
