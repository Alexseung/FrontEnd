import React from 'react';
import {useNavigate, useParams} from 'react-router-dom';
import {fruits} from './fruits';
import {useToggle} from '../hook';

export default function () {
  const {value, Toggle, On, Off} = useToggle();
  const nav = useNavigate();
  const {fruitName, fruitId} = useParams<{
    fruitName: string;
    fruitId: string;
  }>();
  const id = fruitId ? parseInt(fruitId) : undefined;
  const fruit = fruits.find(
    fruit => fruit.name === fruitName && fruit.id === id
  );

  if (!fruit) {
    return <p>Fruit not found</p>;
  }

  return (
    <div>
      <h4 onClick={Toggle}>{fruitName}</h4>
      {value ? (
        <img
          src={fruit.img}
          alt={fruit.name}
          style={{width: '200px'}}
          onClick={Off}
        />
      ) : undefined}

      <p>{fruit.info}</p>
    </div>
  );
}
