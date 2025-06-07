// Example model schema from the Drizzle docs
// https://orm.drizzle.team/docs/sql-schema-declaration

import { relations, sql } from "drizzle-orm";
import { index, pgTableCreator } from "drizzle-orm/pg-core";

/**
 * This is an example of how to use the multi-project schema feature of Drizzle ORM. Use the same
 * database instance for multiple projects.
 *
 * @see https://orm.drizzle.team/docs/goodies#multi-project-schema
 */
export const createTable = pgTableCreator((name) => `katalis_${name}`);

export const users = createTable(
  "user",
  (d) => ({
    id: d.text('id').primaryKey().$defaultFn(() => crypto.randomUUID()),
    clerkId: d.text('clerk_id').unique(),
    name: d.varchar({ length: 256 }),
    createdAt: d
      .timestamp({ withTimezone: true })
      .default(sql`CURRENT_TIMESTAMP`)
      .notNull(),
    updatedAt: d.timestamp({ withTimezone: true }).$onUpdate(() => new Date()),
  }),
  (t) => [index("clerk_id_idx").on(t.clerkId)],
);

export const posts = createTable(
  "post",
  (d) => ({
    id: d.text('id').primaryKey().$defaultFn(() => crypto.randomUUID()),
    authorId: d.text('author_id').references(() => users.id),
    name: d.varchar('name', { length: 256 }),
    createdAt: d
      .timestamp({ withTimezone: true })
      .default(sql`CURRENT_TIMESTAMP`)
      .notNull(),
    updatedAt: d.timestamp({ withTimezone: true }).$onUpdate(() => new Date()),
  }),
  (t) => [index("name_idx").on(t.name)],
);

export const comments = createTable(
  "comment",
  (d) => ({
    id: d.text('id').primaryKey().$defaultFn(() => crypto.randomUUID()),
    userId: d.text('user_id').references(() => users.id),
    postId: d.text('post_id').references(() => posts.id),
    content: d.text('content'),
    createdAt: d
      .timestamp({ withTimezone: true })
      .default(sql`CURRENT_TIMESTAMP`)
      .notNull(),
    updatedAt: d.timestamp({ withTimezone: true }).$onUpdate(() => new Date()),
  }),
  (t) => [index("user_post_idx").on(t.userId, t.postId)], // More useful composite index
);

// Relations
export const usersRelations = relations(users, ({ many }) => ({
  posts: many(posts),
  comments: many(comments)
}));

export const postsRelations = relations(posts, ({ one, many }) => ({
  author: one(users, {
    fields: [posts.authorId],
    references: [users.id]
  }),
  comments: many(comments)
}));

export const commentsRelations = relations(comments, ({ one }) => ({
  user: one(users, {
    fields: [comments.userId],
    references: [users.id]
  }),
  post: one(posts, {
    fields: [comments.postId],
    references: [posts.id]
  })
}));
