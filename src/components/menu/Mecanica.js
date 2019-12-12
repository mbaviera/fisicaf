import React, { Component } from "react";
import { StyleSheet, View, BackHandler, Text, Image, TouchableOpacity, ImageBackground, Dimensions } from "react-native";
import { Appbar } from 'react-native-paper';
import { Actions } from "react-native-router-flux";
import { ScrollView } from "react-native-gesture-handler";
//import Dimensions from 'Dimensions';
import { AdMobBanner } from 'react-native-admob'

const screen = Dimensions.get('window');

export default class Mecanica extends Component {
  //DEFINE VARIAVEIS
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  componentWillUnmount() {
    BackHandler.removeEventListener('hardwareBackPress', this.handleBackButtonClick);
  }

  handleBackButtonClick() {
    this.props.navigation.goBack(null);
    return true;
  }

  cinematica = () => {
    Actions.cinematica();
  };

  dinamica = () => {
    Actions.dinamica();
  };

  render() {
    return (
      <View style={styles.container}>
        <Appbar.Header style={styles.styleHead}>
          <Image
            source={require("./imgmenu/mecanicabanner.png")}
            style={{ width: "100%", height: "100%" }}
          />
        </Appbar.Header>

        <ScrollView style={{ marginLeft: "1%", marginTop:"2%", marginBottom:"2%" }}>
          <TouchableOpacity style={styles.row}
            onPress={this.cinematica}
            activeOpacity={0.7} >
            <ImageBackground
              source={require("./imgmenu/cinematica.jpg")}
              style={styles.imageBackground}>
              <Text style={[styles.text, styles.title]}>
              Cinemática
              </Text>
              <View style={styles.rating}>
                <Text style={[styles.text, styles.value]}>
                {"\n"}Velocidade
                {"\n"}Movimento Uniforme
                {"\n"}Movimento Uniformemente Variado
                {"\n"}Movimento Vertical
                {"\n"}Movimento Oblíquo
                {"\n"}Movimento circular</Text>
              </View>
            </ImageBackground>
          </TouchableOpacity>

          <TouchableOpacity style={styles.row}
            onPress={this.dinamica}
            activeOpacity={0.7} >
            <ImageBackground
              source={require("./imgmenu/dinamica.jpg")}
              style={styles.imageBackground}>
              <Text style={[styles.text, styles.title]}>
              Dinâmica
              </Text>
              <View style={styles.rating}>
                <Text style={[styles.text, styles.value]}>
                {"\n"}Leis de Newton
                {"\n"}Força Peso
                {"\n"}Força de Atrito
                {"\n"}Força Elástica
                {"\n"}Força Centrípeta
                {"\n"}Trabalho de um força
                {"\n"}Potência
                {"\n"}Energia
                {"\n"}Impulso e Quantidade de Movimento
                </Text>
              </View>
            </ImageBackground>
          </TouchableOpacity>

          <TouchableOpacity style={styles.row}
            onPress={this.optica}
            activeOpacity={0.7} >
            <ImageBackground
              source={require("./imgmenu/estatica.jpg")}
              style={styles.imageBackground}>
              <Text style={[styles.text, styles.title]}>
              Estática
              </Text>
              <View style={styles.rating}>
                <Text style={[styles.text, styles.value]}>
                {"\n"}Equilíbrio
                {"\n"}Estática de um Ponto
                {"\n"}Estática de um Corpo Rígido
                </Text>
              </View>
            </ImageBackground>
          </TouchableOpacity>

          <TouchableOpacity style={styles.row}
            onPress={this.ondulatoria}
            activeOpacity={0.7} >
            <ImageBackground
              source={require("./imgmenu/hidrostatica.jpg")}
              style={styles.imageBackground}>
              <Text style={[styles.text, styles.title]}>
              Hidrostática
              </Text>
              <View style={styles.rating}>
                <Text style={[styles.text, styles.value]}>
                {"\n"}Pressão
                {"\n"}Empuxo
                </Text>
              </View>
            </ImageBackground>
          </TouchableOpacity>

          <TouchableOpacity style={styles.row}
            onPress={this.eletromagnetismo}
            activeOpacity={0.7} >
            <ImageBackground
              source={require("./imgmenu/gravitacao.jpg")}
              style={styles.imageBackground}>
              <Text style={[styles.text, styles.title]}>
              Gravitação Universal
              </Text>
              <View style={styles.rating}>
                <Text style={[styles.text, styles.value]}>
                {"\n"}Força Gravitacional
                {"\n"}Leis de Kepler
                </Text>
              </View>
            </ImageBackground>
          </TouchableOpacity>
        </ScrollView>

        <View>          
          <AdMobBanner
            adSize="smartBannerPortrait"
            //adUnitID="ca-app-pub-7432855832022345/6069840286" //meu ads id
            adUnitID="ca-app-pub-3940256099942544/6300978111" //test ads id 
            testDevices={[AdMobBanner.simulatorId]}
            //onAdFailedToLoad={error => console.error(error)}          
          />        
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  //style container principal backgroundColor: '#CCD1D1',
  container: {
    flex: 1.5,
    justifyContent: 'center',
    //backgroundColor: '#63579D',
    backgroundColor: '#fff',
  },
  styleHead: {
    borderRadius: 0,
    borderWidth: 1,
    borderColor: "#5BBA47",
    backgroundColor: "#fff",
  },
  row: {
    marginRight: "1.5%",
    borderRadius: 2,
    borderWidth: 1,
    //borderColor: "#A2A2A2",
    borderColor: "#5BBA47",
    marginTop: "1%",
  },
  imageBackground: {
    height: screen.height / 3,     
    justifyContent: 'center',          
    alignItems: 'center',               
  },
  text: {
    color: '#fff',
    backgroundColor: 'transparent',
    fontFamily: 'Avenir',
    fontWeight: 'bold',
    textShadowColor: '#222',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 4,
  },
  title: {
    textAlign: "center",
    fontSize: 27,
  },
  rating: {
    flexDirection: 'row',
  },
  value: {
    textAlign: "center",
    fontSize: 16,         
  },
});
