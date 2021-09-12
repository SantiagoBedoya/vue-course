import * as actions from './actions'
import * as getters from './getters'
import * as mutations from './mutations'
import state from './state'

const journalModule = {
    namespaced: true,
    state,
    actions,
    getters,
    mutations,
}

export default journalModule;