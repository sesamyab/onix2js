import { get } from "lodash";

export function parseValue(json: Object, path: string) {
  const value = get(json, path);

  if (!value) {
    return null;
  }

  if (Array.isArray(value)) {
    return value[0];
  }

  return value;
}

export function parseType(json: Object, path: string, type: Object) {
  const value = parseValue(json, path);

  if (!value) {
    return null;
  }

  const typedValue = type[value];

  if (!typedValue) {
    return null;
  }

  return typedValue;
}
