export default {
  INCREMENT: ({ dispatch, state }) => {
    dispatch({
      type: 'INCREMENT',
      payload: 1
    })
  }
}
