import HomePage from './page/HomePage';
import TasksPage from './page/TasksPage';

const ROUTER =  [
    {
        name: 'home',
        exac: true, 
        path: '/home',
        component: HomePage ,
    },
    {
        name: 'Trang quản lý công việc',
        exac: true, 
        path: '/tasks',
        component: TasksPage,
    },
];

export default ROUTER;