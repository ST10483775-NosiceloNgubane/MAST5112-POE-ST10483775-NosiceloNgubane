//CODE ATRIBUTION-->
//TITLE: IIE MAST5112Module Manual 2025
//AUTHOR: The Independent Institution of Education (Pty) Ltd
//DATE: 09/02/2023
//VERSION:First Edition : 2012
//AVAILABLE:https://advtechonline.sharepoint.com/:w:/r/sites/TertiaryStudents/_layouts/15/Doc.aspx?sourcedoc=%7BC4AAF478-96AC-4469-8005-F7CDC4A15EBB%7D&file=MAST5112MM.docx&action=default&mobileredirect=true

import React from "react";
import { ImageBackground, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../type";
 
type Props = NativeStackScreenProps<RootStackParamList, "Welcome">;
 
export default function WelcomeScreen({ navigation }: Props) {
    return (
        <SafeAreaView style={styles.container}>
            <ImageBackground 
                source={{ uri: "https://i.pinimg.com/736x/df/02/ee/df02eec9d49324530101e8f884c9f661.jpg" }} 
                style={styles.bg}
            >
                <View style={styles.overlay} />
                <View style={styles.center}>
                    <Text style={styles.title}>Christoffels</Text>
                    <Text style={styles.subtitle}>Indulge in our creative restaurant</Text>
                    <TouchableOpacity style={styles.cta} onPress={() => navigation.replace("Home")}>
                        <Text style={styles.ctaText}>Explore </Text>
                    </TouchableOpacity>
                </View> 
            </ImageBackground>
        </SafeAreaView>
    );
}
 
const styles = StyleSheet.create({
    container: { flex: 1, backgroundColor: "#12100f" },
    bg: { flex: 1, justifyContent: "center" },
    overlay: { ...StyleSheet.absoluteFillObject, backgroundColor: "rgba(12,9,8,0.55)" },
    center: { alignItems: "center", paddingHorizontal: 24 },
    title: { color: "#f5e9d7", fontSize: 42, fontWeight: "800" },
    subtitle: { color: "#1b1513", fontSize: 16, marginTop: 6, marginBottom: 28 },
    cta: { backgroundColor: "#4e342e", paddingVertical: 14, paddingHorizontal: 44, borderRadius: 28, elevation: 6 },
    ctaText: { color: "#f5e9d7", fontWeight: "900", fontSize: 18 }
});