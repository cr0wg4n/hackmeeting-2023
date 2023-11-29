import { RRSS, SocialNetwork } from './../src/types';
import type { Village } from "~/types"

const image = 'https://media.istockphoto.com/id/1224728242/es/vector/mascota-animal-para-el-equipo-deportivo.jpg?s=612x612&w=0&k=20&c=vxKKRAOf3AMZOqTJN_HfTt0Yp4UbKEsYHQ6F1TGzZaw='

const villages: Village[] = [
  {
    name: 'IA Hacking',
    groups: [
      {
        logo: image,
        name: 'Bolivias',
        url: '',
        socialNetworks: [
          {
            type: RRSS.facebook, 
            url: ''
          },
          {
            type: RRSS.instagram, 
            url: ''
          }
        ]
      },
      {
        logo: image,
        name: 'Demo Demo',
        url: '',
        socialNetworks: [
          {
            type: RRSS.facebook, 
            url: ''
          },
          {
            type: RRSS.instagram, 
            url: ''
          }
        ]
      }
    ]
  },
  {
    name: 'Social Hacking',
    groups: [
      {
        logo: image,
        name: 'Bolivia',
        url: '',
        socialNetworks: [
          {
            type: RRSS.facebook, 
            url:''
          }
        ]
      }
    ]
  },
  {
    name: 'Hardware Hacking',
    groups: [
      {
        logo: image,
        name: 'Bolivia',
        url: '',
        socialNetworks: [
          {
            type: RRSS.facebook, 
            url:''
          }
        ]
      }
    ]
  },
  {
    name: 'Software Hacking',
    groups: []
  }
]

export { villages } 