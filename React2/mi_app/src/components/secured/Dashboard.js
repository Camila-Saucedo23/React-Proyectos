import React, { useContext } from "react";
import { BrowserRouter as Routes , Route, BrowserRouter as Redirect } from "react-router-dom";
import { SideBar } from "./SideBar";
import { UserTable } from "./users/UserTable";
import { PetTable } from "../secured/pets/PetTable";
import { Detail } from "../public/Detail";
import { Profile } from "../secured/users/Profile";
import { DASHBOARD } from "../../constants/App.constant";
import { AuthContext } from "../../contexts/AuthContext";

export const Dashboard = () => {
  const { auth } = useContext(AuthContext);

  if (!auth) return <Redirect to={"/login"} />;

  return (
    <div>
      <div className="container-fluid">
        <div className="row">
          <SideBar />
          <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4 min-vh-100">
            <Routes>
              <Route
                exact
                path={DASHBOARD.TABLA_MASCOTAS()}
                component={PetTable}
              />

              <Route
                exact
                path={DASHBOARD.TABLA_USUARIOS()}
                component={UserTable}
              />
              <Route exact path={DASHBOARD.PERFIL()} component={Profile} />
              <Route exact path={DASHBOARD.LISTA()} component={PetTable} />
              <Route exact path={DASHBOARD.FAV()} component={Detail} />
            </Routes>
          </main>
        </div>
      </div>
    </div>
  );
};