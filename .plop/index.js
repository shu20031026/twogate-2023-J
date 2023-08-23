module.exports = (plop) => {
  plop.setGenerator('component', {
    description: 'Create a component',
    prompts: [
      {
        type: 'list',
        name: 'category',
        message: 'コンポーネントの種類を選択してください',
        choices: [
          { name: 'base', value: 'base' },
          { name: 'domain', value: 'domain' },
          { name: 'ui', value: 'ui' },
        ],
      },
      {
        type: 'input',
        name: 'domain',
        message: 'ドメイン名を入力してください(domainコンポーネントの場合のみ)',
      },
      {
        type: 'input',
        name: 'name',
        message: 'コンポーネントの名前を入力してください',
      },
    ],
    actions: (data) => {
      const path = `../src/views/components/${data.category}/${data.category === 'domain' ? data.domain : ''}/`;
      const actions = [
        {
          type: 'add',
          path: path + '{{pascalCase name}}/index.tsx',
          templateFile: 'componentTemplate/index.tsx.hbs',
        },
        {
          type: 'add',
          path: path + '{{pascalCase name}}/template.tsx',
          templateFile: 'componentTemplate/template.tsx.hbs',
        },
        {
          type: 'add',
          path: path + '{{pascalCase name}}/index.stories.tsx',
          templateFile: 'componentTemplate/index.stories.tsx.hbs',
        },
        {
          type: 'add',
          path: path + '{{pascalCase name}}/index.test.tsx',
          templateFile: 'componentTemplate/index.test.tsx.hbs',
        },
      ];
      return actions;
    },
  });
};
