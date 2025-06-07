import { drizzle } from "drizzle-orm/neon-http";
import { neon, neonConfig } from "@neondatabase/serverless"

import { env } from "~/env";
import * as schema from "./schema";

import ws from "ws";

neonConfig.webSocketConstructor = ws;

/**
 * Cache the database connection in development. This avoids creating a new connection on every HMR
 * update.
 */

type DB = ReturnType<typeof drizzle<typeof schema>>

const globalForDb = globalThis as unknown as {
  db: DB | undefined;
};

const sql = neon(env.DATABASE_URL)
const db = drizzle({ client: sql, schema })

if (env.NODE_ENV !== "production") globalForDb.db = db

export { db }
