angular.module('freedive', ['angular-meteor','ionic']);
 
if (Meteor.isCordova) {
  angular.element(document).on('deviceready', onReady);
}
else {
  angular.element(document).ready(onReady);
}
 
function onReady() {
  angular.bootstrap(document, ['freedive']);
}

if (Meteor.isCordova) {
	document.addEventListener("deviceready", function() {
		StatusBar.overlaysWebView(true);
		StatusBar.styleLightContent();
	}, false);
}


notify = function(text){
	if(Meteor.isCordova){
		if(User.get().vibrate){
			navigator.vibrate(300);
		}
		if(User.get().mute){
      if(device.platform == 'iOS' && device.version[0]/1.0 >= 9){
        TTS.speak({text: text, rate: 1.6}, function() {});
      } else {
        TTS.speak(text, function() {});
      }
		}
	}
};
