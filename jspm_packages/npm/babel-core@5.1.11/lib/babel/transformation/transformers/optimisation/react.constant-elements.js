/* */ 
"format global";
"use strict";

var _interopRequireWildcard = function (obj) { return obj && obj.__esModule ? obj : { "default": obj }; };

exports.JSXElement = JSXElement;
exports.__esModule = true;

var react = _interopRequireWildcard(require("../../helpers/react"));

var metadata = {
  optional: true
};

exports.metadata = metadata;
var immutabilityVisitor = {
  enter: function enter(node, parent, scope, state) {
    var _this = this;

    var stop = function () {
      state.isImmutable = false;
      _this.stop();
    };

    if (this.isJSXClosingElement()) {
      this.skip();
      return;
    }

    if (this.isJSXIdentifier({ name: "ref" }) && this.parentPath.isJSXAttribute({ name: node })) {
      return stop();
    }

    if (this.isJSXIdentifier() || this.isIdentifier() || this.isJSXMemberExpression()) {
      return;
    }

    if (!this.isImmutable()) stop();
  }
};

function JSXElement(node, parent, scope, file) {
  if (node._hoisted) return;

  var state = { isImmutable: true };
  this.traverse(immutabilityVisitor, state);
  this.skip();

  if (state.isImmutable) this.hoist();

  node._hoisted = true;
}