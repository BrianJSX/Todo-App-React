const drawerWidth = 240;
const Styles = (theme) => ({
    root: {
        display: 'flex',
    },
    drawer: {
        width: drawerWidth,
        flexShrink: 0,
    },
    drawerPaper: {
        width: drawerWidth,
    },
    drawerContainer: {
        overflow: 'auto',
    },
    content: {
        flexGrow: 1,
        padding: theme.spacing(3),
    },
    MenuLink:  {
        textDecoration: 'none',
        color: 'black'
    },
    activeMenu: { 
        '&>div':  {
            backgroundColor: '#F5F5F5'
        }
        
    }
});

export default Styles;