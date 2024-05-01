import { Alert, Button, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import Input from "../components/Input/Input";
import { SafeAreaView } from "react-native-safe-area-context";

const MemberSign = ({ navigation }) => {
  const [ad, setAd] = useState(null);
  const [soyad, setSoyad] = useState(null);
  const [cinsiyet, setCinsiyet] = useState(null);
  const [yas, setYas] = useState(null);
  const [boy, setBoy] = useState(null);
  const [kilo, setKilo] = useState(null);
  const [telefon, setTelefeon] = useState(null);

  const handleSubmit = () => {
    if (!ad && !soyad && !cinsiyet && !yas && !boy && !kilo && !telefon) {
      Alert.alert("Fit Clup Spor Merkezi", "Boş alan bırakılamaz...");
      return;
    }

    //Böyle tanımlanabilir.

    // const user = {
    //     user_name : ad,
    //     user_surname : soyad,
    //     user_cinsiyet : cinsiyet,
    //     user_yas : yas,
    //     user_boy : boy,
    //     user_kilo : kilo,
    //     user_telefon : telefon,
    // }

    //veya aynı isimler kullanılabilir ise direkt
    const user = {
      ad,
      soyad,
      cinsiyet,
      yas,
      boy,
      kilo,
      telefon,
    };

    navigation.navigate("MemberResult", { user });
  };

  return (
    <SafeAreaView>
      <Text style={styles.header_text}>Üye Kayıt Formu</Text>

      {/* OnchangeText tanımlama */}
      <Input
        label="Ad"
        placeholder="Adınızı girin..."
        // onChangeText={(text) => setAd(text)}
        onChangeText={(item) => setAd(item)}
      />

      {/*veya böyle OnchangeText tanımlamaya React izin veriri.Dönen textin direk atanması. */}
      <Input
        label="Soyad"
        placeholder="Soyadınızı girin..."
        onChangeText={setSoyad}
      />
      <Input
        label="Cinsiyet"
        placeholder="Cinsiyetizini girin..."
        onChangeText={setCinsiyet}
      />
      <Input
        label="Yaş"
        placeholder="Yaşınızı girin..."
        onChangeText={setYas}
      />
      <Input
        label="Boy"
        placeholder="Boyunuzu girin...(cm cinsinden)"
        onChangeText={setBoy}
      />
      <Input
        label="Kilo"
        placeholder="Kilonuzu girin...(kg cinsinden)"
        onChangeText={setKilo}
      />
      <Input
        label="Telefon"
        placeholder="Telefon numaranızı girin..."
        onChangeText={setTelefeon}
      />
      <View style={styles.button_container}>
        <Button title="Kaydı Tamamla" onPress={handleSubmit} />
      </View>
    </SafeAreaView>
  );
};

export default MemberSign;

const styles = StyleSheet.create({
  button_container: {
    margin: 8,
    borderWidth: 1,
    borderColor: "blue",
    borderRadius: 5,
    marginTop: 15,
  },
  header_text: {
    marginLeft: 138,
    fontSize: 16,
  },
});
