import React, { Component } from "react";
import { StyleSheet, View, Alert, BackHandler, Text, Image, TouchableOpacity, ImageBackground, Dimensions } from "react-native";
import { Appbar } from 'react-native-paper';
import { Actions } from "react-native-router-flux";
import { ScrollView } from "react-native-gesture-handler";
//import Dimensions from 'Dimensions';
import { AdMobBanner } from 'react-native-admob'

const screen = Dimensions.get('window');

export default class Estatica extends Component {
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
        <Text style={styles.styleTextHead}> Equilíbrio </Text>
          <View style={styles.styleViewFormulas}>
            <Text style={styles.styleHeadFormulas}>Equilíbrio Estático:</Text>
            <Text style={styles.styleHeadFormulas}>v = 0</Text>  
            <Text style={styles.styleLegendaFormulas}>v = Velocidade</Text>  
            <Text> </Text>
            <Text style={styles.styleHeadFormulas}>Equilíbrio dinâmico:</Text>
            <Text style={styles.styleHeadFormulas}>v = constante </Text>
            <Text style={styles.styleLegendaFormulas}>v = Velocidade</Text> 
          </View>

        <Text style={styles.styleTextHead}> Estática De um Ponto </Text>
          <View style={styles.styleViewFormulas}>
            <Text style={styles.styleHeadFormulas}>Estática De um Ponto:</Text>
            <Text style={styles.styleHeadFormulas}>ΣF = 0 </Text>
            <Text style={styles.styleLegendaFormulas}>ΣF = Soma das Forças Sobre o Ponto</Text>
          </View>

          <Text style={styles.styleTextHead}> Estática de um Corpo Rígido </Text>
          <View style={styles.styleViewFormulas}>
            <Text style={styles.styleHeadFormulas}>Centro de Massa:</Text>
            <Text style={styles.styleHeadFormulas}>CMx = (m1x1 + m2x2 + m3x3) / (m1 + m2 + m3) </Text>
            <Text style={styles.styleHeadFormulas}>CMy = (m1y1 + m2y2 + m3y3) / (m1 + m2 + m3) </Text>
            <Text style={styles.styleHeadFormulas}>CM = (CMx,CMy) </Text>
            <Text style={styles.styleLegendaFormulas}>CMx = Força de Atrito </Text>
            <Text style={styles.styleLegendaFormulas}>CMy = Coeficiente de Atrito Estático</Text>
            <Text style={styles.styleLegendaFormulas}>x1,x2.. = Força Normal</Text>
            <Text style={styles.styleLegendaFormulas}>y1,y2.. = Força Normal</Text>
            <Text style={styles.styleLegendaFormulas}>m = Massa</Text>
            <Text style={styles.styleLegendaFormulas}>CM = Ponto de Centro de Massa</Text>
            <Text> </Text>
            <Text style={styles.styleHeadFormulas}>Momento de uma Força - Torque:</Text>
            <Text style={styles.styleHeadFormulas}>M = F.r.senθ</Text>
            <Text style={styles.styleLegendaFormulas}>M = Momento da Força</Text>
            <Text style={styles.styleLegendaFormulas}>F = Força</Text>
            <Text style={styles.styleLegendaFormulas}>r = Braço de Alavanca</Text> 
            <Text style={styles.styleLegendaFormulas}>θ = Menor Ângulo Entre F e r</Text>  
            <Text> </Text>
            <Text style={styles.styleHeadFormulas}>Estática de um Corpo:</Text>
            <Text style={styles.styleHeadFormulas}>ΣF = 0</Text>
            <Text style={styles.styleHeadFormulas}>ΣM = 0</Text>
            <Text style={styles.styleLegendaFormulas}>ΣF = Soma das Forças Sobre o Ponto</Text>
            <Text style={styles.styleLegendaFormulas}>ΣM = Soma dos Momentos Sobre o Ponto</Text>          
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
