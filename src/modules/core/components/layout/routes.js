import Home from '../Home'
import About from '../About'
import Contact from '../Contact'

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

export const routes = [
  {
    path: '/',
    key: 'home',
    component: Home,
    title: 'Home',
    showHeader: true,
  },
  {
    path: '/about',
    key: 'about',
    component: About,
    title: 'About',
    showHeader: true,
  },
  {
    path: '/contact',
    key: 'contact',
    component: Contact,
    title: 'Contact',
    showHeader: true,
  },
  // account
  // newProject: {
  //     path: '/',
  //     exact: true,
  //     title: 'Retouching.Services',
  //     component: ProjectNew,
  //     main: ({match, history}) => <ProjectNew match={match} history={history} />,
  //     noLayout: true,
  // },
  // login: {
  //     path: '/login',
  //     exact: true,
  //     title: 'Login',
  //     component: Login,
  //     noLayout: true,
  //     allowAnonymous: true,
  // },
  // logout: {
  //     path: '/logout',
  //     title: 'Logout',
  //     component: Logout,
  //     noLayout: true,
  // },
  // resetPassword: {
  //     path: '/resetPassword',
  //     title: 'ResetPassword',
  //     component: ResetPassword,
  //     main: ({ match, history }) => <ResetPassword match={match} history={history} />,
  //     noLayout: true,
  //     allowAnonymous: true,
  // },
  // // // user
  // // user: {
  // //     path: '/user',
  // //     exact: true,
  // //     title: 'Users',
  // //     component: User,
  // // },
  // // // profile
  // profile: {
  //     path: '/profile',
  //     key: 'profile',
  //     exact: true,
  //     title: 'Profile',
  //     component: Profile,
  // },
  // project: {
  //     path: '/projects',
  //     exact: true,
  //     key: 'projects',
  //     title: 'Projects - Retouching.Services',
  //     main: ({match, history}) => <Project match={match} history={history} />,
  //     component: Project,
  //     showHeader: false,
  // },
  // // projectdetail
  // projectdetail: {
  //     path: '/projects/:id',
  //     key: 'projects',
  //     exact: true,
  //     title: 'Project detail',
  //     main: ({ match, history }) => <ProjectDetail match={match} history={history} key={'aaaa'} />,
  //     component: ProjectDetail,
  //     detail: true,
  // },
  // // projectimagechecktool
  // projectimagechecktool: {
  //     path: '/check/:key',
  //     exact: true,
  //     title: 'Retouching.Services',
  //     main: ({ match, history }) => <DemoImagechecktool match={match} history={history} />,
  //     component: DemoImagechecktool,
  //     allowAnonymous: true,
  //     noLayout: true,
  // },
  // privacyPolicy: {
  //     path: '/privacypolicy',
  //     exact: true,
  //     title: 'Privacy Policy',
  //     component: PrivacyPolicy,
  //     noLayout: true,
  //     allowAnonymous: true,
  // },
  // termsCondition: {
  //     path: '/termscondition',
  //     exact: true,
  //     title: 'Terms and conditions',
  //     component: TermsCondition,
  //     noLayout: true,
  //     allowAnonymous: true,
  // },
  // help: {
  //     path: '/help',
  //     exact: true,
  //     title: 'Help',
  //     component: Help,
  //     noLayout: true,
  //     allowAnonymous: true,
  // },
  // upload: {
  //     path: '/upload',
  //     exact: true,
  //     title: 'Upload Project',
  //     component: ProjectUpload,
  //     main: ({match, history}) => <ProjectUpload match={match} history={history} />,
  //     noLayout: true,
  //     allowAnonymous: true,
  // },
  // // // home
  // // home: {
  // //     path: '/dashboard',
  // //     exact: true,
  // //     title: 'Dashboard',
  // //     component: Home,
  // // },
  // notfound: {
  //     path: '*',
  //     title: 'Not Found',
  //     component: NotFound,
  //     noLayout: true,
  // },
]
