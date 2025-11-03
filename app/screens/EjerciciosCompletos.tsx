import React from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import Ej1Formulario from "./Ej1Formulario";
import Ej2Contador from "./Ej2Contador";
import Ej3Reloj from "./Ej3Reloj";
import Ej4Carga from "./Ej4Carga";

export default function EjerciciosCompletos() {
  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      <Text style={styles.title}>Tarea Semana 2 - Programación Móvil</Text>

      {/* Ejercicio 1 */}
      <View style={[styles.section, { backgroundColor: "#E6F4EA" }]}>
        <Text style={styles.subtitle}>🟢 Ejercicio 1: Formulario</Text>
        <View style={styles.innerCard}>
          <Ej1Formulario />
        </View>
      </View>

      {/* Ejercicio 2 */}
      <View style={[styles.section, { backgroundColor: "#E8F0FE" }]}>
        <Text style={styles.subtitle}>🔵 Ejercicio 2: Contador</Text>
        <View style={styles.innerCard}>
          <Ej2Contador />
        </View>
      </View>

      {/* Ejercicio 3 */}
      <View style={[styles.section, { backgroundColor: "#F3E8FD" }]}>
        <Text style={styles.subtitle}>🟣 Ejercicio 3: Reloj en tiempo real</Text>
        <View style={styles.innerCard}>
          <Ej3Reloj />
        </View>
      </View>

      {/* Ejercicio 4 */}
      <View style={[styles.section, { backgroundColor: "#FFF3E0" }]}>
        <Text style={styles.subtitle}>🟠 Ejercicio 4: Simulación de carga</Text>
        <View style={styles.innerCard}>
          <Ej4Carga />
        </View>
      </View>

      <Text style={styles.footer}>Powered by Fernando Puerto 💻</Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5F5F5",
  },
  content: {
    paddingVertical: 30,
    paddingHorizontal: 15,
    alignItems: "center",
  },
  title: {
    fontSize: 26,
    fontWeight: "700",
    color: "#2E2D63",
    marginBottom: 25,
    textAlign: "center",
  },
  section: {
    width: "100%",
    borderRadius: 16,
    marginBottom: 25,
    paddingVertical: 25,
    paddingHorizontal: 15,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 4 },
    shadowRadius: 6,
    elevation: 3,
    alignItems: "center",
  },
  innerCard: {
    width: "95%",
    height: 380, // 🔹 altura uniforme para todos
    backgroundColor: "#FFFFFF",
    borderRadius: 12,
    padding: 10,
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "#000",
    shadowOpacity: 0.05,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
  },
  subtitle: {
    fontSize: 20,
    fontWeight: "600",
    marginBottom: 10,
    color: "#2E2D63",
    textAlign: "center",
  },
  footer: {
    marginTop: 40,
    fontSize: 14,
    fontStyle: "italic",
    color: "#7C7C7C",
  },
});
