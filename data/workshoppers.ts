import type { Workshopper } from "~/types";

const image = 'https://media.istockphoto.com/id/1224728242/es/vector/mascota-animal-para-el-equipo-deportivo.jpg?s=612x612&w=0&k=20&c=vxKKRAOf3AMZOqTJN_HfTt0Yp4UbKEsYHQ6F1TGzZaw='

const workshoppers: Workshopper[] = [
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
];


export {
  workshoppers
}