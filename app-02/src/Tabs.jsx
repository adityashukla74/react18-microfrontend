import { AppBar, Box, Tab, Tabs, Typography, makeStyles } from '@material-ui/core';
import { Redirect, Route, Switch, useHistory, useLocation, useRouteMatch } from 'react-router-dom';

import React from 'react';

const Button = React.lazy(() => import('app_03/Button'));

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
}));

export default function TabsComponent() {
  const classes = useStyles();
  const match = useRouteMatch();
  const history = useHistory();
  const location = useLocation();
  const { path: rootPath } = match;

  const handleChange = (event, newValue) => {
    history.push(newValue);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Tabs value={location.pathname} onChange={handleChange}>
          <Tab label="Tab1" value={`${rootPath}/tab1`} />
          <Tab label="Tab2" value={`${rootPath}/tab2`} />
        </Tabs>
      </AppBar>
      <Switch>
        <Route path={rootPath} exact={true}>
          <Redirect to={`${rootPath}/tab1`} />
        </Route>
        <Route path={`${rootPath}/tab1`}>
          <Typography component="div">
            <Box p={4}>Tab1 Content</Box>
          </Typography>
        </Route>
        <Route path={`${rootPath}/tab2`}>
          <Typography component="div">
            <Box p={3}>
              Tab2 Content
              <React.Suspense fallback={null}>
                <Button>Tab2 Button</Button>
              </React.Suspense>
            </Box>
          </Typography>
        </Route>
      </Switch>
    </div>
  );
}
