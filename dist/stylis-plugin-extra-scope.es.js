function createExtraScopePlugin() {
  for (
    var _len = arguments.length, scopes = new Array(_len), _key = 0;
    _key < _len;
    _key++
  ) {
    scopes[_key] = arguments[_key]
  }

  scopes = scopes.map(function(scope) {
    return scope.trim() + ' '
  })
  return function(element) {
    var _element$root

    if (element.type !== 'rule') {
      return
    }

    if (
      ((_element$root = element.root) == null ? void 0 : _element$root.type) ===
      '@keyframes'
    ) {
      return
    }

    if (
      !element.parent ||
      (element.props.length === 1 && element.value.charCodeAt(0) !== 58) ||
      !element.length
    ) {
      element.props = element.props.flatMap(function(prop) {
        return scopes.map(function(scope) {
          return scope + prop
        })
      })
    }
  }
}

export default createExtraScopePlugin
