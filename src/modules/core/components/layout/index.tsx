import React, { Component, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import { routes } from "./routes";
import "./layout.less";
import MainPage from "./main-layout";

interface Props {}

interface State {
  // state có thể được định nghĩa tại đây
}

class LayoutPage extends Component<Props, State> {
  routes: {
    path: string;
    key: string;
    component: () => React.JSX.Element;
    title: string;
    showHeader: boolean;
  }[];

  constructor(props: Props, context: any) {
    super(props);

    this.routes = Object.values(routes);
  }
  render() {
    return (
      <Suspense fallback={null}>
        <Routes>
          {this.routes.map(
            ({ path, key, component: Component, ...layoutProps }) => (
              <Route
                key={path}
                path={path}
                // exact={exact}
                element={
                  <MainPage>
                    <Component />
                  </MainPage>
                }
              />
            )
          )}
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
