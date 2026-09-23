import { db } from "server/db/client";
import { Router } from "express"
import {
  userTable,
  osuDataTable,
  advancedDataTable
} from "server/db/schema";
export function getProfile(id: number) {
  return db
    .select()
    .from(osuDataTable)
}

export function makeProfile(newID: number, newName: string, newEmail: string, newPassword: string) {
  db.insert(userTable).values({ id: newID })
}
