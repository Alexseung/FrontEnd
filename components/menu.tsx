import React from 'react';
import {useNavigate, Outlet} from 'react-router-dom';

const menuStyle = {
  marginRight: '10px',
};

export default function () {
  const nav = useNavigate();
  const setNavigation = (fruit: string) => {
    nav(`/${fruit}`);
  };

  return (
    <div>
      <h2>Fruit Info</h2>
      <button style={menuStyle} onClick={() => setNavigation('')}>
        Home
      </button>
      <button style={menuStyle} onClick={() => setNavigation('apple')}>
        Apple
      </button>
      <button style={menuStyle} onClick={() => setNavigation('banana')}>
        Banana
      </button>
      <button style={menuStyle} onClick={() => setNavigation('melon')}>
        Melon
      </button>
      <Outlet />
    </div>
  );
}
