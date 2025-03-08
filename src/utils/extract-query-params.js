export function extractQueryParams(query) {
  return query
    .slice(1)
    .split("&")
    .reduce((QueryParams, param) => {
      const [key, value] = param.split("=");

      QueryParams[key] = value;

      return QueryParams;
    }, {});
}
