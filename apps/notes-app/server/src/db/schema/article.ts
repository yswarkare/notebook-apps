import { pgTable, smallint, uuid, varchar } from 'drizzle-orm/pg-core';
import { modifierStamps, timestamps } from './columns.helpers';
import { relations } from 'drizzle-orm';
import { tagsToArticle } from './tagsToArticle';
import { refUrlsToArticle } from './refUrlsToArticle';
import { notebooks } from './notebooks';

export const article = pgTable('article', {
	id: uuid().primaryKey().notNull().unique(),
	title: varchar({ length: 255 }).notNull(),
	orderId: smallint().unique().notNull(),
	notebookId: uuid()
		.references(() => notebooks.id, { onDelete: 'cascade' })
		.notNull(),
	...timestamps,
	...modifierStamps,
});

export const articleRelations = relations(article, ({ many, one }) => ({
	notebook: one(notebooks, {
		fields: [article.notebookId],
		references: [notebooks.id],
	}),
  tagsToArticle: many(tagsToArticle),
	refUrlsToArticle: many(refUrlsToArticle),
}));
