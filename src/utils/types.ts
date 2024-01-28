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

export interface PostData {
  title: string;
  subTitle: string;
  content: string;
  tag: string;
  level: string;
}

export interface UpdateData {
  id: number;
  title: string;
  subTitle: string;
  content: string;
  editDate: string;
  tag: string;
  level: string;
}

export interface EditorData {
  id?: number;
  title: string;
  subTitle: string;
  content: string;
  editDate?: string;
  tag: string;
  level: string;
}

export interface EditorMethods {
  isViewer: () => boolean;
  isMarkdownMode: () => boolean;
  getHTML: () => string;
  getMarkdown: () => string;
}

export interface TagProps {
  $tag: string;
}
