import ImageView from "@/components/ImageView/ImageView";
import Ionicons from "@expo/vector-icons/Ionicons";
import {
  StyleSheet,
  Image,
  FlatList,
  TouchableOpacity,
  Text,
  View,
} from "react-native";
import { useEffect, useState } from "react";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

export type imageList = {
  id: string;
  description: string;
  link: string;
};

const DATA: imageList[] = [
  {
    id: "1",
    description:
      "Un paisaje montañoso al amanecer, con nubes iluminadas por el sol.",
    link: "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&q=80&w=1080",
  },
  {
    id: "2",
    description: "Un lago sereno rodeado de bosques, reflejando las montañas.",
    link: "https://images.unsplash.com/photo-1557456170-0cf4f4d0d362?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: "3",
    description:
      "Un campo de flores silvestres en plena primavera, con colores vibrantes.",
    link: "https://media.istockphoto.com/id/1445722260/es/foto/flores-mixtas-en-un-prado-colorido-con-flores-silvestres-y-flores-de-amapola.jpg?s=1024x1024&w=is&k=20&c=fTJm_aXPiLMQBLi6K55YMUa8h3d0O9XvIXP5v07Xa-E=",
  },
  {
    id: "4",
    description:
      "Una playa de arena blanca con aguas cristalinas y palmeras al atardecer.",
    link: "https://media.istockphoto.com/id/1300982667/es/foto/la-mujer-se-sienta-en-una-playa-de-arena-con-una-tabla-de-surf-y-observa-el-oc%C3%A9ano.jpg?s=1024x1024&w=is&k=20&c=z1Y0wQ0z-49HlLylBCxbbX1Ww6ToDCtrkwBpuf8UD_s=",
  },
  {
    id: "5",
    description: "Una cascada impresionante rodeada de vegetación exuberante.",
    link: "https://media.istockphoto.com/id/1487997397/es/foto/cascada-tegenungan-en-el-r%C3%ADo-petanu-kemenuh-village-gianyar-regency-al-norte-de-ubud-bali.jpg?s=1024x1024&w=is&k=20&c=I2qE-4LeI3jeZujfvgvZqHnB9nHnxbpc3bT541kAAzM=",
  },
  {
    id: "6",
    description: "Un bosque de árboles de hoja perenne en un día otoñal.",
    link: "https://media.istockphoto.com/id/846704638/es/foto/hermosa-vista-del-bosque-en-un-d%C3%ADa-soleado-paisaje-de-oto%C3%B1o-c%C3%A1rpatos-ucrania.jpg?s=1024x1024&w=is&k=20&c=SL97YsmJOH-N4xvUkRZopXtA5Tpip6NKvDmUFd5Ki2M=",
  },
  {
    id: "7",
    description: "Un atardecer en el desierto",
    link: "https://plus.unsplash.com/premium_photo-1699534956937-8be2c4c68e03?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: "8",
    description:
      "Un glaciar brillante en un paisaje ártico, reflejando la luz del sol.",
    link: "https://media.istockphoto.com/id/1359911642/es/foto/icebergs-flotan-en-la-laguna-glaciar-jokulsarlon.jpg?s=1024x1024&w=is&k=20&c=NQnE8yr01wQq13bzojIII44Duy2zZyMZ9M7gl1-XNiU=",
  },
  {
    id: "9",
    description:
      "Un camino rodeado de árboles en un día de verano, lleno de sombra.",
    link: "https://media.istockphoto.com/id/1498358470/es/foto/calle-bordeada-de-%C3%A1rboles-gingko-en-la-universidad-de-hokkaido.jpg?s=1024x1024&w=is&k=20&c=dZsnMpoF_mX53JPZuNGvwK_uNy85EJ42iva06pdcSTM=",
  },
  {
    id: "10",
    description:
      "Una vista panorámica de una ciudad iluminada de noche, llena de vida.",
    link: "https://media.istockphoto.com/id/1482082383/es/foto/vista-panor%C3%A1mica-nocturna-de-bogot%C3%A1-colombia.jpg?s=1024x1024&w=is&k=20&c=rSRYnauwUgJ10JK2BVuqMvQIhcfOyzM23eWGqmC9xw0=",
  },
];

export default function TabTwoScreen() {

  const [images, setImages] = useState<imageList[]>([]);
  const [otherImages, setOtherImages] = useState<imageList[]>([]);

  useEffect(() => {
    setImages(DATA.splice(0, 4))
    setOtherImages(DATA.splice(4))
  }, [])

  const changePhoto = (id: string) => {
    const imageIndex = images.findIndex((image) => image.id === id);

    if (imageIndex !== -1 && otherImages.length > 0) {
      const newOtherImages = [...otherImages];
      const newImage = newOtherImages.shift()!;
      const updatedImages = [...images];

      updatedImages[imageIndex] = newImage;
      setImages(updatedImages);
      setOtherImages([...newOtherImages, images[imageIndex]]);
    }
  };

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <FlatList
          data={images}
          renderItem={({ item }) => (
            <ImageView image={item} changePhoto={() => changePhoto(item.id)} />
          )}
          keyExtractor={(image) => image.id}
          contentContainerStyle={styles.listContainer}
        ></FlatList>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  listContainer: {
  },
});
