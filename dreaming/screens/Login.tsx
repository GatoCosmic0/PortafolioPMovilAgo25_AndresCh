import { useState } from "react";
import { Text, TextInput, TouchableOpacity, View, StyleSheet, KeyboardAvoidingView, Platform, Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Login({ navigation }: any) {
    const [correo, setCorreo] = useState('')
    const [password, setPassword] = useState('')


    const verificarLogin = () => {
        if (correo === 'admin@floreria.com' && password === '123') {
            navigation.replace('Home')
        } else {
            console.log("Error en el acceso");

        }
    }

    return (
        <SafeAreaView>
            <KeyboardAvoidingView
                style={styles.contenedor}
                behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            >

                <View style={styles.header}>
                    <Image
                        source={{
                            uri: 'https://marketplace.canva.com/2pcwc/MAEr652pcwc/1/tl/canva-korean-playful-doodled-pink-flowers-MAEr652pcwc.png'
                        }}
                        style={styles.logo}
                    />
                    <Text style={styles.titulo}>Bienvenido</Text>
                    <Text style={styles.subtitulo}>Inicia sesión en tu cuenta</Text>
                </View>

                <View style={styles.formContainer}>



                    <TextInput
                        onChangeText={setCorreo}
                        value={correo}
                        placeholder="Correo electronico"
                        style={styles.input}
                    />

                    <TextInput
                        onChangeText={setPassword}
                        value={password}
                        placeholder="Contraseña"
                        style={styles.input}

                    />

                    <TouchableOpacity
                        onPress={verificarLogin}
                        style={styles.boton}>
                        <Text style={styles.botonTexto}>Ingresar</Text>
                    </TouchableOpacity>

                    <Text style={styles.credenciales}>
                        💡 Usa: admin@floreria.com / 123
                    </Text>
                </View>
            </KeyboardAvoidingView>
        </SafeAreaView >
    )
}


const styles = StyleSheet.create({

    contenedor: {
        flex: 1,
        justifyContent: 'center',
        padding: 20,
        backgroundColor: '#842A3B',
    },

    header: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 20,
    },

    logo: {
        width: 100,
        height: 100,
        borderRadius: 50,
        marginBottom: 20,
    },

    titulo: {
        fontSize: 28,
        fontWeight: 'bold',
        textAlign: 'center',
        color: 'white',
        marginBottom: 10,
    },

    subtitulo: {
        fontSize: 16,
        color: '#F5DAA7',
        textAlign: 'center',
    },

    formContainer: {
        flex: 1,
        backgroundColor: 'white',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        paddingHorizontal: 25,
        paddingTop: 40,
    },

    input: {
        borderWidth: 1,
        borderColor: '#ddd',
        borderRadius: 12,
        padding: 16,
        marginBottom: 20,
        backgroundColor: 'white',
        fontSize: 16,
    },

    boton: {
        backgroundColor: '#842A3B',
        borderRadius: 12,
        padding: 18,
        alignItems: 'center',
        marginTop: 10,
    },

    botonTexto: {
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold',
    },

    credenciales: {
        textAlign: 'center',
        marginTop: 20,
        color: '#666',
        fontSize: 14,
        fontStyle: 'italic',
    },
    
})