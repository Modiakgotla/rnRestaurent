import React, { useState } from 'react'
import { TouchableOpacity, StyleSheet, Text, View } from 'react-native'
import Colors from '../contacts/color';
import Ionicons from 'react-native-vector-icons/Ionicons'
import AntDesign from 'react-native-vector-icons/AntDesign'

const CartProduct = () => {
    const [count, setCount] = useState(1)
    return (
        <View style={[styles.row, {
            margin: 12, elevation: 12,
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
                <View style={[styles.row, {
                    marginTop: 12.0, width: 120, backgroundColor: "#f6f6f6",
                    height: 40, justifyContent: "space-evenly", alignItems: "center"
                }]}></View>


                <TouchableOpacity

                    activeOpacity={0.5}
                    onPress={() => {
                       if(count >1){
                        setCount(parseInt(count) - 1);
                       }
                       
                    }}
                >
                    <Ionicons size={35} color="black" name="remove" />
                </TouchableOpacity>
                <Text style={{fontWeight: "normal", fontSize: 20}}>{count}</Text>
                <TouchableOpacity

                    activeOpacity={0.5}
                    onPress={() => {
                        setCount(parseInt(count) + 1);
                    }}
                >
                    <Ionicons size={35} color="black" name="add" />
                </TouchableOpacity>

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
export default CartProduct


