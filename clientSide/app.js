"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
var issues = [{
  id: 1,
  status: 'New',
  Owner: 'Ravan',
  effort: 5,
  created: new Date('2018-08-15'),
  due: undefined,
  title: 'error in then console when submitting forms.'
}, {
  id: 2,
  status: 'Assigned',
  Owner: 'Eddie',
  effort: 14,
  created: new Date('2018-08-30'),
  due: new Date('2018-08-16'),
  title: 'Missing bottom border on the panel.'
}];
var IssueFilter = /*#__PURE__*/function (_React$Component) {
  _inherits(IssueFilter, _React$Component);
  var _super = _createSuper(IssueFilter);
  function IssueFilter() {
    _classCallCheck(this, IssueFilter);
    return _super.apply(this, arguments);
  }
  _createClass(IssueFilter, [{
    key: "render",
    value: function render() {
      return /*#__PURE__*/React.createElement("div", null, " This  is a placeholder for the issue Filter component ");
    }
  }]);
  return IssueFilter;
}(React.Component);
var IssueTable = /*#__PURE__*/function (_React$Component2) {
  _inherits(IssueTable, _React$Component2);
  var _super2 = _createSuper(IssueTable);
  function IssueTable() {
    _classCallCheck(this, IssueTable);
    return _super2.apply(this, arguments);
  }
  _createClass(IssueTable, [{
    key: "render",
    value: function render() {
      var IssueRows = issues.map(function (issue) {
        return /*#__PURE__*/React.createElement(IssueRow, {
          key: issue.id,
          issue: issue
        });
      });
      return /*#__PURE__*/React.createElement("table", {
        className: "bordered-table"
      }, /*#__PURE__*/React.createElement("thead", null, /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("th", null, "ID"), /*#__PURE__*/React.createElement("th", null, "STATUS"), /*#__PURE__*/React.createElement("th", null, " OWNER"), /*#__PURE__*/React.createElement("th", null, "EFFORT"), /*#__PURE__*/React.createElement("th", null, "CREATED"), /*#__PURE__*/React.createElement("th", null, "DUE"), /*#__PURE__*/React.createElement("th", null, "TITLE"))), /*#__PURE__*/React.createElement("tbody", null, IssueRows));
    }
  }]);
  return IssueTable;
}(React.Component);
var IssueRow = /*#__PURE__*/function (_React$Component3) {
  _inherits(IssueRow, _React$Component3);
  var _super3 = _createSuper(IssueRow);
  function IssueRow() {
    _classCallCheck(this, IssueRow);
    return _super3.apply(this, arguments);
  }
  _createClass(IssueRow, [{
    key: "render",
    value: function render() {
      var issue = this.props.issue;
      return /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("td", null, " ", issue.id, " "), /*#__PURE__*/React.createElement("td", null, " ", issue.status, " "), /*#__PURE__*/React.createElement("td", null, " ", issue.Owner, " "), /*#__PURE__*/React.createElement("td", null, " ", issue.effort, " "), /*#__PURE__*/React.createElement("td", null, " ", issue.created.toDateString(), " "), /*#__PURE__*/React.createElement("td", null, " ", issue.due ? issue.due.toDateString() : '', " "), /*#__PURE__*/React.createElement("td", null, " ", issue.title, " "));
    }
  }]);
  return IssueRow;
}(React.Component);
var IssueAdd = /*#__PURE__*/function (_React$Component4) {
  _inherits(IssueAdd, _React$Component4);
  var _super4 = _createSuper(IssueAdd);
  function IssueAdd() {
    _classCallCheck(this, IssueAdd);
    return _super4.apply(this, arguments);
  }
  _createClass(IssueAdd, [{
    key: "render",
    value: function render() {
      return /*#__PURE__*/React.createElement("div", null, " this is a placeholder for the issue add component.");
    }
  }]);
  return IssueAdd;
}(React.Component);
var IssueList = /*#__PURE__*/function (_React$Component5) {
  _inherits(IssueList, _React$Component5);
  var _super5 = _createSuper(IssueList);
  function IssueList() {
    _classCallCheck(this, IssueList);
    return _super5.apply(this, arguments);
  }
  _createClass(IssueList, [{
    key: "render",
    value: function render() {
      return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h1", null, " Issue Tracker"), /*#__PURE__*/React.createElement(IssueFilter, null), /*#__PURE__*/React.createElement("hr", null), /*#__PURE__*/React.createElement(IssueTable, null), /*#__PURE__*/React.createElement("hr", null), /*#__PURE__*/React.createElement(IssueAdd, null));
    }
  }]);
  return IssueList;
}(React.Component);
var container = document.getElementById('container');
var root = ReactDOM.createRoot(container);
root.render( /*#__PURE__*/React.createElement(IssueList, null));