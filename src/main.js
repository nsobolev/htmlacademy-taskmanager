import { createBoardTemplate } from './components/board'
import { createButtonLoadMoreTemplate } from './components/button-load-more'
import { createEditTaskTemplate } from './components/edit-task'
import { createFiltersTemplate } from './components/filters'
import { createMenuTemplate } from './components/menu'
import { createTaskTemplate } from './components/task'

const TASK_COUNT = 7

const render = ({ container, template, place = 'beforeend' }) => {
  container.insertAdjacentHTML(place, template)
}

const mainElement = document.querySelector('.main')
const menuContainer = mainElement.querySelector('.main__control')

// Render main-menu
render({ container: menuContainer, template: createMenuTemplate() })
render({ container: mainElement, template: createFiltersTemplate() })
render({ container: mainElement, template: createBoardTemplate() })

const boardContainer = mainElement.querySelector('.board')
const tasksContainer = boardContainer.querySelector('.board__tasks')

render({ container: tasksContainer, template: createEditTaskTemplate() })

for (let i = 0; i < TASK_COUNT; i += 1) {
  render({ container: tasksContainer, template: createTaskTemplate() })
}

render({ container: boardContainer, template: createButtonLoadMoreTemplate() })