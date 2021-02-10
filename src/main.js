import { createBoardTemplate } from './components/board'
import { createButtonLoadMoreTemplate } from './components/button-load-more'
import { createEditTaskTemplate } from './components/edit-task'
import { createFiltersTemplate } from './components/filters'
import { createMenuTemplate } from './components/menu'
import { createTaskTemplate } from './components/task'

// Mock Data
import { generateFilters } from './mock/filter'
import { generateTasks } from './mock/task'

const TASK_COUNT = 22
const SHOWING_TASKS_COUNT_ON_START = 8
const SHOWING_TASKS_COUNT_BY_BUTTON = 8

const filters = generateFilters()
const tasks = generateTasks(TASK_COUNT)

const render = ({ container, template, place = 'beforeend' }) => {
  container.insertAdjacentHTML(place, template)
}

const mainElement = document.querySelector('.main')
const menuContainer = mainElement.querySelector('.main__control')

// Render main-menu
render({ container: menuContainer, template: createMenuTemplate() })
render({ container: mainElement, template: createFiltersTemplate(filters) })
render({ container: mainElement, template: createBoardTemplate() })

const boardContainer = mainElement.querySelector('.board')
const tasksContainer = boardContainer.querySelector('.board__tasks')

render({ container: tasksContainer, template: createEditTaskTemplate(tasks[0]) })

let showingTasksCount = SHOWING_TASKS_COUNT_ON_START

tasks.slice(1, showingTasksCount).forEach(task => (
  render({ container: tasksContainer, template: createTaskTemplate(task) })
))

render({ container: boardContainer, template: createButtonLoadMoreTemplate() })

const loadMoreButton = boardContainer.querySelector('.load-more')

if (loadMoreButton) {
  loadMoreButton.addEventListener('click', () => {
    const prevTasksCount = showingTasksCount
    showingTasksCount += SHOWING_TASKS_COUNT_BY_BUTTON

    tasks.slice(prevTasksCount, showingTasksCount).forEach((task) => render({ container: tasksContainer, template: createTaskTemplate(task) }))

    if (showingTasksCount >= tasks.length) {
      loadMoreButton.remove()
    }
  })
}