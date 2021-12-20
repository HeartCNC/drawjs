const cache = {}

export function on(eventName: string, callback: Function) {
  if (eventName in cache) {
    return
  }
  cache[eventName] = callback
}

export function emit(eventName: string, data) {
  if (!cache[eventName]) return
  cache[eventName].call(this, data)
}