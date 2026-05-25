import { defineField, defineType } from "sanity";

export const settingsType = defineType({
  name: "settings",
  title: "Site Settings",
  type: "document",
  fields: [
    defineField({
      name: "siteTitle",
      title: "Site title",
      type: "string"
    }),
    defineField({
      name: "defaultSeo",
      title: "Default SEO",
      type: "seo"
    }),
    defineField({
      name: "complianceDisclosure",
      title: "Compliance disclosure",
      type: "text",
      rows: 4
    })
  ]
});
