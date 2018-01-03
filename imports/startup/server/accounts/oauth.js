import { Meteor } from 'meteor/meteor';
import { ServiceConfiguration } from 'meteor/service-configuration';

//todo mobilize this
if (Meteor.isCordova) {
  const OAuthSettings = Meteor.settings.private.OAuth;

  if (OAuthSettings) {
    Object.keys(OAuthSettings).forEach((service) => {
      ServiceConfiguration.configurations.upsert(
        { service },
        { $set: OAuthSettings[service] },
      );
    });
  }
}