import qoreContext from "../qoreContext.js";

export function getListRow(viewName) {
  return qoreContext.view(viewName).useListRow();
}
