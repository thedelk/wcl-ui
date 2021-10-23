import store        from '@/store'
import { buildSdk } from '@rpglogs/api-sdk/dist/tsc/main'

export default buildSdk(store.getters[`auth/tokenWcl`])
