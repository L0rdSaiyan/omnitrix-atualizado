import React, { useEffect, useRef } from 'react';
import Card from './Card';
import styles from './Surprise.module.css';
import parabensVideo from '../omnitrix/obrisguaido.mp4';

export default function Surprise() {
  const videoRef = useRef(null);

  useEffect(() => {
    const playVideo = () => {
      if (videoRef.current) {
        videoRef.current.play().catch((error) => {
          // A reprodução automática falhou, talvez devido a políticas do navegador
          console.error('Erro na reprodução automática:', error);
        });
      }
    };

    playVideo();
  }, []); // O useEffect irá disparar uma vez, assim que o componente for montado

  return (
    <div className={styles.container}>
      <Card
        img="https://media.discordapp.net/attachments/472081051120828416/1207117043388653618/image.png?ex=65de7a5a&is=65cc055a&hm=6cec0105e43a3404f1b5ad9916cdd663abba5f6aed72c7e02f3c060fce5e3931&=&format=webp&quality=lossless&width=659&height=676"
        title="Parabéns, Luquitas!!"
        text="E aí, Luquinhas! Hoje é o seu dia! Feliz aniversário! 🎉 Quero aproveitar essa oportunidade para te dizer que você é um dos melhores amigos que eu tenho, e não digo isso só porque é seu aniversário. É a mais pura verdade! 😄 Uma das pessoas que contagiam o ambiente e deixa mais leve! Até mesmo naquele caos que era aquela sala do PP e consegue deixar o ambiente de trabalho mais divertido! Neste aniversário, espero que você receba todo o carinho e alegria que merece. Que este novo ano de vida lhe traga muitas realizações e momentos incríveis. Parabéns, Luquinhas! Obrigado por ser tão incrível! Um grande abraço, [Victor Sales] 🎂🎈"
      />
      <video ref={videoRef} width="750" height="500" controls>
        <source src={parabensVideo} type="video/mp4" />
        Seu navegador não suporta o elemento de vídeo.
      </video>
    </div>
  );
}
