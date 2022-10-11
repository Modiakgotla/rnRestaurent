import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, Button } from 'react-native';
import Colors from '../../contacts/color';
import Input from '../../components/Input';
import PasswordInput from '../../components/PasswordInput';
import MainButton from '../../components/MainButton';
import Toast from 'react-native-toast-message';

const SignUp = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [fullname,setFullname] = useState("");

    function valid(){
        const reg = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
        if (password == "" && email == "" && fullname == "") {
            Toast.show({
                type: "Error",
                text1: "We are not friends",
                text2: "I will hack if you do this sh!t again",
            })
        } else if (fullname =="") {
            Toast.show({
                type: "Error",
                text1: "We are not friends",
                text2: "Type your Full name properly",
            })
    }else if (password == "") {
        Toast.show({
            type: "Error",
            text1: "We are not friends",
            text2: "Type your password don't b lazy",
        }) 
    } else{Toast.show({
        type: "Success",
        text1: "You're serious about life Good",
        text2: "You're a real G",
    }) }
}
    
    return (
        <View style={styles.container}>
            <View style={styles.center}>
                <Image source={require("../../assets/coffee.jpg")}
                    style={styles.imageTop} />
                <Text style={styles.title}>Sign Up</Text>
            </View>
            <View style={styles.centerContainer}>
                <Input
                    placeholder={"Fullname"}
                    id={"fullname"}
                    name={"Fullname"}
                    value={fullname}
                    onChangeText={(text) => setFullname(text)}
                />
                <Input
                    placeholder={"Email"}
                    id={"email"}
                    name={"email"}
                    value={email}
                    onChangeText={(text) => setEmail(text)}
                    />
                <PasswordInput
                    placeholder={"Password"}
                    id={"password"}
                    name={"password"}
                    value={password}
                    onChangeText={(text) => setPassword(text)}
                />
                <Button
                    onPress={() => {
                        valid();
                    }}
                    title="SIGN UP"
                />
                <Text style={styles.forgotPassword}>
                    <Text style={{ color: "black" }}>Already have an account?</Text>
                   LOGIN


                </Text>
            </View>
        </View>
    );

}
const styles = StyleSheet.create({
    imageTop: {
        height: 100,
        width: 100,
        borderRadius: 15
    },
    container: {
        paddingHorizontal: 36.0,
        alignItems: "center",
        flex: 1,
        paddingTop: "15%",
        justifyContent: "center",
        backgroundColor: "white",
    },
    centerContainer: {
        justifyContent: "center",
        marginTop: "8%",
        alignItems: "center"
    },
    title: {
        fontSize: 25,
        color: Colors.accentColor,
    },
    forgotPassword: {
        marginBottom: 12.0,
        color: Colors.primaryColor,
        marginTop: "20",
        fontWeight: "bold",

    },
    center: {
        alignItems: "center",
        justifyContent: "center"
    }
})

export default SignUp
