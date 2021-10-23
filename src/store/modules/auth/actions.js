import auth from '@/api/auth'

const actions = {
  async getTokenBnet ({ commit }) {
    commit(`setTokenBnet`, await auth.getTokenBnet())
  },
  async getTokenWcl ({ commit }) {
    commit(`setTokenWcl`, await auth.getTokenWcl())
  }
}

export default actions
