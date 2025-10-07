import { Button, StyleSheet, Text, View } from "react-native";

export default function Home({navigation}:any) {
    return(
        <View>
            <Text style={styles.title} >Bienvenidos</Text>
            <Button title="Ver Frases"/>
            <Button title="Ver Fases Basicas"
            onPress={()=>navigation.navigate("Basico")}/>
            <Button title="Ver Fases Avanzadas"
            onPress={()=>navigation.navigate("Avanzado")}/>
            
        </View>
    )

}

const styles = StyleSheet.create({
    title:{
        fontSize:22,
        fontWeight:"bold"
    }
})