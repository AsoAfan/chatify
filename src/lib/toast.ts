import { createToastInterface, POSITION } from 'vue-toastification'

export const toast = createToastInterface({
  position: POSITION.TOP_RIGHT,
  timeout: 3000,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  draggablePercent: 0.6,
  showCloseButtonOnHover: true,
  maxToasts: 2,
})
