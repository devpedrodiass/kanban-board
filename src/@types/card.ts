import { ColumnsIds } from "./column"

export interface Card {
  id?: number
  title: string
  description: string
  columnId: ColumnsIds
  createdAt?: string
}