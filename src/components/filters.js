const createFilterItemTemplate = ({ filter, isChecked }) => {
  const { name, count } = filter
  
  return (`
    <input
      type="radio"
      id="filter__${name}"
      class="filter__input visually-hidden"
      name="filter"
      ${isChecked ? `checked` : ``}
    />
    <label for="filter__${name}" class="filter__label">
      ${name}
      <span class="filter__${name}-count">${count}</span>
    </label>
  `)
}

export const createFiltersTemplate = (filters) => {
  const filterItems = filters.map((filter, index) => createFilterItemTemplate({ filter, isChecked: index === 0 })) 
  const filterItemsHTML = filterItems.join(`\n`)

  return (`
    <section class="main__filter filter container">
      ${filterItemsHTML}
    </section>
  `)
}