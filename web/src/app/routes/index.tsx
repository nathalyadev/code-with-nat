import {
  BrowserRouter,
  Routes as Switch,
  Route,
  Navigate,
} from "react-router-dom";
import { Home, Documentations } from "../pages";
import { appConfigs } from "../shared/configs/app";
import { routesConfigs } from "../shared/configs/routes";

export function AppRoutes() {
  return (
    <BrowserRouter basename={appConfigs.BASENAME}>
      <Switch>
        <Route path={routesConfigs.HOME} element={<Home />} />

        <Route
          path={routesConfigs.DOCUMENTATIONS}
          element={<Documentations />}
        />

        <Route path="/*" element={<Navigate to={routesConfigs.HOME} />} />
      </Switch>
    </BrowserRouter>
  );
}
