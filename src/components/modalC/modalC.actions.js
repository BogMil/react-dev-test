export const OPEN = "OPEN";
export const CLOSE = "CLOSE";

export const NAMESPACE = "MODAL_C";

export function open(contact) {
  return {
    namespace: NAMESPACE,
    type: OPEN,
    payload: { contact },
  };
}

export function close() {
  return {
    namespace: NAMESPACE,
    type: CLOSE,
  };
}
