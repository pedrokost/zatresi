import { computed } from "@ember/object";
import Model from "ember-data/model";
import attr from "ember-data/attr";
import { hasMany, belongsTo } from "ember-data/relationships";
import { memberAction } from "ember-api-actions";

/* globals Ember */

export default Model.extend({
  name: attr("string"),
  address: attr("string"),
  town: attr("string"),
  latitude: attr("number"),
  longitude: attr("number"),
  website: attr("string"),
  facebookUrl: attr("string"),
  phone: attr("string"),
  email: attr("string"),
  categories: attr("array"),
  parent: belongsTo("klub", { inverse: "branches" }),
  branches: hasMany("klub", { inverse: "parent" }),
  notes: attr("string"),
  editor: attr("string"),
  verified: attr("boolean"),
  closedAt: attr("date"),
  description: attr("string"),
  obcina: belongsTo("obcina"),
  images: hasMany("image", { async: true }),
  comments: hasMany("comments"),

  location: computed("latitude", "longitude", function() {
    return [this.latitude, this.longitude];
  }),

  confirmData: memberAction({
    path: "confirm",
    type: "post"
  })
});
