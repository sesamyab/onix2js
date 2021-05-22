import { get } from "lodash";

export function parseValue(json: Object, path: string) {
  const value = get(json, path);

  if (!value) {
    return null;
  }

  if (Array.isArray(value)) {
    const [item] = value;

    if (item._) {
      return trim(item._);
    }

    return trim(item);
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

  return trim(typedValue);
}

export function trim(text: string): any {
  if (typeof text !== "string") {
    return text;
  }

  return text.replace(/^\s+|\s+$/g, "");
}
