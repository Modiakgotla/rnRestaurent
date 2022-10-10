import React from 'react';
import { ScrollView, Dimensions, Text, StyleSheet, View } from 'react-native';
import CartProduct from '../../components/CartProduct';
import MainButton from '../../components/MainButton';
import Ionicons from 'react-native-vector-icons/Ionicons'

var { height, width } = Dimensions.get("window")

const CheckOutScreen = () => {
    return (
        <ScrollView>
            <View style={styles.topIcon}>
                <Ionicons name={"arrow-back"} size={35} color="grey" />
            </View>
            <Text style={styles.title}>CheckOut</Text>
            <CartProduct />
            <Text style={[styles.title, {color: "grey", marginTop: "5%"}]}>469 Fransoff Avenue</Text>
            <View style={{flexDirection: "row", justifyContent: "space-between"}}>
            <Text style={[styles.title, {color: "grey", fontSize: 19}]}>Sub Total</Text>
            <Text style={[styles.title, {fontSize: 20, marginRight: "8%"}]}>R100.00</Text>
            </View>
            <View style={{flexDirection: "row", justifyContent: "space-between"}}>
            <Text style={[styles.subdetails, {color: "grey", fontSize: 19}]}>Discount</Text>
            <Text style={[styles.subdetails, {fontSize: 20, marginRight: "8%"}]}>5%</Text>
            </View>
            <View style={{flexDirection: "row", justifyContent: "space-between",borderBottomColor: "grey", borderBottomWidth: 1,marginRight:"8%",marginHorizontal: "8%"}}>
            <Text style={[styles.subdetails, {color: "grey", fontSize: 19, marginLeft: "0"}]}>Total</Text>
            <Text style={[styles.subdetails, {fontSize: 20, color: "black"}]}>R95.00</Text>
            </View>


            {/* <View style={{height: height / 1.9, width: width, justifyContent: "flex-end"}}> */}
                <MainButton 

                onPress={()=> {

                }}
                title="Pay"

                />
            {/* </View> */}
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
        marginHorizontal: 8,
        paddingTop: 12.0,
    },
    subdetails: {
        fontSize: 24,
        // marginTop:"8%",
        marginLeft: "2%",
        marginBottom: "4%",
        color: "grey"
    },
})
export default CheckOutScreen