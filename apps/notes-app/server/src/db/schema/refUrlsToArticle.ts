import { pgTable, primaryKey, uuid } from 'drizzle-orm/pg-core';
import { relations } from 'drizzle-orm';
import { article } from './article';
import { referenceUrls } from './referenceUrls';

export const refUrlsToArticle = pgTable(
	'ref_urls_to_article',
	{
		articleId: uuid()
			.notNull()
			.references(() => article.id),
		refUrlId: uuid()
			.notNull()
			.references(() => referenceUrls.id),
	},
	(t) => ({
		pk: primaryKey({ columns: [t.articleId, t.refUrlId] }),
	})
);

export const RefUrlsToArticleRelations = relations(refUrlsToArticle, ({ one }) => ({
	refUrl: one(referenceUrls, {
		fields: [refUrlsToArticle.refUrlId],
		references: [referenceUrls.id],
	}),
	article: one(article, {
		fields: [refUrlsToArticle.articleId],
		references: [article.id],
	}),
}));
