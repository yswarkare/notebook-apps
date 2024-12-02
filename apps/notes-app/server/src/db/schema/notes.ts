import { pgTable, text, uuid, varchar } from 'drizzle-orm/pg-core';
import { modifierStamps, timestamps } from './columns.helpers';
import { relations } from 'drizzle-orm';
import { tagsToNotes } from './tagsToNotes';
import { notesToNotebook } from './notesToNotebook';
import { refUrlsToNotes } from './refUrlsToNotes';
import { users } from './users';

export const notes = pgTable('notes', {
	id: uuid().primaryKey().notNull().unique(),
	title: varchar({ length: 255 }).notNull(),
	content: text().notNull(),
	tags: varchar({ length: 150 }),
	userId: uuid()
		.references(() => users.id, { onDelete: 'cascade' })
		.notNull(),
	...timestamps,
	...modifierStamps,
});

export const notesRelations = relations(notes, ({ many, one }) => ({
	user: one(users, {
		fields: [notes.userId],
		references: [users.id],
	}),
	noteToNotebooks: many(notesToNotebook),
  tagsToNotes: many(tagsToNotes),
	refUrlsToNotes: many(refUrlsToNotes),
}));
