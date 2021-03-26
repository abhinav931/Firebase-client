importScripts('https://www.gstatic.com/firebasejs/8.3.1/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/8.3.1/firebase-messaging.js');

var firebaseConfig = {
    apiKey: "AIzaSyCugz9LuWcXbnk3Hx_ve44d6dRxCdoSL98",
    authDomain: "abhinav-ce8d7.firebaseapp.com",
    projectId: "abhinav-ce8d7",
    storageBucket: "abhinav-ce8d7.appspot.com",
    messagingSenderId: "814860230295",
    appId: "1:814860230295:web:ee81ca6e83f73c88e1d3d2",
    measurementId: "G-X8DL2DMW7Z"
  };

firebase.initializeApp(firebaseConfig);
const messaging=firebase.messaging();

messaging.setBackgroundMessageHandler(function (payload) {
    console.log(payload);
    const notification=JSON.parse(payload);
    const notificationOption={
        body:notification.body,
        icon:notification.icon
    };
    return self.registration.showNotification(payload.notification.title,notificationOption);
});