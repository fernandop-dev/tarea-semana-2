import React, { useEffect, useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function Ej2Contador() {
  const [count, setCount] = useState(0);
  const [msg, setMsg] = useState("");

  // Se ejecuta cada vez que cambia el contador
  useEffect(() => {
    console.log(`El contador cambió a: ${count}`);

    if (count !== 0 && count % 5 === 0) {
      setMsg("🎉 Ha alcanzado un múltiplo de 5");
    } else {
      setMsg("");
    }
  }, [count]);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Ejercicio 2: Contador</Text>

      <Text style={styles.number}>{count}</Text>

      {msg ? <Text style={styles.message}>{msg}</Text> : null}

      <TouchableOpacity style={styles.btn} onPress={() => setCount(count + 1)}>
        <Text style={styles.btnText}>Incrementar</Text>
      </TouchableOpacity>

      <TouchableOpacity style={[styles.btn, styles.btnLight]} onPress={() => setCount(0)}>
        <Text style={[styles.btnText, styles.btnTextDark]}>Reiniciar</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F9F9F9",
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  title: {
    fontSize: 22,
    fontWeight: "700",
    marginBottom: 20,
  },
  number: {
    fontSize: 64,
    fontWeight: "800",
    color: "#222",
  },
  message: {
    marginTop: 8,
    fontSize: 16,
    color: "green",
    fontWeight: "600",
  },
  btn: {
    marginTop: 20,
    backgroundColor: "#2E2D63",
    paddingVertical: 12,
    paddingHorizontal: 28,
    borderRadius: 10,
  },
  btnLight: {
    backgroundColor: "#E8E9FF",
  },
  btnText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "700",
  },
  btnTextDark: {
    color: "#2E2D63",
  },
});
