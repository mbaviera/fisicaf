import React, { Component } from "react";
import { StyleSheet, View, Alert, BackHandler, Text, Image, TouchableOpacity, ImageBackground, Dimensions } from "react-native";
import { Appbar } from 'react-native-paper';
import { Actions } from "react-native-router-flux";
import { ScrollView } from "react-native-gesture-handler";
//import Dimensions from 'Dimensions';
import { AdMobBanner } from 'react-native-admob'

const screen = Dimensions.get('window');

export default class Gravitacao extends Component {
  //DEFINE VARIAVEIS
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  componentWillMount() {
    BackHandler.addEventListener('hardwareBackPress', this.handleBackButton);
  }

  componentWillUnmount() {
    BackHandler.removeEventListener('hardwareBackPress', this.mecanica);
  }

  handleBackButton = () => {   
                 
  };

  mecanica = () => {
    Actions.mecanica();
  };
  
  render() {
    return (
      <View style={styles.container}>
        <Appbar.Header style={styles.styleHead}>
          <Image
            //source={require("./img/novo.png")}
            style={{ width: "100%", height: "100%" }}
          />
        </Appbar.Header>

        <ScrollView style={{ marginLeft: "1%", marginTop:"2%", marginBottom:"2%" }}>
        <Text style={styles.styleTextHead}> Força gravitacional </Text>
          <View style={styles.styleViewFormulas}>
            <Text style={styles.styleHeadFormulas}>Força gravitacional:</Text>
            <Text style={styles.styleHeadFormulas}>Fg = G.(M1.M2/r²)</Text>  
            <Text style={styles.styleLegendaFormulas}>Fg = Força Gravitacional</Text> 
            <Text style={styles.styleLegendaFormulas}>G = Constante de Gravitação Universal</Text> 
            <Text style={styles.styleLegendaFormulas}>M1 e M2 = Massas dos Objetos Considerados</Text>
            <Text style={styles.styleLegendaFormulas}>r = Distância Entre os Objetos Considerados</Text>   
          </View>

         <Text style={styles.styleTextHead}> Leis de Kepler </Text>
          <View style={styles.styleViewFormulas}>
            <Text style={styles.styleHeadFormulas}>1ª Lei de Kepler - Lei das Órbitas:</Text>
            <Text style={styles.styleHeadFormulas}>Os planetas descrevem órbitas elípticas em torno do Sol, 
            que ocupa um dos focos da elipse. </Text>
            <Text></Text>
            <Text style={styles.styleHeadFormulas}>2ª Lei de Kepler - Lei das Áreas:</Text>
            <Text style={styles.styleHeadFormulas}>O segmento que une o sol a um planeta descreve áreas 
            iguais em intervalos de tempo iguais. </Text>
            <Text></Text>
            <Text style={styles.styleHeadFormulas}>3ª Lei de Kepler - Lei dos Períodos:</Text>
            <Text style={styles.styleHeadFormulas}>p²/a³ = constante </Text>
            <Text style={styles.styleLegendaFormulas}>p = Período Orbital</Text> 
            <Text style={styles.styleLegendaFormulas}>a = Raio Médio da Órbita</Text> 
          </View>

          <Text> </Text>
        </ScrollView>

        <View> 
          <AdMobBanner
            adSize="smartBannerPortrait"
            //adUnitID="ca-app-pub-7432855832022345/1042187961" //meu ads id
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
  //style das views das formulas
  styleViewFormulas: {
    borderRadius: 0,
    borderWidth: 1,
    borderColor: "#5BBA47",
    backgroundColor: "lightgray",
    marginBottom:"2%"
  },  
  //style das formulas
  styleHeadFormulas: {
    textAlign:"center",
    fontSize: 18,
    fontWeight:"bold"
  },  
  //style da legenda das formulas
  styleLegendaFormulas: {
    textAlign:"center",
  }, 
  //style do text que fica em cima do view
  styleTextHead: {
    textAlign:"center",
    fontSize: 20,
    fontFamily:"strong",
    borderRadius: 0,
    borderWidth: 1,
    borderColor: "black",
    backgroundColor: "#5BBA47",
  },  
});
