import * as actions from './types';

//Add todo
export const addTodo =
  (data) =>
  async (dispatch, getState, { getFirestore }) => {
    const firestore = getFirestore();
    const userId = getState().firebase.auth.uid;
    dispatch({ type: actions.ADD_TODO_START });
    try {
      const res = await firestore.collection('todos').doc(userId).get();
      const newTodo = {
        id: new Date().valueOf(),
        todo: data.todo,
      };
      if (!res.data()) {
        console.log('got here');
        firestore
          .collection('todos')
          .doc(userId)
          .set({
            todos: [newTodo],
          });
      } else {
        firestore
          .collection('todos')
          .doc(userId)
          .update({
            todos: [...res.data().todos, newTodo],
          });
      }
      dispatch({ type: actions.ADD_TODO_SUCCESS });
      return true;
    } catch (err) {
      dispatch({ type: actions.ADD_TODO_FAIL, payload: err.message });
    }
  };
