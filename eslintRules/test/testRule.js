const rule = require("../index.ts"),
  RuleTester = require("eslint").RuleTester;
// 这是传给我们的规则的参数
const options = [
  {
    objName: "test",
    propNames: ["testCall", "testCall2"],
    commentName: "$test",
  },
];
const ruleTester = new RuleTester();
ruleTester.run("youRule", rule, {
  // 这是合法的可以通过规则的案例
  valid: [
    {
      code: ` // $test
        test.testCall('xxx');`,
      // 传给规则的参数
      options,
    },
    {
      code: ` // $test注释
        test.testCall2('xxx');`,
      // 传给规则的参数
      options,
    },
  ],
  invalid: [
    {
      code: ` //
        test.testCall('xxx');`,
      errors: [
        {
          message: '"test.testCall"上需加上"$test"开头的注释',
          type: "CallExpression",
        },
      ],
      options,
    },
    {
      code: ` // $test xxx2
        console.log(100)
        test.testCall('xxx');`,
      errors: [
        {
          message: '"test.testCall"上需加上"$test"开头的注释',
          type: "CallExpression",
        },
      ],
      options,
    },
    {
      code: `
        console.log(100)
        test.testCall('xxx')
        // $note xxx3
        `,
      errors: [
        {
          message: '"test.testCall"上需加上"$test"开头的注释',
          type: "CallExpression",
        },
      ],
      options,
    },
    {
      code: `
        // xxxx
        test.testCall('xxx');
        `,
      errors: [
        {
          message: '"test.testCall"上的注释"xxxx"并非"$test"开头',
          type: "CallExpression",
        },
      ],
      options,
    },
  ],
});
