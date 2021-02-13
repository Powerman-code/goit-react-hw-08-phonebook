import React from 'react';
import s from './HomeView.module.css';

const HomeView = () => (
  <div className={s.container}>
    <h1 className={s.title}>
      Тут может быть Ваша реклама{' '}
      <span role="img" aria-label="Иконка приветствия">
        💁‍♀️
      </span>
    </h1>
  </div>
);

export default HomeView;
