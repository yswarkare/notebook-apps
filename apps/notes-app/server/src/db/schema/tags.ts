import { pgTable, uuid, varchar } from "drizzle-orm/pg-core";
import { modifierStamps, timestamps } from "./columns.helpers";
import { relations } from "drizzle-orm";
import { tagsToNotebook } from "./tagsToNotebook";
import { tagsToNotes } from "./tagsToNotes";
import { users } from "./users";

export const tags = pgTable("tags", {
  id: uuid().primaryKey().notNull().unique(),
  name: varchar({ length: 150 }).notNull(),
  userId: uuid()
		.references(() => users.id, { onDelete: 'cascade' })
		.notNull(),
  ...timestamps,
  ...modifierStamps,
});

export const tagRelations = relations(tags, ({ many, one }) => ({
  user: one(users, {
		fields: [tags.userId],
		references: [users.id],
	}),
  tagsToNotebook: many(tagsToNotebook),
  tagsToNotes: many(tagsToNotes),
}));

export type TagEntity = typeof tags.$inferInsert;