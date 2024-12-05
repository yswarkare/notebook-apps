import { pgTable, primaryKey, uuid } from 'drizzle-orm/pg-core';
import { relations } from 'drizzle-orm';
import { notebooks } from './notebooks';
import { referenceUrls } from './referenceUrls';

export const refUrlsToNotebook = pgTable(
	'ref_urls_to_notebook',
	{
		notebookId: uuid()
			.notNull()
			.references(() => notebooks.id),
		refUrlId: uuid()
			.notNull()
			.references(() => referenceUrls.id),
	},
	(t) => ({
		pk: primaryKey({ columns: [t.notebookId, t.refUrlId] }),
	})
);

export const RefUrlsToNotebookRelations = relations(refUrlsToNotebook, ({ one }) => ({
	refUrl: one(referenceUrls, {
		fields: [refUrlsToNotebook.refUrlId],
		references: [referenceUrls.id],
	}),
	notebook: one(notebooks, {
		fields: [refUrlsToNotebook.notebookId],
		references: [notebooks.id],
	}),
}));
