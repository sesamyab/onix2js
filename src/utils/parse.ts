import { get } from "lodash";

export function parseValue(json: Object, path: string) {
  const value = get(json, path);

  if (!value) {
    return undefined;
  }

  if (Array.isArray(value)) {
    return value[0];
  }

  return value;
}
