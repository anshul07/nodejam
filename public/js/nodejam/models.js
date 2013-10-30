NodeJam.Article = DS.Model.extend({
  comments: DS.hasMany('comment'),
  title: DS.attr(),
  body: DS.attr(),
  published: DS.attr(),
  tags: DS.attr(),
  created_at: DS.attr(),
  user: DS.attr()
});

NodeJam.Comment = DS.Model.extend({
  article: DS.belongsTo('article')
});