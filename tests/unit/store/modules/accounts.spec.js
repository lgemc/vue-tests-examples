import accounts from "@/store/modules/accounts";

describe('accounts module actions', () => {
    it('set current user', () => {
        const state = {
            currentUser: {}
        }

        const user = {userName: "John Doe"}
        accounts.mutations.setCurrentUser(state, user)
        expect(state.currentUser).toStrictEqual(user)
    })

    it('add user', () => {
        const state = {
            users: []
        }

        const user = {userName: "John Doe"}
        accounts.mutations.addUser(state, user)
        expect(state.users).toHaveLength(1)
        expect(state.users[0]).toStrictEqual(user)
    })
})