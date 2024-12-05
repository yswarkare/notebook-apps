import { pgTable, smallint, uuid, varchar } from 'drizzle-orm/pg-core';
import { modifierStamps, timestamps } from './columns.helpers';
import { relations } from 'drizzle-orm';
import { tagsToNotebook } from './tagsToNotebook';
import { refUrlsToNotebook } from './refUrlsToNotebooks';

export const notebooks = pgTable('notebooks', {
	id: uuid().primaryKey().notNull().unique(),
	title: varchar({ length: 255 }).notNull(),
	orderId: smallint().unique().notNull(),
	...timestamps,
	...modifierStamps,
});

export const notebookRelations = relations(notebooks, ({ many }) => ({
	tagsToNotebook: many(tagsToNotebook),
	refUrlsToNotebook: many(refUrlsToNotebook),
}));

export type NotebookEntity = typeof notebooks.$inferInsert;
