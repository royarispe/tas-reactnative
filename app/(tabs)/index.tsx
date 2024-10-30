import {
  Button,
  TouchableOpacity,
  Dimensions,
  View,
  ScrollView,
  Text,
  TextInput,
  Image,
  StyleSheet,
  Platform,
} from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import React, { useEffect, useState } from "react";
import Task from "./../../components/tasks/Task";

export default function HomeScreen() {
  const [task, setTask] = useState<string>("");
  const [tasks, setTasks] = useState<string[]>([]);
  const [comp, setComp] = useState<number>(0);
  const [todo, setTodo] = useState<number>(0);

  const addTask = () => {
    if (task.trim() !== "") {
      setTasks([...tasks, task]);
      setTask("");
    }
  };

  const deleteTask = (index: number) => {
    setTasks(tasks.filter((_, i) => i !== index));
  };

  const addTodoTask = () => {
    setTodo((prev) => prev + 1);
  };

  const lessTodoTask = () => {
    setTodo((prev) => {
      if (prev > 0) {
        return prev - 1;
      }
      return prev;
    });
  };

  const addCompTask = () => {
    setComp((prev) => prev + 1);
  };

  const lessCompTask = () => {
    setComp((prev) => {
      if (prev > 0) {
        return prev - 1;
      }
      return prev;
    });
  };

  return (
    <SafeAreaProvider>
      <SafeAreaView>
        <View style={styles.container}>
          <Text style={styles.text}>Ingrese una nueva tarea</Text>
          <TextInput
            style={styles.input}
            value={task}
            onChangeText={setTask}
            placeholder="Ingrese una nueva tarea"
          ></TextInput>
          <View style={styles.buttonsContainer}>
            <View style={styles.sectionPart2}>
              <View style={styles.todoContainer}>
                <Text>Pendientes: {todo}</Text>
                <TouchableOpacity
                  style={styles.btnListPlus}
                  onPress={addTodoTask}
                >
                  <Text style={styles.plusBtn}>+</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.btnListLess}
                  onPress={lessTodoTask}
                >
                  <Text style={styles.lessBtn}>-</Text>
                </TouchableOpacity>
              </View>
              <View style={styles.completeContainer}>
                <Text>Completadas: {comp}</Text>
                <TouchableOpacity
                  style={styles.btnListPlus}
                  onPress={addCompTask}
                >
                  <Text style={styles.plusBtn}>+</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.btnListLess}
                  onPress={lessCompTask}
                >
                  <Text style={styles.lessBtn}>-</Text>
                </TouchableOpacity>
              </View>
            </View>
            <Button title="Añadir tarea" onPress={addTask}></Button>
          </View>
        </View>
        <ScrollView style={styles.tasksContainer}>
          {tasks.map((t, index) => (
            <Task key={index} value={t} onDelete={() => deleteTask(index)} />
          ))}
        </ScrollView>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    padding: 10,
    margin: 5,
  },
  buttonsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginHorizontal: 10,
  },
  todoContainer: {
    flexDirection: "row",
    marginVertical: 5,
  },
  completeContainer: {
    flexDirection: "row",
    marginVertical: 5,
  },
  btnListPlus: {
    height: 25,
    width: 20,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    backgroundColor: "green",
    borderRadius: 5,
    marginHorizontal: 5,
  },
  btnListLess: {
    height: 25,
    width: 20,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    backgroundColor: "red",
    borderRadius: 5,
  },
  sectionPart2: {
    flex: 1,
  },
  tasksContainer: {},
  text: {
    fontSize: 24,
    lineHeight: 50,
  },
  plusBtn: {
    fontSize: 17,
  },
  lessBtn: {
    fontSize: 17,
  },
  input: {
    borderWidth: 1,
    height: 40,
    width: "80%",
    paddingHorizontal: 5,
    marginBottom: 10,
  },
});
