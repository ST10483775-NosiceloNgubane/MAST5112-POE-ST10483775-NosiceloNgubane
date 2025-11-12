import React, { useState } from "react";
import { 
    KeyboardAvoidingView,
    Platform,
    TouchableWithoutFeedback,
    Keyboard,
    ScrollView,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View,
    Image,
    Alert
} from "react-native";
import {Picker} from "@react-native-picker/picker";
import { RestaurantItem, Course, RootStackParamList } from "../type";
import { NativeStackScreenProps } from "@react-navigation/native-stack";

type Props = NativeStackScreenProps<RootStackParamList, "AddItem"> & { 
    addItem: (item: RestaurantItem) => void; 
};

const c = {
    bg: "#8d6e63",    // Deep Forest Green
    card: "#5f4b43ff",  // Lighter Green-Gray
    text: "#F0F4F7",  // Ivory/Cream White
    meta: "#795e55ff",  // Muted Gray-Green
    accent: "#755c53ff", // Classic Gold
    input: "#5c473fff",  // Input BG
    border: "#4A5B57"  // Border/Divider
};

function uid() {
    return Date.now().toString(36) + Math.random().toString(36).slice(2, 10); 
}

export default function AddItemScreen({ navigation, addItem }: Props) {
    const [itemName, setItemName] = useState("");
    const [description, setDescription] = useState("");
    const [category, setCategory] = useState<Course>("Starters");
    const [price, setPrice] = useState("");
    const [image, setImage] = useState("");
    const [ingredients, setIngredients] = useState("");

    const onSave = () => {
        if (!itemName || !description || !price) {
            Alert.alert("Missing fields", "Please fill in all required fields.");
            return;
        }
    const p = parseFloat(price);
    if (isNaN(p) || p <= 0) {
        Alert.alert("Invalid Price", "Please enter a valid positive number for the price.");
        return;
    }
    const intensity: RestaurantItem["intensity"] = p < 80 ? "Light" : p < 100 ? "Balanced" : p < 200 ? "Strong" : "Savory";
    const payload: RestaurantItem = { 
    id: uid(),
    itemName, 
    description, 
    category, 
    price: p, 
    intensity: intensity, 
    image: image,
    ingredients: ingredients.split(",").map(i => i.trim()).filter(Boolean) 
    };
    addItem(payload);
    navigation.goBack();
    };
    return (
        <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : undefined} style={{ flex: 1 }}>
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                <ScrollView contentContainerStyle={styles.form}>
                    <Text style={styles.label}>Add Item Name</Text>

                    <TextInput style={styles.input} placeholder="Item name" placeholderTextColor={c.meta} value ={itemName} onChangeText={setItemName} />
                    <TextInput style={styles.input} placeholder="Description" placeholderTextColor={c.meta} value={description} onChangeText={setDescription} />

                    <View style={styles.pickerWrap}>
                        <Text style={styles.label}>Category</Text>

                        <View style={styles.pickerBox}>
                                <Picker
                                    selectedValue={category}
                                    onValueChange={(v: Course) => setCategory(v)}
                                    mode="dropdown"
                                    dropdownIconColor="#c08a5a"
                                    style={styles.picker}
                                    itemStyle={{ height: 44 }}
                                >
                                <Picker.Item label="Starters" value="Starters" color="#f5e9d7"/>
                                <Picker.Item label="Mains" value="Mains" color="#f5e9d7"/>
                                <Picker.Item label="Desserts" value="Desserts" color="#f5e9d7"/>
                            </Picker>
                        </View>
                    </View>

                    <TextInput style={styles.input} placeholder="Price" placeholderTextColor={c.meta} keyboardType="numeric" value={price} onChangeText={setPrice} />
                    <TextInput style={styles.input} placeholder="Image URL" placeholderTextColor={c.meta} value={image} onChangeText={setImage} />
                    <TextInput style={styles.input} placeholder="Ingredients (comma separated)" placeholderTextColor={c.meta} value={ingredients} onChangeText={setIngredients} />
                    {image ? <Image source={{ uri: image }} style={styles.preview} /> : null}

                    <TouchableOpacity style={styles.save} onPress={onSave}>
                        <Text style={styles.saveText}>Save Item</Text>
                    </TouchableOpacity>
                    < TouchableOpacity style={styles.cancel} onPress={() => navigation.goBack()}>
                        <Text style={styles.cancelText}>Cancel</Text>
                    </TouchableOpacity>
                </ScrollView>
            </TouchableWithoutFeedback>
        </KeyboardAvoidingView>
    )    
};



    const styles = StyleSheet.create({
    form: { backgroundColor: c.bg, padding: 20 },
    header: { color: c.text, fontSize: 22, fontWeight: "900", textAlign: "center", marginBottom: 16 },
    input: { backgroundColor: c.input, color: c.text, borderRadius: 12, borderWidth: 1, borderColor: c.border, height: 50, paddingHorizontal: 12, marginVertical: 8 },
    pickerWrap: { marginVertical: 8 },
    label: { color: c.meta, marginLeft: 4, marginBottom: 6, fontWeight: "700" },
    pickerBox: { backgroundColor: c.input, borderRadius: 12, borderWidth: 1, borderColor: c.border, overflow: "hidden", height: 50, justifyContent: "center" },
    picker: { color: c.text, height: 50, width: "100%" },
    preview: { width: "100%", height: 200, borderRadius: 12, marginTop: 12 },
    save: { backgroundColor: c.accent, padding: 14, borderRadius: 12, marginTop: 16, alignItems: "center" },
    saveText: { color: "#1b1513", fontWeight: "900" },
    cancel: { alignItems: "center", marginTop: 10 },
    cancelText: { color: c.meta, fontWeight: "800" }
});       