import { RRSS, type Speaker } from "~/types"
import alvaro from '~/assets/people/alvaro.jpg'
import valeria from '~/assets/people/valeria.jpeg'
import cris from '~/assets/people/cris.jpg'
import abel from '~/assets/people/abel.jpg'
import sergio from '~/assets/people/sergio.jpeg'
import tonet from '~/assets/people/tonet.png'
import tebo from '~/assets/people/tebo.png'
import mario from '~/assets/people/mario.jpg'

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
    talkName: 'Como hace un asado malditooo',
    name: 'demo dasd',
    detail: 'COndeasdaisdjasodias asdaskldjasdj lkasdlaks jdlkasj lasjdlkasdjlaksdj lkasjdl asjd',
    imageSrc: image,
    time: {
      end: new Date(),
      start: new Date()
    },
    keynote: true
  },
  {
    talkName: 'Como hace un asado malditooo',
    name: 'Dmeo Demo',
    detail: 'COndeasdaisdjasodias asdaskldjasdj lkasdlaks jdlkasj lasjdlkasdjlaksdj lkasjdl asjd',
    imageSrc: image,
    time: {
      end: new Date(),
      start: new Date()
    }
  },
  {
    talkName: 'Como hacer un asado malditooo asd',
    name: 'Going Deeper',
    detail: `Mollit voluptate dolor id consequat. Sunt ullamco qui ad commodo. Ut duis excepteur deserunt duis esse ad aliquip pariatur officia excepteur. Ex excepteur reprehenderit duis excepteur commodo quis eu aliqua fugiat irure et aute nostrud anim. Labore consequat ipsum commodo aliquip esse fugiat deserunt ex voluptate laboris culpa veniam. Id aliquip commodo commodo ut est sunt enim id velit sint cillum aute sunt consectetur. Velit sunt nulla duis non qui incididunt voluptate non Lorem mollit.

Enim et mollit in aute nisi non. Labore sunt magna consequat id duis excepteur pariatur. Et nulla non incididunt aute ut ex id et non culpa ipsum. Est ea non dolor deserunt Lorem culpa. Qui eiusmod irure sit elit deserunt tempor ad cillum mollit. Labore magna dolor mollit sunt ut minim do ipsum irure. Commodo Lorem anim nisi consectetur velit mollit elit deserunt veniam velit ad. Nostrud Lorem laboris nostrud amet cupidatat adipisicing cillum exercitation ad nulla cillum amet elit. Veniam in deserunt esse occaecat nulla non proident.

Reprehenderit velit consequat Lorem labore ipsum aute occaecat enim mollit est mollit. Voluptate adipisicing qui et nulla ex eu ea enim officia nostrud irure ex irure. Est veniam excepteur id commodo quis do veniam duis Lorem dolore enim fugiat nisi. Nisi ut veniam aute cupidatat excepteur nisi in aliqua ipsum quis. Esse magna id dolor sit excepteur. Reprehenderit elit aliquip laborum deserunt exercitation. Non ut laborum occaecat aliquip nostrud. Exercitation dolore aliquip mollit commodo ex aliqua mollit.

Consectetur mollit quis excepteur deserunt cupidatat aute exercitation excepteur occaecat ad anim. Incididunt ex irure excepteur commodo mollit ipsum est sint. Laboris irure reprehenderit ex dolore. Laboris do pariatur reprehenderit exercitation. Dolor quis sit qui velit deserunt consectetur deserunt laborum quis reprehenderit qui. Non duis Lorem voluptate non Lorem dolore veniam non esse deserunt laborum elit laboris minim.

Adipisicing voluptate dolor dolore id mollit. Magna nostrud laboris cupidatat esse ea velit esse irure esse duis officia et Lorem. Magna minim sint excepteur elit dolore. Commodo proident ex pariatur elit sit do aliquip qui duis aliqua. Aliquip nulla velit cupidatat incididunt sint aliqua esse id ad. Quis exercitation aliquip incididunt aute laborum dolore et proident est quis. Pariatur irure cupidatat ea in. Mollit deserunt duis in ea mollit irure irure.

Id elit cupidatat cupidatat sunt non ullamco reprehenderit duis voluptate id. Laboris aliqua commodo fugiat enim occaecat culpa proident ex et culpa reprehenderit sit magna. Do eu nostrud amet sunt laboris quis sint sint laborum Lorem quis ea pariatur ullamco. Veniam reprehenderit sunt in irure deserunt deserunt laboris. Elit eiusmod ea nisi consectetur sint sunt enim nostrud do. Ullamco ex cupidatat aliquip ut ea nostrud deserunt. Dolore velit reprehenderit quis veniam sint aliquip voluptate adipisicing duis cillum quis eu minim. Consectetur Lorem enim excepteur id mollit ipsum eu mollit est dolore occaecat.

Reprehenderit nulla cillum minim ad consequat nisi amet nisi deserunt veniam mollit. Velit eiusmod ea eiusmod amet exercitation laboris culpa eiusmod labore proident amet anim incididunt. Ut nisi ipsum sit cillum labore officia. Et esse elit ea commodo sunt elit nisi aliqua culpa tempor sint ea. Id consectetur officia Lorem consectetur ipsum nulla do minim sint adipisicing dolore cillum adipisicing ad. Ad ullamco voluptate commodo qui aliquip ad excepteur eiusmod aute esse esse. Et cillum proident enim amet id nulla minim enim consequat culpa laboris pariatur.`,
    imageSrc: image,
    time: {
      end: new Date(),
      start: new Date()
    }
  }
]

export {
  speakersRoomA,
  speakersRoomB
}