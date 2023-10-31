import { startApp } from "deno-micro-cms";
import { initDB } from "./init-db.ts";

await startApp({
  FE_ROOT_PATH: `${Deno.cwd()}/www`,
  DB_INIT: initDB,
});
