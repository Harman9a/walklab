import React from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Home from "./Pages/Home";
import LoginNew from "./Pages/User/Auth/LoginNew";
import LayoutMain from "./Pages/LayoutMain";
import SettingComp from "./Pages/SettingComp";
import BulkDataCom from "./Pages/BulkData";

const routerAdmin = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="/login" element={<LoginNew />}></Route>
      <Route element={<LayoutMain />}>
        <Route path="/" element={<Home />}></Route>
        <Route path="/blukData" element={<BulkDataCom />}></Route>
      </Route>
    </Route>
  )
);

const RouterCom = () => {
  return (
    <div>
      <RouterProvider router={routerAdmin} />
    </div>
  );
};

export default RouterCom;
