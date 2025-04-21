import { useFetch } from '@vueuse/core'
import { ref } from 'vue'

export function useApi<T = unknown>(url: string) {
  const data = ref<T | null>(null)
  const errorMessage = ref<string | null>(null)

  const {
    isFetching,
    onFetchResponse,
    onFetchError,
    execute,
  } = useFetch(url, {
    immediate: false,
    refetch: false,
  }).get().json<T>()

  onFetchError((err) => {
    errorMessage.value = err.message || 'Oops, something went wrong!'
  })

  onFetchResponse((response) => {
    if (!response.ok) {
      errorMessage.value = `Błąd ${response.status}: ${response.statusText}`
    }
  })

  const fetchData = async () => {
    errorMessage.value = null
    const res = await execute()

    if (res.error) {
      errorMessage.value = res.error.message || 'Oops, something went wrong!'
      return
    }
    if (res && res.data && res.data.value) {
      data.value = res.data.value
    }
  }

  return {
    data,
    loading: isFetching,
    errorMessage,
    fetchData,
  }
}
