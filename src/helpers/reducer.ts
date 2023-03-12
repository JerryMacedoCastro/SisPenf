import { IFirstPhysicalExamForm, ISecondPhysicalExamForm } from "../interfaces";

type State = any;

type Action = {
  type: "UPDATE";
  value: string;
  key: string;
};
function reducer(state: State, action: Action): State {
  switch (action.type) {
    case "UPDATE":
      return {
        ...state,
        [action.key]: action.value,
      };
    default:
      return state;
  }
}
export default reducer;
