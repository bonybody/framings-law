module.exports = function (
  name = 'feature',
  /** @type {import('plop').NodePlopAPI} */
  plop
) {
  plop.setGenerator(name, {
    description: 'src/features/*',
    prompts: [
      {
        type: 'input',
        name: 'feature',
        message: 'kebabCase feature name'
      },
      {
        type: 'checkbox',
        name: 'choices',
        message: `\nfeature/components/Feature.tsx\nfeature/index.ts\n以外に事前に作成しておきたいフォルダを選択してください\n`,
        choices: ['api', 'hooks', 'types', 'pages']
      }
    ],
    actions: ({ choices }) => {
      const actions = [
        {
          type: 'add',
          path: 'src/features/{{kebabCase feature}}/components/{{pascalCase feature}}.tsx',
          templateFile: 'generator/feature/components/Component.tsx.hbs'
        }
      ]

      if (!choices) return actions
      const choiceAction = {
        api: {
          path: 'src/features/{{kebabCase feature}}/api/get{{pascalCase feature}}.ts',
          templateFile: 'generator/feature/api/getFeature.ts.hbs'
        },
        hooks: {
          path: 'src/features/{{kebabCase feature}}/hooks/use{{pascalCase feature}}.ts',
          templateFile: 'generator/feature/hooks/useFeature.ts.hbs'
        },
        types: {
          path: 'src/features/{{kebabCase feature}}/types/index.ts',
          templateFile: 'generator/feature/types/index.ts.hbs'
        },
        pages: {
          path: 'src/features/{{kebabCase feature}}/pages/{{pascalCase feature}}Page.tsx',
          templateFile: 'generator/feature/Pages/Page.tsx.hbs'
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
            path: 'src/features/{{kebabCase feature}}/index.ts',
            templateFile: 'generator/feature/pagesIndex.ts.hbs'
          }
        : {
            path: 'src/features/{{kebabCase feature}}/index.ts',
            templateFile: 'generator/feature/componentsIndex.ts.hbs'
          }
      actions.push({
        type: 'add',
        ...indexFile
      })

      return actions
    }
  })
}
