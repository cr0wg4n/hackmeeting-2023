import { SocialNetwork } from './../src/types';
import { RRSS, type Speaker } from "~/types"
import alvaro from '~/assets/people/alvaro.jpg'
import valeria from '~/assets/people/valeria.jpeg'
import cris from '~/assets/people/cris.jpg'
import abel from '~/assets/people/abel.jpg'
import sergio from '~/assets/people/sergio.jpeg'
import tonet from '~/assets/people/tonet.png'
import tebo from '~/assets/people/tebo.png'
import mario from '~/assets/people/mario.jpg'
import ale from '~/assets/people/ale.png'
import luis from '~/assets/people/luis.jpg'
import marioCh from '~/assets/people/mario.png'
import confiared from '~/assets/sponsor/confiared.png'
import dh from '~/assets/people/dh.png'

const image = 'https://media.istockphoto.com/id/1224728242/es/vector/mascota-animal-para-el-equipo-deportivo.jpg?s=612x612&w=0&k=20&c=vxKKRAOf3AMZOqTJN_HfTt0Yp4UbKEsYHQ6F1TGzZaw='

const speakersRoomA: Speaker[] = [
  {
    talkName: 'El Alquimista de Datos: Creando transmutaciones de información',
    name: 'Alvaro Viamont Rico',
    detail: '¿Te has preguntado cómo aplicar la alquimia a los datos? En esta charla, exploraremos cómo Python puede actuar como un medio de transmutación, transformando datos comunes en información valiosa y reveladora. Descubre las transmutaciones mágicas que puedes lograr en tu análisis de datos.',
    imageSrc: alvaro.src,
    time: {
      start: '9:00',
      end: '9:50'
    },
    keynote: false,
    socialNetworks: [
      {
        type: RRSS.twitter,
        url: 'https://twitter.com/AlvaroViamont'
      },
      {
        type: RRSS.instagram,
        url: 'https://www.instagram.com/alvaroviamont/'
      },
      {
        type: RRSS.linkedin,
        url: 'https://www.linkedin.com/in/alvaroviamontrico/'
      }
    ]
  },
  {
    talkName: 'Tecnologías para el bien común: Experiencias en el Laboratorio de Tecnologías Sociales',
    name: 'Valeria Peredo',
    detail: 'Definiremos qué son las tecnologías sociales y qué principios que yacen detrás se su construcción, compartiendo varios proyectos desarrollados en el LabTecnoSocial.',
    imageSrc: valeria.src,
    time: {
      start: '10:00',
      end: '10:50'
    },
    keynote: true,
    socialNetworks: [
      {
        type: RRSS.web,
        url: 'https://valeipr.github.io/mi-portafolio/'
      },
      {
        type: RRSS.twitter,
        url: 'https://twitter.com/ValeriaPeredo6'
      },
      {
        type: RRSS.facebook,
        url: 'https://www.facebook.com/valeriaivanna.peredorodriguez'
      }
    ]
  },
  {
    talkName: 'Las cosas locas que se hace en Bolivia',
    name: 'Confiared',
    detail: '',
    imageSrc: confiared.src,
    special: true,
    time: {
      start: '10:50',
      end: '11:10'
    },
    socialNetworks: [
      {
        type: RRSS.web,
        url: 'https://www.comteco.com.bo/'
      }
    ]
  },
  {
    talkName: 'Mas allá de phishig tradicional, saltando protecciones de 2FA',
    name: 'Cristhian Lima',
    detail: 'Los ataques de phishing se están redefiniendo, permitiendo a los atacantes capturar no solo las credenciales, sino también burlar la autenticación de 2 factores. Analizaremos estas técnicas, las capacidades y sus usos por parte de actores malintencionados.',
    imageSrc: cris.src,
    time: {
      start: '11:10',
      end: '12:00'
    },
    keynote: true,
    socialNetworks: [
      {
        type: RRSS.facebook,
        url: 'https://www.facebook.com/crhystamils'
      },
      {
        type: RRSS.twitter,
        url: 'https://twitter.com/crhystamil'
      },
      {
        type: RRSS.linkedin,
        url: 'https://www.linkedin.com/in/crhystamil'
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
    talkName: 'Hablando de Criptografía Cuántica en un HackMeeting “Ciberseguridad a prueba de espías”',
    name: 'Ibar Mario Vásquez Ramos',
    detail: 'La criptografía cuántica, hoy se presenta como el futuro de la ciberseguridad debido a su capacidad para proteger la información de manera más sólida y confiable. A diferencia de los métodos tradicionales de criptografía.',
    imageSrc: mario.src,
    time: {
      start: '13:00',
      end: '13:50'
    },
    keynote: false,
    socialNetworks: [
      {
        type: RRSS.linkedin,
        url: 'https://www.linkedin.com/in/ibarmario/'
      }
    ]
  },
  {
    talkName: 'Detección de vulnerabilidades con integración y despliegue continuo',
    name: 'Abel Diaz Castillo',
    detail: 'La detección de vulnerabilidades en la integración y despliegue continuo (CI/CD) es un proceso esencial que utiliza herramientas automáticas para analizar el código fuente y sus dependencias en busca de posibles debilidades de seguridad, como fallos de autenticación o configuración.',
    imageSrc: abel.src,
    time: {
      start: '14:00',
      end: '14:50'
    },
    keynote: true,
    socialNetworks: [
      {
        type: RRSS.twitter,
        url: 'https://twitter.com/AbelDiaz_System'
      }
    ]
  },
  {
    talkName: 'Rin Rin Raja 2.0, liberando el poder de Flipper Zero y como no ir a la cárcel',
    name: 'Sergio Guillen',
    detail: 'El objetivo de la charla es la de mostrar Flipper Zero como una herramienta de hacking. Inicialmente con ejemplos básicos probando la herramienta como caja negra y luego subir el nivel y entender lo que está realizando por detrás.',
    imageSrc: sergio.src,
    time: {
      start: '15:00',
      end: '15:50'
    },
    keynote: false,
    socialNetworks: [
      {
        type: RRSS.twitter,
        url: 'https://twitter.com/donkeysharp'
      },
      {
        type: RRSS.github,
        url: 'https://github.com/donkeysharp'
      },
      {
        type: RRSS.web,
        url: 'https://blog.donkeysharp.xyz'
      }
    ]
  },
  {
    talkName: 'TechPulse: La Vibración Innovadora de Digital Harbor',
    name: 'Digital Harbor',
    detail: '',
    imageSrc: dh.src,
    special: true,
    time: {
      start: '15:50',
      end: '16:10'
    },
    socialNetworks: [
      {
        type: RRSS.web,
        url: 'https://digitalharborbolivia.com/'
      }
    ]
  },
  {
    talkName: 'Analisis de Tráfico de Red',
    name: 'Tonet Jallo',
    detail: 'Se trata de metodos de analisis la información que transita por la red y lo sencillo que puede resultar ser victima de robo de información a travez de la misma.',
    imageSrc: tonet.src,
    time: {
      start: '16:10',
      end: '17:00'
    },
    keynote: false,
    socialNetworks: [
      {
        type: RRSS.twitter,
        url: 'https://twitter.com/tonet666p'
      },
      {
        type: RRSS.github,
        url: 'https://github.com/tonet666p'
      },
      {
        type: RRSS.web,
        url: 'https://tonet666p.wordpress.com/'
      }
    ]
  },
  {
    talkName: 'La necesidad de hackers en el gobierno v 1.3',
    name: 'Esteban Lima ',
    detail: 'En esta charla recorremos las formas de hacer cambios en las diversas temáticas que trabajan los gobiernos y entender porque cuesta tanto el cambio.',
    imageSrc: tebo.src,
    time: {
      start: '17:10',
      end: '18:00'
    },
    keynote: true,
    socialNetworks: [
      {
        type: RRSS.twitter,
        url: 'https://twitter.com/tebot'
      }
    ]
  },
]

const speakersRoomB: Speaker[] = [
  {
    talkName: 'Como freír tu Frambuesa Pi con modelos IA self-hosted',
    name: 'Luis Mita, Melany Estevez',
    detail: 'Raspberry Pis vs modelos de IA, 100% offline. Conoce con nosotros cómo es el rendimiento en tiempo real, y qué podemos hacer esto en la vida real.',
    imageSrc: luis.src,
    time: {
      start: '10:00',
      end: '10:50'
    },
    keynote: false
  },
  {
    talkName: 'Ingeniería inversa a pantallas de cristal líquido',
    name: 'Alejandro Oquendo',
    detail: 'Descubre los secretos detrás de las pantallas de cristal líquido en esta charla sobre ingeniería inversa. Aprende a controlar un LCD desde Arduino, desafiándote a reutilizar componentes electrónicos y desarrollar nuevas habilidades.',
    imageSrc: ale.src,
    time: {
      start: '11:10',
      end: '12:00'
    },
    socialNetworks: [
      {
        type:  RRSS.github,
        url: 'https://github.com/rd-o'
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
    talkName: 'Estado de la regulación de la inteligencia artificial en Bolivia y el mundo',
    name: 'Mario R. Durán Chuquimia',
    detail: 'Los Estados han empezado a regular aspectos relacionados con la inteligencia artificial, la conferencia propone realizar una revisión de los aspectos regulatorios de la inteligencia artificial en el mundo y Bolivia.',
    imageSrc: marioCh.src,
    time: {
      start: '15:00',
      end: '15:50'
    },
    socialNetworks: [
      {
        type:  RRSS.twitter,
        url: 'https://twitter.com/mrduranch'
      }
    ]
  },
]

export {
  speakersRoomA,
  speakersRoomB
}