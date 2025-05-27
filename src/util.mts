export function nullToUndefined<T>(obj: any): T | undefined {
  if (obj === null) {
    return undefined;
  }
  if (typeof obj === "object") {
    for (const key in obj) {
      if (Object.hasOwn(obj, key)) {
        obj[key] = nullToUndefined(obj[key]);
      }
    }
  }
  return obj;
}
