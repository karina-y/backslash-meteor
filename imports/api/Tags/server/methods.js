import { Meteor } from 'meteor/meteor';
import rateLimit from '../../../modules/rate-limit';
import { HTTP } from 'meteor/http'

Meteor.methods({

  'tags.view.all': function tagsViewAll() {
    try {
      return HTTP.get(Meteor.settings.Private.Db.RootUri + 'tags', {
        headers: {
          'Authorization': Meteor.settings.private.Db.AuthToken
        }
      }).data;
    } catch (exception) {
      throw new Meteor.ValidationError(exception);
    }
  },

  'tags.view.byFileId': function tagsViewByFile(userId, fileId) {
    try {
      return HTTP.get(Meteor.settings.Private.Db.RootUri + 'tags/' + userId + "/" + fileId, {
        headers: {
          'Authorization': Meteor.settings.private.Db.AuthToken
        }
      }).data;
    } catch (exception) {
      throw new Meteor.ValidationError(exception);
    }
  }

});

rateLimit({
  methods: [
    'tags.view.all',
    'tags.view.byFileId'
  ],
  limit: 5,
  timeRange: 1000,
});
