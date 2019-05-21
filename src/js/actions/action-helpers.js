// simple action with no payload
/**
 * @param `type of action
 * @return function take no argument and return dispatch object
 */

export function generateAction(type) {
  return () => {
    return {
      type
    }
  }
}
