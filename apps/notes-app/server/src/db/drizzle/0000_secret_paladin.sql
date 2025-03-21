CREATE TABLE IF NOT EXISTS "notebooks" (
	"id" uuid PRIMARY KEY NOT NULL,
	"title" varchar(255) NOT NULL,
	"userId" uuid NOT NULL,
	"updated_at" timestamp,
	"created_at" timestamp DEFAULT now() NOT NULL,
	"deleted_at" timestamp,
	"updated_by" uuid,
	"created_by" uuid NOT NULL,
	"deleted_by" uuid,
	CONSTRAINT "notebooks_id_unique" UNIQUE("id")
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "notes" (
	"id" uuid PRIMARY KEY NOT NULL,
	"title" varchar(255) NOT NULL,
	"content" text NOT NULL,
	"tags" varchar(150),
	"userId" uuid NOT NULL,
	"updated_at" timestamp,
	"created_at" timestamp DEFAULT now() NOT NULL,
	"deleted_at" timestamp,
	"updated_by" uuid,
	"created_by" uuid NOT NULL,
	"deleted_by" uuid,
	CONSTRAINT "notes_id_unique" UNIQUE("id")
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "notes_to_notebook" (
	"notebookId" uuid NOT NULL,
	"noteId" uuid NOT NULL,
	CONSTRAINT "notes_to_notebook_notebookId_noteId_pk" PRIMARY KEY("notebookId","noteId")
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "reference_urls" (
	"id" uuid PRIMARY KEY NOT NULL,
	"name" varchar(150) NOT NULL,
	"url" varchar(255) NOT NULL,
	"userId" uuid NOT NULL,
	"updated_at" timestamp,
	"created_at" timestamp DEFAULT now() NOT NULL,
	"deleted_at" timestamp,
	"updated_by" uuid,
	"created_by" uuid NOT NULL,
	"deleted_by" uuid,
	CONSTRAINT "reference_urls_id_unique" UNIQUE("id")
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "ref_urls_to_notebook" (
	"notebookId" uuid NOT NULL,
	"refUrlId" uuid NOT NULL,
	CONSTRAINT "ref_urls_to_notebook_notebookId_refUrlId_pk" PRIMARY KEY("notebookId","refUrlId")
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "ref_urls_to_notes" (
	"noteId" uuid NOT NULL,
	"refUrlId" uuid NOT NULL,
	CONSTRAINT "ref_urls_to_notes_noteId_refUrlId_pk" PRIMARY KEY("noteId","refUrlId")
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "tags" (
	"id" uuid PRIMARY KEY NOT NULL,
	"name" varchar(150) NOT NULL,
	"userId" uuid NOT NULL,
	"updated_at" timestamp,
	"created_at" timestamp DEFAULT now() NOT NULL,
	"deleted_at" timestamp,
	"updated_by" uuid,
	"created_by" uuid NOT NULL,
	"deleted_by" uuid,
	CONSTRAINT "tags_id_unique" UNIQUE("id")
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "tags_to_notebook" (
	"notebookId" uuid NOT NULL,
	"tagId" uuid NOT NULL,
	CONSTRAINT "tags_to_notebook_notebookId_tagId_pk" PRIMARY KEY("notebookId","tagId")
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "tags_to_notes" (
	"noteId" uuid NOT NULL,
	"tagId" uuid NOT NULL,
	CONSTRAINT "tags_to_notes_noteId_tagId_pk" PRIMARY KEY("noteId","tagId")
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "users" (
	"id" uuid PRIMARY KEY NOT NULL,
	"firstName" varchar(150) NOT NULL,
	"lastName" varchar(150) NOT NULL,
	"username" varchar(150) NOT NULL,
	"email" varchar(255) NOT NULL,
	"mobile" varchar(20) NOT NULL,
	"password" varchar(255) NOT NULL,
	"age" smallint,
	"updated_at" timestamp,
	"created_at" timestamp DEFAULT now() NOT NULL,
	"deleted_at" timestamp,
	CONSTRAINT "users_id_unique" UNIQUE("id"),
	CONSTRAINT "users_username_unique" UNIQUE("username"),
	CONSTRAINT "users_email_unique" UNIQUE("email"),
	CONSTRAINT "users_mobile_unique" UNIQUE("mobile")
);
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "notebooks" ADD CONSTRAINT "notebooks_userId_users_id_fk" FOREIGN KEY ("userId") REFERENCES "public"."users"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "notes" ADD CONSTRAINT "notes_userId_users_id_fk" FOREIGN KEY ("userId") REFERENCES "public"."users"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "notes_to_notebook" ADD CONSTRAINT "notes_to_notebook_notebookId_notebooks_id_fk" FOREIGN KEY ("notebookId") REFERENCES "public"."notebooks"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "notes_to_notebook" ADD CONSTRAINT "notes_to_notebook_noteId_notes_id_fk" FOREIGN KEY ("noteId") REFERENCES "public"."notes"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "reference_urls" ADD CONSTRAINT "reference_urls_userId_users_id_fk" FOREIGN KEY ("userId") REFERENCES "public"."users"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "ref_urls_to_notebook" ADD CONSTRAINT "ref_urls_to_notebook_notebookId_notebooks_id_fk" FOREIGN KEY ("notebookId") REFERENCES "public"."notebooks"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "ref_urls_to_notebook" ADD CONSTRAINT "ref_urls_to_notebook_refUrlId_reference_urls_id_fk" FOREIGN KEY ("refUrlId") REFERENCES "public"."reference_urls"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "ref_urls_to_notes" ADD CONSTRAINT "ref_urls_to_notes_noteId_notebooks_id_fk" FOREIGN KEY ("noteId") REFERENCES "public"."notebooks"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "ref_urls_to_notes" ADD CONSTRAINT "ref_urls_to_notes_refUrlId_reference_urls_id_fk" FOREIGN KEY ("refUrlId") REFERENCES "public"."reference_urls"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "tags" ADD CONSTRAINT "tags_userId_users_id_fk" FOREIGN KEY ("userId") REFERENCES "public"."users"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "tags_to_notebook" ADD CONSTRAINT "tags_to_notebook_notebookId_notebooks_id_fk" FOREIGN KEY ("notebookId") REFERENCES "public"."notebooks"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "tags_to_notebook" ADD CONSTRAINT "tags_to_notebook_tagId_tags_id_fk" FOREIGN KEY ("tagId") REFERENCES "public"."tags"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "tags_to_notes" ADD CONSTRAINT "tags_to_notes_noteId_notebooks_id_fk" FOREIGN KEY ("noteId") REFERENCES "public"."notebooks"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "tags_to_notes" ADD CONSTRAINT "tags_to_notes_tagId_tags_id_fk" FOREIGN KEY ("tagId") REFERENCES "public"."tags"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
