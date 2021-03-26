import React from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
} from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { useSelector, useDispatch } from 'react-redux';

import { dataSelector, successSelector } from '../store/modules/product/selectors';
import { clearProduct } from '../store/modules/product/actions';

import Button from '../components/Button';

import emptyImage from '../../assets/empty.jpg';

const ProductDetail = () => {
    const dispatch = useDispatch();
    const data = useSelector(dataSelector);
    const success = useSelector(successSelector);

    const handleBack = () => dispatch(clearProduct());
    console.log(data);
    return (
        <View style={styles.container}>
            <View style={{ alignItems: 'center', marginHorizontal: 30 }}>
                <Image style={styles.productImg} source={{ uri: (data && success) ? data.thumbnail : emptyImage }} />
                <Text style={styles.name}>Descrição:&nbsp; {(data && success) ? data.description : 'Sem Informação'}</Text>
                <Text style={styles.description}>Marca:&nbsp;{(data && success) ? (data.brand ? data.brand.name : 'Sem Informação') : 'Sem Informação'}</Text>
                <Text style={styles.price}>Preço Sugerido:&nbsp;{(data && success) ? data.price : 'Sem Informação'}</Text>
                <Button text='VOLTAR' icon={<FontAwesome name="search" size={20} color="#fff" />} color="#70B8FA" onClick={handleBack} />
            </View>
        </View>
    );
};

export default ProductDetail;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 20,
        justifyContent: 'center',
        alignItems: 'center'
    },
    productImg: {
        width: 200,
        height: 200,
        marginTop: 10,
        resizeMode: 'contain'
    },
    name: {
        fontSize: 28,
        color: "#696969",
        fontWeight: 'bold'
    },
    price: {
        marginTop: 10,
        fontSize: 18,
        color: "green",
        fontWeight: 'bold'
    },
    description: {
        textAlign: 'center',
        marginTop: 10,
        color: "#696969",
    },
    star: {
        width: 40,
        height: 40,
    },
    btnColor: {
        height: 30,
        width: 30,
        borderRadius: 30,
        marginHorizontal: 3
    },
    btnSize: {
        height: 40,
        width: 40,
        borderRadius: 40,
        borderColor: '#778899',
        borderWidth: 1,
        marginHorizontal: 3,
        backgroundColor: 'white',

        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    starContainer: {
        justifyContent: 'center',
        marginHorizontal: 30,
        flexDirection: 'row',
        marginTop: 20
    },
    contentColors: {
        justifyContent: 'center',
        marginHorizontal: 30,
        flexDirection: 'row',
        marginTop: 20
    },
    contentSize: {
        justifyContent: 'center',
        marginHorizontal: 30,
        flexDirection: 'row',
        marginTop: 20
    },
    separator: {
        height: 2,
        backgroundColor: "#eeeeee",
        marginTop: 20,
        marginHorizontal: 30
    },
    shareButton: {
        marginTop: 10,
        height: 45,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 30,
        backgroundColor: "#00BFFF",
    },
    shareButtonText: {
        color: "#FFFFFF",
        fontSize: 20,
    },
    addToCarContainer: {
        marginHorizontal: 30
    }
});