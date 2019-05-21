import { ofType } from "redux-observable"
import { map, tap } from "rxjs/operators"
import _ from "lodash"

import { AppActionNames } from "../action-names"

const { TEST_ACTION } = AppActionNames

const doNothing = () => {
  return {
    type: "None"
  }
}

export function testEpic(action$, store) {
  return action$.pipe(
    ofType(TEST_ACTION),
    map(doNothing)
  )
}
