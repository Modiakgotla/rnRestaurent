import React, {useState, useEffect} from "react";
import { ScrollView,StyleSheet,Image, Dimensions, View } from "react-native";
import Swiper from 'react-native-swiper/src';


var  {width} = Dimensions.get('window')

const Banner = () => {
    const [bannerData, setBannerData] = useState([]);
    useEffect(()=> {
        setBannerData([
            "https://media-cdn.tripadvisor.com/media/photo-p/11/63/54/df/debonairs-tripple-decker.jpg",
            "https://media-cldnry.s-nbcnews.com/image/upload/newscms/2019_21/2870431/190524-classic-american-cheeseburger-ew-207p.jpg",
            "https://images.food52.com/zA_65qNitNW9SWneIVcrqELWMJ8=/1200x1200/52096452-f9c1-49e9-9e76-46c694bee2ba--2020-1124_steak-frites_3x2_rocky-luten_032.jpg",
            "https://cdn-prd-02.pnp.co.za/sys-master/images/h57/h68/10773343436830/silo-product-image-v2-15Mar2022-180828-6001240550014-Straight_on-8617-23315_400Wx400H",
            "https://mir-s3-cdn-cf.behance.net/project_modules/disp/8db3fc11002081.560ef70fcf467.jpg"
        ]);
    return () => {
        setBannerData([]);
    }
    }, []);
    return (
        <ScrollView>
            <View>
                <Swiper 
                style={{height: width / 2}}
                showsButtons={false}
                autoplay={true}
                autoplayTimeout= {2}
                >
                    {bannerData.map((item) =>{
                        return (
                            <Image 
                            key={item}
                            style={styles.imageBanner}
                            resizeMode="cover"
                            source={{uri: item}}
                            />
                        )
                    })}
                </Swiper>
            </View>
        </ScrollView>
    )


}
const styles = StyleSheet.create({
    container:{
        flex: 1
    },
    swiper: {
        width: width,
        alignItems:"center",
        marginTop: 10,
    },
    imageBanner: {
        height: width /2,
        marginHorizontal:12.0,
    }
})


export default Banner