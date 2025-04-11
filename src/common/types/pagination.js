// Helper to pluralize the key in list responses
export const pluralizeKey = (key) => `${key}s`;

// Helper to create specific resource list responses
export const createListResponse = (items, total, key) => ({
  [pluralizeKey(key)]: items,
  total,
});
