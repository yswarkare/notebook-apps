import { pgTable, smallint, text, uuid, varchar } from 'drizzle-orm/pg-core';
import { modifierStamps, timestamps } from './columns.helpers';
import { relations } from 'drizzle-orm';
import { tagsToNotes } from './tagsToNotes';
import { refUrlsToNotes } from './refUrlsToNotes';
import { notebooks } from './notebooks';

export const notes = pgTable('notes', {
	id: uuid().primaryKey().notNull().unique(),
	title: varchar({ length: 255 }).notNull(),
	orderId: smallint().unique().notNull(),
	content: text().notNull(),
	notebookId: uuid()
		.references(() => notebooks.id, { onDelete: 'cascade' })
		.notNull(),
	...timestamps,
	...modifierStamps,
});

export const notesRelations = relations(notes, ({ many, one }) => ({
	notebook: one(notebooks, {
		fields: [notes.notebookId],
		references: [notebooks.id],
	}),
  tagsToNotes: many(tagsToNotes),
	refUrlsToNotes: many(refUrlsToNotes),
}));
