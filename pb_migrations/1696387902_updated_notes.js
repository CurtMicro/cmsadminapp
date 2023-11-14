/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("8gve2fqwdfia39h")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "4qdwk0fz",
    "name": "title",
    "type": "text",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("8gve2fqwdfia39h")

  // remove
  collection.schema.removeField("4qdwk0fz")

  return dao.saveCollection(collection)
})
