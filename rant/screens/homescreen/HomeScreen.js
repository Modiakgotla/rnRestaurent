import { Firestore } from "@firebase/firestore";
import React, {useEffect,useState} from "react";
import {ScrollView, Text, StyleSheet, Image, ImageBackground, TextInput, View, TouchableOpacity, TouchableNativeFeedback} from 'react-native'
import Entypo from 'react-native-vector-icons/Entypo';
import EvilIcons from 'react-native-vector-icons/EvilIcons'
// import { firestore } from "@firebase/firestore";
import { ActivityIndicator } from "react-native-web";

const HomeScreen = () => {

    const [products,setProducts] =useState();
    const [category,setCategory] =useState();
    const [loading, setLoading] =useState(true);
    const getData = async () =>{
        const productArray = [];
        const categoryArray = [];

        await firestore().collection("Products").get().then((data)=>{
            data.docs.forEach((productData)=>{
                productArray.push(productData.data());
            })
        })
        await firestore().collection("Category").get().then((data)=>{
            data.docs.forEach((categoryData)=>{
                categoryArray.push(categoryData.data());
            })
        })
        setCategory(categoryArray);
        setProducts(productArray);
        setLoading(false)
    }
    useEffect(()=>{
        getData();
    }, []);


    return(
        <ScrollView style={styles.container}>
        <View style={styles.topIcon}>
            <Entypo name="menu" size={30} color="grey" />
        </View>
        <View style={styles.input}>
            <EvilIcons name="Search" size={45} color="grey" />
            <View style={{flex:1}}>
                <TextInput placeholder="Search Your Product" style={{fontSize:18,color:"grey"}} />
            </View>
        </View>
        <Text style={styles.title}>Categories</Text>
        
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>

           
            
            
                <ImageBackground 
                    imageStyle={{borderRadius: 12.0}}
                    style={styles.categotyImage}
                    source={{uri: "https://media-cdn.tripadvisor.com/media/photo-p/11/63/54/df/debonairs-tripple-decker.jpg"}}
                    >
                        <Text style={styles.imageTitle}>Pizza</Text>
                    </ImageBackground>
                    <ImageBackground 
                    imageStyle={{borderRadius: 12.0}}
                    style={styles.categotyImage}
                    
                    source={{uri: "https://media-cldnry.s-nbcnews.com/image/upload/newscms/2019_21/2870431/190524-classic-american-cheeseburger-ew-207p.jpg"}}
                    >
                        <Text style={styles.imageTitle}>Burger</Text>
                    </ImageBackground>
                    <ImageBackground 
                    imageStyle={{borderRadius: 12.0}}
                    style={styles.categotyImage}
                    source={{uri: "https://images.food52.com/zA_65qNitNW9SWneIVcrqELWMJ8=/1200x1200/52096452-f9c1-49e9-9e76-46c694bee2ba--2020-1124_steak-frites_3x2_rocky-luten_032.jpg"}}
                    
                    
                    >
                        <Text style={styles.imageTitle}>Steak and Chips</Text>
                    </ImageBackground>
                </ScrollView>
                <Text style={styles.title}>Drinks</Text>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                <View style={{ marginLeft: 20}}>
                <Image 
                style={styles.productImage}
                source={{uri:"https://cdn-prd-02.pnp.co.za/sys-master/images/h57/h68/10773343436830/silo-product-image-v2-15Mar2022-180828-6001240550014-Straight_on-8617-23315_400Wx400H"}}
                
                />

                </View>
                <View style={{ marginLeft: 20}}>
                <Image 
                style={styles.productImage}
                source={{uri:"https://mir-s3-cdn-cf.behance.net/project_modules/disp/8db3fc11002081.560ef70fcf467.jpg"}}
                />
                </View>
                
                
    </ScrollView>
    </ScrollView>

     
    )
    
}
const styles = StyleSheet.create({
    container: {
        backgroundColor: "#f8f8f8",
    }, title: {
        fontSize: 24,
        marginTop: "12%",
        marginLeft: "4%",
        marginBottom:"4%",
        color: "grey",
    },
    topIcon: {
        height: 120,
        marginLeft: "4%",
        paddingTop: 12.0,
    },
    categotyImage: {
        height: 100,
        marginLeft: "4%",
        marginLeft: 30,
        width: 200,
        marginTop:"4%",
        justifyContent:"center",
        alignItems: "center",
        elevation: 20,
    },
    productImage: {
        height: 180,
        width: 140,
        borderRadius:10,
        marginBottom:12,
        marginTop:12
        },
        productText: {
            fontSize: 18,
        },

        imageTitle:{
            color:"white",
            fontSize: 18,
            fontWeight:"bold",
        },
        input:{
            height: 40,
            width: "84%",
            elevation: 12,
            flexDirection: "row",
            marginLeft: "4%",
            alignItems: "center",
            backgroundColor: "white",
        }
})
export default HomeScreen
