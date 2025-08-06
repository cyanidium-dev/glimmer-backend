import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemaTypes'

export default defineConfig({
  name: 'default',
  title: 'glimmer-backend',

  projectId: 'us9jz0mn',
  dataset: 'production',

  plugins: [
    structureTool({
      structure: (S) =>
        S.list()
          .title('Контент')
          .items([
            S.listItem()
              .title('Hero Баннери')
              .child(S.documentList().title('Hero Баннери').filter('_type == "heroBanner"')),

            S.listItem()
              .title('Пости instagram')
              .child(
                S.editor().id('instagram').schemaType('instagram').documentId('instaSingleton'),
              ),
            S.listItem()
              .title('Список видавництв')
              .child(S.documentList().title('Видавництва').filter('_type == "publisher"')),
            S.listItem()
              .title('Список жанрів')
              .child(S.documentList().title('Жанри').filter('_type == "genre"')),
            S.listItem()
              .title('Список продуктів')
              .child(S.documentList().title('Продукти').filter('_type == "product"')),
          ]),
    }),

    visionTool(),
  ],

  schema: {
    types: schemaTypes,
  },
})
