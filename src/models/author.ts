export interface Author {
  id: number;
  name: string;
  bio?: string;
}

export const authors: Author[] = [
  { id: 1, name: "Sagida Zwivhuya", bio: "Author of Why did i get married?" },
  { id: 2, name: "Sagida Phindulo", bio: "Author of The three body parts." }
];
