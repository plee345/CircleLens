import {
  integer,
  numeric,
  pgTable,
  varchar
} from "drizzle-orm/pg-core"
import { defineRelations } from "drizzle-orm"

export const userTable = pgTable("user", {
  id: integer().primaryKey().generatedAlwaysAsIdentity(),
  name: varchar({ length: 255 }).notNull(),
  email: varchar({ length: 255 }).unique(),
  password: varchar({ length: 255 })
});

export const osuDataTable = pgTable("userOsuData", {
  user_id: integer().unique().references(() => userTable.id),
  username: varchar({ length: 255 }).unique(),
  country: varchar({ length: 255 }),
  globalRank: integer(),
  countryRank: integer(),
  accuracy: numeric({ precision: 5, scale: 2 }),
  levelNumeric: integer(),
  levelProgress: integer(),
  playCount: integer(),
  playTime: integer()
});

export const advancedDataTable = pgTable("advancedData", {
  xPP: numeric({ precision: 8, scale: 2 }),
  xRank: numeric({ precision: 12, scale: 2 }),
  xStarRating: numeric({ precision: 4, scale: 2 })
});

export const relations = defineRelations({ userTable, osuDataTable, advancedDataTable }, (r) => ({
  userTable: {

  }
}));

