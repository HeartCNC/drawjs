/**
 * merge default option and user's option
 * @param target 
 * @param source 
 */
export function assignOption(target: object, source: object): object {
  for (const key in source) {
    target[key] = source[key]
  }
  return target
}
