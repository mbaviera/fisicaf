import React, { Component } from "react";
import { StyleSheet, View, Alert, BackHandler, Text, Image, TouchableOpacity, ImageBackground, Dimensions } from "react-native";
import { Appbar } from 'react-native-paper';
import { Actions } from "react-native-router-flux";
import { ScrollView } from "react-native-gesture-handler";
//import Dimensions from 'Dimensions';
import { AdMobBanner } from 'react-native-admob'

const screen = Dimensions.get('window');

export default class Termometria extends Component {
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
        <Text style={styles.styleTextHead}> Conversões entre escalas </Text>
          <View style={styles.styleViewFormulas}>
            <Text style={styles.styleHeadFormulas}>Celsius para Fahrenheit:</Text>
            <Text style={styles.styleHeadFormulas}>C = (5F - 160) / 9</Text>  
            <Text style={styles.styleLegendaFormulas}>C = Temperatuda em Celsius</Text>  
            <Text style={styles.styleLegendaFormulas}>F = Temperatuda em Fahrenheit</Text> 
            <Text> </Text>
            <Text style={styles.styleHeadFormulas}>Fahrenheit para Celsius:</Text>            
            <Text style={styles.styleHeadFormulas}>F = (9C + 160) / 5</Text> 
            <Text style={styles.styleLegendaFormulas}>C = Temperatuda em Celsius</Text>  
            <Text style={styles.styleLegendaFormulas}>F = Temperatuda em Fahrenheit</Text> 
            <Text> </Text>
            <Text style={styles.styleHeadFormulas}>Celsius para Kelvin:</Text>            
            <Text style={styles.styleHeadFormulas}>T = C + 273</Text> 
            <Text style={styles.styleLegendaFormulas}>T = Temperatuda Absoluta (Kelvin)</Text>  
            <Text style={styles.styleLegendaFormulas}>C = Temperatuda em Celsius</Text>
            <Text> </Text>
            <Text style={styles.styleHeadFormulas}>Kelvin para Celsius:</Text>            
            <Text style={styles.styleHeadFormulas}>C = T - 273</Text> 
            <Text style={styles.styleLegendaFormulas}>C = Temperatuda em Celsius</Text> 
            <Text style={styles.styleLegendaFormulas}>T = Temperatuda Absoluta (Kelvin)</Text>                
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
