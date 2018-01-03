import { Meteor } from 'meteor/meteor';

//todo mobilize this
if (Meteor.isDevelopment && Meteor.isCordova) process.env.MAIL_URL = Meteor.settings.private.MAIL_URL;
