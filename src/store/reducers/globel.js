export default function setGlobel(state = {}, action) {
  switch (action.type) {
    case 'SET_GLOBEL':
      return action.globel;
    default:
      return state;
  }
}
