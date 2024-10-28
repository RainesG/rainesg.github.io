module.exports = {
  meta: {
    type: "suggestion",
    docs: {
      description: "调用某些对象方法时需要加上注释",
    },
    // 我们需要使用这个规则的时候给我们传递参数，具体的参数含义可以看上面👆🏻
    schema: [
      {
        type: "object",
        properties: {
          objName: {
            type: "string",
          },
          propNames: {
            type: "array",
          },
          commentName: {
            type: "string",
          },
        },
      },
    ],
    // 报错或者告警的时候的提示语
    messages: {
      callWithoutComment: '"{{ callMethod }}"上需加上"{{ comment }}"开头的注释',
      // 带占位符的提示信息
      callWithoutRightComment:
        '"{{ callMethod }}"上的注释"{{ realComment }}"并非"{{ comment }}"开头', // 带占位符的提示信息
    },
  },
  create(context) {
    // 这里拿到规则传进来的参数
    const options = context.options[0];
    // 解构出对象名，方法名和注释名
    const { objName, propNames, commentName } = options;
    // 通过sourceCode可以拿到当前节点的很多信息，比如当前节点的注释
    const sourceCode = context.getSourceCode();
    // 以下是visitor对象，什么是visitor对象可以看看上面的介绍
    return {
      // 当有方法调用的时候，就会调用此方法且把当前节点传进来
      // 比如abc.doSometing这个语句就会调用此方法
      CallExpression(node) {
        // 比如是abc.doSomething
        // curObjName就是abc，curProName就是doSomething
        const curObjName = node.callee?.object?.name;
        const curPropName = node.callee?.property?.name;
        if (!objName || !propNames) {
          return;
        }
        // 如果不是我们在规则参数里指定的对象名和方法名，则无需校验直接通过
        if (curObjName !== objName || !propNames?.includes(curPropName)) {
          return;
        }
        // 通过sourceCode获取当前这个语句的注释，是一个数组
        const comments = sourceCode.getCommentsBefore(node) || [];
        const curComment = comments
          .map((comment) => comment.value)
          .join(" ")
          .trim();
        // 假如没加注释，则报错
        if (curComment?.trim() === "") {
          context.report({
            node,
            messageId: "callWithoutComment",
            data: {
              callMethod: `${curObjName}.${curPropName}`,
              comment: commentName,
            },
          });
          return;
        }
        // 假如加了注释，且是合法的注释，则通过
        if (curComment.includes(commentName)) {
          return;
        }
        // 假如加了注释，但是不是合法的注释，也报错
        context.report({
          node,
          messageId: "callWithoutRightComment",
          data: {
            callMethod: `${curObjName}.${curPropName}`,
            comment: commentName,
            realComment: curComment,
          },
        });
      },
    };
  },
};
