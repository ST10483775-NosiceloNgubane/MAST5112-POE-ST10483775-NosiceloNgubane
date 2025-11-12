export type Course = "Starters" | "Mains" | "Desserts";

export interface RestaurantItem {
    id: string;
    itemName: string;
    description: string;
    category: Course;
    price: number;
    intensity: "Mild" | "Balanced" | "Strong" | "Rich" | "Sweet"  | "Fresh" | "Light" | "Savory";
    image: string;
    ingredients: string[];
};

export type RootStackParamList = {
    Welcome: undefined;
    Home: undefined;
    AddItem: undefined;
    Filter: { items: RestaurantItem[]} | undefined;
};