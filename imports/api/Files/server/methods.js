import { Meteor } from 'meteor/meteor';
import rateLimit from '../../../modules/rate-limit';
import { HTTP } from 'meteor/http'

Meteor.methods({

  'files.view.all': function filesViewAll(userId, directory) {
    try {
      return HTTP.get(Meteor.settings.Private.Db.RootUri + 'files/' + userId + "/" + directory, {
        headers: {
          'Authorization': Meteor.settings.private.Db.AuthToken
        }
      }).data;
    } catch (exception) {
      throw new Meteor.ValidationError(exception);
    }
  },

  'files.view.byFileId': function filesViewByFileId(userId, fileId) {
    try {
      return HTTP.get(Meteor.settings.Private.Db.RootUri + 'files/' + userId + "/" + fileId, {
        headers: {
          'Authorization': Meteor.settings.private.Db.AuthToken
        }
      }).data;
    } catch (exception) {
      throw new Meteor.ValidationError(exception);
    }
  },

  'files.view.byTags': function filesViewByFileId(userId, file) {
    try {
      return HTTP.get(Meteor.settings.Private.Db.RootUri + 'files/' + userId, {
        headers: {
          'Authorization': Meteor.settings.private.Db.AuthToken,
          'data': file  //contains directory and list of filetags
        }
      }).data;
    } catch (exception) {
      throw new Meteor.ValidationError(exception);
    }
  },

  'files.insert': function filesInsert(userId, file) {
    try {
      return HTTP.post(Meteor.settings.Private.Db.RootUri + 'file/' + userId, {
        headers: {
          'Authorization': Meteor.settings.private.Db.AuthToken,
          'data': file  //contains directory and list of filetags
        }
      }).data;
    } catch (exception) {
      throw new Meteor.ValidationError(exception);
    }
  },

  'files.update': function filesUpdate(userId, file) {
    try {
      return HTTP.put(Meteor.settings.Private.Db.RootUri + 'file/' + userId, {
        headers: {
          'Authorization': Meteor.settings.private.Db.AuthToken,
          'data': file  //contains directory and list of filetags
        }
      }).data;
    } catch (exception) {
      throw new Meteor.ValidationError(exception);
    }
  },

  'files.delete': function filesDelete(userId, fileId) {
    try {
      return HTTP.delete(Meteor.settings.Private.Db.RootUri + 'file/' + userId + "/" + fileId, {
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
    'files.view.all',
    'files.view.byFileId',
    'files.view.byTags',
    'files.insert',
    'files.update',
    'files.delete'
  ],
  limit: 5,
  timeRange: 1000,
});
