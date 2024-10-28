const enumRule = {
  meta: {
    /**
     * "problem": 发现代码中潜在问题
     * "suggestion": 建议以改善代码质量或可读性
     * "layout": 代码格式布局相关
     */
    type: "suggestion",
    docs: {
      description: "eslint rule description",
      /**
       * "Best Practices": 最佳实践
       * "Possible Errors": 可能的错误
       * "Stylistic Issues": 风格问题
       * "ECMAScript 6": ES6特有
       */
      category: "Best Practices",
      recommended: true,
    },
    fixable: true,
    schema: [
      {
        type: "object",
        properties: {
          enumMap: { type: "object", additionalProperties: { type: "string" } },
        },
        required: ["enumMap"],
      },
    ],
  },
  create(context) {
    const option = context.options[0] || {};
    const enumMap = option.enumMap || {};
    console.log(context, "!!!!!");
    return {
      Literal(node) {
        if (enumMap[node.value]) {
          context.report({
            node,
            message: "enum map message",
            fix(fixer) {
              const enumValue = enumMap[node.value];
              fixer.replaceText(node, enumValue);
            },
          });
        }
      },
    };
  },
};

export default enumRule;
