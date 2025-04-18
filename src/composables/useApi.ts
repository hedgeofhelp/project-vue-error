// import { ref } from 'vue'
// import { useErrorState } from '../stores/errorState'

// export function useApi<T = unknown>() {
//   const data = ref<T | null>(null)
//   const loading = ref(false)
//   const errorStore = useErrorState()

//   const fetchData = async (url: string) => {
//     loading.value = true
//     data.value = null
//     errorStore.clearError()

//     try {
//       const response = await fetch(url)
//       if (!response.ok) {
//         throw new Error(`Błąd ${response.status}: ${response.statusText}`)
//       }
//       data.value = await response.json()
//     } catch (error: any) {
//       errorStore.setError(error.message || 'Wystąpił nieznany błąd')
//     } finally {
//       loading.value = false
//     }
//   }

//   return { data, loading, fetchData }
// }
