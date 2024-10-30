import { View, Image, Text, StyleSheet, TouchableOpacity } from "react-native";
import { imageList } from "@/app/(tabs)/explore";

type ImageViewProps = {
  image: imageList;
  changePhoto: () => void;
};

const ImageView = ({ image, changePhoto }: ImageViewProps) => {
  return (
    <View style={styles.container}>
      <Image source={{ uri: image.link }} style={styles.image}></Image>
      <View style={styles.bottomPhoto}>
        <Text style={styles.description}>{image.description}</Text>
        <TouchableOpacity style={styles.button} onPress={changePhoto}>
          <Text>Cambiar foto</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ImageView;

const styles = StyleSheet.create({
  container: {
    width: "100%",
  },
  image: {
    width: "100%",
    height: 200,
  },
  bottomPhoto: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginHorizontal: 25,
  },
  description: {
    padding: 10,
    fontSize: 14,
  },
  button: {
    backgroundColor: "#00BFFF",
    borderRadius: 5,
    paddingVertical: 8,
    paddingHorizontal: 16,
  },
});
