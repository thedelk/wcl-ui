import api from '@/api'

const actions = {
  async getTokenBnet ({ commit }) {
    commit(`setTokenBnet`, await api.bnet.getToken())
  },
  async getTokenWcl ({ commit }) {
    commit(`setTokenWcl`, await api.wcl.getToken())
  }
}

export default actions