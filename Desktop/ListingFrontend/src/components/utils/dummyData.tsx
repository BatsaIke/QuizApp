// src/utils/dummyData.ts
export interface Venue {
    id: number;
    name: string;
    rating: number;
    capacity: string;
    location: string;
    imageUrl: string;
    verified?: boolean;
  }
  
  import image from '../../assets/images/wedding-venue/loggedin.png';
  
  export const venues: Venue[] = Array.from({ length: 40 }, (_, index) => ({
    id: index + 1,
    name: `Venue ${index + 1}`,
    rating: parseFloat((Math.random() * 5).toFixed(1)),
    capacity: `${Math.floor(Math.random() * 200) + 30} to 200`,
    location: `Location ${index + 1}`,
    imageUrl: image,
    verified: Math.random() > 0.5,
  }));
  