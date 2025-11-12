import React, { useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { RestaurantItem, Course, RootStackParamList } from "./type";
import WelcomeScreen from "./screens/WelcomeScreen";
import HomeScreen from "./screens/HomeScreen";
import AddItemScreen from "./screens/AddItemScreen";
import FilterScreen from "./screens/FilterScreen";
 
const Stack = createNativeStackNavigator<RootStackParamList>();
 
const predefined: RestaurantItem[] = [
    {
      //IMAGE ATTRIBUTION
      //TITLE: Mushroom Soup
      //AUTHOR: Pexels
      //DATE ACCESSED: 10 November 2025
      //AVAILABLE: https://images.pexels.com/photos/1872882/pexels-photo-1872882.jpeg?_gl=1*hlo409*_ga*NDQ1NDk5OTI1LjE3NjAwMTQ5OTM.*_ga_8JE65Q40S6*czE3NjA5OTAxODMkbzgkZzEkdDE3NjA5OTAxOTAkajUzJGwwJGgwhttps://images.pexels.com/photos/1872882/pexels-photo-1872882.jpeg?_gl=1*hlo409*_ga*NDQ1NDk5OTI1LjE3NjAwMTQ5OTM.*_ga_8JE65Q40S6*czE3NjA5OTAxODMkbzgkZzEkdDE3NjA5OTAxOTAkajUzJGwwJGgw
      id: "1",
      itemName: "Mushroom Soup",
      description: "Creamy mushroom soup garnished with fresh herbs served with sourdough bread.",
      category: "Starters",
      price: 88,
      intensity: "Savory",
      image: "https://images.pexels.com/photos/1872882/pexels-photo-1872882.jpeg?_gl=1*hlo409*_ga*NDQ1NDk5OTI1LjE3NjAwMTQ5OTM.*_ga_8JE65Q40S6*czE3NjA5OTAxODMkbzgkZzEkdDE3NjA5OTAxOTAkajUzJGwwJGgwhttps://images.pexels.com/photos/1872882/pexels-photo-1872882.jpeg?_gl=1*hlo409*_ga*NDQ1NDk5OTI1LjE3NjAwMTQ5OTM.*_ga_8JE65Q40S6*czE3NjA5OTAxODMkbzgkZzEkdDE3NjA5OTAxOTAkajUzJGwwJGgw",
      ingredients: ["Mushrooms", "Cream", "Herbs", "Sourdough Bread", "Truffle Oil"],
    },
    {
      //IMAGE ATTRIBUTION
      //TITLE: Rooibos Snoek
      //AUTHOR: Pexels
      //DATE ACCESSED: 10 Novvember 2025
      //AVAILABLE: https://images.pexels.com/photos/16064370/pexels-photo-16064370.jpeg?_gl=1*1vs921x*_ga*NDQ1NDk5OTI1LjE3NjAwMTQ5OTM.*_ga_8JE65Q40S6*czE3NjA5OTAxODMkbzgkZzEkdDE3NjA5OTAzMTMkajkkbDAkaDA
      id: "2",
      itemName: "Rooibos Snoek",
      description: "Grilled snoek glazed with rooibos lemon butter sauce.",
      category: "Starters",
      price:90,
      intensity: "Light",
      image: "https://images.pexels.com/photos/16064370/pexels-photo-16064370.jpeg?_gl=1*1vs921x*_ga*NDQ1NDk5OTI1LjE3NjAwMTQ5OTM.*_ga_8JE65Q40S6*czE3NjA5OTAxODMkbzgkZzEkdDE3NjA5OTAzMTMkajkkbDAkaDA",
      ingredients: ["Snoek Fish", "Rooibos", "Lemon", "Butter", "Garlic"],
    },
    {
      //IMAGE ATTRIBUTION
      //TITLE: Capreses salad
      //AUTHOR: Pexels
      //DATE ACCESSED: 10 November 2025
      //AVAILABLE: https://images.pexels.com/photos/16064370/pexels-photo-16064370.jpeg?_gl=1*1vs921x*_ga*NDQ1NDk5OTI1LjE3NjAwMTQ5OTM.*_ga_8JE65Q40S6*czE3NjA5OTAxODMkbzgkZzEkdDE3NjA5OTAzMTMkajkkbDAkaDA
      id: "3",
      itemName: "Caprese Salad",
      description: "Fresh tomatoes, mozzarella, and basil drizzled with balsamic glaze.",
      category: "Starters",
      price: 85,
      intensity: "Fresh",
      image: "https://images.pexels.com/photos/8696570/pexels-photo-8696570.jpeg?_gl=1*9xm9vi*_ga*NDQ1NDk5OTI1LjE3NjAwMTQ5OTM.*_ga_8JE65Q40S6*czE3NjA5OTAxODMkbzgkZzEkdDE3NjA5OTA1MTMkajU5JGwwJGgw",
      ingredients: ["Tomatoes", "Mozzarella", "Basil", "Balsamic Glaze"],
    },
    {
      //IMAGE ATTRIBUTION
      //TITLE: Classic Stoffie Burger
      //AUTHOR: Pexels
      //DATE ACCESSED: 10 November 2025
      //AVAILABLE: https://images.pexels.com/photos/16064370/pexels-photo-16064370.jpeg?_gl=1*1vs921x*_ga*NDQ1NDk5OTI1LjE3NjAwMTQ5OTM.*_ga_8JE65Q40S6*czE3NjA5OTAxODMkbzgkZzEkdDE3NjA5OTAzMTMkajkkbDAkaDA
      id: "4",
      itemName: "Classic Stoffie Burger",
      description: "Juicy beef patty with lettuce, tomato, cheese, and special sauce served with crispy fries",
      category: "Mains",
      price: 170,
      intensity: "Strong",
      image: "https://images.pexels.com/photos/31148914/pexels-photo-31148914.jpeg?_gl=1*1760gc6*_ga*NDQ1NDk5OTI1LjE3NjAwMTQ5OTM.*_ga_8JE65Q40S6*czE3NjA5NzI5MTgkbzYkZzEkdDE3NjA5NzM0MzAkajU5JGwwJGgw",
      ingredients: ["Beef Patty", "Lettuce", "Tomato", "Cheese", "Special Sauce"],
    },
    {
      //IMAGE ATTRIBUTION
      //TITLE: Lamb and chilli noodles
      //AUTHOR: Pexels
      //DATE ACCESSED: 10 November 2025
      //AVAILABLE: https://images.pexels.com/photos/16064370/pexels-photo-16064370.jpeg?_gl=1*1vs921x*_ga*NDQ1NDk5OTI1LjE3NjAwMTQ5OTM.*_ga_8JE65Q40S6*czE3NjA5OTAxODMkbzgkZzEkdDE3NjA5OTAzMTMkajkkbDAkaDA
      id: "5",
      itemName: "Pulled lamb and chili noodles",
      description: "Spicy pulled lamb served over noodles with fresh herbs and a tangy dressing",
      category: "Mains",
      price: 125,
      intensity: "Balanced",
      image: "https://images.pexels.com/photos/6525932/pexels-photo-6525932.jpeg?_gl=1*n5uopj*_ga*NDQ1NDk5OTI1LjE3NjAwMTQ5OTM.*_ga_8JE65Q40S6*czE3NjA5NzI5MTgkbzYkZzEkdDE3NjA5NzMzMTEkajE0JGwwJGgw",
      ingredients: ["Pulled Lamb", "Noodles", "Chili", "Fresh Herbs", "Tangy Dressing"]
    },
    {
      //IMAGE ATTRIBUTION
      //TITLE: Steak and chips
      //AUTHOR: Pexels
      //DATE ACCESSED: 10 November 2025
      //AVAILABLE: https://images.pexels.com/photos/16064370/pexels-photo-16064370.jpeg?_gl=1*1vs921x*_ga*NDQ1NDk5OTI1LjE3NjAwMTQ5OTM.*_ga_8JE65Q40S6*czE3NjA5OTAxODMkbzgkZzEkdDE3NjA5OTAzMTMkajkkbDAkaDA
      id: "6",
      itemName: "Steak and chips",
      description: "Grilled steak cooked to perfection, served with wedges and a side of garlic butter",
      category: "Mains",
      price: 185,
      intensity: "Strong",
      image: "https://images.pexels.com/photos/4101805/pexels-photo-4101805.jpeg?_gl=1*3v4z78*_ga*NDQ1NDk5OTI1LjE3NjAwMTQ5OTM.*_ga_8JE65Q40S6*czE3NjA5NzI5MTgkbzYkZzEkdDE3NjA5NzMwMjIkajI4JGwwJGgw",
      ingredients: ["Steak", "Patotoes", "Garlic Butter"],
    },
    {
      //IMAGE ATTRIBUTION
      //TITLE: Malva Pudding
      //AUTHOR: Pexels
      //DATE ACCESSED: 10 November 2025
      //AVAILABLE: https://images.pexels.com/photos/16064370/pexels-photo-16064370.jpeg?_gl=1*1vs921x*_ga*NDQ1NDk5OTI1LjE3NjAwMTQ5OTM.*_ga_8JE65Q40S6*czE3NjA5OTAxODMkbzgkZzEkdDE3NjA5OTAzMTMkajkkbDAkaDA
      id: "7",
      itemName: "Malva Pudding",
      description: "A traditional South African dessert made with apricot jam and served with a creamy sauce",
      category: "Desserts",
      price: 65,
      intensity: "Mild",
      image: "https://i.pinimg.com/originals/d9/c3/57/d9c3575fa1fd69d99b6e77c1cb28e5c0.jpg",
      ingredients: ["Flour", "Sugar", "Eggs", "Butter", "Apricot Jam"],
    },
    {
      //IMAGE ATTRIBUTION
      //TITLE: Milktart Gelato
      //AUTHOR: Pexels
      //DATE ACCESSED: 10 November 2025
      //AVAILABLE: https://images.pexels.com/photos/16064370/pexels-photo-16064370.jpeg?_gl=1*1vs921x*_ga*NDQ1NDk5OTI1LjE3NjAwMTQ5OTM.*_ga_8JE65Q40S6*czE3NjA5OTAxODMkbzgkZzEkdDE3NjA5OTAzMTMkajkkbDAkaDA
      id: "8",
      itemName: "Milktart Gelato",
      description: "Creamy milk tart flavored gelato, a frozen twist on the classic milktart dessert",
      category: "Desserts",
      price: 75,
      intensity: "Sweet",
      image: "https://images.pexels.com/photos/5060294/pexels-photo-5060294.jpeg?_gl=1*11jzqar*_ga*NDQ1NDk5OTI1LjE3NjAwMTQ5OTM.*_ga_8JE65Q40S6*czE3NjA5Nzc3ODEkbzckZzEkdDE3NjA5ODAwNDUkajI0JGwwJGgw",
      ingredients: ["Milk", "Sugar", "Eggs", "Cinnamon"],
    },
    {
      //IMAGE ATTRIBUTION
      //TITLE: Peppermint Tart
      //AUTHOR: Pexels
      //DATE ACCESSED: 10 November 2025
      //AVAILABLE: https://images.pexels.com/photos/16064370/pexels-photo-16064370.jpeg?_gl=1*1vs921x*_ga*NDQ1NDk5OTI1LjE3NjAwMTQ5OTM.*_ga_8JE65Q40S6*czE3NjA5OTAxODMkbzgkZzEkdDE3NjA5OTAzMTMkajkkbDAkaDA
      id: "9",
      itemName: "Pepermint Crisp Brownie",
      description: "Warm chocolate brownie topped with crushed Peppermint Crisp chocolate bars served with cream and chocolate sauce",
      category: "Desserts",
      price: 77,
      intensity: "Rich",
      image: "https://images.pexels.com/photos/13215205/pexels-photo-13215205.jpeg?_gl=1*zj5q2y*_ga*NDQ1NDk5OTI1LjE3NjAwMTQ5OTM.*_ga_8JE65Q40S6*czE3NjA5Nzc3ODEkbzckZzEkdDE3NjA5ODAyMDIkajYwJGwwJGgw",
      ingredients: ["Flour", "Sugar", "Cocoa Powder", "Eggs", "Butter", "Peppermint Crisp"],
    },
];
 
export default function App() {
    const [items, setItems] = useState<RestaurantItem[]>(predefined);

    const addItem = (item: RestaurantItem) => setItems(prev => [...prev, item]);
 
    const removeItem = (id: string) => setItems(prev => prev.filter(i => i.id !== id));
 
    const avg = (course: Course) => {
        const list = items.filter(i => i.category === course);
        if (!list.length) return "0.00";
        const total = list.reduce((s: number, i: RestaurantItem) => s + i.price, 0);
        return (total / list.length).toFixed(2);
    };
 
    return (
        <NavigationContainer>
            <Stack.Navigator
                screenOptions={{
                    headerStyle: { backgroundColor: "#1b1513" },
                    headerTintColor: "#f5e9d7",
                    headerTitleStyle: { fontWeight: "800" }
                }}>
                <Stack.Screen
                    name="Welcome"
                    component={WelcomeScreen}
                    options={{ headerShown: false }}
                />
                <Stack.Screen name="Home" options={{ title: "Barista Bliss" }}>
                    {(props: any) => ( 
                        <HomeScreen
                            {...props}
                            items={items}
                            removeItem={removeItem}
                            averages={{
                                Starters: avg("Starters"),
                                Mains: avg("Mains"),
                                Desserts: avg("Desserts")
                            }}
                        />
                    )}
                </Stack.Screen>
                <Stack.Screen name="AddItem" options={{ title: "Add New Item" }}>
                  {props => <AddItemScreen {...props} addItem={addItem} />}
                </Stack.Screen>
                <Stack.Screen
                    name="Filter"
                    component={FilterScreen}
                    options={{ title: "Filter Menu" }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
}


