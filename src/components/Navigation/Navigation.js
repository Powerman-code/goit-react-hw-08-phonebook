import React from 'react';
import { NavLink } from 'react-router-dom';

const Navigation = () => (
  <nav>
    <NavLink to="/" exact style={styles.link} activeStyle={styles.activeLink}>
      Главная
    </NavLink>

    <NavLink
      to="/todos"
      exact
      style={styles.link}
      activeStyle={styles.activeLink}
    >
      Заметки
    </NavLink>
  </nav>
);

export default Navigation;
