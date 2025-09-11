export interface Book {
  id: number;
  title: string;
  year: number;
  authorId: number; 
}


export const books: Book[] = [
  { id: 1, title: "1984", year: 1949, authorId: 1 },
  { id: 2, title: "Harry Potter and the Philosopher's Stone", year: 1997, authorId: 2 }
];
