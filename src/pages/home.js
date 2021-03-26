import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { BarCodeScanner } from 'expo-barcode-scanner';
import { useDispatch } from 'react-redux';

import { Entypo, FontAwesome } from '@expo/vector-icons';
import Button from '../components/Button';
import ButtonScan from '../components/ButtonBack';
import InputText from '../components/InputCode';
import ViewScan from '../components/ScanCode';

import { getProduct } from '../store/modules/product/actions';

export default function App() {
  const dispatch = useDispatch();
  const [openScan, setOpenScan] = useState(false);
  const [hasPermission, setHasPermission] = useState(null);
  const [code, setCode] = useState(null);

  useEffect(() => {
    (async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);

  const handleClickScan = () => {
    if (!hasPermission || hasPermission === null) {
      alert('Não e possivel abrir a câmera sem conceder as permissões.');
    } else {
      setOpenScan(true);
    }
  };
  
  const handleCloseScan = () => setOpenScan(false);
  const handleCode = (code) => setCode(code);
  const clearCode = () => setCode(null);

  const search = async () => {
    if (!code) {
      alert('Insira um codigo de barras.');
    } else {
      dispatch(getProduct(code))
    }
  };

  return (
    <>
      {!openScan ?
        <View style={styles.container}>
          <Text>Digite o codigo de barras do produto ou utilize a camera.</Text>
          <InputText placeholder="Codigo de Barras" handleChange={handleCode} value={code} />
          <Button text='LIMPAR' icon={<FontAwesome name="close" size={20} color="#fff" />} color="#70B8FA" onClick={clearCode} />
          <Button text='ABRIR CÂMERA' icon={<Entypo name="camera" size={20} color="#fff" />} onClick={handleClickScan} />
          <Button text='PESQUISAR' icon={<FontAwesome name="search" size={20} color="#fff" />} color="#70B8FA" onClick={search} />
        </View>
        :
        <View style={styles.containerScan}>
          <ViewScan scanned={code} handleBarCode={handleCode} handleClose={handleCloseScan} />
          <ButtonScan text='VOLTAR' icon={<FontAwesome name="close" size={20} color="#fff" />} color="#70B8FA" onClick={handleCloseScan} />
        </View>
      }
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  containerScan: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-end'
  }
});
