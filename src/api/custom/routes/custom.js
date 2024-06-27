module.exports = {
  routes: [
    {
      method: "GET",
      path: "/schemas/:uid",
      handler: "api::custom.custom.getSchemaByUID",
    },
    {
      method: "GET",
      path: "/schemas",
      handler: "api::custom.custom.getAllSchemas",
    },
  ],
};
