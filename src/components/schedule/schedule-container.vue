<script setup lang="ts">
import { ref} from 'vue'
import SocialNetwork from './social-network.vue'

interface Speaker {
  talkName: string
  name: string
  detail: string
  imageSrc: string
  time: {
    start: Date,
    end: Date
  },
  keynote?: boolean
}
const image = 'https://media.istockphoto.com/id/1224728242/es/vector/mascota-animal-para-el-equipo-deportivo.jpg?s=612x612&w=0&k=20&c=vxKKRAOf3AMZOqTJN_HfTt0Yp4UbKEsYHQ6F1TGzZaw='


const speakers = ref<Speaker[]>([
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
])
const itemsToShow = ref(new Set())
const showDetails = (id: number) => {
  if(itemsToShow.value.has(id)) {
    itemsToShow.value.delete(id)
  } else {
    itemsToShow.value.add(id)
  }
}
const getHour = (date: Date) => {
  return date.toString().slice(16,21)
}
</script>

<template>
  <table class="hm-table">
    <thead>
      <tr class="hm-table__title">
        <th>Speaker</th>
        <th>Charla</th>
        <th>Hora</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="speaker, index in speakers" class="relative">
        <td class="text-xs relative">
          <SocialNetwork class="absolute z-10 mt-2 left-2"/>
          <div class="flex flex-col">
            <div class="flex justify-center p-2 relative">
              <img :src="image" class="hm-table__image rounded-full">
              <div v-if="speaker.keynote" class="absolute bottom-0">
                <span class="text-3xs bg-primary px-2 rounded-lg font-semibold">
                  Keynote
                </span>
              </div>
            </div>
            <div class="text-center text-xxs">
              {{ speaker.name}}
            </div>
          </div>
        </td>
        <td class="text-xs">
          <div class="text-xs font-semibold text-center">{{ speaker.talkName }}</div>
          <div 
            class="text-center text-primary hover:cursor-pointer active:scale-105 select-none py-2 text-xxs"
            @click="showDetails(index)"
          >
            {{ !itemsToShow.has(index) ? '[ Más Detalle ]':'[ Menos Detalle ]' }}
          </div>
          <div v-if="itemsToShow.has(index)" class="text-xs text-justify opacity-80 max-w-xs">
            {{ speaker.detail }}
          </div>
        </td>
        <td class="text-xxs">
          <span class="font-semibold">{{ getHour(speaker.time.start) }}</span> a 
          <span class="font-semibold">{{ getHour(speaker.time.end) }}</span>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<style scoped>
.hm-table {
  width: 100%;
}
tr {
  @apply border-primary;
  border-width: 2px;
}
th, td {
  @apply p-4;
}
.hm-table__title {
  @apply text-secondary;
}
.hm-table__image {
  max-width: 60px !important;
  min-width: 40px !important;
}
</style>