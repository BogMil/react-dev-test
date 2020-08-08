import {
  NAMESPACE,
  SET_COUNTRY_ID,
  SET_LOADING,
  ADD_CONTACTS,
  RESET_MODAL_STATE,
  RESET_CONTACTS,
  SET_QUERY,
} from "./modal.actions";

const initialState = () => {
  return {
    loading: false,
    contacts: [],
    pageNum: 1,
    total: 0,
    query: "",
    showOnlyEvenContacts: false,
  };
};

export default function reducer(state = initialState(), action) {
  if (action.namespace != NAMESPACE) return state;

  switch (action.type) {
    case SET_LOADING:
      let { value } = action.payload;
      return {
        ...state,
        loading: value,
      };

    case SET_QUERY:
      let { query } = action.payload;
      return {
        ...state,
        query,
      };

    case ADD_CONTACTS:
      let { contacts, nextPageNumber, totalRecords } = action.payload;
      return {
        ...state,
        contacts: [...state.contacts, ...contacts],
        pageNum: nextPageNumber,
        total: totalRecords,
      };

    case RESET_MODAL_STATE:
      return initialState();

    case RESET_CONTACTS:
      return {
        ...state,
        contacts: [],
        pageNum: 1,
        total: 0,
      };

    case SET_COUNTRY_ID:
      let { countryId } = action.payload;
      return {
        ...state,
        countryId,
      };

    default:
      return state;
  }
}
