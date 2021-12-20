/**
 * merge default option and user's option
 * @param target 
 * @param source 
 */
export function mergeOption(target: object, source: object): any {
  const newOptions: any = {}
  for (const key in target) {
    newOptions[key] = source[key] || target[key]
  }
  return newOptions
}

export function assignOption(target: object, source: object): object {
  for (const key in source) {
    target[key] = source[key]
  }
  return target
}
