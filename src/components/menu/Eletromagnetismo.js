import React, { Component } from "react";
import { StyleSheet, View, BackHandler, Text, Image, TouchableOpacity, ImageBackground, Dimensions } from "react-native";
import { Appbar } from 'react-native-paper';
import { Actions } from "react-native-router-flux";
import { ScrollView } from "react-native-gesture-handler";
//import Dimensions from 'Dimensions';
import { AdMobBanner } from 'react-native-admob'

const screen = Dimensions.get('window');

export default class Eletromagnetismo extends Component {
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

  render() {
    return (
      <View style={styles.container}>
        <Appbar.Header style={styles.styleHead}>
          <Image
            source={require("./imgmenu/eletromagnetismobanner.png")}
            style={{ width: "100%", height: "100%" }}
          />
        </Appbar.Header>

        <ScrollView style={{ marginLeft: "1%", marginTop:"2%", marginBottom:"2%" }}>
          <TouchableOpacity style={styles.row}
            onPress={this.mecanica}
            activeOpacity={0.7} >
            <ImageBackground
              source={require("./imgmenu/eletrostatica.jpg")}
              style={styles.imageBackground}>
              <Text style={[styles.text, styles.title]}>
              Eletrostática
              </Text>
              <View style={styles.rating}>
                <Text style={[styles.text, styles.value]}>
                {"\n"}Cargas elétricas
                {"\n"}Eletrização
                {"\n"}Força de interação entre cargas
                {"\n"}Campo elétrico
                {"\n"}Potencial elétrico
                </Text>
              </View>
            </ImageBackground>
          </TouchableOpacity>

          <TouchableOpacity style={styles.row}
            onPress={this.termologia}
            activeOpacity={0.7} >
            <ImageBackground
              source={require("./imgmenu/eletrodinamica.jpg")}
              style={styles.imageBackground}>
              <Text style={[styles.text, styles.title]}>
              Eletrodinâmica
              </Text>
              <View style={styles.rating}>
                <Text style={[styles.text, styles.value]}>
                {"\n"}Corrente Elétrica
                {"\n"}Resistência Elétrica
                {"\n"}Associação de Resistores
                {"\n"}Efeito Joule
                {"\n"}Potência Elétrica
                {"\n"}Consumo de Energia Elétrica
                </Text>
              </View>
            </ImageBackground>
          </TouchableOpacity>

          <TouchableOpacity style={styles.row}
            onPress={this.optica}
            activeOpacity={0.7} >
            <ImageBackground
              source={require("./imgmenu/magnetico.jpg")}
              style={styles.imageBackground}>
              <Text style={[styles.text, styles.title]}>
              Indução Magnética
              </Text>
              <View style={styles.rating}>
                <Text style={[styles.text, styles.value]}>
                {"\n"}Lei de Faraday-Neumann 
                {"\n"}Fluxo de Indução Magnética                  
                {"\n"}Transformadores 
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
