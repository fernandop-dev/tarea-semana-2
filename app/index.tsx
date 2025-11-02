import React from "react";
import { SafeAreaView } from "react-native";
import Ej2Contador from "./screens/Ej2Contador"; // nuevo

export default function Index() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Ej2Contador />  {/* Cambia aquí para mostrar Ej1 o Ej2 */}
    </SafeAreaView>
  );
}
