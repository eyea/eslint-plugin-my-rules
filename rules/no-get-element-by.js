module.exports = context => {
  return {
    Identifier: function(node) {
      const blackList = [
        'getElementById',
        'getElementsByName',
        'getElementsByTagName',
        'getElementsByClassName',
      ];
      if (blackList.includes(node.name)) {
        context.report(node, `${node.name} is not allowed, please consider querySelector or querySelectorAll`);
      }
    }
  }
}
