import { RRSS } from './../src/types';
import type { Workshopper } from "~/types";
import eduardoMamni from '~/assets/people/eduardo_mamani.png'
import estebanLima from '~/assets/people/esteba_lima.jpg'
import joseMoruno from '~/assets/people/jose_moruno.png'
import miguelMurillo from '~/assets/people/miguel_murillo.jpg'
import claudia from '~/assets/people/claudia.jpeg'

const workshoppers: Workshopper[] = [
  {
    talkName: 'Los verdaderos hackers usan VIM, pero ¿Cómo?',
    name: 'Miguel Murillo Bernal',
    detail: 'Si hay una terminal está tiene Vim. Vim es un editor de texto basado en terminal altamente configurable que te permite tener superpoderes sobre todo archivo de texto que puedas encontrar. En este Workshop aprenderemos como utilizar VIM sin morir en el proceso.',
    imageSrc: miguelMurillo.src,
    time: {
      start: '09:00',
      end: '10:30',
    },
    keynote: false,
    socialNetworks: [
      {
        type: RRSS.github,
        url: 'https://github.com/M1gueldev'
      }
    ]
  },
  {
    talkName: 'Burp Suite: The Swiss Army Knife for Developers and Non-Developers: A Practical Pentesting Workshop',
    name: 'Jose Moruno Cadima (sniferl4bs)',
    detail: 'Es un taller práctico que está diseñado para desarrolladores y no desarrolladores, los que quieran conocer mas sobre la herramienta, brindando las habilidades esenciales para identificar vulnerabilidades en aplicaciones web. Aprenderás a utilizar Burp Suite, una navaja alemana.',
    imageSrc: joseMoruno.src,
    time: {
      start: '10:40',
      end: '12:10',
    },
    keynote: true,
    socialNetworks: [
      {
        type: RRSS.twitter,
        url: 'https://twitter.com/sniferl4bs'
      },
      {
        type: RRSS.github,
        url: 'https://github.com/snifer'
      },
      {
        type: RRSS.youtube,
        url: 'https://youtube.com/sniferl4bs'
      }
    ]
  },
  {
    talkName: '🥪 Solicita tu refrigerio gratuito 🍔',
    name: '',
    detail: '',
    imageSrc: '',
    special: true,
    time: {
      start: '12:00',
      end: '13:00'
    },
  },
  {
    talkName: 'Docker para principiantes',
    name: 'Esteban Lima',
    detail: 'Docker desde 0, para llevar al mundo de los contenedores tus aplicaciones.',
    imageSrc: estebanLima.src,
    time: {
      start: '13:00',
      end: '14:30',
    },
    keynote: true,
    socialNetworks: [
      {
        type: RRSS.twitter,
        url: 'https://twitter.com/tebot'
      },
    ]
  },
  {
    talkName: 'John the ripper 101',
    name: 'Claudia Ureña',
    detail: 'Introducción a seguridad de password, auditoría y recuperación de  password.',
    imageSrc: claudia.src,
    time: {
      start: '14:40',
      end: '16:10',
    },
    keynote: false,
    socialNetworks: [
      {
        type: RRSS.web,
        url: 'https://www.researchgate.net/profile/Claudia-Urena'
      },
    ]
  },
  {
    talkName: 'Feature Engineering Essentials',
    name: 'Luis Eduardo Mamani',
    detail: 'Sumergete en la Ciencia de datos desde los fundamentos de la Ingenieria de Caracteristicas con Python.',
    imageSrc: eduardoMamni.src,
    time: {
      start: '16:20',
      end: '17:50',
    },
    keynote: false,
    socialNetworks: [
      {
        type: RRSS.linkedin,
        url: 'https://www.linkedin.com/in/luismaeduardo/'
      },
      {
        type: RRSS.github,
        url: 'https://github.com/eddindata'
      },
    ]
  },
];


export {
  workshoppers
}