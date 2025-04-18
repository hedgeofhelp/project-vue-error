
import { reactive } from 'vue'

export const errorState = reactive({
  message: ''
})

export function setError(message: string) {
  errorState.message = message
}

export function clearError() {
  errorState.message = ''
}
