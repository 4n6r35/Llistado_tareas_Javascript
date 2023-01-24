import './style.css'
import { App } from './src/toDo/app'
import todoStore from "./src/store/ToDo.store";


todoStore.initStore();

App('#app')
