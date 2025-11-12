import React, {useMemo, useState} from "react";
import {FlatList, Image, SafeAreaView, StyleSheet, Text, View} from "react-native";
import { Picker } from '@react-native-picker/picker';
import {RestaurantItem, Course, RootStackParamList} from "../type";
import { NativeStackScreenProps } from "@react-navigation/native-stack";

type Props = NativeStackScreenProps<RootStackParamList, "Filter">;

const c = {bg: "#8d6e63", card: "#55433cff", text: "#f5e9d7", meta: "#b696b7f", input: "#2b221f" , border: "#3a303d"};

export default function FilterScreen({ route }: Props) {
    const items: RestaurantItem[] = route.params?.items || [];
    const [selected, setSelected] = useState<Course>("Starters");
    const filtered = useMemo(() => items.filter(i => i.category === selected), [items, selected]);

    return (
    <SafeAreaView style={styles.container}>
            <View style={styles.pickerWrap}>
                <View style={styles.pickerBox}>
                    <Picker
                        selectedValue={selected}
                        onValueChange={(v: Course) => setSelected(v)}
                        mode="dropdown"
                        dropdownIconColor="#c08a5a"
                        style={styles.picker}
                        itemStyle={{ height: 44 }}
                    >
                        <Picker.Item label="Starters" value="Starters" color="#f5e9d7" />
                        <Picker.Item label="Mains" value="Mains" color="#f5e9d7" />
                        <Picker.Item label="Desserts" value="Desserts" color="#f5e9d7" />
                    </Picker>    
                </View>
            </View>

            <Text style={styles.heading}>{selected}  {filtered.length}</Text>
    
    <FlatList
    data={filtered}
    keyExtractor={i => i.id}
    renderItem={({ item }) => (
        <View style={styles.card}>
            <Image source={{ uri: item.image }} style={styles.image} /> 
            <View style={styles.body}>
                <Text style={styles.title}>{item.itemName}</Text>
                <Text style={styles.meta}>{item.category} R{item.price}</Text>
                
                <View style={styles.chips}>
                    {item.ingredients.map((g, idx) => (
                        <View key={idx} style={styles.chip}>
                            <Text style={styles.chipText}>{g}</Text>
                        </View> 
                    ))}
                </View>
            </View>
        </View>
    )}
    contentContainerStyle={{ paddingBottom: 20 }} 
    />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: { flex: 1, backgroundColor: c.bg, padding: 16 },
    pickerWrap: { marginBottom: 12 },
    pickerBox: { backgroundColor: c.input, borderRadius: 12, borderWidth: 1, borderColor: c.border, overflow: "hidden", height: 50, justifyContent: "center" },
    picker: { color: c.text, height: 50, width: "100%" },
    heading: { color: c.text, fontSize: 20, fontWeight: "900", textAlign: "center", marginBottom: 8 },
    card: { backgroundColor: c.card, borderRadius: 16, overflow: "hidden", marginVertical: 8, elevation: 3 },
    image: { width: "100%", height: 170 },
    body: { padding: 12 },
    title: { color: c.text, fontSize: 18, fontWeight: "800" },
    meta: { color: c.meta, marginTop: 4 },
    chips: { flexDirection: "row", flexWrap: "wrap", gap: 6, marginTop: 8 },
    chip: { backgroundColor: "#2b221f", paddingVertical: 4, paddingHorizontal: 8, borderRadius: 12 },
    chipText: { color: c.text, fontWeight: "700", fontSize: 12 }
});