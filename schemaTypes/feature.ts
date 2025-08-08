import {defineType, defineField} from 'sanity'

export default defineType({
  name: 'feature',
  title: 'Характеристики',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Назва характеристики',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'inputType',
      title: 'Тип вводу',
      type: 'string',
      options: {
        list: [
          {title: 'Текст/число', value: 'text'},
          {title: 'Вибір зі списку', value: 'select'},
        ],
        layout: 'radio',
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'options',
      title: 'Можливі значення (для select)',
      type: 'array',
      of: [{type: 'string'}],
      hidden: ({parent}) => parent?.inputType !== 'select',
    }),
  ],
  orderings: [
    {
      title: 'За порядком',
      name: 'orderAsc',
      by: [{field: 'order', direction: 'asc'}],
    },
  ],
})
