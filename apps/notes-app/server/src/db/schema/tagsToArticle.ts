import { pgTable, primaryKey, uuid } from 'drizzle-orm/pg-core';
import { relations } from 'drizzle-orm';
import { notebooks } from './notebooks';
import { tags } from './tags';
import { article } from './article';

export const tagsToArticle = pgTable(
	'tags_to_article',
	{
		articleId: uuid()
			.notNull()
			.references(() => notebooks.id),
		tagId: uuid()
			.notNull()
			.references(() => tags.id),
	},
	(t) => ({
		pk: primaryKey({ columns: [t.articleId, t.tagId] }),
	})
);

export const TagsToNotebookRelations = relations(tagsToArticle, ({ one }) => ({
	tag: one(tags, {
		fields: [tagsToArticle.tagId],
		references: [tags.id],
	}),
	article: one(article, {
		fields: [tagsToArticle.articleId],
		references: [article.id],
	}),
}));
