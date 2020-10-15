export interface PostType {
  _id: number;
  date: number;
  title: string;
  text: string;
  categories: [{ title: string, _id: string }];
}
