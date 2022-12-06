import { ColmunsColor } from "./columnsColors";

export type ColumnsIds = '1' |
  '2' |
  '3' |
  '4' |
  '5'

export interface Column {
  name: string;
  id: ColumnsIds;
  color: ColmunsColor
}