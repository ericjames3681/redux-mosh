import store from "./store";

const unsubscribe = store.subscribe(() => {
  console.log(
    "Store changed! (This is where react re-renders UI)",
    store.getState()
  );
});

store.dispatch({
  type: "bugAdded",
  payload: {
    description: "Bug1",
  },
});

unsubscribe();

store.dispatch({
  type: "bugRemoved",
  payload: {
    id: 1,
  },
});
console.log(store.getState());
