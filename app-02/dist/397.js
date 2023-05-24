"use strict";
(self["webpackChunkreact_18_app_02"] = self["webpackChunkreact_18_app_02"] || []).push([[397],{

/***/ 397:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: consume shared module (default) @material-ui/core@^4.9.4 (singleton) (fallback: ../node_modules/@material-ui/core/esm/index.js)
var index_js_ = __webpack_require__(782);
// EXTERNAL MODULE: consume shared module (default) react@=18.2.0 (singleton) (fallback: ../node_modules/react/index.js)
var react_index_js_ = __webpack_require__(613);
var react_index_js_default = /*#__PURE__*/__webpack_require__.n(react_index_js_);
;// CONCATENATED MODULE: ./src/Dialog.jsx


function DialogComponent() {
  const [open, setOpen] = react_index_js_default().useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  return /*#__PURE__*/react_index_js_default().createElement("div", null, /*#__PURE__*/react_index_js_default().createElement(index_js_.Button, {
    variant: "contained",
    color: "primary",
    onClick: handleClickOpen
  }, "Open Dialog"), /*#__PURE__*/react_index_js_default().createElement(index_js_.Dialog, {
    open: open,
    onClose: handleClose
  }, /*#__PURE__*/react_index_js_default().createElement(index_js_.DialogTitle, null, "Here Is A Dialog Example"), /*#__PURE__*/react_index_js_default().createElement(index_js_.DialogContent, null, /*#__PURE__*/react_index_js_default().createElement(index_js_.DialogContentText, null, "Dialog rendered from the Material UI app")), /*#__PURE__*/react_index_js_default().createElement(index_js_.DialogActions, null, /*#__PURE__*/react_index_js_default().createElement(index_js_.Button, {
    onClick: handleClose,
    variant: "contained",
    color: "primary",
    autoFocus: true
  }, "Nice"))));
}
/* harmony default export */ const Dialog = (DialogComponent);
// EXTERNAL MODULE: consume shared module (default) react-router-dom@^5.1.2 (singleton) (fallback: ../node_modules/react-router-dom/esm/react-router-dom.js)
var react_router_dom_js_ = __webpack_require__(695);
;// CONCATENATED MODULE: ./src/Tabs.jsx



const Button = /*#__PURE__*/react_index_js_default().lazy(() => __webpack_require__.e(/* import() */ 44).then(__webpack_require__.t.bind(__webpack_require__, 44, 23)));
const useStyles = (0,index_js_.makeStyles)(theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper
  }
}));
function TabsComponent() {
  const classes = useStyles();
  const match = (0,react_router_dom_js_.useRouteMatch)();
  const history = (0,react_router_dom_js_.useHistory)();
  const location = (0,react_router_dom_js_.useLocation)();
  const {
    path: rootPath
  } = match;
  const handleChange = (event, newValue) => {
    history.push(newValue);
  };
  return /*#__PURE__*/react_index_js_default().createElement("div", {
    className: classes.root
  }, /*#__PURE__*/react_index_js_default().createElement(index_js_.AppBar, {
    position: "static"
  }, /*#__PURE__*/react_index_js_default().createElement(index_js_.Tabs, {
    value: location.pathname,
    onChange: handleChange
  }, /*#__PURE__*/react_index_js_default().createElement(index_js_.Tab, {
    label: "Tab1",
    value: `${rootPath}/tab1`
  }), /*#__PURE__*/react_index_js_default().createElement(index_js_.Tab, {
    label: "Tab2",
    value: `${rootPath}/tab2`
  }))), /*#__PURE__*/react_index_js_default().createElement(react_router_dom_js_.Switch, null, /*#__PURE__*/react_index_js_default().createElement(react_router_dom_js_.Route, {
    path: rootPath,
    exact: true
  }, /*#__PURE__*/react_index_js_default().createElement(react_router_dom_js_.Redirect, {
    to: `${rootPath}/tab1`
  })), /*#__PURE__*/react_index_js_default().createElement(react_router_dom_js_.Route, {
    path: `${rootPath}/tab1`
  }, /*#__PURE__*/react_index_js_default().createElement(index_js_.Typography, {
    component: "div"
  }, /*#__PURE__*/react_index_js_default().createElement(index_js_.Box, {
    p: 4
  }, "Tab1 Content"))), /*#__PURE__*/react_index_js_default().createElement(react_router_dom_js_.Route, {
    path: `${rootPath}/tab2`
  }, /*#__PURE__*/react_index_js_default().createElement(index_js_.Typography, {
    component: "div"
  }, /*#__PURE__*/react_index_js_default().createElement(index_js_.Box, {
    p: 3
  }, "Tab2 Content", /*#__PURE__*/react_index_js_default().createElement((react_index_js_default()).Suspense, {
    fallback: null
  }, /*#__PURE__*/react_index_js_default().createElement(Button, null, "Tab2 Button")))))));
}
;// CONCATENATED MODULE: ./src/theme.js

const theme = (0,index_js_.createTheme)({
  palette: {
    primary: index_js_.green
  }
});
;// CONCATENATED MODULE: ./src/App.jsx






const Page = /*#__PURE__*/react_index_js_default().lazy(() => __webpack_require__.e(/* import() */ 947).then(__webpack_require__.t.bind(__webpack_require__, 947, 23)));
function App() {
  return /*#__PURE__*/react_index_js_default().createElement(react_router_dom_js_.HashRouter, null, /*#__PURE__*/react_index_js_default().createElement(index_js_.ThemeProvider, {
    theme: theme
  }, /*#__PURE__*/react_index_js_default().createElement((react_index_js_default()).Suspense, {
    fallback: null
  }, /*#__PURE__*/react_index_js_default().createElement(Page, {
    title: "Material UI App"
  }, /*#__PURE__*/react_index_js_default().createElement(index_js_.Typography, {
    variant: "h6"
  }, "Dialog Component"), /*#__PURE__*/react_index_js_default().createElement(Dialog, null), /*#__PURE__*/react_index_js_default().createElement(index_js_.Divider, {
    style: {
      margin: '16px 0'
    }
  }), /*#__PURE__*/react_index_js_default().createElement(index_js_.Typography, {
    variant: "h6"
  }, "Tabs Component"), /*#__PURE__*/react_index_js_default().createElement(TabsComponent, null)))));
}
/* harmony default export */ const src_App = (App);
// EXTERNAL MODULE: consume shared module (default) react-dom@=18.2.0 (singleton) (fallback: ../node_modules/react-dom/index.js)
var react_dom_index_js_ = __webpack_require__(241);
var react_dom_index_js_default = /*#__PURE__*/__webpack_require__.n(react_dom_index_js_);
;// CONCATENATED MODULE: ./src/bootstrap.js



react_dom_index_js_default().render( /*#__PURE__*/react_index_js_default().createElement(src_App, null), document.getElementById('root'));

/***/ })

}]);
//# sourceMappingURL=397.js.map