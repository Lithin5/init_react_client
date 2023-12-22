import { useRoutes } from 'react-router-dom';

import AdminRoutes from './AdminRoutes';
import CommonRoutes from './CommonRoutes';
import UserRoutes from './UserRoutes';


export default function AppRoutes() {
  return useRoutes([AdminRoutes, CommonRoutes, UserRoutes]);
}
