import { pgTable, smallint, text, uuid, varchar } from 'drizzle-orm/pg-core';
import { modifierStamps, timestamps } from './columns.helpers';
import { relations } from 'drizzle-orm';
import { tagsToSection } from './tagsToSection';
import { refUrlsToSections } from './refUrlsToSections';
import { users } from './users';
import { article } from './article';

export const section = pgTable('section', {
	id: uuid().primaryKey().notNull().unique(),
	title: varchar({ length: 255 }).notNull(),
	orderId: smallint().unique().notNull(),
	content: text().notNull(),
	articleId: uuid()
		.references(() => users.id, { onDelete: 'cascade' })
		.notNull(),
	...timestamps,
	...modifierStamps,
});

export const sectionRelations = relations(section, ({ many, one }) => ({
	article: one(article, {
		fields: [section.articleId],
		references: [article.id],
	}),
  tagsToSection: many(tagsToSection),
	refUrlsToSections: many(refUrlsToSections),
}));
