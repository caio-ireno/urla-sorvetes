import { RouteObject } from 'react-router-dom';
import Footer from '../components/Footer';
import ResponsiveMenu from '../components/ResponsiveMenu/Index';
import Duvidas from '../pages/Duvidas';
import FaleConosco from '../pages/FaleConosco';
import Index from '../pages/index';
import Lojas from '../pages/Lojas';
import Produtos from '../pages/Produtos';
import SobreUrla from '../pages/SobreUrla';
import TrabalheConosco from '../pages/TrabalheConosco';

export default [
  {
    path: '/',
    element: [<ResponsiveMenu />, <Footer />],
    children: [
      { index: true, element: <Index /> },
      { path: '/produtos', element: <Produtos /> },
      { path: '/sobre-urla', element: <SobreUrla /> },
      { path: '/trabalhe-conosco', element: <TrabalheConosco /> },
      { path: '/fale-conosco', element: <FaleConosco /> },
      { path: '/lojas', element: <Lojas /> },
      { path: '/duvidas', element: <Duvidas /> },
    ],
  },
] as Array<RouteObject>;
