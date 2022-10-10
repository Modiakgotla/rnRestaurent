import React from 'react';
import { ScrollView, Dimensions, Text, StyleSheet, View } from 'react-native';
import CartProduct from '../../components/CartProduct';
import MainButton from '../../components/MainButton';
import Ionicons from 'react-native-vector-icons/Ionicons'

var { height, width } = Dimensions.get("window")

const CartScreen = () => {
    return (
        <ScrollView>
            <View style={styles.topIcon}>
                <Ionicons name={"arrow-back"} size={35} color="grey" />
            </View>
            <Text style={styles.title}>Cart</Text>
            <CartProduct />

            <View style={{height: height / 1.9, width: width, justifyContent: "flex-end"}}>
                <MainButton 

                onPress={()=> {

                }}
                title="Continue"

                />
            </View>
        </ScrollView>
    )
}


const styles = StyleSheet.create({
    title: {
        fontSize: 24,
        marginTop:"12%",
        marginLeft: "8%",
        marginBottom: "4%",
        color: "black"
    },
    topIcon: {
        height: 50,
        marginLeft: "6%"
    }
})
export default CartScreen