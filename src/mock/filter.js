const filterNames = [`all`, `overdue`, `today`, `favorites`, `repeating`, `archive`]

export const generateFilters = () => {
  return filterNames.map((filterName, index) => ({ id: index, name: filterName, count: Math.floor(Math.random() * 10) }))
}