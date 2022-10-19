import React from 'react';
import { ScrollView, Dimensions, Text, StyleSheet, View } from 'react-native';
import OrderProduct from '../../components/OrderProduct';
import MainButton from '../../components/MainButton';
import Ionicons from 'react-native-vector-icons/Ionicons'

var { height, width } = Dimensions.get("window")

const OrderScreen = (props) => {
    return (
        <ScrollView>
            <View style={styles.topIcon}>
                <Ionicons name={"arrow-back"} size={35} color="grey" onClick={()=>{
                    props.naviagation.goBack();
                }} />
            </View>
            <Text style={styles.title}>My Orders</Text>
            <OrderProduct />

            
        </ScrollView>
    )
}


const styles = StyleSheet.create({
    title: {
        fontSize: 24,
        // marginTop:"12%",
        marginLeft: "2%",
        marginBottom: "4%",
        color: "black"
    },
    topIcon: {
        height: 70,
        marginHorizontal: 6,
        paddingTop: 12
    }
})
export default OrderScreen