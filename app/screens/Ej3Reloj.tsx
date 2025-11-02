import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";

export default function Ej3Reloj() {
  const [hora, setHora] = useState("");

  useEffect(() => {
    const intervalo = setInterval(() => {
      const ahora = new Date();
      const horaFormateada = ahora.toLocaleTimeString("es-HN", {
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
      });
      setHora(horaFormateada);
    }, 1000);

    return () => clearInterval(intervalo);
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Ejercicio 3: Reloj en tiempo real</Text>
      <Text style={styles.clock}>{hora}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F9F9F9",
  },
  title: {
    fontSize: 22,
    fontWeight: "700",
    marginBottom: 20,
  },
  clock: {
  fontSize: 48,
  fontWeight: "800",
  color: "#2E2D63",
  backgroundColor: "#FFFFFF",
  borderColor: "#2E2D63",
  borderWidth: 3,
  borderRadius: 50, 
  paddingVertical: 20,
  paddingHorizontal: 50,
  textAlign: "center",
  shadowColor: "#000",
  shadowOffset: { width: 0, height: 2 },
  shadowOpacity: 0.1,
  shadowRadius: 4,
  elevation: 3,
},
});
