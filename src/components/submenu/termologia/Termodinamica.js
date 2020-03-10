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
        </View>   

          <Text style={styles.styleTextHead}> Energia Interna </Text>
          <View style={styles.styleViewFormulas}>
            <Text style={styles.styleHeadFormulas}>Energia Interna</Text>
            <Text style={styles.styleHeadFormulas}>U = (3/2).n.R.T</Text>  
            <Text style={styles.styleLegendaFormulas}>U = Energia Interna</Text>  
            <Text style={styles.styleLegendaFormulas}>n = Nº de Mols do Gás</Text>   
            <Text style={styles.styleLegendaFormulas}>R = Constante Univ. Dos Gases</Text>  
            <Text style={styles.styleLegendaFormulas}>T = Temperatura Absoluta</Text>  
            <Text> </Text>  
            <Text style={styles.styleHeadFormulas}>U = (3/2).p.V</Text>  
            <Text style={styles.styleLegendaFormulas}>U = Energia Interna</Text>  
            <Text style={styles.styleLegendaFormulas}>p = Pressão</Text>   
            <Text style={styles.styleLegendaFormulas}>V = Volume</Text>   
            <Text> </Text>  
            <Text style={styles.styleHeadFormulas}>Variação da Energia Interna</Text>
            <Text style={styles.styleHeadFormulas}>ΔU = (3/2).n.R.Δt</Text>  
            <Text style={styles.styleLegendaFormulas}>U = Energia Interna</Text>  
            <Text style={styles.styleLegendaFormulas}>n = Nº de Mols do Gás</Text>   
            <Text style={styles.styleLegendaFormulas}>R = Constante Univ. Dos Gases</Text>  
            <Text style={styles.styleLegendaFormulas}>ΔT = Variação da Temperatura Absoluta</Text>                                 
          </View> 

          <Text style={styles.styleTextHead}> Trabalho de Um Gás</Text>
          <View style={styles.styleViewFormulas}>
            <Text style={styles.styleHeadFormulas}>Trabalho de Um Gás:</Text>
            <Text style={styles.styleHeadFormulas}>t =(v1 ∫ v2).p.Δv </Text>
            <Text style={styles.styleLegendaFormulas}>t = Trabalho</Text>   
            <Text style={styles.styleLegendaFormulas}>p = Pressão</Text> 
            <Text> </Text>       
            <Text style={styles.styleHeadFormulas}>Trabalho de Um Gás Sob Pressão Constante:</Text>
            <Text style={styles.styleHeadFormulas}>t = p.Δv </Text>
            <Text style={styles.styleLegendaFormulas}>t = Trabalho</Text>   
            <Text style={styles.styleLegendaFormulas}>p = Pressão</Text> 
            <Text style={styles.styleLegendaFormulas}>Δv = Variação de Volume</Text>                                            
            <Text> </Text> 
            <Text style={styles.styleHeadFormulas}>Trabalho de Um Gás Sob Temperatura Constante:</Text>
            <Text style={styles.styleHeadFormulas}>t = n.R.T.ln(v2/v1) </Text>
            <Text style={styles.styleLegendaFormulas}>t = Trabalho</Text>  
            <Text style={styles.styleLegendaFormulas}>n = Nº de Mols do Gás</Text>   
            <Text style={styles.styleLegendaFormulas}>R = Constante Univ. Dos Gases</Text>  
            <Text style={styles.styleLegendaFormulas}>T = Temperatura Absoluta</Text>    
            <Text style={styles.styleLegendaFormulas}>v1 = Volume Inicial</Text>  
            <Text style={styles.styleLegendaFormulas}>v2 = Volume Final</Text>                                        
            <Text> </Text> 
            <Text style={styles.styleHeadFormulas}>Trabalho de Um Gás Sob Volume Constante:</Text>
            <Text style={styles.styleHeadFormulas}>t = 0 </Text>
            <Text style={styles.styleLegendaFormulas}>t = Trabalho</Text> 
            <Text> </Text> 
            <Text style={styles.styleHeadFormulas}>Trabalho de Um Gás Em Uma Situação Adiabática:</Text>
            <Text style={styles.styleHeadFormulas}>|t| = |ΔU| </Text>
            <Text style={styles.styleLegendaFormulas}>t = Trabalho</Text>  
            <Text style={styles.styleLegendaFormulas}>ΔU = Variação de Energia Interna</Text>          
          </View>    

          <Text style={styles.styleTextHead}> Máquinas Térmicas </Text>
          <View style={styles.styleViewFormulas}>
            <Text style={styles.styleHeadFormulas}>Trabalho Em Máquinas Térmicas</Text>
            <Text style={styles.styleHeadFormulas}>|t| = |Qa| - |Qr|</Text>  
            <Text style={styles.styleLegendaFormulas}>t = Trabalho</Text>  
            <Text style={styles.styleLegendaFormulas}>Qa = Calor na Fonte de Aquecimento</Text>   
            <Text style={styles.styleLegendaFormulas}>Qr = Calor na Fonte de Resfriamento</Text>   
            <Text> </Text>  
            <Text style={styles.styleHeadFormulas}>Rendimento de Uma Máquina Térmica</Text>
            <Text style={styles.styleHeadFormulas}>n = ( t / |Qa| ) </Text> 
            <Text style={styles.styleHeadFormulas}>n = ( |Qa| - |Qr| ) / |Qa|  </Text>  
            <Text style={styles.styleHeadFormulas}>n = 1 - ( |Qr| / |Qa| )  </Text>  
            <Text style={styles.styleLegendaFormulas}>n = Energia Interna</Text>  
            <Text style={styles.styleLegendaFormulas}>t = Nº de Mols do Gás</Text>   
            <Text style={styles.styleLegendaFormulas}>Qa = Calor na Fonte de Aquecimento</Text>  
            <Text style={styles.styleLegendaFormulas}>Qr = Calor na Fonte de Resfriamento</Text>                                 
          </View>

          <Text style={styles.styleTextHead}> Ciclo de Carnot </Text>
          <View style={styles.styleViewFormulas}>
            <Text style={styles.styleHeadFormulas}>Trabalho no Ciclo de Carnot</Text>
            <Text style={styles.styleHeadFormulas}>tcarnot = Qa</Text>  
            <Text style={styles.styleLegendaFormulas}>tcarnot = Trabalho da Máquina de Carnot</Text>  
            <Text style={styles.styleLegendaFormulas}>Qa = Calor na Fonte de Aquecimento</Text>   
            <Text> </Text>  
            <Text style={styles.styleHeadFormulas}>Redimento da Máquina de Carnot</Text>
            <Text style={styles.styleHeadFormulas}>ncarnot = 1 - (|Qr| / |Qa|) = 1 - (Tr / Ta)</Text>  
            <Text style={styles.styleLegendaFormulas}>ncarnot = Rendimento</Text>    
            <Text style={styles.styleLegendaFormulas}>Qa = Calor na Fonte de Aquecimento</Text>  
            <Text style={styles.styleLegendaFormulas}>Qr = Calor na Fonte de Resfriamento</Text>  
            <Text style={styles.styleLegendaFormulas}>Ta = Temperatura na Fonte de Aquecimento</Text>  
            <Text style={styles.styleLegendaFormulas}>Tr = Temperatura na Fonte de Resfriamento</Text>                              
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
