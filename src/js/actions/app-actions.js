import { AppActionNames } from "../action-names"
import { generateAction } from "./action-helpers"

const { TEST_ACTION } = AppActionNames

export const testAction = generateAction(TEST_ACTION)
