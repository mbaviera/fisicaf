import React, { Component } from "react";
import { StyleSheet, View, Alert, BackHandler, Text, Image, TouchableOpacity, ImageBackground, Dimensions } from "react-native";
import { Appbar } from 'react-native-paper';
import { Actions } from "react-native-router-flux";
import { ScrollView } from "react-native-gesture-handler";
//import Dimensions from 'Dimensions';
import { AdMobBanner } from 'react-native-admob'

const screen = Dimensions.get('window');

export default class Hidrostatica extends Component {
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
        <Text style={styles.styleTextHead}> Pressão </Text>
          <View style={styles.styleViewFormulas}>
            <Text style={styles.styleHeadFormulas}>Pressão em uma superfície:</Text>
            <Text style={styles.styleHeadFormulas}>P = F/A</Text>  
            <Text style={styles.styleLegendaFormulas}>P = Pressão</Text> 
            <Text style={styles.styleLegendaFormulas}>F = Força Perpendicular</Text> 
            <Text style={styles.styleLegendaFormulas}>A = Área da Superfície</Text>  
            <Text> </Text>
            <Text style={styles.styleHeadFormulas}>Densidade:</Text>
            <Text style={styles.styleHeadFormulas}>d = m/V </Text>
            <Text style={styles.styleLegendaFormulas}>d = Densidade</Text> 
            <Text style={styles.styleLegendaFormulas}>m = Massa</Text> 
            <Text style={styles.styleLegendaFormulas}>V = Volume</Text> 
            <Text> </Text>
            <Text style={styles.styleHeadFormulas}>Pressão hidrostática:</Text>
            <Text style={styles.styleHeadFormulas}>p = d.g.h </Text>
            <Text style={styles.styleLegendaFormulas}>p = Pressão</Text> 
            <Text style={styles.styleLegendaFormulas}>d = Densidade</Text> 
            <Text style={styles.styleLegendaFormulas}>g = Gravidade</Text> 
            <Text style={styles.styleLegendaFormulas}>h = Altura</Text> 
            <Text> </Text>
            <Text style={styles.styleHeadFormulas}>Teorema de Stevin:</Text>
            <Text style={styles.styleHeadFormulas}>Δp = d.g.Δh </Text>
            <Text style={styles.styleLegendaFormulas}>Δp = Variação de Pressão</Text> 
            <Text style={styles.styleLegendaFormulas}>d = Densidade</Text> 
            <Text style={styles.styleLegendaFormulas}>g = Gravidade</Text> 
            <Text style={styles.styleLegendaFormulas}>Δh = Variação de Altura</Text> 
            <Text> </Text>
            <Text style={styles.styleHeadFormulas}>Teorema de Pascal:</Text>
            <Text style={styles.styleHeadFormulas}>"O acréscimo de pressão exercida num ponto em um líquido ideal 
            em equilíbrio se transmite integralmente a todos os pontos desse líquido e às paredes do recipiente 
            que o contém." </Text>
         </View>

         <Text style={styles.styleTextHead}> Empuxo </Text>
          <View style={styles.styleViewFormulas}>
            <Text style={styles.styleHeadFormulas}>Empuxo:</Text>
            <Text style={styles.styleHeadFormulas}>E = Df.g.Vfd </Text>
            <Text style={styles.styleLegendaFormulas}>E = Empuxo</Text>
            <Text style={styles.styleLegendaFormulas}>Df = Densidade do Fluido</Text>
            <Text style={styles.styleLegendaFormulas}>g = Gravidade</Text>
            <Text style={styles.styleLegendaFormulas}>Vfd = Volume de Fluído Deslocado</Text>
            <Text></Text>
            <Text style={styles.styleHeadFormulas}>Peso Aparente:</Text>
            <Text style={styles.styleHeadFormulas}>Pa = P - F </Text>
            <Text style={styles.styleHeadFormulas}>Pa = g(m - Df.Vfd) </Text>
            <Text style={styles.styleLegendaFormulas}>Pa = Peso Aparente</Text>
            <Text style={styles.styleLegendaFormulas}>P = Força Peso</Text>
            <Text style={styles.styleLegendaFormulas}>E = Empuxo</Text>
            <Text style={styles.styleLegendaFormulas}>g = Gravidade</Text>
            <Text style={styles.styleLegendaFormulas}>m = Massa</Text>
            <Text style={styles.styleLegendaFormulas}>Df = Densidade do Fluido</Text>
            <Text style={styles.styleLegendaFormulas}>Vfd = Volume de Fluído Deslocado</Text>
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
