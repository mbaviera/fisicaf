import React, { Component } from "react";
import { StyleSheet, View, Alert, BackHandler, Text, Image, TouchableOpacity, ImageBackground, Dimensions } from "react-native";
import { Appbar } from 'react-native-paper';
import { Actions } from "react-native-router-flux";
import { ScrollView } from "react-native-gesture-handler";
//import Dimensions from 'Dimensions';
import { AdMobBanner } from 'react-native-admob'

const screen = Dimensions.get('window');

export default class Termodinamica extends Component {
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
    BackHandler.removeEventListener('hardwareBackPress', this.termologia);
  }

  handleBackButton = () => {   
                 
  };

  termologia = () => {
    Actions.termologia();
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
        <Text style={styles.styleTextHead}> Leis da Termodinâmica </Text>
          <View style={styles.styleViewFormulas}>
            <Text style={styles.styleHeadFormulas}>Primeira Lei da Termodinâmica:</Text>
            <Text style={styles.styleHeadFormulas}>Q = t + ΔU</Text>  
            <Text style={styles.styleLegendaFormulas}>Q = Quantidade de Calor</Text>  
            <Text style={styles.styleLegendaFormulas}>t = Trabalho</Text> 
            <Text style={styles.styleLegendaFormulas}>Δθ = Variação da Energia Interna</Text>
            <Text> </Text>
            <Text style={styles.styleHeadFormulas}>Segunda Lei da Termodinâmica:</Text>            
            <Text style={styles.styleHeadFormulas}>"O calor não pode fluir, de forma espontânea, de um corpo de temperatura menor, para um outro corpo de temperatura mais alta." </Text> 
            <Text> </Text>
            <Text style={styles.styleHeadFormulas}>Calor latente:</Text>            
            <Text style={styles.styleHeadFormulas}>Q = m.L</Text> 
            <Text style={styles.styleLegendaFormulas}>Q = Quantidade de Calor</Text>  
            <Text style={styles.styleLegendaFormulas}>m = Massa</Text>
            <Text style={styles.styleLegendaFormulas}>L = Calor de Troca de Estado</Text>                            
          </View>   

          <Text style={styles.styleTextHead}> Calor </Text>
          <View style={styles.styleViewFormulas}>
            <Text style={styles.styleHeadFormulas}>Equilíbrio térmico:</Text>
            <Text style={styles.styleHeadFormulas}>ΣQ = Q1+Q2+Q3...+Qn = 0</Text>  
            <Text style={styles.styleLegendaFormulas}>Q = Quantidade de Calor</Text>                                        
          </View> 

          <Text style={styles.styleTextHead}> Propagação de calor </Text>
          <View style={styles.styleViewFormulas}>
            <Text style={styles.styleHeadFormulas}>Fluxo de Calor:</Text>
            <Text style={styles.styleHeadFormulas}>Φ = Q / Δt </Text>
            <Text style={styles.styleLegendaFormulas}>Φ = Fluxo de Calor</Text>   
            <Text style={styles.styleLegendaFormulas}>Q = Quantidade de Calor</Text> 
            <Text style={styles.styleLegendaFormulas}>Δt = Intervalo de Tempo</Text>  
            <Text> </Text>       
            <Text style={styles.styleHeadFormulas}>Condução:</Text>
            <Text style={styles.styleHeadFormulas}>Acontece quando o calor se propaga através 
            de um meio condutor térmico. </Text>                                          
            <Text> </Text> 
            <Text style={styles.styleHeadFormulas}>Convecção:</Text>
            <Text style={styles.styleHeadFormulas}>É o fenômeno no qual o calor se propaga por meio do 
            movimento de massas fluidas de densidades diferentes.</Text>                                          
            <Text> </Text> 
            <Text style={styles.styleHeadFormulas}>Irradiação:</Text>
            <Text style={styles.styleHeadFormulas}>É a propagação de energia térmica que não necessita de um meio 
            material para acontecer, pois o calor se propaga através de ondas eletromagnéticas.</Text>           
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
