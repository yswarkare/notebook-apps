import { pgTable, uuid, varchar } from 'drizzle-orm/pg-core';
import { modifierStamps, timestamps } from './columns.helpers';
import { relations } from 'drizzle-orm';
import { users } from './users';
import { tagsToNotebook } from './tagsToNotebook';
import { notesToNotebook } from './notesToNotebook';
import { refUrlsToNotebook } from './refUrlsToNotebooks';

export const notebooks = pgTable('notebooks', {
	id: uuid().primaryKey().notNull().unique(),
	title: varchar({ length: 255 }).notNull(),
	userId: uuid()
		.references(() => users.id, { onDelete: 'cascade' })
		.notNull(),
	...timestamps,
	...modifierStamps,
});

export const notebookRelations = relations(notebooks, ({ one, many }) => ({
	user: one(users, {
		fields: [notebooks.userId],
		references: [users.id],
	}),
	tagsToNotebook: many(tagsToNotebook),
	notesToNotebook: many(notesToNotebook),
	refUrlsToNotebook: many(refUrlsToNotebook),
}));
