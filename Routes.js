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
    </Scene>
  </Router>
);
export default Routes;