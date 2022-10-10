import React from 'react'
import {  StyleSheet, Text, View } from 'react-native'
import Colors from '../contacts/color';
// import Ionicons from 'react-native-vector-icons/Ionicons'
// import AntDesign from 'react-native-vector-icons/AntDesign'
import MainButton from './MainButton';

const OrderProduct = () => {
    
    return (
        <View style={[styles.row, {
            marginHorizontal: 10, elevation: 12,
            backgroundColor: "white", height: 250, alignItems: "center",
            justifyContent: "center"
        }]}>
            <Image

                style={{
                    height: 140,
                    width: 140,
                    marginRight: 16

                }}
                source={{ uri: "https://media-cdn.tripadvisor.com/media/photo-p/11/63/54/df/debonairs-tripple-decker.jpg" }}
            />
            <View>
                <Text style={styles.name}>Pizza </Text>
                <Text style={[styles.name, { color: "grey" }]}>Ga Magonare</Text>
                <Text style={[styles.name, { marginTop: 0, fontWeight: "normal", color: Colors.primaryColor }]}>Pizza</Text>
                <View style={{ width: 100, height: 50, overflow: "hidden"}}>
                    
                    
                     <MainButton 

                    onPress={()=>{
                    }}
                    title="Order Again"
                    /> 
                    </View>


               

            </View>
        </View>

    );
}

const styles = StyleSheet.create({
    row: {
        flexDirection: "row"
    },
    name: {
        fontSize: 20,
        color: "#2C323C",
        marginTop: 12.0
    }
})
export default OrderProduct


