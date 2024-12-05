import { pgTable, primaryKey, uuid } from 'drizzle-orm/pg-core';
import { relations } from 'drizzle-orm';
import { notes } from './notes';
import { referenceUrls } from './referenceUrls';

export const refUrlsToNotes = pgTable(
	'ref_urls_to_notes',
	{
		noteId: uuid()
			.notNull()
			.references(() => notes.id),
		refUrlId: uuid()
			.notNull()
			.references(() => referenceUrls.id),
	},
	(t) => ({
		pk: primaryKey({ columns: [t.noteId, t.refUrlId] }),
	})
);

export const RefUrlsToNoteRelations = relations(refUrlsToNotes, ({ one }) => ({
	refUrl: one(referenceUrls, {
		fields: [refUrlsToNotes.refUrlId],
		references: [referenceUrls.id],
	}),
	note: one(notes, {
		fields: [refUrlsToNotes.noteId],
		references: [notes.id],
	}),
}));
