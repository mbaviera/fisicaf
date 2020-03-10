import React from "react";
import { Router, Scene } from "react-native-router-flux";
import Initial from "./src/components/principal/Main";

//areas
import Mecanica from "./src/components/menu/Mecanica";
import Termologia from "./src/components/menu/Termologia";
import Optica from "./src/components/menu/Optica";
import Ondulatoria from "./src/components/menu/Ondulatoria";
import Eletromagnetismo from "./src/components/menu/Eletromagnetismo";

//subareas (Mecanica)
import Cinematica from "./src/components/submenu/mecanica/Cinematica";
import Dinamica from "./src/components/submenu/mecanica/Dinamica";
import Estatica from "./src/components/submenu/mecanica/Estatica";
import Hidrostatica from "./src/components/submenu/mecanica/Hidrostatica";
import Gravitacao from "./src/components/submenu/mecanica/Gravitacao";

//subareas (Termologia)
import Termometria from "./src/components/submenu/termologia/Termometria";
import Calorimetria from "./src/components/submenu/termologia/Calorimetria";
import Termodinamica from "./src/components/submenu/termologia/Termodinamica";

const Routes = () => (
  <Router>
    <Scene key="root">
      <Scene
        hideNavBar={true}
        key="initial"
        component={Initial}
        title="Te$te"
        initial={true} 
      />            
      <Scene
        hideNavBar={true}
        key="mecanica"
        component={Mecanica}
        title="Mec"
      />
      <Scene
        hideNavBar={true}
        key="termologia"
        component={Termologia}
        title="Ter"
      />    
      <Scene
        hideNavBar={true}
        key="optica"
        component={Optica}
        title="Opt"
      />  
      <Scene
        hideNavBar={true}
        key="ondulatoria"
        component={Ondulatoria}
        title="Ond"
      /> 
      <Scene
        hideNavBar={true}
        key="eletromagnetismo"
        component={Eletromagnetismo}
        title="Elet"
      /> 
      <Scene
        hideNavBar={true}
        key="cinematica"
        component={Cinematica}
        title="Cine"
      />  
      <Scene
        hideNavBar={true}
        key="dinamica"
        component={Dinamica}
        title="Dina"
      />
      <Scene
        hideNavBar={true}
        key="estatica"
        component={Estatica}
        title="Esta"
      />  
      <Scene
        hideNavBar={true}
        key="hidrostatica"
        component={Hidrostatica}
        title="Hidro"
      /> 
      <Scene
        hideNavBar={true}
        key="gravitacao"
        component={Gravitacao}
        title="Grav"
      />
      <Scene
        hideNavBar={true}
        key="termometria"
        component={Termometria}
        title="Trem"
      />
      <Scene
        hideNavBar={true}
        key="calorimetria"
        component={Calorimetria}
        title="Trem"
      />
      <Scene
        hideNavBar={true}
        key="termodinamica"
        component={Termodinamica}
        title="Termo"
      />
    </Scene>
  </Router>
);
export default Routes;