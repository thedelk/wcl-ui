import { createStore } from 'vuex'
import persistState    from 'vuex-persistedstate'
import auth            from './modules/auth'

const store = createStore({
  plugins: [persistState()],
  modules: { auth }
})

export default store
