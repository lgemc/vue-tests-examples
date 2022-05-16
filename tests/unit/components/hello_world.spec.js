import { shallowMount, createLocalVue, mount } from '@vue/test-utils'
import HelloWorld from '@/components/HelloWorld.vue'
import { createStore } from 'vuex'

describe('HelloWorld.vue', () => {
  const userName = 'lmanrique'

  let store = createStore({
   modules: {
     accounts: {
      namespaced: true,
      state: {
        currentUser: {userName},
      },
  }}
  })

  it('[testing with real storage] renders props.msg when passed', () => {
    const msg = 'new message'
    const wrapper = shallowMount(HelloWorld, {
      global: {
        plugins: [store]
      },
      props: { msg }
    })

    expect(wrapper.text()).toMatch(msg)
    expect(wrapper.text()).toMatch(userName)
  })

  it('[testing with a mocked storage] click to set user should call set current user', async () => {
    let accounts = 
    {
      namespaced: true,
      state: {
        currentUser: {userName},
        users: {}
      },
      mutations: {
        setCurrentUser: jest.fn(),
        addUser: jest.fn()
      }
  }
    let store = createStore({
      modules: {
        accounts,
     }})

    const msg = 'new message'
    const wrapper = mount(HelloWorld, {
      global: {
        plugins: [store],
      },
      props: { msg }
    })

    const currentUserName = 'John Doe'
    const currentUserCountry = 'Colombia'

    wrapper.vm.currentUserName = currentUserName
    wrapper.vm.currentUserCountry = currentUserCountry

    const updateUserBtn = wrapper.find('#btn-set-user')
    await updateUserBtn.trigger('click')

    expect(accounts.mutations.setCurrentUser.mock.calls[0][1]).toStrictEqual({"country": "Colombia", "userName": "John Doe"})
  })
})
