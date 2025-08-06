import {defineType, defineField} from 'sanity'

export default defineType({
  name: 'category',
  title: 'Категорії',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Назва категорії',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),
  ],
})
