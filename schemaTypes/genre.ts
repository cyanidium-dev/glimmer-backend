import {defineType, defineField} from 'sanity'

export default defineType({
  name: 'genre',
  title: 'Жанри',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Назва жанру',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'name',
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),
  ],
})
