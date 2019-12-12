import React, { Component } from "react";
import { StyleSheet, View, Alert, BackHandler, Text, Image, TouchableOpacity, ImageBackground, Dimensions } from "react-native";
import { Appbar } from 'react-native-paper';
import { Actions } from "react-native-router-flux";
import { ScrollView } from "react-native-gesture-handler";
//import Dimensions from 'Dimensions';
import { AdMobBanner } from 'react-native-admob'

const screen = Dimensions.get('window');

export default class Cinematica extends Component {
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
        <Text style={styles.styleTextHead}> Velocidade </Text>
          <View style={styles.styleViewFormulas}>
            <Text style={styles.styleHeadFormulas}>Velocidade Média:</Text>
            <Text style={styles.styleHeadFormulas}>vM = Δd/Δt</Text>
            <Text style={styles.styleLegendaFormulas}>vM = Velocidade Média</Text>
            <Text style={styles.styleLegendaFormulas}>Δd = Distância Percorrida</Text>
            <Text style={styles.styleLegendaFormulas}>Δt = Intervalo de Tempo</Text>
          </View>

        <Text style={styles.styleTextHead}> Movimento Uniforme </Text>
          <View style={styles.styleViewFormulas}>
            <Text style={styles.styleHeadFormulas}>Função Horária do Deslocamento:</Text>
            <Text style={styles.styleHeadFormulas}>S = So + v.Δt </Text>
            <Text style={styles.styleLegendaFormulas}>S = Posição</Text>
            <Text style={styles.styleLegendaFormulas}>So = Posição Inicial</Text>
            <Text style={styles.styleLegendaFormulas}>v = Velocidade</Text>
            <Text style={styles.styleLegendaFormulas}>Δt = Intervalo de Tempo</Text>
          </View>

          <Text style={styles.styleTextHead}> Movimento Uniformemente Variado </Text>
          <View style={styles.styleViewFormulas}>
            <Text style={styles.styleHeadFormulas}>Aceleração Média:</Text>
            <Text style={styles.styleHeadFormulas}>a = Δv/Δt </Text>
            <Text style={styles.styleLegendaFormulas}>a = Aceleração Média</Text>
            <Text style={styles.styleLegendaFormulas}>Δv = Variação da Velocidade</Text>
            <Text style={styles.styleLegendaFormulas}>Δt = Intervalo de Tempo</Text>
            <Text> </Text>
            <Text style={styles.styleHeadFormulas}>Função Horária da Velocidade:</Text>
            <Text style={styles.styleHeadFormulas}>v = vo + a.t</Text>
            <Text style={styles.styleLegendaFormulas}>v = Velocidade</Text>
            <Text style={styles.styleLegendaFormulas}>vo = Velocidade Inicial</Text>
            <Text style={styles.styleLegendaFormulas}>a = Aceleração</Text>
            <Text style={styles.styleLegendaFormulas}>t = Tempo</Text>
            <Text> </Text>
            <Text style={styles.styleHeadFormulas}>Posição em Função do Tempo:</Text>
            <Text style={styles.styleHeadFormulas}>s = so + vo.t + 1/2.a.t² </Text>
            <Text style={styles.styleLegendaFormulas}>s = Posição</Text>
            <Text style={styles.styleLegendaFormulas}>so = Posição Inicial</Text>
            <Text style={styles.styleLegendaFormulas}>vo = Velocidade Inicial</Text>
            <Text style={styles.styleLegendaFormulas}>t = Tempo</Text>
            <Text style={styles.styleLegendaFormulas}>a = Aceleração</Text>
            <Text> </Text>
            <Text style={styles.styleHeadFormulas}>Equação de Torricelli:</Text>
            <Text style={styles.styleHeadFormulas}>v² = vo² + 2.a.Δd </Text>
            <Text style={styles.styleLegendaFormulas}>v = Velocidade</Text>
            <Text style={styles.styleLegendaFormulas}>vo = Velocidade Inicial</Text>
            <Text style={styles.styleLegendaFormulas}>a = Aceleração</Text>
            <Text style={styles.styleLegendaFormulas}>Δd = Distancia Percorrida</Text>
          </View>

          <Text style={styles.styleTextHead}> Movimento Vertical </Text>
          <View style={styles.styleViewFormulas}>
          <Text style={styles.styleHeadFormulas}>Função Horária da Velocidade no MV:</Text>
          <Text style={styles.styleHeadFormulas}>v = vo ± g.t </Text>
            <Text style={styles.styleLegendaFormulas}>v = Velocidade</Text>
            <Text style={styles.styleLegendaFormulas}>vo = Velocidade Inicial</Text>
            <Text style={styles.styleLegendaFormulas}>g = Gravidade</Text>
            <Text style={styles.styleLegendaFormulas}>t = Tempo</Text>
            <Text> </Text>
            <Text style={styles.styleHeadFormulas}>Posição em Função do Tempo no MV:</Text>
            <Text style={styles.styleHeadFormulas}>h = ho + vo.t ± 1/2.g.t² </Text>
            <Text style={styles.styleLegendaFormulas}>h = Altura</Text>
            <Text style={styles.styleLegendaFormulas}>ho = Altura Inicial</Text>
            <Text style={styles.styleLegendaFormulas}>vo = Velocidade Inicial</Text>
            <Text style={styles.styleLegendaFormulas}>g = Gravidade</Text>
            <Text style={styles.styleLegendaFormulas}>t = Tempo</Text>
            <Text> </Text>
            <Text style={styles.styleHeadFormulas}>Equação de Torricelli:</Text>
            <Text style={styles.styleHeadFormulas}>v² = vo² ± 2.g.Δh</Text>
            <Text style={styles.styleLegendaFormulas}>v = Velocidade</Text>
            <Text style={styles.styleLegendaFormulas}>vo = Velocidade Inicial</Text>
            <Text style={styles.styleLegendaFormulas}>g = Gravidade</Text>
            <Text style={styles.styleLegendaFormulas}>Δh = Variação de Altura</Text>          
          </View>

          <Text style={styles.styleTextHead}> Movimento Oblíquo </Text>
          <View style={styles.styleViewFormulas}>
          <Text style={styles.styleHeadFormulas}>Função Horária da Posição Horizontal:</Text>
          <Text style={styles.styleHeadFormulas}>x = xo + vox.t </Text>
            <Text style={styles.styleLegendaFormulas}>x = Posição Horizontal</Text>
            <Text style={styles.styleLegendaFormulas}>xo = Posição Horizontal Inicial</Text>
            <Text style={styles.styleLegendaFormulas}>vox = Componente Horizontal do Vetor Vel. Inicial</Text>
            <Text style={styles.styleLegendaFormulas}>t = Tempo</Text>
            <Text> </Text>
            <Text style={styles.styleHeadFormulas}>Componente Horizontal da Velocidade Inicial:</Text>
            <Text style={styles.styleHeadFormulas}>vox = |vo|.cosθ </Text>
            <Text style={styles.styleLegendaFormulas}>vox = Componente Horizontal do Vetor Vel. Inicial</Text>
            <Text style={styles.styleLegendaFormulas}>|vo| = Módulo de Velocidade Inicial</Text>
            <Text style={styles.styleLegendaFormulas}>vo = Velocidade Inicial</Text>
            <Text style={styles.styleLegendaFormulas}>θ = Ângulo Entre x e o Lançamento</Text>
            <Text> </Text>
            <Text style={styles.styleHeadFormulas}>Função Horária da Posição Vertical:</Text>
            <Text style={styles.styleHeadFormulas}>y = yo + voy.t + 1/2.g.t²</Text>
            <Text style={styles.styleLegendaFormulas}>y = Posição Vertical</Text>
            <Text style={styles.styleLegendaFormulas}>yo = Posição Vertical Inicial</Text>
            <Text style={styles.styleLegendaFormulas}>voy = Componente Vertical do Vetor de Velocidade Inicial</Text>
            <Text style={styles.styleLegendaFormulas}>t = Tempo</Text>
            <Text style={styles.styleLegendaFormulas}>g = Gravidade</Text>
            <Text> </Text>
            <Text style={styles.styleHeadFormulas}>Componente Vertical da Velocidade Inicial:</Text>
            <Text style={styles.styleHeadFormulas}>voy = |vo|.senθ </Text>
            <Text style={styles.styleLegendaFormulas}>voy = Componente Vertical do Vetor Vel. Inicial</Text>
            <Text style={styles.styleLegendaFormulas}>|vo| = Módulo de Velocidade Inicial</Text>
            <Text style={styles.styleLegendaFormulas}>vo = Velocidade Inicial</Text>
            <Text style={styles.styleLegendaFormulas}>θ = Ângulo Entre x e o Lançamento</Text>
            <Text> </Text>
            <Text style={styles.styleHeadFormulas}>Componente Vertical da Velocidade Inicial:</Text>
            <Text style={styles.styleHeadFormulas}>voy = |vo|.senθ </Text>
            <Text style={styles.styleLegendaFormulas}>voy = Componente Vertical do Vetor Vel. Inicial</Text>
            <Text style={styles.styleLegendaFormulas}>|vo| = Módulo de Velocidade Inicial</Text>
            <Text style={styles.styleLegendaFormulas}>vo = Velocidade Inicial</Text>
            <Text style={styles.styleLegendaFormulas}>θ = Ângulo Entre x e o Lançamento</Text>
            <Text> </Text>
            <Text style={styles.styleHeadFormulas}>Alcance Máximo do Projétil Horizontalmente:</Text>
            <Text style={styles.styleHeadFormulas}>R = |vo|².sen(2θ) / g </Text>
            <Text style={styles.styleLegendaFormulas}>R = Alcance Máximo Horizontal</Text>
            <Text style={styles.styleLegendaFormulas}>|vo| = Módulo de Velocidade Inicial</Text>
            <Text style={styles.styleLegendaFormulas}>vo = Velocidade Inicial</Text>
            <Text style={styles.styleLegendaFormulas}>θ = Ângulo Entre x e o Lançamento</Text>
            <Text style={styles.styleLegendaFormulas}>g = Gravidade</Text>
          </View>

          <Text style={styles.styleTextHead}> Movimento Circular </Text>
          <View style={styles.styleViewFormulas}>
          <Text style={styles.styleHeadFormulas}>Posição Angular:</Text>
          <Text style={styles.styleHeadFormulas}>φ = S / r </Text>
            <Text style={styles.styleLegendaFormulas}>φ = Ângulo Descrito</Text>
            <Text style={styles.styleLegendaFormulas}>S = Arco de Círculo Descrito</Text>
            <Text style={styles.styleLegendaFormulas}>r = Raio de Círculo</Text>
            <Text> </Text>
            <Text style={styles.styleHeadFormulas}>Deslocamento Angular:</Text>
            <Text style={styles.styleHeadFormulas}>Δφ = ΔS / r </Text>
            <Text style={styles.styleLegendaFormulas}>Δφ = Deslocamento Angular</Text>
            <Text style={styles.styleLegendaFormulas}>ΔS = Variação da Posição no Arco</Text>
            <Text style={styles.styleLegendaFormulas}>r = Raio de Círculo</Text>
            <Text> </Text>
            <Text style={styles.styleHeadFormulas}>Velocidade Angular:</Text>
            <Text style={styles.styleHeadFormulas}>ω = Δφ / t</Text>
            <Text style={styles.styleLegendaFormulas}>ω = Velocidade Angular</Text>
            <Text style={styles.styleLegendaFormulas}>Δφ = Deslocamento Angular</Text>
            <Text style={styles.styleLegendaFormulas}>t = Tempo</Text>
            <Text> </Text>
            <Text style={styles.styleHeadFormulas}>Aceleração Angular:</Text>
            <Text style={styles.styleHeadFormulas}>α = Δω / t </Text>
            <Text style={styles.styleLegendaFormulas}>α = Aceleração Angular</Text>
            <Text style={styles.styleLegendaFormulas}>Δω = Variação da Velocidade Angular</Text>
            <Text style={styles.styleLegendaFormulas}>t = Tempo</Text>
            <Text> </Text>
            <Text style={styles.styleHeadFormulas}>Função Horária da Posição Angular no Mov. Circular Unif:</Text>
            <Text style={styles.styleHeadFormulas}>φ = φo + ω.t </Text>
            <Text style={styles.styleLegendaFormulas}>φ = Ângulo Descrito</Text>
            <Text style={styles.styleLegendaFormulas}>φo = Ângulo Inicial</Text>
            <Text style={styles.styleLegendaFormulas}>ω = Velocidade Angular</Text>
            <Text style={styles.styleLegendaFormulas}>t = Tempo</Text>
            <Text> </Text>
            <Text style={styles.styleHeadFormulas}>Função Horária da Velocidade Angular:</Text>
            <Text style={styles.styleHeadFormulas}>ω = ωo + α.t </Text>
            <Text style={styles.styleLegendaFormulas}>ω = Velocidade Angular</Text>
            <Text style={styles.styleLegendaFormulas}>ωo = Velocidade Angular Inicial</Text>
            <Text style={styles.styleLegendaFormulas}>α = Aceleração Angular</Text>
            <Text style={styles.styleLegendaFormulas}>t = Tempo</Text>
            <Text> </Text>
            <Text style={styles.styleHeadFormulas}>Função Horária da Posição Angular:</Text>
            <Text style={styles.styleHeadFormulas}>φ = φo + ωo.t + 1/2.α.t² </Text>
            <Text style={styles.styleLegendaFormulas}>φ = Ângulo Descrito</Text>
            <Text style={styles.styleLegendaFormulas}>φo = Ângulo Inicial </Text>
            <Text style={styles.styleLegendaFormulas}>ωo = Velocidade Angular Inicial</Text>
            <Text style={styles.styleLegendaFormulas}>t = Tempo</Text>
            <Text style={styles.styleLegendaFormulas}>α = Aceleração Angular</Text>
            <Text> </Text>
            <Text style={styles.styleHeadFormulas}>Equação de Torricelli para Movimento Circular:</Text>
            <Text style={styles.styleHeadFormulas}>ω² = ωo² + 2.α.Δφ </Text>
            <Text style={styles.styleLegendaFormulas}>ω = Velocidade Angular</Text>
            <Text style={styles.styleLegendaFormulas}>ωo = Velocidade Angular Inicial</Text>
            <Text style={styles.styleLegendaFormulas}>α = Aceleração Angular</Text>
            <Text style={styles.styleLegendaFormulas}>Δφ = Deslocamento Angular</Text>
            <Text> </Text>
            <Text style={styles.styleHeadFormulas}>Aceleração Centrípeta:</Text>
            <Text style={styles.styleHeadFormulas}>acp = v² / r = ω².r</Text>
            <Text style={styles.styleLegendaFormulas}>acp = Aceleração Centrípeta</Text>
            <Text style={styles.styleLegendaFormulas}>v = Velocidade</Text>
            <Text style={styles.styleLegendaFormulas}>r = Raio do Círculo</Text>
            <Text style={styles.styleLegendaFormulas}>ω = Velocidade Angular</Text>
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
