import { useEffect, useState } from "react";
import { ActivityIndicator, FlatList, StyleSheet, Text, View } from "react-native";

interface Frase {
    id:number;
    quote:string;
    author:string;
}

export default function Basico(){
    // useState() para almacenar frases
    const [frases, setFrases] = useState<Frase[]>([]);
    // useState() para indicar cuando se está cargando
    const [cargando, setCargando] = useState(true);

    useEffect(() => {
        const obtenerFrases = async () => {
            try {
                // Consumir la api de Quotes
                const respuesta = await fetch("https://dummyjson.com/quotes");
                const datos = await respuesta.json();
                setFrases(datos.quotes)
            } catch (error) {
                console.log("Hubo un error al buscar las frases:", error);
            } finally {
                setCargando(false)
            }
        };

        obtenerFrases();
    }, [])

    return cargando ? ( 
        <View style={{justifyContent:"center", flex:1}}>
            <ActivityIndicator size="large"/>

        </View> 
    ) : (
        <View style={styles.container}>
            <Text style={styles.titulos}>Lista de Frases</Text>

            <FlatList 
                data={frases}
                renderItem={({item})=>(
                    <View style={styles.cajaFrases}>
                        <Text style={styles.frase}> "{item.quote}"</Text>
                        <Text style={styles.author}>{item.author}</Text>
                    </View>
                )}
            />

        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        padding:15
    },

    titulos:{
        fontSize:25,
        fontWeight:"bold",
        marginBottom:15
    },

    cajaFrases:{
        padding: 10,
        marginBottom:25,
        borderRadius:15,
        // textAlign:"center",
        borderColor:"#c46220ff",
        borderWidth:2
    },

    frase:{
        fontSize:16,
        fontStyle:"italic",
        textAlign:"center"

    },

    author:{
        fontSize:14,
        textAlign: "right",
        color:"#c46220ff"
    }
})