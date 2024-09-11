import React from 'react';

export const fruits = [
  ...Array.from({length: 50}, (_, index) => ({
    name: 'apple',
    id: index + 1,
    img: 'https://cdn.tridge.com/attachment-file/8d/e0/d9/8de0d913f1bd9438ce1ab69086961e2c884877bd/apple.jpeg',
    info: `${index + 1}번 사과입니다`,
    place: ['여주', '제주'],
  })),
  ...Array.from({length: 50}, (_, index) => ({
    name: 'banana',
    id: index + 1,
    img: 'https://static.wixstatic.com/media/53e8bb_a1e88e551162485eb4ff962437300872~mv2.jpeg/v1/crop/x_0,y_105,w_1024,h_919/fill/w_560,h_560,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/Banana.jpeg',
    info: `${index + 1}번 바나나입니다`,
    place: ['제주도', '강원도'],
  })),
  ...Array.from({length: 50}, (_, index) => ({
    name: 'melon',
    id: index + 1,
    img: 'https://fisherscart.com/cdn/shop/products/Melon.png?v=1646629090',
    info: `${index + 1}번 멜론입니다`,
    place: ['무주', '창원'],
  })),
];
