CREATE TABLE "katalis_comment" (
	"id" text PRIMARY KEY NOT NULL,
	"user_id" text,
	"post_id" text,
	"content" text,
	"createdAt" timestamp with time zone DEFAULT CURRENT_TIMESTAMP NOT NULL,
	"updatedAt" timestamp with time zone
);
--> statement-breakpoint
CREATE TABLE "katalis_post" (
	"id" text PRIMARY KEY NOT NULL,
	"author_id" text,
	"name" varchar(256),
	"createdAt" timestamp with time zone DEFAULT CURRENT_TIMESTAMP NOT NULL,
	"updatedAt" timestamp with time zone
);
--> statement-breakpoint
CREATE TABLE "katalis_user" (
	"id" text PRIMARY KEY NOT NULL,
	"clerk_id" text,
	"name" varchar(256),
	"createdAt" timestamp with time zone DEFAULT CURRENT_TIMESTAMP NOT NULL,
	"updatedAt" timestamp with time zone,
	CONSTRAINT "katalis_user_clerk_id_unique" UNIQUE("clerk_id")
);
--> statement-breakpoint
ALTER TABLE "katalis_comment" ADD CONSTRAINT "katalis_comment_user_id_katalis_user_id_fk" FOREIGN KEY ("user_id") REFERENCES "public"."katalis_user"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "katalis_comment" ADD CONSTRAINT "katalis_comment_post_id_katalis_post_id_fk" FOREIGN KEY ("post_id") REFERENCES "public"."katalis_post"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "katalis_post" ADD CONSTRAINT "katalis_post_author_id_katalis_user_id_fk" FOREIGN KEY ("author_id") REFERENCES "public"."katalis_user"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
CREATE INDEX "user_post_idx" ON "katalis_comment" USING btree ("user_id","post_id");--> statement-breakpoint
CREATE INDEX "name_idx" ON "katalis_post" USING btree ("name");--> statement-breakpoint
CREATE INDEX "clerk_id_idx" ON "katalis_user" USING btree ("clerk_id");