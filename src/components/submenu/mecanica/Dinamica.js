import React, { Component } from "react";
import { StyleSheet, View, Alert, BackHandler, Text, Image, TouchableOpacity, ImageBackground, Dimensions } from "react-native";
import { Appbar } from 'react-native-paper';
import { Actions } from "react-native-router-flux";
import { ScrollView } from "react-native-gesture-handler";
//import Dimensions from 'Dimensions';
import { AdMobBanner } from 'react-native-admob'

const screen = Dimensions.get('window');

export default class Dinamica extends Component {
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
        <Text style={styles.styleTextHead}> Leis de Newton </Text>
          <View style={styles.styleViewFormulas}>
            <Text style={styles.styleHeadFormulas}>1ª Lei de Newton:</Text>
            <Text style={styles.styleHeadFormulas}>Um corpo em movimento tende a permanecer em movimento e um corpo em repouso tende a permanecer em repouso.</Text>    
            <Text> </Text>
            <Text style={styles.styleHeadFormulas}>2ª Lei de Newton:</Text>
            <Text style={styles.styleHeadFormulas}>F = m.a </Text>
            <Text style={styles.styleLegendaFormulas}>F = Força Escalar Resultante</Text>
            <Text style={styles.styleLegendaFormulas}>m = Massa</Text>
            <Text style={styles.styleLegendaFormulas}>a = Aceleração Escalar</Text>   
            <Text> </Text>
            <Text style={styles.styleHeadFormulas}>3ª Lei de Newton:</Text>
            <Text style={styles.styleHeadFormulas}>Fab = Fba </Text>
            <Text style={styles.styleLegendaFormulas}>Fab = Força Aplicada em 'a' por 'b'</Text>
            <Text style={styles.styleLegendaFormulas}>Fba = Força Aplicada em 'b' por 'a'</Text>   
          </View>

        <Text style={styles.styleTextHead}> Força Peso </Text>
          <View style={styles.styleViewFormulas}>
            <Text style={styles.styleHeadFormulas}>Peso de Um Corpo:</Text>
            <Text style={styles.styleHeadFormulas}>P = m.g </Text>
            <Text style={styles.styleLegendaFormulas}>P = Força Peso</Text>
            <Text style={styles.styleLegendaFormulas}>m = Massa</Text>
            <Text style={styles.styleLegendaFormulas}>g = Gravidade</Text>
          </View>

          <Text style={styles.styleTextHead}> Força de Atrito </Text>
          <View style={styles.styleViewFormulas}>
            <Text style={styles.styleHeadFormulas}>Força de Atrito Estático:</Text>
            <Text style={styles.styleHeadFormulas}>Fat = μest . N </Text>
            <Text style={styles.styleLegendaFormulas}>Fat = Força de Atrito </Text>
            <Text style={styles.styleLegendaFormulas}>μc = Coeficiente de Atrito Estático</Text>
            <Text style={styles.styleLegendaFormulas}>N = Força Normal</Text>
            <Text> </Text>
            <Text style={styles.styleHeadFormulas}>Força de Atrito Dinâmico:</Text>
            <Text style={styles.styleHeadFormulas}>Fat = μdin. N</Text>
            <Text style={styles.styleLegendaFormulas}>Fat = Força de Atrito</Text>
            <Text style={styles.styleLegendaFormulas}>μdin = Coeficiente de Atrito Dinâmico</Text>
            <Text style={styles.styleLegendaFormulas}>N = Força Normal</Text>            
          </View>

          <Text style={styles.styleTextHead}> Força Elástica </Text>
          <View style={styles.styleViewFormulas}>
          <Text style={styles.styleHeadFormulas}>Lei de Hooke:</Text>
          <Text style={styles.styleHeadFormulas}>F = k.x </Text>
            <Text style={styles.styleLegendaFormulas}>F = Força Escalar Resultante</Text>
            <Text style={styles.styleLegendaFormulas}>k = Constante Elástica da Mola</Text>
            <Text style={styles.styleLegendaFormulas}>x = Elongação da Mola</Text>                     
          </View>

          <Text style={styles.styleTextHead}> Força Centrípeta </Text>
          <View style={styles.styleViewFormulas}>
          <Text style={styles.styleHeadFormulas}>Força Centrípeta:</Text>
          <Text style={styles.styleHeadFormulas}>Fcp = m.acp = m.(v²/r) </Text>
            <Text style={styles.styleLegendaFormulas}>Fcp = Força Centrípeta</Text>
            <Text style={styles.styleLegendaFormulas}>m = Massa</Text>
            <Text style={styles.styleLegendaFormulas}>acp = Aceleração Centrípeta </Text>
            <Text style={styles.styleLegendaFormulas}>v = Velocidade</Text>
            <Text style={styles.styleLegendaFormulas}>r = Raio do Círculo</Text>            
          </View>

          <Text style={styles.styleTextHead}> Trabalho </Text>
          <View style={styles.styleViewFormulas}>
          <Text style={styles.styleHeadFormulas}>Trabalho:</Text>
          <Text style={styles.styleHeadFormulas}>t = F.d.cosθ  </Text>
            <Text style={styles.styleLegendaFormulas}>F = Força Escalar Resultante</Text>
            <Text style={styles.styleLegendaFormulas}>d = Deslocamento</Text>
            <Text style={styles.styleLegendaFormulas}>θ = Ângulo Formado Com a Horizontal</Text>           
          </View>

          <Text style={styles.styleTextHead}> Potência </Text>
          <View style={styles.styleViewFormulas}>
          <Text style={styles.styleHeadFormulas}>Potência Média:</Text>
          <Text style={styles.styleHeadFormulas}>P = (t/Δt) = (F.d/Δt) = F.v </Text>
            <Text style={styles.styleLegendaFormulas}>P = Potencia Média</Text>
            <Text style={styles.styleLegendaFormulas}>t = Trabalho</Text>
            <Text style={styles.styleLegendaFormulas}>Δt = Intervalo de Tempo</Text>     
            <Text style={styles.styleLegendaFormulas}>F = Força Escalar Resultante</Text>
            <Text style={styles.styleLegendaFormulas}>d = Deslocamento</Text>
            <Text style={styles.styleLegendaFormulas}>v = Velocidade Média</Text>  
            <Text> </Text>
            <Text style={styles.styleHeadFormulas}>Potência Instantânea:</Text>
          <Text style={styles.styleHeadFormulas}>P = (lim t→0).Pm = F.v </Text>
            <Text style={styles.styleLegendaFormulas}>P = Potencia</Text>
            <Text style={styles.styleLegendaFormulas}>Pm = Potencia Média</Text>     
            <Text style={styles.styleLegendaFormulas}>F = Força Escalar Resultante</Text>
            <Text style={styles.styleLegendaFormulas}>v = Velocidade Média</Text>       
          </View>

          <Text style={styles.styleTextHead}> Energia </Text>
          <View style={styles.styleViewFormulas}>
          <Text style={styles.styleHeadFormulas}>Energia Cinética:</Text>
          <Text style={styles.styleHeadFormulas}>Ec = (1/2).m.v² </Text>
            <Text style={styles.styleLegendaFormulas}>Ec = Energia Cinética</Text>
            <Text style={styles.styleLegendaFormulas}>m = Massa</Text>
            <Text style={styles.styleLegendaFormulas}>v = Velocidade</Text> 
            <Text> </Text>
            <Text style={styles.styleHeadFormulas}>Energia Potencial Gravitacional:</Text>
          <Text style={styles.styleHeadFormulas}>Epg = m.g.h </Text>
            <Text style={styles.styleLegendaFormulas}>Epg = Energia Potencial Gravitacional</Text>
            <Text style={styles.styleLegendaFormulas}>m = Massa</Text>     
            <Text style={styles.styleLegendaFormulas}>g = Gravidade</Text>
            <Text style={styles.styleLegendaFormulas}>h = Altura</Text>  
            <Text> </Text>
            <Text style={styles.styleHeadFormulas}>Energia Potencial Elástica:</Text>
          <Text style={styles.styleHeadFormulas}>Epe = (1/2).k.x² </Text>
            <Text style={styles.styleLegendaFormulas}>Epe = Energia Potencial Elástica</Text>
            <Text style={styles.styleLegendaFormulas}>k = Constante Elástica da Mola</Text>     
            <Text style={styles.styleLegendaFormulas}>x = Elongação da Mola</Text>  
            <Text> </Text>
            <Text style={styles.styleHeadFormulas}>Energia Mecânica:</Text>
          <Text style={styles.styleHeadFormulas}>Em = Ec + Ep </Text>
            <Text style={styles.styleLegendaFormulas}>Em = Energia Mecânica</Text>
            <Text style={styles.styleLegendaFormulas}>Ec = Energia Cinética</Text>     
            <Text style={styles.styleLegendaFormulas}>Ep = Energia Potencial</Text>    
          </View>

          <Text style={styles.styleTextHead}> Impulso e Quantidade de Movimento </Text>
          <View style={styles.styleViewFormulas}>
          <Text style={styles.styleHeadFormulas}>Impulso:</Text>
          <Text style={styles.styleHeadFormulas}>I = F.Δt </Text>
            <Text style={styles.styleLegendaFormulas}>I = Impulso</Text>
            <Text style={styles.styleLegendaFormulas}>F = Força Resultante</Text>
            <Text style={styles.styleLegendaFormulas}>Δt = Intervalo de Tempo</Text> 
            <Text> </Text>
            <Text style={styles.styleHeadFormulas}>Quantidade de movimento:</Text>
          <Text style={styles.styleHeadFormulas}>Q = m.v </Text>
            <Text style={styles.styleLegendaFormulas}>Q = Quantidade de Movimento</Text>
            <Text style={styles.styleLegendaFormulas}>m = Massa</Text>     
            <Text style={styles.styleLegendaFormulas}>v = Velocidade</Text> 
            <Text> </Text>
            <Text style={styles.styleHeadFormulas}>Teorema do impulso:</Text>
          <Text style={styles.styleHeadFormulas}>I = ΔQ </Text>
            <Text style={styles.styleLegendaFormulas}>I = Impulso</Text>
            <Text style={styles.styleLegendaFormulas}>ΔQ = Variação da Quantidade de Movimento</Text>  
            <Text> </Text>
            <Text style={styles.styleHeadFormulas}>Conservação da Quantidade de Movimento</Text>
          <Text style={styles.styleHeadFormulas}>ΔQ = 0 → Q1 = Q2 </Text>
            <Text style={styles.styleLegendaFormulas}>ΔQ = Variação da Quantidade</Text>
            <Text style={styles.styleLegendaFormulas}>Q1 = Q na etapa 1</Text>     
            <Text style={styles.styleLegendaFormulas}>Q2 = Q na etapa 2</Text>    
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
