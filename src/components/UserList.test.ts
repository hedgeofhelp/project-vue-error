import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import UserList from './UserList.vue'

describe('UserList.vue', () => {
  it('renders component', () => {
    const wrapper = mount(UserList)
    expect(wrapper.text()).toContain('Lista użytkowników')
  })
})
