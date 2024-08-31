import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import clsx from 'clsx';

import Button from '../../../Common/Button';
import { Bell, CloseCircle, Gift, Hamburger, Logo, Search } from '../../../Common/Icon';
import './index.scss';
import sideMenuRoutes from '../../../../routes/sideMenu.tsx';
import BalanceDetails from '../../../Common/BalanceDetails';

const Header: React.FC = () => {
  const { pathname } = useLocation();

  const [key, setKey] = useState('');
  const [isMenuExpanded, setIsMenuExpanded] = useState(false);

  useEffect(() => {
    setKey(pathname.split('/').find((item) => !!item) || '');
  }, [pathname]);

  const handleMenuOpen = () => {
    setIsMenuExpanded(true);
  };

  const handleMenuClose = () => {
    setIsMenuExpanded(false);
  };

  const handleClickMock = () => {
    console.log('mocked click');
  };

  return (
    <div className="header">
      <div className="container header__container">
        <div className="header__container__logo-box">
          <Button className="header__container__logo-box__hamburger-btn" variant="ghost" onClick={handleMenuOpen}>
            <Hamburger />
          </Button>
          <Link className="header__container__logo-box__logo" to="/">
            <Logo />
          </Link>
        </div>
        <div className="header__container__content-box">
          <Button className="header__container__content-box__icon-btn" variant="ghost" onClick={handleClickMock}>
            <Search />
          </Button>
          <Button className="header__container__content-box__icon-btn" variant="ghost" onClick={handleClickMock}>
            <Gift />
          </Button>
          <Button className="header__container__content-box__icon-btn" variant="ghost" onClick={handleClickMock}>
            <Bell />
            <div className="header__container__content-box__icon-btn__badge" />
          </Button>
          <BalanceDetails />
          <img src="/src/assets/avatar.jpg" alt="User Avatar" className="header__container__content-box__user-avatar" />
        </div>
      </div>
      {/* Move the next div inside the container to pin the menu to the left edge of container */}
      <div className={clsx('header__menu', { ['header__menu__expanded']: isMenuExpanded })}>
        <nav className={clsx('header__menu__content', { ['header__menu__content__expanded']: isMenuExpanded })}>
          <div className="header__menu__content__logo-box">
            <Link className="header__menu__content__logo-box__logo" to="/">
              <Logo />
            </Link>
            <Button className="header__menu__content__logo-box__close-btn" variant="ghost" onClick={handleMenuClose}>
              <CloseCircle />
            </Button>
          </div>
          <ol className="header__menu__content__list">
            {sideMenuRoutes.map((route) => (
              <li
                className={clsx('header__menu__content__list__item', {
                  ['header__menu__content__list__item__active']: route.bind.path === `/${key}`,
                })}
                key={route.name}
              >
                <Link className="header__menu__content__list__item__link" to={route.bind.path || '/'}>
                  {route.name}
                </Link>
              </li>
            ))}
          </ol>
        </nav>
        <div
          className={clsx('header__menu__substrate', { ['header__menu__substrate__expanded']: isMenuExpanded })}
          onClick={handleMenuClose}
        />
      </div>
    </div>
  );
};

export default Header;
