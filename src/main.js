import { createApp } from 'vue'
import App from './App.vue'
import {createRouter, createWebHashHistory} from 'vue-router'


import AddQuestionToDB from "./views/AddQuestionToDB"
import RandomQuestions from './views/RandomQuestions'
import IndexPage from './components/IndexPage'
import QuestionsCriteria from './views/QuestionsCriteria'

const routes = [
    {
        path : '/addquestion',
        Name : 'AddQuestionsToDB',
        component : AddQuestionToDB
    },
    {
        path : '/randomQuestions:',
        Name : 'RandomQuestions',
        component : RandomQuestions
    },
    {
        path: "/",
        name: "Home",
        component: IndexPage
    },
    {
        path: "/questionsCriteria",
        name : 'QuestionsCriteria',
        component : QuestionsCriteria
    }
]
const router = createRouter({
    // 4. Provide the history implementation to use. We are using the hash history for simplicity here.
    history: createWebHashHistory(),
    routes, // short for `routes: routes`
  })

createApp(App).use(router).mount('#app')
