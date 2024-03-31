// Utilities
import { defineStore } from 'pinia'

export const useAppStore = defineStore('app', {
  state: () => {
    return { 
      active: false,
      arr: [] 
    }
  },
  actions: {
    toggleBtn() {
      this.active = !this.active
    }
  }
})

// export const useQuestionStore = defineStore('quest', {
//   state: () => {
//     return { 
//       array: []
//     }
//   },
//   actions: {
//     async getData() {
//       try {
//         const response = await axios.get('')
//       }
//     }
//   }
// })
