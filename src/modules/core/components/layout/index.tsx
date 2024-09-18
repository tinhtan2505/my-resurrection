import React, { Component, ComponentType, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import { routes } from "./routes";
import "./layout.less";
import MainPage from "./main-layout";
import NotFound from "../NotFound";

interface Props {}

interface State {}

interface RouteType {
  path: string;
  key: string;
  component: ComponentType;
  title: string;
  showHeader: boolean;
}

class LayoutPage extends Component<Props, State> {
  constructor(props: Props, context: any) {
    super(props);
  }
  routes: RouteType[] = Object.values(routes);

  render() {
    return (
      <Suspense fallback={null}>
        <Routes>
          {this.routes?.map(({ path, key, component: Component }) => (
            <Route
              key={key}
              path={path}
              element={
                <MainPage>
                  <Component />
                </MainPage>
              }
            />
          ))}
          <Route
            path="*"
            element={
              <MainPage>
                <NotFound />
              </MainPage>
            }
          />
        </Routes>
      </Suspense>
    );
  }
}

export default LayoutPage;
