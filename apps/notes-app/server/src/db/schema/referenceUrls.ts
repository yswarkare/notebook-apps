import { pgTable, uuid, varchar } from "drizzle-orm/pg-core";
import { timestamps } from "./columns.helpers";
import { relations } from "drizzle-orm";
import { tagsToNotebook } from "./tagsToNotebook";
import { refUrlsToNotes } from "./refUrlsToNotes";

export const referenceUrls = pgTable("tags", {
  id: uuid().primaryKey().notNull().unique(),
  name: varchar({ length: 150 }).notNull(),
  url: varchar({ length: 255 }).notNull(),
  ...timestamps
});

export const refUrlRelations = relations(referenceUrls, ({ many }) => ({
  refUrlsToNotebook: many(tagsToNotebook),
  refUrlsToNotes: many(refUrlsToNotes),
}));

