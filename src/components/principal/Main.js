import React, { Component } from "react";
import { StyleSheet, View, Alert, BackHandler, Text, Image, TouchableOpacity, ImageBackground, Dimensions } from "react-native";
import { Appbar } from 'react-native-paper';
import { Actions } from "react-native-router-flux";
import { ScrollView } from "react-native-gesture-handler";
//import Dimensions from 'Dimensions';
import { AdMobBanner } from 'react-native-admob'

const screen = Dimensions.get('window');

export default class Main extends Component {
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
    BackHandler.removeEventListener('hardwareBackPress', this.handleBackButton);
  }

  handleBackButton = () => {
    Alert.alert(
      "",
      "Deseja SAIR da aplicação?",
      [
        {
          text: "Não",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel"
        },
        { text: "Sim", onPress: () => BackHandler.exitApp() }
      ],
      { cancelable: false }
    );
    return true;
  };

  mecanica = () => {
    Actions.mecanica();
  };

  //tela profunda (deep) 
  termologia = () => {
    Actions.termologia();
  };

  //tela hotstone
  optica = () => {
    Actions.optica();
  };

  //tela reflex
  ondulatoria = () => {
    Actions.ondulatoria();
  };

  //tela aroma
  eletromagnetismo = () => {
    Actions.eletromagnetismo();
  };

  render() {
    return (
      <View style={styles.container}>
        <Appbar.Header style={styles.styleHead}>
          <Image
            source={require("./img/novo.png")}
            style={{ width: "100%", height: "100%" }}
          />
        </Appbar.Header>

        <ScrollView style={{ marginLeft: "1%", marginTop:"2%", marginBottom:"2%" }}>
          <TouchableOpacity style={styles.row}
            onPress={this.mecanica}
            activeOpacity={0.7} >
            <ImageBackground
              source={require("./img/mecanica.jpg")}
              style={styles.imageBackground}>
              <Text style={[styles.text, styles.title]}>
                Mecânica
              </Text>
              <View style={styles.rating}>
                <Text style={[styles.text, styles.value]}>{"\n"}Cinemática{"\n"}Gravitação Universal{"\n"}Dinâmica{"\n"}Estática{"\n"}Hidrostática</Text>
              </View>
            </ImageBackground>
          </TouchableOpacity>

          <TouchableOpacity style={styles.row}
            onPress={this.termologia}
            activeOpacity={0.7} >
            <ImageBackground
              source={require("./img/termologia.jpg")}
              style={styles.imageBackground}>
              <Text style={[styles.text, styles.title]}>
                Termologia
              </Text>
              <View style={styles.rating}>
                <Text style={[styles.text, styles.value]}>{"\n"}Termometria{"\n"}Calorimetria{"\n"}Termodinâmica{"\n"}Dilatação{"\n"}Entropia{"\n"}Gases</Text>
              </View>
            </ImageBackground>
          </TouchableOpacity>
         
          <TouchableOpacity style={styles.row}
            onPress={this.ondulatoria}
            activeOpacity={0.7} >
            <ImageBackground
              source={require("./img/ondulatoria.jpg")}
              style={styles.imageBackground}>
              <Text style={[styles.text, styles.title]}>
                Ondulatória
              </Text>
              <View style={styles.rating}>
                <Text style={[styles.text, styles.value]}>{"\n"}Movimento Harmônico Simples{"\n"}Ondas{"\n"}Acústica</Text>
              </View>
            </ImageBackground>
          </TouchableOpacity>

          <TouchableOpacity style={styles.row}
            onPress={this.optica}
            activeOpacity={0.7} >
            <ImageBackground
              source={require("./img/optica.jpg")}
              style={styles.imageBackground}>
              <Text style={[styles.text, styles.title]}>
                Óptica
              </Text>
              <View style={styles.rating}>
                <Text style={[styles.text, styles.value]}>{"\n"}Óptica Geométrica</Text>
              </View>
            </ImageBackground>
          </TouchableOpacity>


          <TouchableOpacity style={styles.row}
            onPress={this.eletromagnetismo}
            activeOpacity={0.7} >
            <ImageBackground
              source={require("./img/eletromagnetismo.jpg")}
              style={styles.imageBackground}>
              <Text style={[styles.text, styles.title]}>
                Eletromagnetismo
              </Text>
              <View style={styles.rating}>
                <Text style={[styles.text, styles.value]}>{"\n"}Eletrostática{"\n"}Eletrodinâmica{"\n"}Indução Magnética</Text>
              </View>
            </ImageBackground>
          </TouchableOpacity>
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
