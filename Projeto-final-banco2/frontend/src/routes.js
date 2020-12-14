import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

// Importação das paginas

import NotFound from './pages/NotFound';
import Catalog from './pages/Catalog';
import Cadastro from './pages/Cadastro';
import Login from './pages/Login';
import Editar from './pages/Editar';
import Info from './pages/Info';

function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Login}></Route>
        <Route exact path="/catalog" component={Catalog} />
        <Route exact path="/cadastro" component={Cadastro} />
        <Route exact path="/editar" component={Editar} />
        <Route exact path="/info" component={Info} />
        <Route path="*" component={NotFound} />
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;
