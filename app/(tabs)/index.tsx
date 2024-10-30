import { Button, Dimensions, SafeAreaView, View, ScrollView, Text, TextInput, Image, StyleSheet, Platform } from 'react-native';
import { red } from 'react-native-reanimated/lib/typescript/reanimated2/Colors';

export default function HomeScreen() {
  const { width, height } = Dimensions.get('window')

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <Text style={styles.text}>Ingrese una nueva tarea</Text>
        <TextInput style={styles.input} value={'Ingrese la nueva tarea'}></TextInput>
        <Button title='Añadir tarea'></Button>
      </View>
      <ScrollView>

      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    justifyContent: 'center',
    backgroundColor: 'red',
    marginTop: 40
  },
  container: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  text: {
    fontSize: 24,
  },
  input: {
    
  }
});
