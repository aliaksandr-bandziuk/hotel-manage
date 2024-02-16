import { defineField } from "sanity";

const user = {
  name: 'user',
  title: 'User',
  type: 'document',
  fields: [
    defineField({
      name: 'isAdmin',
      title: 'isAdmin',
      type: 'boolean',
      description: 'Check if user is admin',
      initialValue: false,
      validation: Rule => Rule.required(),
      // readOnly: true,
      // hidden: true,
    }),
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
      description: 'Name of user',
      readOnly: true,
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'image',
      title: 'Image',
      type: 'url'
    }),
    defineField({
      name: 'password',
      type: 'string',
      hidden: true,
    }),
    defineField({
      name: 'about',
      title: 'About',
      type: 'text',
      description: 'A short description of the user',
    }),
  ],
};

export default user;