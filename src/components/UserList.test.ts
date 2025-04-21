import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import ErrorBanner from '../components/ErrorBanner.vue'
import { errorState, setError, clearError } from '../stores/errorState.ts'

describe('ErrorBanner.vue', () => {
  it('does not render when there is no error', () => {
    clearError()
    const wrapper = mount(ErrorBanner)
    expect(wrapper.text()).not.toContain('✕')
  })

  it('renders when there is an error message', async () => {
    setError('Testowy błąd')
    const wrapper = mount(ErrorBanner)
    await wrapper.vm.$nextTick()

    expect(wrapper.text()).toContain('Testowy błąd')
    expect(wrapper.find('button').exists()).toBe(true)
  })

  it('clears error on button click', async () => {
    setError('Błąd do usunięcia')
    const wrapper = mount(ErrorBanner)
    await wrapper.vm.$nextTick()

    await wrapper.find('button').trigger('click')
    await wrapper.vm.$nextTick()

    expect(errorState.message).toBe('')
  })
})
