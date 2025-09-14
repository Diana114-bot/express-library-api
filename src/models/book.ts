export interface Book {
  id: number;
  title: string;
  year: number;
  authorId: number; 
}


export const books: Book[] = [
  { id: 1, title: "Why did i get married?", year: 2020, authorId: 1 },
  { id: 2, title: "The three body parts.", year: 2018, authorId: 2 }
];
