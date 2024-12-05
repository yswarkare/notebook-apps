import { pgTable, primaryKey, uuid } from 'drizzle-orm/pg-core';
import { relations } from 'drizzle-orm';
import { notebooks } from './notebooks';
import { tags } from './tags';
import { notes } from './notes';
import { section } from './section';

export const tagsToSection = pgTable(
	'tags_to_sections',
	{
		sectionId: uuid()
			.notNull()
			.references(() => section.id),
		tagId: uuid()
			.notNull()
			.references(() => tags.id),
	},
	(t) => ({
		pk: primaryKey({ columns: [t.sectionId, t.tagId] }),
	})
);

export const TagsToNotebookRelations = relations(tagsToSection, ({ one }) => ({
	tag: one(tags, {
		fields: [tagsToSection.tagId],
		references: [tags.id],
	}),
	section: one(section, {
		fields: [tagsToSection.sectionId],
		references: [section.id],
	}),
}));
