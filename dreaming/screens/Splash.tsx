import { useEffect } from "react";
import { Text, View, StyleSheet, Image, Animated } from "react-native";

export default function Splash({ navigation }: any) {

    useEffect(() => {
        setTimeout(function () {
            navigation.replace('Login')
        }, 2500)
    }, [])


    return (
        <View style={styles.contenedor}>
            <Animated.View style={styles.logoContainer}>
                <Image
                    source={{
                        uri: 'https://marketplace.canva.com/2pcwc/MAEr652pcwc/1/tl/canva-korean-playful-doodled-pink-flowers-MAEr652pcwc.png'
                    }}
                    style={styles.logo}
                />
            </Animated.View>

            <Text style={styles.titulo}>Bienvenidos a Dreaming Flowers</Text>
            <Text style={styles.subtitulo}>Donde los sueños florecen</Text>
        </View>
    )
}


const styles = StyleSheet.create({

    contenedor: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: '#842A3B'
    },

    logoContainer: {
        marginBottom: 30,
        shadowColor: "#000",
    },

    logo: {
        width: 180,
        height: 180,
        borderRadius: 90,
    },

    titulo: {
        fontSize: 32,
        fontWeight: "bold",
        color: "white",
        marginBottom: 10,
    },

    subtitulo: {
        fontSize: 16,
        color: "#F5DAA7",
        fontStyle: 'italic'
    }

})