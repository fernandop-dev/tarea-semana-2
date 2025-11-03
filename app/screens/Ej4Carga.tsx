import React, { useEffect, useState } from "react";
import { ActivityIndicator, StyleSheet, Text, View } from "react-native";

export default function Ej4Carga() {
  const [mostrarCarga, setMostrarCarga] = useState(true);

  useEffect(() => {
    const intervalo = setInterval(() => {
      setMostrarCarga((prev) => !prev);
    }, 4000); // 🔁 Alterna cada 4 segundos entre carga y bienvenida
    return () => clearInterval(intervalo);
  }, []);

  return (
    <View style={styles.container}>
      {mostrarCarga ? (
        <>
          <ActivityIndicator size="large" color="#2E2D63" />
          <Text style={styles.text}>Cargando...</Text>
        </>
      ) : (
        <Text style={[styles.text, styles.bienvenida]}>
          Bienvenido a la aplicación
        </Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FFFFFF",
    borderRadius: 12,
    width: "100%",
    height: 350,
  },
  text: {
    fontSize: 24,
    fontWeight: "600",
    marginTop: 20,
  },
  bienvenida: {
    color: "#2E2D63",
  },
});
