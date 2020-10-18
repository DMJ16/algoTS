type Obj<T> = { [key: string]: T };
type mappedObj<U> = { [key: string]: U };

export function map<T, U>(
  mapper: (value: T, key?: string, obj?: Obj<T>) => U,
  obj: Obj<T>
): mappedObj<U> {
  const keys = Object.keys(obj);
  return keys.reduce((newObj, key) => {
    newObj[key] = mapper(obj[key]);
    return newObj;
  }, {} as mappedObj<U>);
}

export function filter<T>(
  predicate: (value: T, key?: string, obj?: Obj<T>) => boolean,
  obj: Obj<T>
): Obj<T> {
  const keys = Object.keys(obj);
  return keys.reduce((newObj, key) => {
    if (predicate(obj[key])) newObj[key] = obj[key];
    return newObj;
  }, {} as Obj<T>);
}

export function reduce<T, R>(
  reducer: (acc: T | R, value: T, key?: string, obj?: Obj<T>) => T | R,
  obj: Obj<T>,
  initialValue: T | R = Object.values(obj)[0]
): T | R {
  let result = initialValue;
  const keys = Object.keys(obj);
  for (const key of keys) {
    result = reducer(result, obj[key]);
  }
  return result;
}
