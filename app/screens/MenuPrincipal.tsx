import React, { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Ej1Formulario from "./Ej1Formulario";
import Ej2Contador from "./Ej2Contador";
import Ej3Reloj from "./Ej3Reloj";
import Ej4Carga from "./Ej4Carga";

export default function MenuPrincipal() {
  const [pantalla, setPantalla] = useState<number>(0);

  const renderPantalla = () => {
    switch (pantalla) {
      case 1:
        return <Ej1Formulario />;
      case 2:
        return <Ej2Contador />;
      case 3:
        return <Ej3Reloj />;
      case 4:
        return <Ej4Carga />;
      default:
        return (
          <View style={styles.menuContainer}>
            <View style={styles.card}>
              <Text style={styles.title}>Seleccione un ejercicio</Text>
              {[1, 2, 3, 4].map((num) => (
                <TouchableOpacity
                  key={num}
                  style={styles.btn}
                  onPress={() => setPantalla(num)}
                >
                  <Text style={styles.btnText}>Ejercicio {num}</Text>
                </TouchableOpacity>
              ))}
              <Text style={styles.footer}>Powered by Fernando Puerto 💻</Text>
            </View>
          </View>
        );
    }
  };

  return (
    <View style={styles.container}>
      {pantalla !== 0 && (
        <TouchableOpacity
          style={styles.volverBtn}
          onPress={() => setPantalla(0)}
        >
          <Text style={styles.volverText}>← Volver al menú</Text>
        </TouchableOpacity>
      )}
      {renderPantalla()}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F2F2F2",
    justifyContent: "center",
  },
  menuContainer: {
    alignItems: "center",
  },
  card: {
    width: "85%",
    backgroundColor: "#FFFFFF",
    paddingVertical: 30,
    paddingHorizontal: 20,
    borderRadius: 16,
    borderWidth: 2,
    borderColor: "#2E2D63",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.15,
    shadowRadius: 6,
    elevation: 8,
  },
  title: {
    fontSize: 22,
    fontWeight: "700",
    marginBottom: 25,
    color: "#2E2D63",
    textAlign: "center",
  },
  btn: {
    backgroundColor: "#2E2D63",
    paddingVertical: 15,
    borderRadius: 10,
    marginVertical: 10,
    width: "100%",
  },
  btnText: {
    color: "#FFF",
    fontWeight: "600",
    fontSize: 18,
    textAlign: "center",
  },
  footer: {
    marginTop: 30,
    textAlign: "center",
    color: "#7C7C7C",
    fontSize: 14,
    fontStyle: "italic",
  },
  volverBtn: {
    position: "absolute",
    top: 60,
    left: 20,
    backgroundColor: "#EDEDED",
    borderRadius: 10,
    paddingVertical: 8,
    paddingHorizontal: 15,
    zIndex: 1,
  },
  volverText: {
    color: "#2E2D63",
    fontWeight: "600",
  },
});
