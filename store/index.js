export const state = () => ({
    preloading: true,
    content: false,
    menu: false,
    submenu: false,
    muted: false,
    background: true,
})
export const mutations = {
    tglMenu(state) {state.menu = !state.menu},
    tglSubMenu(state) {state.submenu = !state.submenu},
    tglPreloading(state) {state.preloading = !state.preloading},
    tglContent(state) {state.content = !state.content},
    tglMuted(state) {state.muted = !state.muted},
    tglBackground(state) {state.background = !state.background}
}
export const actions = {
    actMenu({ commit }) {commit('tglMenu')},
    actSubMenu({ commit }) {commit('tglSubMenu')},
    actPreloading({ commit }) {commit('tglPreloading')},
    actContent({ commit }) {commit('tglContent')},
    actMuted({ commit }) {commit('tglMuted')},
    actBackground({ commit }) {commit('tglBackground')}
}
export const getters = {
    getMenu(state) {return state.menu},
    getSubMenu(state) {return state.submenu},
    getPreloading(state) {return state.preloading},
    getContent(state) {return state.content},
    getMuted(state) {return state.muted},
    getBackground(state) {return state.background}
}
