/* */ 
"format global";
"use strict";

var _interopRequireWildcard = function (obj) { return obj && obj.__esModule ? obj : { "default": obj }; };

// foo in bar
exports.BinaryExpression = BinaryExpression;

// { 1: "foo" }
exports.Property = Property;

// /foobar/g
exports.Literal = Literal;

// foo.bar
exports.MemberExpression = MemberExpression;

// Object.setPrototypeOf
// Object.preventExtensions
// Object.keys
// Object.isExtensible
// Object.getOwnPropertyDescriptor
// Object.defineProperty
exports.CallExpression = CallExpression;

// delete foo.bar
exports.UnaryExpression = UnaryExpression;

// foo.bar = bar;
exports.AssignmentExpression = AssignmentExpression;

// new Proxy
exports.NewExpression = NewExpression;
exports.__esModule = true;

var t = _interopRequireWildcard(require("../../../types"));

var util = _interopRequireWildcard(require("../../../util"));

var metadata = {
  optional: true
};exports.metadata = metadata;

function BinaryExpression(node) {
  if (node.operator === "in") {
    return util.template("ludicrous-in", {
      LEFT: node.left,
      RIGHT: node.right
    });
  }
}

function Property(node) {
  var key = node.key;
  if (t.isLiteral(key) && typeof key.value === "number") {
    key.value = "" + key.value;
  }
}

function Literal(node) {
  if (node.regex) {
    node.regex.pattern = "foobar";
    node.regex.flags = "";
  }
}

function MemberExpression(node) {}

function CallExpression(node) {}

function UnaryExpression(node) {}

function AssignmentExpression(node) {}

function NewExpression(node, parent, scope, file) {
  if (this.get("callee").isIdentifier({ name: "Proxy" })) {
    return t.callExpression(file.addHelper("proxy-create"), [node.arguments[0], file.addHelper("proxy-directory")]);
  } else {}
}

// possible proxy constructor