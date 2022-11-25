export const state = () => ({
    preloading: true,
    content: false,
    menu: false,
    booking: false,
    secret: false,
    muted: true,
    background: true,
})
export const mutations = {
    tglSecret(state) {state.secret = !state.secret},
    tglMenu(state) {state.menu = !state.menu},
    tglBooking(state) {state.booking = !state.booking},
    tglPreloading(state) {state.preloading = !state.preloading},
    tglContent(state) {state.content = !state.content},
    tglMuted(state) {state.muted = !state.muted},
    tglBackground(state) {state.background = !state.background}
}
export const actions = {
    actSecret({ commit }) {commit('tglSecret')},
    actMenu({ commit }) {commit('tglMenu')},
    actBooking({ commit }) {commit('tglBooking')},
    actPreloading({ commit }) {commit('tglPreloading')},
    actContent({ commit }) {commit('tglContent')},
    actMuted({ commit }) {commit('tglMuted')},
    actBackground({ commit }) {commit('tglBackground')}
}
export const getters = {
    getSecret(state) {return state.secret},
    getMenu(state) {return state.menu},
    getBooking(state) {return state.booking},
    getPreloading(state) {return state.preloading},
    getContent(state) {return state.content},
    getMuted(state) {return state.muted},
    getBackground(state) {return state.background}
}
