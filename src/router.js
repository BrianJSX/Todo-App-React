import HomePage from './page/HomePage';
import TaskBoardContainer from './containers/TaskBoard';
import HomeIcon from '@material-ui/icons/Home';
import WorkIcon from '@material-ui/icons/Work';

const ROUTER =  [
    {
        name: 'Home',
        exac: true, 
        path: '/',
        component: HomePage,
        icon: <HomeIcon></HomeIcon>
    },
    {
        name: 'Tasks Manager',
        exac: true, 
        path: '/tasks',
        component: TaskBoardContainer,
        icon: <WorkIcon></WorkIcon>
    },
];

export default ROUTER;