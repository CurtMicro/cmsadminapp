/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("8gve2fqwdfia39h")

  // remove
  collection.schema.removeField("y8pfftsr")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "fxvoxwrz",
    "name": "creator",
    "type": "relation",
    "required": true,
    "presentable": false,
    "unique": false,
    "options": {
      "collectionId": "_pb_users_auth_",
      "cascadeDelete": true,
      "minSelect": null,
      "maxSelect": 1,
      "displayFields": null
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("8gve2fqwdfia39h")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "y8pfftsr",
    "name": "creator",
    "type": "text",
    "required": true,
    "presentable": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  // remove
  collection.schema.removeField("fxvoxwrz")

  return dao.saveCollection(collection)
})
