import { startApp } from "deno-micro-cms";
import { initDB } from "./init-db.ts";

await startApp({
  FE_USE_SPA: "TRUE",
  FE_ROOT_PATH: `${Deno.cwd()}/www/dist`,
  DB_INIT: initDB
});
