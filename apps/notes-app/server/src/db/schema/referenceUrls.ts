import { pgTable, uuid, varchar } from "drizzle-orm/pg-core";
import { modifierStamps, timestamps } from "./columns.helpers";
import { relations } from "drizzle-orm";
import { tagsToNotebook } from "./tagsToNotebook";
import { refUrlsToNotes } from "./refUrlsToNotes";
import { users } from "./users";

export const referenceUrls = pgTable("reference_urls", {
  id: uuid().primaryKey().notNull().unique(),
  name: varchar({ length: 150 }).notNull(),
  url: varchar({ length: 255 }).notNull(),
  userId: uuid()
		.references(() => users.id, { onDelete: 'cascade' })
		.notNull(),
  ...timestamps,
  ...modifierStamps,
});

export const refUrlRelations = relations(referenceUrls, ({ many, one }) => ({
  user: one(users, {
		fields: [referenceUrls.userId],
		references: [users.id],
	}),
  refUrlsToNotebook: many(tagsToNotebook),
  refUrlsToNotes: many(refUrlsToNotes),
}));

