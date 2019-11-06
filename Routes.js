import React from "react";
import { Router, Scene } from "react-native-router-flux";
import Initial from "./src/components/Initial";

//areas
import Mecanica from "./src/components/model/Mecanica";
import Termologia from "./src/components/model/Termologia";
import Optica from "./src/components/model/Optica";
import Ondulatoria from "./src/components/model/Ondulatoria";
import Eletromagnetismo from "./src/components/model/Eletromagnetismo";

//subareas


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
    </Scene>
  </Router>
);
export default Routes;