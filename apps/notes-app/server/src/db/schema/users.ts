import { pgTable, smallint, uuid, varchar } from 'drizzle-orm/pg-core';
import { timestamps } from './columns.helpers';
import { relations } from 'drizzle-orm';
import { notebooks } from './notebooks';
import { tags } from './tags';
import { referenceUrls } from './referenceUrls';
import { notes } from './notes';

export const users = pgTable('users', {
	id: uuid().primaryKey().notNull().unique(),
	firstName: varchar({ length: 150 }).notNull(),
	lastName: varchar({ length: 150 }).notNull(),
	username: varchar({ length: 150 }).notNull().unique(),
	email: varchar({ length: 255 }).notNull().unique(),
	mobile: varchar({ length: 20 }).notNull().unique(),
	password: varchar({ length: 255 }).notNull(),
	age: smallint(),
	...timestamps,
});

export const userRelations = relations(users, ({ many }) => ({
	notebooks: many(notebooks),
	tags: many(tags),
	notes: many(notes),
	referenceUrls: many(referenceUrls),
}));

export type UserEntity = typeof users.$inferInsert