import API from '@/utils/httpUtil'


async function HANDLE_LOGIN ({commit, state,dispatch}, info) {

  let data = await API('/logins', info, 'POST')
  commit('HANDLE_LOGIN',info)
  commit('HANDLE_AUTHORIZATION_TOKEN', data.token)
  console.log(state)
  dispatch('HANDLE_NEIGHBORS')

  return state
}

async function HANDLE_NEIGHBORS ({commit, state}, newNeighbors) {
  console.log("abc")
  let data = await API('/neighbors',{}, 'GET')
  commit('HANDLE_NEIGHBORS',data)
  return state
}



export { HANDLE_LOGIN,HANDLE_NEIGHBORS }
