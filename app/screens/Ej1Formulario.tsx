import React, { useState } from 'react';
import { SafeAreaView, StyleSheet, Text, TextInput } from 'react-native';

export default function Ej1Formulario() {
  const [usuario, setUsuario] = useState({ nombre: '', edad: '' });
  const edadInvalida = usuario.edad !== '' && isNaN(Number(usuario.edad));

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Ejercicio 1: Formulario</Text>

      <TextInput
        style={styles.input}
        placeholder="Nombre"
        value={usuario.nombre}
        onChangeText={(text) => setUsuario({ ...usuario, nombre: text })}
      />

      <TextInput
        style={styles.input}
        placeholder="Edad"
        keyboardType="numeric"
        value={usuario.edad}
        onChangeText={(text) => setUsuario({ ...usuario, edad: text })}
      />

      {edadInvalida && <Text style={styles.error}>La edad debe ser numérica</Text>}

      <Text style={styles.result}>
        Hola, {usuario.nombre || '—'}. Tienes {usuario.edad || '—'} años.
      </Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center', // centra verticalmente
    alignItems: 'center',     // centra horizontalmente
    padding: 20,
    backgroundColor: '#F8F9FA',
  },
  title: {
    fontSize: 22,
    fontWeight: '700',
    marginBottom: 20,
  },
  input: {
    width: '90%',              // para que los inputs no queden tan pequeños
    borderWidth: 1,
    borderColor: '#CED4DA',
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 10,
    marginBottom: 10,
    backgroundColor: '#FFF',
  },
  error: {
    color: 'red',
    marginTop: 5,
  },
  result: {
    fontSize: 16,
    marginTop: 12,
  },
});
