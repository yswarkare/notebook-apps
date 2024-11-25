import { pgTable, text, uuid, varchar } from 'drizzle-orm/pg-core';
import { modifierStamps, timestamps } from './columns.helpers';
import { relations } from 'drizzle-orm';
import { tagsToNotes } from './tagsToNotes';
import { notesToNotebook } from './notesToNotebook';
import { refUrlsToNotes } from './refUrlsToNotes';

export const notes = pgTable('notes', {
	id: uuid().primaryKey().notNull().unique(),
	title: varchar({ length: 255 }).notNull(),
	content: text().notNull(),
	tags: varchar({ length: 150 }),
	...timestamps,
	...modifierStamps,
});

export const notesRelations = relations(notes, ({ many }) => ({
	noteToNotebooks: many(notesToNotebook),
  tagsToNotes: many(tagsToNotes),
	refUrlsToNotes: many(refUrlsToNotes),
}));
