import { getContacts } from "./modal.service";

export const OPEN = "OPEN";
export const CLOSE = "CLOSE";
export const SET_LOADING = "SET_LOADING";
export const ADD_CONTACTS = "ADD_CONTACTS";
export const RESET_CONTACTS = "RESET_CONTACTS";
export const SET_COUNTRY_ID = "SET_COUNTRY_ID";
export const RESET_MODAL_STATE = "RESET_MODAL_STATE";
export const SET_QUERY = "SET_QUERY";
export const RELOAD_MODAL = "RELOAD_MODAL";

export const NAMESPACE = "MODAL";

export function init(countryId) {
  return async (dispatch, getState) => {
    const { query } = getState().modal;

    let pageNum = 1;
    dispatch(setLoading(true));
    dispatch(resetContacts());

    let data = await getContactsData(pageNum, countryId, query);

    dispatch(addContacts(data._contactsArray, pageNum + 1, data.total));
    dispatch(setCountryId(countryId));
    dispatch(setLoading(false));
  };
}

export function reloadModal() {
  return async (dispatch, getState) => {
    const { query, countryId } = getState().modal;

    let pageNum = 1;
    dispatch(setLoading(true));
    dispatch(resetContacts());

    let data = await getContactsData(pageNum, countryId, query);

    dispatch(addContacts(data._contactsArray, pageNum + 1, data.total));
    dispatch(setLoading(false));
  };
}

export function fetchNextPage() {
  return async (dispatch, getState) => {
    const { pageNum, countryId, query } = getState().modal;

    dispatch(setLoading(true));

    let data = await getContactsData(pageNum, countryId, query);

    dispatch(addContacts(data._contactsArray, pageNum + 1, data.total));
    dispatch(setLoading(false));
  };
}

async function getContactsData(pageNum, countryId, query) {
  let data = (await getContacts(pageNum, countryId, query)).data;
  let _contacts = data.contacts;
  let _contactsArray = Object.keys(_contacts).map((key) => _contacts[key]);

  return { _contactsArray, total: data.total };
}

export function setLoading(value) {
  return {
    namespace: NAMESPACE,
    type: SET_LOADING,
    payload: { value },
  };
}

export function setQuery(query) {
  return async (dispatch) => {
    dispatch(resetContacts());
    dispatch(_setQuery(query));
    dispatch(fetchNextPage());
  };
}

export function _setQuery(query) {
  return {
    namespace: NAMESPACE,
    type: SET_QUERY,
    payload: { query },
  };
}

export function setCountryId(countryId) {
  return {
    namespace: NAMESPACE,
    type: SET_COUNTRY_ID,
    payload: { countryId },
  };
}

export function addContacts(contacts, nextPageNumber, totalRecords) {
  return {
    namespace: NAMESPACE,
    type: ADD_CONTACTS,
    payload: { contacts, totalRecords, nextPageNumber },
  };
}

export function resetContacts() {
  return {
    namespace: NAMESPACE,
    type: RESET_CONTACTS,
    payload: { contacts: [], totalRecords: 0, nextPageNumber: 1 },
  };
}

export function resetModalState() {
  return {
    namespace: NAMESPACE,
    type: RESET_MODAL_STATE,
  };
}
