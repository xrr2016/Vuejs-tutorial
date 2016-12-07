import * as types from './mutation-types'

export default {
  [types.ADD_TOTAL_TIME](state,time){
    state.totalTime = state.totalTime + time
  },
  [types.DEC_TOTAL_TIME](state,time){
    state.totalTime = state.totalTime - time
    if(state.totalTime <= 0){
      state.totalTime = 0
    }
  },
  [types.SAVE_PLAN](state,plan){
    const avatar = 'https://sfault-avatar.b0.upaiyun.com/247/437/2474377559-57ecb0ecc1038_huge256'
    state.list.push(
      Object.assign({
        name:'someone',
        avatar:avatar
      },plan)
    )
  },
  [types.DELETE_PLAN](state,idx){
    state.list.splice(idx,1)
  }
}
