import { pgTable, uuid, varchar } from "drizzle-orm/pg-core";
import { modifierStamps, timestamps } from "./columns.helpers";
import { relations } from "drizzle-orm";
import { tagsToNotebook } from "./tagsToNotebook";
import { tagsToNotes } from "./tagsToNotes";
import { tagsToArticle } from "./tagsToArticle";
import { tagsToSection } from "./tagsToSection";

export const tags = pgTable("tags", {
  id: uuid().primaryKey().notNull().unique(),
  name: varchar({ length: 150 }).notNull(),
  ...timestamps,
  ...modifierStamps,
});

export const tagRelations = relations(tags, ({ many }) => ({
  tagsToNotebook: many(tagsToNotebook),
  tagsToNotes: many(tagsToNotes),
  tagsToArticle: many(tagsToArticle),
  tagsToSection: many(tagsToSection),
}));

export type TagEntity = typeof tags.$inferInsert;