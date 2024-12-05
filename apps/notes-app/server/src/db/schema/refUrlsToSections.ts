import { pgTable, primaryKey, uuid } from 'drizzle-orm/pg-core';
import { relations } from 'drizzle-orm';
import { section } from './section';
import { referenceUrls } from './referenceUrls';

export const refUrlsToSections = pgTable(
	'ref_urls_to_sections',
	{
		sectionId: uuid()
			.notNull()
			.references(() => section.id),
		refUrlId: uuid()
			.notNull()
			.references(() => referenceUrls.id),
	},
	(t) => ({
		pk: primaryKey({ columns: [t.sectionId, t.refUrlId] }),
	})
);

export const RefUrlsToSectionRelations = relations(refUrlsToSections, ({ one }) => ({
	refUrl: one(referenceUrls, {
		fields: [refUrlsToSections.refUrlId],
		references: [referenceUrls.id],
	}),
	section: one(section, {
		fields: [refUrlsToSections.sectionId],
		references: [section.id],
	}),
}));
