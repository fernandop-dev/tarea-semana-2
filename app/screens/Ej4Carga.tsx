import React, { useEffect, useState } from "react";
import { ActivityIndicator, StyleSheet, Text, View } from "react-native";

export default function Ej4Carga() {
  const [cargando, setCargando] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setCargando(false);
    }, 3000); // 3 segundos

    return () => clearTimeout(timer);
  }, []);

  return (
    <View style={styles.container}>
      {cargando ? (
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
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F9F9F9",
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
