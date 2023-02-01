import baseSchema from "@/store/modules/schemas/base.schema";

export default {
  sanitize: {
    type: 'object',
    properties: {
      ...baseSchema.sanitize.properties
    }
  },
  validate: {
    insert: {
      type: 'object',
      properties: {
        ...baseSchema.validate.insert.properties
      }
    },
    update: {
      type: 'object',
      properties: {
        ...baseSchema.validate.update.properties
      }
    },
    delete: {
      type: 'object',
      properties: {
        ...baseSchema.validate.delete.properties
      }
    }
  }
}
