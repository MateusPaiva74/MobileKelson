import { View, Tex, Image, StyleSheet, TouchableOpacity, Linking } from 'react-native'
import React from 'react'

const CartaoApresentacao = () => {
    const abrirLink =(url) => {
        Linking.openURL(url)
    }

  return (
    <View style={styles.container}>
        <Image
        source={{uri:'https://avatars.githubusercontent.com/u/1?v=4'}}
        style={styles.imagePerfil}
        />
        
        <Text style={styles.nome}>John Doe</Text>
        <Text style={styles.descricao}>Desenvolvedor Mobile</Text>
        <View style={styles.botoesContainer}>
        <TouchableOpacity
             style={[styles.botao, styles.botaoGithub]}
             onPress={() => abrirLink('https://github.com')}
            >
                <Text style={styles.textoBotao}>GitHub</Text>
            </TouchableOpacity>

            <TouchableOpacity
             style={[styles.botao, styles.botaoLinkedin]}
             onPress={() => abrirLink('https://linkedin.com')}
            >
                <Text style={styles.textoBotao}>LinkedIn</Text>
            </TouchableOpacity>

        </View>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        width: 300,
        padding: 20,
        borderRadius:10,
        backgorundColor:'#fff',
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {width:0, height:2},
        shadowOppacity:0.1,
        shadowRadius: 4,
        elevation: 5
    },
    imagePerfil:{
        width:100,
        height:100,
        borderRadius:50,
        marginBottom:10
    },
    nome:{
        fontSize:22,
        fontWeight:'bold',
        color:'#333'
    },
    descricao:{
        fontSize: 14,
        color:'#666',
        textAlign:'center',
        marginVertical:10
    },
    botao:{
        flex:1,
        padding:10,
        borderRadius:5,
        alignItems:'center',
        marginHorizontal:5
    },
    botoesContainer:{
        flexDirection:'row',
        marginTop:10,
    },
    botaoGithub:{
        backgorundColor:'#333',
    },
    botaoLinkedin:{
        backgorundColor:'#0077b5'
    },
    textoBotao:{
        color:'#fff',
        fontSize:16,
        fontWeight:'bold'
    }

})

export default CartaoApresentacao