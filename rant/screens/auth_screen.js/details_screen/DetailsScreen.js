import React from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import color from "../../../contacts/color";
import MainButton from "../../../components/MainButton";
// import Banner from "../../../components/Banner";
// import Iconicons from 'react-native-vector-icons/Iconicons';
import { Colors } from "react-native/Libraries/NewAppScreen";

const DetailsScreen = () => {
    return (
        <ScrollView style={styles.container}>
            <View style={styles.topIcon}>
                <Iconicons name={"arrow-back"} size={35} color="grey" onClick={()=>{
                    props.naviagation.goBack();
                }} />
           
           
            </View>
            <Banner />
            <Text style={styles.title}>Product Name</Text>
            <View style={{flexDirection: "row"}}>
                <Text style={styles.price}>R100.00</Text>
                <Text style={styles.oldprice}>R110.00</Text>
            </View>
            <View style={styles.reviewContainer}>
                <View style={styles.numberReviewContainer}>
                    <Text style={styles.numberReviewContainerText}>4.5</Text>
               
                </View>
                <Text style={styles.price}>45 Review </Text>
            </View>
            <Text style={styles.title}>Discription</Text>
            <Text style={styles.descriptionText}>Our food is Delicious</Text>
            <View style={{marginHorizontal:12.0}}>
                <MainButton 
                onClick={()=>{
                        props.naviagation.navigate("CartScren");
                }}
                title="Add to cart"
                />

            </View>
        </ScrollView>
    )
}
const styles = StyleSheet.create({
    title: {
        fontSize: 24,
        marginTop: "8%",
        marginLeft: "2%",
        marginBottom: "4%",
        color: "black"
    },
    descriptionText: {
        fontSize: 18, 
        marginLeft: "2%",
        color: "grey"
    },
    numberReviewContainer: {
        height: 50,
        width: 80,
        borderRadius: 6.0,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: Colors.primarycolor
    },
    reviewContainer: {
        height: 70,
        marginTop: "10%",
        justifyContent: "space-between",
        alignItems: "center",
        marginHorizontal: 12.0,
        flexDirection: "row",
        borderColor: "#e6e6e6",
        borderWidth: 1,
    },
    price: {
        fontSize: 22, 
        marginLeft: "2%",
        color: Colors.primarycolor
    },
    numberReviewContainerText: {
        fontSize: 22, 
        color: "white"
    },
    oldprice: {
        fontSize: 18, 
        marginLeft: "4%",
        color: "black",
        textDecorationLine: "line-through",
    },
    container: {
        backgroundColor: "#f8f8f8",
    },
    topIcon: {
        height: 120,
        marginHorizontal: 8,
        paddingTop: 12,
    }
})
export default DetailsScreen