import { timestamp } from "drizzle-orm/pg-core";

// columns.helpers.ts
export const timestamps = {
  updated_at: timestamp(),
  created_at: timestamp().defaultNow().notNull(),
  deleted_at: timestamp(),
}
