import React from 'react';
import { StyleSheet, View, Image, Text, Alert, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Feather'

import foto from './assets/foto.jpg';
import Card from './components/Card';

const App = () => {

  function handleRedeSocial(rede_social) {
    switch (rede_social) {
      case 'linkedin':
        Alert.alert('Meu Linkedin: ', 'https://linkedin.com/in/daviroquedev')
        break
      case 'github':
        Alert.alert('Meu Github: ', 'https://github.com/daviroquedev')
        break
    }
  }


  return (
    <>
      <View style={style.page}>
        <View style={style.container_cabecalho}>
          <Image source={foto} style={style.foto} />
          <Text style={style.nome}>Davi Roque</Text>
          <Text style={style.funcao}>Desenvolvedor Mobile</Text>
          <View style={style.redes_sociais}>
            <TouchableOpacity onPress={() => handleRedeSocial('github')}>
              <Icon name="github" size={30} />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => handleRedeSocial('linkedin')}>
              <Icon name="linkedin" size={30} />
            </TouchableOpacity>
          </View>
        </View>
        <Card titulo="HARD SKILLS">
          <Text style={style.card_content_text}>HTML5 / CSS3 / JavaScript / React / React-Native / GitBash</Text>
        </Card>
    
        <Card titulo="PROJETOS PESSOAIS">
          <Text style={style.card_content_text}>App jogo da velha - Mobile</Text>
          <Text style={style.card_content_text}>App login, acesso e cadastro feito no curso estação hack from facebook Cel Lep</Text>
        </Card>
      </View>
    </>
  )
}

const style = StyleSheet.create({
  page: {
    backgroundColor: '#E7E7E7',
    flex: 1,
  },
  container_cabecalho: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
  },
  foto: {
    width: 250,
    height: 250,
    borderRadius: 125,
  },
  nome: {
    fontSize: 32,
    fontWeight: 'bold',
    marginTop: 10,
    color: 'black',

  },
  funcao: {
    color: '#939393',
    fontWeight: 'bold',
    marginBottom: 10,

  },
  redes_sociais: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '60%',
    marginTop: 20,
  },


})

export default App;
