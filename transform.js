function transformLet(t, path) {
  if (!/(let|var)/.test(path.node.kind)) {
    return;
  }

  let d = path.node.declarations[0]
  if (!(
    d.init
    && d.init.callee
    && d.init.callee.name === 'require')) { return }

  path.replaceWith(
    t.VariableDeclaration('const', path.node.declarations)
  );
}

module.exports = function (babel) {
  const { types: t } = babel;

  return {
    visitor: {
      VariableDeclaration(path) {
       transformLet(t, path)
      }
    }
  }
}
