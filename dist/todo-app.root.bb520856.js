// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"node_modules/core-js/library/modules/_object-assign.js":[function(require,module,exports) {
'use strict';
// 19.1.2.1 Object.assign(target, source, ...)
var DESCRIPTORS = require('./_descriptors');
var getKeys = require('./_object-keys');
var gOPS = require('./_object-gops');
var pIE = require('./_object-pie');
var toObject = require('./_to-object');
var IObject = require('./_iobject');
var $assign = Object.assign;

// should work with symbols and should have deterministic property order (V8 bug)
module.exports = !$assign || require('./_fails')(function () {
  var A = {};
  var B = {};
  // eslint-disable-next-line no-undef
  var S = Symbol();
  var K = 'abcdefghijklmnopqrst';
  A[S] = 7;
  K.split('').forEach(function (k) { B[k] = k; });
  return $assign({}, A)[S] != 7 || Object.keys($assign({}, B)).join('') != K;
}) ? function assign(target, source) { // eslint-disable-line no-unused-vars
  var T = toObject(target);
  var aLen = arguments.length;
  var index = 1;
  var getSymbols = gOPS.f;
  var isEnum = pIE.f;
  while (aLen > index) {
    var S = IObject(arguments[index++]);
    var keys = getSymbols ? getKeys(S).concat(getSymbols(S)) : getKeys(S);
    var length = keys.length;
    var j = 0;
    var key;
    while (length > j) {
      key = keys[j++];
      if (!DESCRIPTORS || isEnum.call(S, key)) T[key] = S[key];
    }
  } return T;
} : $assign;

},{"./_descriptors":"node_modules/core-js/library/modules/_descriptors.js","./_object-keys":"node_modules/core-js/library/modules/_object-keys.js","./_object-gops":"node_modules/core-js/library/modules/_object-gops.js","./_object-pie":"node_modules/core-js/library/modules/_object-pie.js","./_to-object":"node_modules/core-js/library/modules/_to-object.js","./_iobject":"node_modules/core-js/library/modules/_iobject.js","./_fails":"node_modules/core-js/library/modules/_fails.js"}],"node_modules/core-js/library/modules/es6.object.assign.js":[function(require,module,exports) {
// 19.1.3.1 Object.assign(target, source)
var $export = require('./_export');

$export($export.S + $export.F, 'Object', { assign: require('./_object-assign') });

},{"./_export":"node_modules/core-js/library/modules/_export.js","./_object-assign":"node_modules/core-js/library/modules/_object-assign.js"}],"node_modules/core-js/library/fn/object/assign.js":[function(require,module,exports) {
require('../../modules/es6.object.assign');
module.exports = require('../../modules/_core').Object.assign;

},{"../../modules/es6.object.assign":"node_modules/core-js/library/modules/es6.object.assign.js","../../modules/_core":"node_modules/core-js/library/modules/_core.js"}],"node_modules/@babel/runtime-corejs2/core-js/object/assign.js":[function(require,module,exports) {
module.exports = require("core-js/library/fn/object/assign");
},{"core-js/library/fn/object/assign":"node_modules/core-js/library/fn/object/assign.js"}],"node_modules/core-js/library/modules/es6.object.keys.js":[function(require,module,exports) {
// 19.1.2.14 Object.keys(O)
var toObject = require('./_to-object');
var $keys = require('./_object-keys');

require('./_object-sap')('keys', function () {
  return function keys(it) {
    return $keys(toObject(it));
  };
});

},{"./_to-object":"node_modules/core-js/library/modules/_to-object.js","./_object-keys":"node_modules/core-js/library/modules/_object-keys.js","./_object-sap":"node_modules/core-js/library/modules/_object-sap.js"}],"node_modules/core-js/library/fn/object/keys.js":[function(require,module,exports) {
require('../../modules/es6.object.keys');
module.exports = require('../../modules/_core').Object.keys;

},{"../../modules/es6.object.keys":"node_modules/core-js/library/modules/es6.object.keys.js","../../modules/_core":"node_modules/core-js/library/modules/_core.js"}],"node_modules/@babel/runtime-corejs2/core-js/object/keys.js":[function(require,module,exports) {
module.exports = require("core-js/library/fn/object/keys");
},{"core-js/library/fn/object/keys":"node_modules/core-js/library/fn/object/keys.js"}],"node_modules/core-js/library/modules/es6.date.now.js":[function(require,module,exports) {
// 20.3.3.1 / 15.9.4.4 Date.now()
var $export = require('./_export');

$export($export.S, 'Date', { now: function () { return new Date().getTime(); } });

},{"./_export":"node_modules/core-js/library/modules/_export.js"}],"node_modules/core-js/library/fn/date/now.js":[function(require,module,exports) {
require('../../modules/es6.date.now');
module.exports = require('../../modules/_core').Date.now;

},{"../../modules/es6.date.now":"node_modules/core-js/library/modules/es6.date.now.js","../../modules/_core":"node_modules/core-js/library/modules/_core.js"}],"node_modules/@babel/runtime-corejs2/core-js/date/now.js":[function(require,module,exports) {
module.exports = require("core-js/library/fn/date/now");
},{"core-js/library/fn/date/now":"node_modules/core-js/library/fn/date/now.js"}],"src/modules/todo-app/models/todo.ts":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.TodoState = void 0;

var _keys = _interopRequireDefault(require("@babel/runtime-corejs2/core-js/object/keys"));

var _now = _interopRequireDefault(require("@babel/runtime-corejs2/core-js/date/now"));

var _defineProperty = _interopRequireDefault(require("@babel/runtime-corejs2/core-js/object/define-property"));

var _typeof2 = _interopRequireDefault(require("@babel/runtime-corejs2/helpers/typeof"));

var _getOwnPropertyDescriptor = _interopRequireDefault(require("@babel/runtime-corejs2/core-js/object/get-own-property-descriptor"));

var _mobx = require("mobx");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var __decorate = void 0 && (void 0).__decorate || function (decorators, target, key, desc) {
  var c = arguments.length,
      r = c < 3 ? target : desc === null ? desc = (0, _getOwnPropertyDescriptor.default)(target, key) : desc,
      d;
  if ((typeof Reflect === "undefined" ? "undefined" : (0, _typeof2.default)(Reflect)) === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
    if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  }
  return c > 3 && r && (0, _defineProperty.default)(target, key, r), r;
};

var TodoState;
exports.TodoState = TodoState;

(function (TodoState) {
  TodoState[TodoState["NOT_STARTED"] = 0] = "NOT_STARTED";
  TodoState[TodoState["DOING"] = 1] = "DOING";
  TodoState[TodoState["DONE"] = 2] = "DONE";
})(TodoState || (exports.TodoState = TodoState = {}));

var TodoStatus;

(function (TodoStatus) {
  TodoStatus[TodoStatus["ON_TIME"] = 0] = "ON_TIME";
  TodoStatus[TodoStatus["EXPIRED"] = 1] = "EXPIRED";
})(TodoStatus || (TodoStatus = {}));

var Todo =
/** @class */
function () {
  function Todo(_a) {
    var _this = this;

    var chores = _a.chores,
        createdBy = _a.createdBy,
        description = _a.description,
        deadline = _a.deadline,
        title = _a.title;

    this.markAsNotStarted = function () {
      _this.state = TodoState.NOT_STARTED;
    };

    this.markAsDone = function () {
      _this.state = TodoState.DONE;
    };

    this.markAsDoing = function () {
      _this.state = TodoState.DOING;
    };

    var createdDate = (0, _now.default)();
    this.chores = chores;
    this.createdAt = createdDate;
    this.createdBy = createdBy;
    this.description = description;
    this.deadline = deadline;
    this.id = createdDate;
    this.state = TodoState.NOT_STARTED;
    this.title = title;
  }

  (0, _defineProperty.default)(Todo.prototype, "status", {
    get: function get() {
      return this.deadline - (0, _now.default)() > 0 ? TodoStatus.ON_TIME : TodoStatus.EXPIRED;
    },
    enumerable: true,
    configurable: true
  });
  (0, _defineProperty.default)(Todo.prototype, "extract", {
    get: function get() {
      var EXTRACT_LEN = 70;
      var descrLen = this.description.length;
      return descrLen > EXTRACT_LEN ? this.description.substr(0, EXTRACT_LEN) : this.description;
    },
    enumerable: true,
    configurable: true
  });
  Todo.allStates = (0, _keys.default)(TodoState).filter(function (k) {
    return typeof TodoState[k] === 'number';
  });

  __decorate([_mobx.observable], Todo.prototype, "chores", void 0);

  __decorate([_mobx.observable], Todo.prototype, "createdAt", void 0);

  __decorate([_mobx.observable], Todo.prototype, "createdBy", void 0);

  __decorate([_mobx.observable], Todo.prototype, "description", void 0);

  __decorate([_mobx.observable], Todo.prototype, "deadline", void 0);

  __decorate([_mobx.observable], Todo.prototype, "id", void 0);

  __decorate([_mobx.observable], Todo.prototype, "state", void 0);

  __decorate([_mobx.observable], Todo.prototype, "title", void 0);

  __decorate([_mobx.computed], Todo.prototype, "status", null);

  __decorate([_mobx.computed], Todo.prototype, "extract", null);

  __decorate([_mobx.action], Todo.prototype, "markAsNotStarted", void 0);

  __decorate([_mobx.action], Todo.prototype, "markAsDone", void 0);

  __decorate([_mobx.action], Todo.prototype, "markAsDoing", void 0);

  return Todo;
}();

var _default = Todo;
exports.default = _default;
},{"@babel/runtime-corejs2/core-js/object/keys":"node_modules/@babel/runtime-corejs2/core-js/object/keys.js","@babel/runtime-corejs2/core-js/date/now":"node_modules/@babel/runtime-corejs2/core-js/date/now.js","@babel/runtime-corejs2/core-js/object/define-property":"node_modules/@babel/runtime-corejs2/core-js/object/define-property.js","@babel/runtime-corejs2/helpers/typeof":"node_modules/@babel/runtime-corejs2/helpers/typeof.js","@babel/runtime-corejs2/core-js/object/get-own-property-descriptor":"node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js","mobx":"node_modules/mobx/lib/mobx.module.js"}],"src/modules/todo-app/components/todo.tsx":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _core = require("@material-ui/core");

var _todo = _interopRequireWildcard(require("../models/todo"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function () { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var TodoItem = function TodoItem(props) {
  var handleChange = function handleChange(ev) {
    return ev;
  };

  return _react.default.createElement(_core.ListItem, null, _react.default.createElement(_core.ListItemText, {
    primary: props.title,
    secondary: props.description
  }), _react.default.createElement(_core.ListItemSecondaryAction, null, _react.default.createElement(_core.Select, {
    value: props.state,
    onChange: handleChange
  }, _todo.default.allStates.map(function (state) {
    return _react.default.createElement(_core.MenuItem, {
      value: _todo.TodoState[state],
      key: state
    }, state);
  }))));
};

var _default = TodoItem;
exports.default = _default;
},{"react":"node_modules/react/index.js","@material-ui/core":"node_modules/@material-ui/core/esm/index.js","../models/todo":"src/modules/todo-app/models/todo.ts"}],"src/modules/todo-app/components/todo-list.tsx":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _assign = _interopRequireDefault(require("@babel/runtime-corejs2/core-js/object/assign"));

var _react = _interopRequireDefault(require("react"));

var _todo = _interopRequireDefault(require("./todo"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var __assign = void 0 && (void 0).__assign || function () {
  __assign = _assign.default || function (t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];

      for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
      }
    }

    return t;
  };

  return __assign.apply(this, arguments);
};

var TodoList = function TodoList(_a) {
  var todos = _a.todos;
  return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement("h1", null, "TODO List"), todos.map(function (todo) {
    return _react.default.createElement(_todo.default, __assign({}, todo, {
      key: todo.id
    }));
  }));
};

var _default = TodoList;
exports.default = _default;
},{"@babel/runtime-corejs2/core-js/object/assign":"node_modules/@babel/runtime-corejs2/core-js/object/assign.js","react":"node_modules/react/index.js","./todo":"src/modules/todo-app/components/todo.tsx"}],"src/modules/todo-app/containers/todo-list-container.tsx":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _create = _interopRequireDefault(require("@babel/runtime-corejs2/core-js/object/create"));

var _setPrototypeOf = _interopRequireDefault(require("@babel/runtime-corejs2/core-js/object/set-prototype-of"));

var _react = _interopRequireWildcard(require("react"));

var _mobxReact = require("mobx-react");

var _todoList = _interopRequireDefault(require("../components/todo-list"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function () { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var __extends = void 0 && (void 0).__extends || function () {
  var _extendStatics = function extendStatics(d, b) {
    _extendStatics = _setPrototypeOf.default || {
      __proto__: []
    } instanceof Array && function (d, b) {
      d.__proto__ = b;
    } || function (d, b) {
      for (var p in b) {
        if (b.hasOwnProperty(p)) d[p] = b[p];
      }
    };

    return _extendStatics(d, b);
  };

  return function (d, b) {
    _extendStatics(d, b);

    function __() {
      this.constructor = d;
    }

    d.prototype = b === null ? (0, _create.default)(b) : (__.prototype = b.prototype, new __());
  };
}();

var TodoListContainer =
/** @class */
function (_super) {
  __extends(TodoListContainer, _super);

  function TodoListContainer() {
    return _super !== null && _super.apply(this, arguments) || this;
  }

  TodoListContainer.prototype.render = function () {
    var todos = this.props.todos;
    return _react.default.createElement(_todoList.default, {
      todos: todos
    });
  };

  return TodoListContainer;
}(_react.Component);

var _default = (0, _mobxReact.inject)(function (allStores) {
  var todoAppStore = allStores.store;
  return {
    todos: todoAppStore.getTodos() || []
  };
})(TodoListContainer);

exports.default = _default;
},{"@babel/runtime-corejs2/core-js/object/create":"node_modules/@babel/runtime-corejs2/core-js/object/create.js","@babel/runtime-corejs2/core-js/object/set-prototype-of":"node_modules/@babel/runtime-corejs2/core-js/object/set-prototype-of.js","react":"node_modules/react/index.js","mobx-react":"node_modules/mobx-react/dist/mobx-react.module.js","../components/todo-list":"src/modules/todo-app/components/todo-list.tsx"}],"src/modules/todo-app/todo-app.layout.tsx":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactRouterDom = require("react-router-dom");

var _todoListContainer = _interopRequireDefault(require("./containers/todo-list-container"));

var _utils = require("../../utils");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var TodoAppLayout = function TodoAppLayout(_a) {
  var authInfos = _a.authInfos,
      _b = _a.baseUrl,
      baseUrl = _b === void 0 ? '' : _b;
  var withBaseUrl = (0, _utils.memorizeBaseUrl)(baseUrl);
  return _react.default.createElement(_reactRouterDom.BrowserRouter, null, _react.default.createElement(_reactRouterDom.Switch, null, _react.default.createElement(_reactRouterDom.Route, {
    exact: true,
    path: withBaseUrl('/')
  }, _react.default.createElement(_todoListContainer.default, null)), _react.default.createElement(_reactRouterDom.Route, {
    exact: true,
    path: withBaseUrl('/list')
  }, _react.default.createElement("div", null, "Hello list")), _react.default.createElement(_reactRouterDom.Route, {
    exact: true,
    path: withBaseUrl('/list/:id')
  }, _react.default.createElement("div", null, "Hello List with Id"))));
};

var _default = TodoAppLayout;
exports.default = _default;
},{"react":"node_modules/react/index.js","react-router-dom":"node_modules/react-router-dom/esm/react-router-dom.js","./containers/todo-list-container":"src/modules/todo-app/containers/todo-list-container.tsx","../../utils":"src/utils.ts"}],"src/modules/todo-app/todo-app.store.ts":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _defineProperty = _interopRequireDefault(require("@babel/runtime-corejs2/core-js/object/define-property"));

var _typeof2 = _interopRequireDefault(require("@babel/runtime-corejs2/helpers/typeof"));

var _getOwnPropertyDescriptor = _interopRequireDefault(require("@babel/runtime-corejs2/core-js/object/get-own-property-descriptor"));

var _mobx = require("mobx");

var _todo = _interopRequireDefault(require("./models/todo"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var __decorate = void 0 && (void 0).__decorate || function (decorators, target, key, desc) {
  var c = arguments.length,
      r = c < 3 ? target : desc === null ? desc = (0, _getOwnPropertyDescriptor.default)(target, key) : desc,
      d;
  if ((typeof Reflect === "undefined" ? "undefined" : (0, _typeof2.default)(Reflect)) === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
    if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  }
  return c > 3 && r && (0, _defineProperty.default)(target, key, r), r;
};

var TodoAppStore =
/** @class */
function () {
  function TodoAppStore(service, initialTodos) {
    var _this = this;

    if (initialTodos === void 0) {
      initialTodos = [];
    }

    this.todos = [];

    this.getTodos = function () {
      return _this.todos;
    };

    this.mapTodos(initialTodos);
  }

  TodoAppStore.prototype.mapTodos = function (todos) {
    this.todos = todos.map(function (t) {
      return new _todo.default(t);
    });
  };

  __decorate([_mobx.observable], TodoAppStore.prototype, "todos", void 0);

  return TodoAppStore;
}();

var _default = TodoAppStore;
exports.default = _default;
},{"@babel/runtime-corejs2/core-js/object/define-property":"node_modules/@babel/runtime-corejs2/core-js/object/define-property.js","@babel/runtime-corejs2/helpers/typeof":"node_modules/@babel/runtime-corejs2/helpers/typeof.js","@babel/runtime-corejs2/core-js/object/get-own-property-descriptor":"node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js","mobx":"node_modules/mobx/lib/mobx.module.js","./models/todo":"src/modules/todo-app/models/todo.ts"}],"src/modules/todo-app/todo-app.service.ts":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _default = {};
exports.default = _default;
},{}],"src/modules/todo-app/tests/todos.sample.ts":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _default = [{
  'id': 0,
  'title': 'do laundry',
  'createdBy': 'Quentin Sahal',
  'createdAt': 1577533157575,
  'deadline': 1577792357575,
  'chores': ['Clean the bedroom', 'Clean the kitchen', 'Mop the floor']
}, {
  'id': 1,
  'title': 'start project',
  'createdBy': 'Quentin Sahal',
  'createdAt': 1577533157575,
  'deadline': 1577792357575,
  'chores': ['Proof of concept', 'Sample', 'Build Design system']
}];
exports.default = _default;
},{}],"src/modules/todo-app/todo-app.root.tsx":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _mobxReact = require("mobx-react");

var _todoApp = _interopRequireDefault(require("./todo-app.layout"));

var _todoApp2 = _interopRequireDefault(require("./todo-app.store"));

var _todoApp3 = _interopRequireDefault(require("./todo-app.service"));

var _todos = _interopRequireDefault(require("./tests/todos.sample"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var TodoAppModule = function TodoAppModule(_a) {
  // const store = rootStore.addStore({
  //   name:'todoApp',
  //   service: todoAppService,
  // }, TodoAppStore)
  var authInfos = _a.authInfos,
      baseUrl = _a.baseUrl;
  var store = new _todoApp2.default(_todoApp3.default, _todos.default);
  return _react.default.createElement(_mobxReact.Provider, {
    store: store
  }, _react.default.createElement(_todoApp.default, {
    baseUrl: baseUrl,
    authInfos: authInfos
  }));
};

var _default = TodoAppModule;
exports.default = _default;
},{"react":"node_modules/react/index.js","mobx-react":"node_modules/mobx-react/dist/mobx-react.module.js","./todo-app.layout":"src/modules/todo-app/todo-app.layout.tsx","./todo-app.store":"src/modules/todo-app/todo-app.store.ts","./todo-app.service":"src/modules/todo-app/todo-app.service.ts","./tests/todos.sample":"src/modules/todo-app/tests/todos.sample.ts"}],"node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "53151" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["node_modules/parcel-bundler/src/builtins/hmr-runtime.js"], null)
//# sourceMappingURL=/todo-app.root.bb520856.js.map