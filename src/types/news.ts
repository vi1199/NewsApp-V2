export interface INewsSource {
  id: string;
  name: string;
}

export interface INewsContents {
  author?: string;
  content?: string | null;
  description?: string | null;
  publishedAt?: string;
  source?: INewsSource;
  title?: string;
  url?: string;
  urlToImage?: string | null;
}
