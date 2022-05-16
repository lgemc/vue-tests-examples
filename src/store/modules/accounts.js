const state = {
    users: [],
    currentUser: {}
}

const mutations = {
    setCurrentUser(state, user) {
        state.currentUser = user
    },
    addUser(state, user) {
        state.users.push(user)
    }
}

export default {
    namespaced: true,
    state,
    mutations
}