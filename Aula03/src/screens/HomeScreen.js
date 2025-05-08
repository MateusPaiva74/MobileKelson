import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native'
import React from 'react'

const HomeScreen = ({navigation}) => {

    const items =[
        {id:'1', name:"Curso de React Native", description:"Aprenda criar apss para Ios e Android"},
        {id:'2', name:"Curso de Java ", description:"Aprenda a usar o Java em APIS"},
        {id:'3', name:"Curso de AWS", description:"Domine os serviços da AWS"},
        {id:'4', name:"Curso de Python", description:"Aprenda a codar em Python"}
]

  return (
    <View style={styles.container}>
      <Text style={styles.title}>📚Cursos Disponíveis</Text>
      <FlatList
        data={items}
        keyExtractor={(item) => item.id}
        renderItem={({item}) =>(
            <TouchableOpacity
            style={styles.itemContainer}
            onPress={() => navigation.navigate('Details', {
                itemId: item.id,
                name: item.name,
                description: item.description
            })}
            >
                <Text style={styles.itemTitle}>{item.name}</Text>
                <Text style={styles.itemDescription}>{itemDescription}</Text>
            </TouchableOpacity>
        )

        }
      />
    </View>
  )
}
const styles = StyleSheet.create({
    container: { flex: 1, padding: 20, backgroundColor: '#f5f5f5' },
    title: { fontSize: 22, fontWeight: 'bold', marginBottom: 20 },
    itemContainer: { backgroundColor: '#fff', padding: 15, marginBottom: 10, borderRadius: 8, elevation: 2 },
    itemTitle: { fontSize: 18, fontWeight: 'bold' },
    itemDescription: { fontSize: 14, color: '#555' },
    })
export default HomeScreen