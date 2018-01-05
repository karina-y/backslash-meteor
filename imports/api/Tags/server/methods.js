import { Meteor } from 'meteor/meteor';
import rateLimit from '../../../modules/rate-limit';
import { HTTP } from 'meteor/http'

Meteor.methods({

  'tags.view': function tagsViewAll() {
    try {
      return HTTP.get(Meteor.settings.private.Db.RootUri + 'tags', {
        headers: {
          'Authorization': Meteor.settings.private.Db.AuthToken
        }
      }).data;
    } catch (exception) {
      console.log("server error tags.view", exception)
      throw new Meteor.Error('500', exception);
    }
  },

  'tags.view.byFileId': function tagsViewByFile(userId, fileId) {
    try {
      return HTTP.get(Meteor.settings.private.Db.RootUri + 'tags/' + userId + "/" + fileId, {
        headers: {
          'Authorization': Meteor.settings.private.Db.AuthToken
        }
      }).data;
    } catch (exception) {
      console.log("server error tags.view.byFileId", exception)
      throw new Meteor.Error('500', exception);
    }
  }

});

rateLimit({
  methods: [
    'tags.view',
    'tags.view.byFileId'
  ],
  limit: 5,
  timeRange: 1000,
});
