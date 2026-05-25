import { defineField, defineType } from "sanity";

export const authorType = defineType({
  name: "author",
  title: "Authors",
  type: "document",
  fields: [
    defineField({
      name: "name",
      title: "Name",
      type: "string",
      validation: (Rule) => Rule.required()
    }),
    defineField({
      name: "designation",
      title: "Designation",
      type: "string"
    }),
    defineField({
      name: "bio",
      title: "Bio",
      type: "text",
      rows: 4
    })
  ]
});
