module.exports = function (
  name = 'module',
  /** @type {import('plop').NodePlopAPI} */
  plop
) {
  plop.setGenerator(name, {
    description: 'src/module/*',
    prompts: [
      {
        type: 'input',
        name: 'module',
        message: 'kebabCase module name'
      },
      {
        type: 'checkbox',
        name: 'choices',
        message: `\module/components/Feature.tsx\module/index.ts\n以外に事前に作成しておきたいフォルダを選択してください\n`,
        choices: ['api', 'hooks', 'types', 'pages']
      }
    ],
    actions: ({ choices }) => {
      const actions = [
        {
          type: 'add',
          path: 'src/module/{{kebabCase module}}/components/{{pascalCase module}}.tsx',
          templateFile: 'generator/module/components/Component.tsx.hbs'
        }
      ]

      if (!choices) return actions
      const choiceAction = {
        api: {
          path: 'src/module/{{kebabCase module}}/api/get{{pascalCase module}}.ts',
          templateFile: 'generator/module/api/getModule.ts.hbs'
        },
        hooks: {
          path: 'src/module/{{kebabCase module}}/hooks/use{{pascalCase module}}.ts',
          templateFile: 'generator/module/hooks/useModule.ts.hbs'
        },
        types: {
          path: 'src/module/{{kebabCase module}}/types/index.ts',
          templateFile: 'generator/module/types/index.ts.hbs'
        },
        pages: {
          path: 'src/module/{{kebabCase module}}/pages/{{pascalCase module}}Page.tsx',
          templateFile: 'generator/module/Pages/Page.tsx.hbs'
        }
      }

      for (const choice of choices) {
        const options = choiceAction[choice]
        actions.push({
          type: 'add',
          ...options
        })
      }

      const isSelectedPages = choices.includes('pages')
      const indexFile = isSelectedPages
        ? {
            path: 'src/module/{{kebabCase module}}/index.ts',
            templateFile: 'generator/module/pagesIndex.ts.hbs'
          }
        : {
            path: 'src/module/{{kebabCase module}}/index.ts',
            templateFile: 'generator/module/componentsIndex.ts.hbs'
          }
      actions.push({
        type: 'add',
        ...indexFile
      })

      return actions
    }
  })
}
