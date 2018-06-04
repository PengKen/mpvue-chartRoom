
export function HANDLE_LOGIN (state, newUserInfo) {
  state.user = newUserInfo
}

export function HANDLE_AUTHORIZATION_TOKEN (state, token) {
  state.token = token
}

export function HANDLE_NEIGHBORS (state, neighbors) {
  neighbors.forEach(item => {
    state.neighbors.set(item['_id'], item)
  })
}
