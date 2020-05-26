import React, { Component } from "react";
import { StyleSheet, View, Alert, BackHandler, Text, Image, TouchableOpacity, ImageBackground, Dimensions } from "react-native";
import { Appbar } from 'react-native-paper';
import { Actions } from "react-native-router-flux";
import { ScrollView } from "react-native-gesture-handler";
//import Dimensions from 'Dimensions';
import { AdMobBanner } from 'react-native-admob'

const screen = Dimensions.get('window');

export default class Dilatacao extends Component {
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
        <Text style={styles.styleTextHead}> Dilatação Dos Sólidos</Text>
          <View style={styles.styleViewFormulas}>
            <Text style={styles.styleHeadFormulas}>Dilatação Linear:</Text>
            <Text style={styles.styleHeadFormulas}>ΔL = L0.α.Δθ</Text>  
            <Text style={styles.styleLegendaFormulas}>ΔL = Variação do comprimento (m ou cm)</Text>  
            <Text style={styles.styleLegendaFormulas}>L0 = Comprimento inicial (m ou cm)</Text> 
            <Text style={styles.styleLegendaFormulas}>α = Coeficiente de dilatação linear (ºC-1)</Text>
            <Text style={styles.styleLegendaFormulas}>Δθ = Variação de temperatura (ºC)</Text>
            <Text> </Text>
            <Text style={styles.styleHeadFormulas}>Dilatação Superficial</Text>            
            <Text style={styles.styleHeadFormulas}>ΔA = A0.β.Δθ </Text> 
            <Text style={styles.styleLegendaFormulas}>ΔA = Variação da área (m2 ou cm2)</Text>  
            <Text style={styles.styleLegendaFormulas}>A0 = Área inicial (m2 ou cm2)</Text> 
            <Text style={styles.styleLegendaFormulas}>β = Coeficiente de dilatação superficial (ºC-1)</Text>
            <Text style={styles.styleLegendaFormulas}>Δθ = Variação de temperatura (ºC)</Text>
            <Text> </Text>
            <Text style={styles.styleHeadFormulas}>Coeficiente de Dilatação Superficial</Text>            
            <Text style={styles.styleHeadFormulas}>β = 2 . α </Text> 
            <Text style={styles.styleLegendaFormulas}>β = Coeficiente de dilatação superficial (ºC-1)</Text>  
            <Text style={styles.styleLegendaFormulas}>α = Coeficiente de dilatação linear (ºC-1)</Text> 
            <Text> </Text>
            <Text style={styles.styleHeadFormulas}>Dilatação Volumétrica</Text>            
            <Text style={styles.styleHeadFormulas}>ΔV = V0.γ.Δθ</Text> 
            <Text style={styles.styleLegendaFormulas}>ΔV = Variação do volume (m3 ou cm3)</Text>  
            <Text style={styles.styleLegendaFormulas}>V0 = Volume inicial (m3 ou cm3)</Text>
            <Text style={styles.styleLegendaFormulas}>γ = Coeficiente de dilatação volumétrica (ºC-1)</Text>  
            <Text style={styles.styleLegendaFormulas}>Δθ = Variação de temperatura (ºC)</Text> 
            <Text> </Text>
            <Text style={styles.styleHeadFormulas}>Coeficiente de Dilatação Volumétrica</Text>            
            <Text style={styles.styleHeadFormulas}>γ = 3 . α </Text> 
            <Text style={styles.styleLegendaFormulas}>γ = Coeficiente de dilatação volumétrica (ºC-1)</Text>  
            <Text style={styles.styleLegendaFormulas}>α = Coeficiente de dilatação linear (ºC-1)</Text> 
        </View>   

          <Text style={styles.styleTextHead}> Dilatação Dos Líquidos </Text>
          <View style={styles.styleViewFormulas}>
            <Text style={styles.styleHeadFormulas}>Dilatação Aparente</Text>
            <Text style={styles.styleHeadFormulas}>ΔVap = V0.γ1.Δθ</Text>  
            <Text style={styles.styleLegendaFormulas}>ΔVap = Variação Apararente de Volume</Text>  
            <Text style={styles.styleLegendaFormulas}>V0 = Volume Inicial</Text>   
            <Text style={styles.styleLegendaFormulas}>γ1 = Coef. de Dilatação Volumétrico</Text>  
            <Text style={styles.styleLegendaFormulas}>Δθ = Variação de Temperatura</Text>  
            <Text> </Text>  
            <Text style={styles.styleHeadFormulas}>Dilatação do Recipiente</Text>
            <Text style={styles.styleHeadFormulas}>ΔVrec = V0.γrec.Δθ</Text>  
            <Text style={styles.styleLegendaFormulas}>ΔVrec = Variação de Volume do Recipiente</Text>  
            <Text style={styles.styleLegendaFormulas}>V0 = Volume Inicial</Text>   
            <Text style={styles.styleLegendaFormulas}>γrec = Coef. de Dilatação do Recipiente</Text>  
            <Text style={styles.styleLegendaFormulas}>Δθ = Variação de Temperatura</Text>     
            <Text> </Text>  
            <Text style={styles.styleHeadFormulas}>Dilatação Real</Text>
            <Text style={styles.styleHeadFormulas}>ΔVreal = ΔVap + ΔVrec</Text>  
            <Text style={styles.styleLegendaFormulas}>ΔVreal = Variação Real de Volume</Text>  
            <Text style={styles.styleLegendaFormulas}>ΔVap = Variação Aparente de Volume</Text>   
            <Text style={styles.styleLegendaFormulas}>ΔVrec = Variação de Volume do Recipiente</Text>  
            <Text> </Text>  
            <Text style={styles.styleHeadFormulas}>Coef. Dilatação Real</Text>
            <Text style={styles.styleHeadFormulas}>γreal = γ1 + γrec</Text>  
            <Text style={styles.styleLegendaFormulas}>γreal = Coef. Dilatação Vol. Real</Text>  
            <Text style={styles.styleLegendaFormulas}>γ1 = Coef. Dilatação Vol. do Líquido</Text>   
            <Text style={styles.styleLegendaFormulas}>γrec = Coef. Dilatação Vol. do Recipiente</Text>                                 
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
