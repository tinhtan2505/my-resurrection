import React, { Component, Suspense } from 'react'
import { Route, Routes } from 'react-router-dom'
import { routes } from './routes'
import MainPage from './main-layout.tsx'
import './styles.less'

interface Props {}

interface State {
  // state có thể được định nghĩa tại đây
}

class LayoutPage extends Component<Props, State> {
  routes: {
    path: string
    key: string
    component: () => React.JSX.Element
    title: string
    showHeader: boolean
  }[]

  constructor(props: Props, context: any) {
    super(props)
    // const { location } = this.props;
    // const options = qs.parse(location.search.replace('?', ''));
    // this.state = {
    //     loaded: props.account.loaded,
    //     networkError: null,
    //     sidebarOpen: false,
    //     search: !!options.keyword == true && location.pathname == '/search' ? options.keyword : '',
    //     isCustomer: isCustomers(context),
    //     isSaler: isSalers(context),
    //     modalUploadVisible: false,
    //     listUploads: [],
    // };
    this.routes = Object.values(routes)
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
    )
  }

  private renderPage(layoutProps: any, props: any) {
    // Tùy thuộc vào logic render của bạn
    return <div>Render page here</div>
  }
}

export default LayoutPage
