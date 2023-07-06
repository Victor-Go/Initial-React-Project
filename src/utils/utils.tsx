export function getFormattedTime(timestamp: number) {
  const date = new Date(timestamp * 1000)
  return `${date.getFullYear()}/${date.getMonth()}/${date.getDate()} ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`
}

export function extractFrom(regex: RegExp, str: string) {
  const e = regex.exec(str) || []
  return e ? e[1] : undefined
}

export function deepClone(obj: any) {
  return JSON.parse(JSON.stringify(obj))
}

export function assignDictByDotPath(dict: any, path: string, value: any) {
  const _dict = deepClone(dict)
  const paths = path.split('.')
  if (paths.length === 1) {
    _dict[paths[0]] = value
  } else if (paths.length > 1) {
    _dict[paths[0]] = assignDictByDotPath(
      _dict[paths[0]],
      paths.slice(1).join('.'),
      value
    )
  }
  return _dict
}

export const clamp = (number: number, min: number, max: number) =>
  Math.max(min, Math.min(number, max))

export const isSubsequence = (array: Array<any> | string, sequence: Array<any> | string) => {
  let index = -1
  for (const value of sequence) {
    index = array.indexOf(value, index + 1)
    if (index === -1) {
      return false
    }
  }
  return true
}