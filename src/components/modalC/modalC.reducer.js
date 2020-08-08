import { NAMESPACE, OPEN, CLOSE } from "./modalC.actions";

const initialState = () => {
  return {
    contact: {},
    show: false,
  };
};

export default function reducer(state = initialState(), action) {
  if (action.namespace != NAMESPACE) return state;

  switch (action.type) {
    case OPEN:
      let { contact } = action.payload;
      return {
        ...state,
        show: true,
        contact,
      };

    case CLOSE:
      return initialState();

    default:
      return state;
  }
}
