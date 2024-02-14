import React, { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './Omnitrix.module.css';
import argola from '../omnitrix/omnitrix.png';
import initial from '../omnitrix/omnitrinxopenimage.png';
import opening from '../omnitrix/omnitrixopengif.gif';
import losango from '../omnitrix/omnitrixlosango.png';
import chama from '../omnitrix/aliens/chama.png';
import xlr8 from '../omnitrix/aliens/xlr8.png';
import diamante from '../omnitrix/aliens/diamante.png';
import massacinzenta from '../omnitrix/aliens/massa_cinzenta.png'
import fantasmatico from '../omnitrix/aliens/fantasmatico.png'
import ultra_t from '../omnitrix/aliens/ultra_t.png'
import aquatico from '../omnitrix/aliens/aquatico.png'
import quatro_bracos from '../omnitrix/aliens/four_arms.png'
import insectoide from '../omnitrix/aliens/insectoide.png'
import besta from '../omnitrix/aliens/besta.png'
import person from '../omnitrix/luquinhas.png';
import soundEffect from '../omnitrix/omnitrixsoundeffects.mp3';
import omnitrixInUse from '../omnitrix/omnitrixinuse.png'
import omnitrixdescarregando from '../omnitrix/omnitrixdescarregando.gif'
import omnitrixdescarregadostatic from '../omnitrix/omnitrixdescarregadostatic.png'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'


export default function Omnitrix() {

  const [open, setOpen] = useState(initial);
  const [alien, setAlien] = useState();
  const [argolaClass, setArgolaClass] = useState(styles.argola); // Initial class
  const audioRef = useRef(null);
  const MySwal = withReactContent(Swal)
  const navigate = useNavigate();


  const playTimeXToY = (timeX, timeY) => {
    audioRef.current.currentTime = timeX; // Define o tempo de início para 3 segundos
    audioRef.current.play();

    setTimeout(() => {
      audioRef.current.pause();
      audioRef.current.currentTime = 3; // Reinicia o áudio para o início (3 segundos)
    }, timeY); // 3000 milissegundos = 3 segundos
  };

  const customAlert = (title, text, icon, confirmButton, redirectRoute) => {
    MySwal.fire({
      title: title,
      text: text,
      icon: icon,
      confirmButtonText: confirmButton
    }).then((result) => {
      if (result.isConfirmed) {
        if (redirectRoute) {
          navigate(redirectRoute);
        }
      }
    });
  };


  function rotateArgola() {
    setArgolaClass(styles.argola_rotate);
    setTimeout(() => {
      setArgolaClass(styles.argola);
    }, 500);
  }

  function activate() {
    if (open === opening) {
      return;
    } else if (open === initial) {
      setOpen(opening);
      playTimeXToY(3, 1000);
      setTimeout(() => {
        setOpen(losango);
        setAlien(chama);
        // Chama a função para tocar do segundo 3 ao 6 do áudio
        // Altera a classe da argola para 'styles.rotate'
      }, 600);
    }
  }

  function transform()
  {
    playTimeXToY(8,2500)
    setOpen(omnitrixInUse)
    setAlien(null)   
  }

  function unTransform()
  {
    playTimeXToY(13,5000)
    setOpen(omnitrixdescarregando)
    setTimeout(() => {
        setOpen(omnitrixdescarregadostatic)
    }, 5000);
    setTimeout(() => {
        setOpen(initial)
        playTimeXToY(3,1000)
        customAlert('Nova área desbloqueada!', 'Gostaria de ir?', 'success', 'Bora!', '/surprise');

    }, 10000);
  }

  function selectAlien() {
    if (open === initial) {
        console.log('relogio fechado');
    } else if (open === losango) {
        console.log('relogio aberto');
        rotateArgola();
        playTimeXToY(5, 1000);

        if (alien === chama) {
            setAlien(xlr8);
        } else if (alien === xlr8) {
            setAlien(diamante);
        } else if (alien === diamante) {
            setAlien(massacinzenta);
        } else if (alien === massacinzenta) {
            setAlien(fantasmatico);
        } else if (alien === fantasmatico) {
            setAlien(ultra_t);
        } else if (alien === ultra_t) {
            setAlien(aquatico);
        } else if (alien === aquatico) {
            setAlien(quatro_bracos);
        } else if (alien === quatro_bracos) {
            setAlien(insectoide);
        } else if (alien === insectoide) {
            setAlien(besta);
        } else if (alien === besta) {
            setAlien(person);
        }else if(alien === person)
        {
            transform();
            setTimeout(() => {
                unTransform();
            }, 5000);
        }
        } else {
            setAlien(chama);
        }
    }



  return (
    <>
      <div className={styles.omnitrix}>
        <div className={styles.base}>
          <div className={`${styles.diskpart} ${styles['esq-super']}`}></div>
          <div className={`${styles.diskpart} ${styles['esq-inf']}`}></div>
          <div className={`${styles.diskpart} ${styles['dir-super']}`}></div>
          <div className={`${styles.diskpart} ${styles['dir-inf']}`}></div>
          <audio ref={audioRef} src={soundEffect} />
          <div className={styles.disco}>
          <img src={open} onClick={activate} className={styles.logo} alt="Logo"></img>
          <img src={alien} className={styles.alien} onClick={selectAlien}></img>
          </div>
          <div className={styles['btn-horizontal']}>
            <div className={styles['btn-suporte']}></div>
          </div>
          <div className={styles.pulseira}></div>
          <div className={styles['anel-exterior']}>
            <div className={styles.divisao}></div>
          </div>
        </div>
      </div>

    </>
  );
}
