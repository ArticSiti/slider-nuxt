export const state = () =>{

}
export const mutations = {

}
export const actions = {
  async cat ({ commit }) {
    const ip = await this.$axios.$get(baseUrl)
    commit('SET_IP', ip)
  }
}
export  const  getters = {

}
