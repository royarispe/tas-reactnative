import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { red } from "react-native-reanimated/lib/typescript/reanimated2/Colors";

interface TaskProps {
  value: string;
  onDelete: () => void;
}

const Task: React.FC<TaskProps> = ({ value, onDelete }) => {
  return (
    <View style={styles.taskView}>
      <Text style={styles.taskText}>{value}</Text>
      <TouchableOpacity style={styles.deleteTask} onPress={onDelete}>
        <Text>X</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  taskView: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderWidth: 1,
    padding: 10,
    marginVertical: 5,
  },
  taskText: {
    flex: 1,
  },
  deleteTask: {
    padding: 5,
    backgroundColor: "red",
    marginLeft: 5,
  },
});

export default Task;
