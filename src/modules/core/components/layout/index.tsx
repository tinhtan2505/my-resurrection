import React, { Component, ComponentType, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import { routes } from "./routes";
import "./layout.less";
import MainPage from "./main-layout";
import { Home } from "../Home";

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

    // this.routes = Object.values(routes);
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
              // exact={exact}
              element={
                <MainPage>
                  <Component />
                </MainPage>
              }
            />
          ))}
          {/* <Route render={(props) => this.renderPage(notfound, props)} /> */}
        </Routes>
      </Suspense>
    );
  }

  private renderPage(layoutProps: any, props: any) {
    // Tùy thuộc vào logic render của bạn
    return <div>Render page here</div>;
  }
}

export default LayoutPage;
