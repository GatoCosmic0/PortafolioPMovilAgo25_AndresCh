import { useEffect, useState } from "react";
import { ActivityIndicator, FlatList, StatusBar, StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function Home({ navigation }: any) {
    const [post, setPost] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(response => response.json())
            .then(data => {
                setPost(data.slice(0, 10))
                setLoading(false)
            })
            .catch(error => {
                console.log("Error: ", error)
                setLoading(false)
            })

    }, [])

    console.log(post);


    const RenderPost = ({ item }: any) => (
        <TouchableOpacity
            style={styles.contenedorPost}
            onPress={() => navigation.navigate('Post', { post: item })}
        >
            <View style={styles.postHeader}>
                <Text style={styles.postId}>#{item.id}</Text>
                <Text style={styles.postDate}>📅 Hoy</Text>
            </View>
            <Text style={styles.tituloPost} numberOfLines={2}>{item.title}</Text>
            <Text style={styles.descripcionPost} numberOfLines={2}>{item.body}</Text>
        </TouchableOpacity>
    );

    if (loading) {
        return (
            <View style={styles.loadingContainer}>
                <ActivityIndicator size="large" color="#842A3B" />
                <Text style={styles.loadingText}>Cargando posts...</Text>
            </View>
        )
    }

    return (
        <View style={styles.contenedor}>
            <StatusBar backgroundColor="#842A3B" barStyle="light-content" />
            <View style={styles.header}>
                <Text style={styles.welcomeText}>¡Hola! 👋</Text>
                <Text style={styles.subtitle}>Descubre nuestros últimos posts</Text>
            </View>

            <FlatList
                data={post}
                renderItem={({ item }) => <RenderPost item={item} />}
                // renderItem={ ({item}) => RenderPost(item)}
                keyExtractor={item => item["id"]}
            />


        </View>
    )
}

const styles = StyleSheet.create({

    contenedor: {
        flex: 1,
        paddingHorizontal: 15,
        backgroundColor: '#F8F9FA'
    },

    header: {
        paddingVertical: 20,
        paddingHorizontal: 5,
    },

    welcomeText: {
        fontSize: 28,
        fontWeight: 'bold',
        color: '#842A3B',
        marginBottom: 5,
    },

    subtitle: {
        fontSize: 16,
        color: '#666',
        marginBottom: 15,
    },

    loadingContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F8F9FA',
    },

    loadingText: {
        marginTop: 10,
        fontSize: 16,
        color: '#842A3B',
    },

    contenedorPost: {
        backgroundColor: 'white',
        padding: 20,
        marginVertical: 8,
        borderRadius: 15,
    },

    postHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 10,
    },

    postId: {
        fontSize: 12,
        fontWeight: 'bold',
        color: '#842A3B',
        backgroundColor: '#F5DAA7',
        paddingHorizontal: 8,
        paddingVertical: 4,
        borderRadius: 10,
    },

    postDate: {
        fontSize: 12,
        color: '#999',
    },

    tituloPost: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#333',
        marginBottom: 8,
        lineHeight: 24,
    },

    descripcionPost: {
        fontSize: 14,
        color: '#666',
        lineHeight: 20,
        marginBottom: 12,
    }
})