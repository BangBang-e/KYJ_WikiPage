export interface ApiResponse<T> {
  data: T | null;
  status: number | null;
}

export interface WikiData {
  id: number;
  title: string;
  subTitle: string;
  content: string;
  date: string;
  editDate: string;
  tag: string;
  level: string;
}

export interface Database {
  wikiData: WikiData[];
}

export interface TagProps {
  $tag: string;
}
