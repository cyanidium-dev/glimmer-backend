import {defineType, defineField} from 'sanity'

export default defineType({
  name: 'product',
  title: 'Книги',
  type: 'document',
  fields: [
    defineField({
      name: 'category',
      title: 'Категорія',
      type: 'string',
      options: {
        list: [
          {title: 'Художня література', value: 'fiction'},
          {title: 'Канцелярія', value: 'stationery'},
        ],
        layout: 'radio',
      },
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: 'genre',
      title: 'Жанр',
      type: 'reference',
      to: [{type: 'genre'}],
      hidden: ({parent}) => parent?.category !== 'fiction',
    }),

    defineField({
      name: 'title',
      title: 'Назва книги',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'author',
      title: 'Автор',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'price',
      title: 'Повна ціна',
      type: 'number',
      validation: (Rule) => Rule.required().min(0),
    }),
    defineField({
      name: 'discountPrice',
      title: 'Ціна зі знижкою',
      type: 'number',
      validation: (Rule) => Rule.min(0),
    }),
    defineField({
      name: 'description',
      title: 'Опис',
      type: 'array',
      of: [{type: 'block'}],
    }),
    defineField({
      name: 'gallery',
      title: 'Галерея зображень',
      type: 'array',
      of: [{type: 'image', options: {hotspot: true}}],
    }),
    defineField({
      name: 'bookScreens',
      title: 'Скріншоти книги',
      type: 'array',
      of: [{type: 'image', options: {hotspot: true}}],
    }),
    defineField({
      name: 'reviews',
      title: 'Відгуки',
      type: 'array',
      of: [{type: 'review'}],
    }),
    defineField({
      name: 'status',
      title: 'Статус товару',
      type: 'string',
      options: {
        list: [
          {title: 'В наявності', value: 'inStock'},
          {title: 'Передзамовлення', value: 'preOrder'},
        ],
        layout: 'radio',
      },
      initialValue: 'inStock',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'sku',
      title: 'Код товару (SKU)',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'publisher',
      title: 'Видавництво',
      type: 'reference',
      to: [{type: 'publisher'}],
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'coverType',
      title: 'Обкладинка',
      type: 'string',
      options: {
        list: [
          {title: 'М’яка', value: 'soft'},
          {title: 'Тверда', value: 'hard'},
        ],
        layout: 'radio',
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'paperType',
      title: 'Папір',
      type: 'string',
      options: {
        list: [{title: 'Офсетний', value: 'offset'}],
        layout: 'radio',
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'language',
      title: 'Мова',
      type: 'string',
      options: {
        list: [
          {title: 'Українська', value: 'ua'},
          {title: 'Англійська', value: 'en'},
        ],
        layout: 'radio',
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'year',
      title: 'Рік видання',
      type: 'number',
      validation: (Rule) => Rule.min(1000).max(new Date().getFullYear() + 1),
    }),
    defineField({
      name: 'pages',
      title: 'Кількість сторінок',
      type: 'number',
      validation: (Rule) => Rule.min(1),
    }),
    defineField({
      name: 'dimensions',
      title: 'Розміри (см)',
      type: 'object',
      fields: [
        {name: 'height', title: 'Висота', type: 'number'},
        {name: 'width', title: 'Ширина', type: 'number'},
        {name: 'length', title: 'Довжина', type: 'number'},
      ],
    }),
    defineField({
      name: 'isBestseller',
      title: 'Хіт продажу',
      type: 'boolean',
      initialValue: false,
    }),

    defineField({
      name: 'isNew',
      title: 'Новинка',
      type: 'boolean',
      initialValue: false,
    }),
  ],
})
