import About from "../About";
import Contact from "../Contact";
import { ComponentType } from "react";
import { Home } from "../Home";

// const Home = React.lazy(() => import('./../../pages/home/index'));
// const ProjectNew = React.lazy(() => import('../project/components/project-new/index'));
// const Login = React.lazy(() => import('./../../pages/account/login'));
// const Logout = React.lazy(() => import('./../../pages/account/logout'));
// const ResetPassword = React.lazy(() => import('../account/components/resetPassword'));
// const Project = React.lazy(() => import('./../../pages/project/index'));
// const Profile = React.lazy(() => import('../account/updateprofile'));
// const ProjectDetail = React.lazy(() => import('./../../pages/project/components/view/detail'));
// const NotFound = React.lazy(() => import('./../../pages/layout/notfound'));
// const DemoImagechecktool = React.lazy(() => import('../project/components/view/demo-imagechecktool'));
// const PrivacyPolicy = React.lazy(() => import('../../pages/policy/privacy-policy'));
// const TermsCondition = React.lazy(() => import('../../pages/policy/terms-conditions'));
// const ProjectUpload = React.lazy(() => import('../../pages/upload/index'));
// const Help = React.lazy(() => import('../../pages/help/index'));
interface Route {
  path: string;
  key: string;
  component: ComponentType;
  title: string;
  showHeader: boolean;
}

export const routes = [
  {
    path: "/",
    key: "home",
    component: Home,
    title: "Home",
    showHeader: true,
  },
  {
    path: "/about",
    key: "about",
    component: About,
    title: "About",
    showHeader: true,
  },
  {
    path: "/contact",
    key: "contact",
    component: Contact,
    title: "Contact",
    showHeader: true,
  },
];
