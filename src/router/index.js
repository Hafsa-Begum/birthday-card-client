import { createWebHistory, createRouter } from "vue-router";
import Home from '../views/Home.vue';
import AddNewCard from '../views/AddNewCard.vue';
import UpcomingBirthdays from '../views/UpcomingBirtdays.vue';
import Card from '../views/Card.vue';

const routes = [
    {
        name: 'home',
        path: '/',
        component: Home
    },
    {
        name: 'addNewCard',
        path: '/addNewCard',
        component: AddNewCard
    },
    {
        name: 'card',
        path: '/cards/:id',
        component: Card
    },
    {
        name: 'upcomingBirthdays',
        path: '/upcomingBirthdays',
        component: UpcomingBirthdays
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;