export interface MenuItem {
  id: string;
  name: string;
  englishName: string;
  description: string;
  englishDescription: string;
  price: number;
  category: 'claypot' | 'dimsum' | 'tea';
  image: string;
  tags: string[];
}

export interface TableReservation {
  name: string;
  phone: string;
  email?: string;
  date: string;
  time: string;
  guests: string | number;
  dietaryNotes?: string;
}

export interface Review {
  id: string;
  author: string;
  badge?: string;
  rating: number;
  text: string;
  englishText: string;
  date: string;
  dateZh?: string;
}
