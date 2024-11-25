import { timestamp, uuid } from 'drizzle-orm/pg-core';
import { users } from './users';

// columns.helpers.ts
export const timestamps = {
	updated_at: timestamp(),
	created_at: timestamp().defaultNow().notNull(),
	deleted_at: timestamp(),
};

// columns.helpers.ts
export const modifierStamps = {
	updated_by: uuid(),
	created_by: uuid().notNull(),
	deleted_by: uuid(),
};
