module.exports = {
  getSchemaByUID: async (ctx) => {
    const { uid } = ctx.params;
    const schema = await strapi.contentTypes[uid];

    if (!schema) {
      return ctx.notFound(`Content type not found: ${uid}`);
    } else {
      return schema;
    }
  },
  getAllSchemas: async (ctx) => {
    return await strapi.contentTypes;
  },
};
