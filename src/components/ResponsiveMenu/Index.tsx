import React from 'react';
import { Outlet } from 'react-router-dom';
import IsMobile from '../../utils/isMobile';
import DesktopMenu from './DesktopMenu';
import MobileMenu from './MobileMenu';

export default function ResponsiveMenu() {
  const ComponentToRender = IsMobile() ? MobileMenu : DesktopMenu;
  return (
    <ComponentToRender>
      <Outlet />
    </ComponentToRender>
  );
}
