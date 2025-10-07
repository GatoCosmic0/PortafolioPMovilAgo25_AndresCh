import { StyleSheet, View, Text } from "react-native";

export default function Post({ route }: any) {
    const { post } = route.params;
    return (
        <View style={styles.contenedor}>
            <View style={styles.post}>
                <Text style={styles.identificador}>Post #{post.id}</Text>
                <Text style={styles.titulo}>{post.tittle}</Text>
                <Text style={styles.descripcion}>{post.body}</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({

        
    contenedor:{
        flex:1,
        padding:15,
        backgroundColor:'#F8F9FA'
    },

    post:{
        backgroundColor: 'white',
        margin: 15,
        padding: 25,
        borderRadius: 20,
    },

    titulo:{
        fontSize: 24,
        fontWeight: 'bold',
        color: '#333',
        marginBottom: 20,
        lineHeight: 32,
        textAlign: 'center',
    },

    descripcion:{
        fontSize: 16,
        lineHeight: 26,
        color: '#555',
        marginBottom: 15,
        textAlign: 'justify',
    },

    identificador:{
        fontSize:30,
        marginBottom:20
    }
})