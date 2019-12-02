
  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyBcOGfKlPwXRGyiGV1UuuQUVXUswNWiIKE",
    authDomain: "username-and-password-2bbed.firebaseapp.com",
    databaseURL: "https://username-and-password-2bbed.firebaseio.com",
    projectId: "username-and-password-2bbed",
    storageBucket: "username-and-password-2bbed.appspot.com",
    messagingSenderId: "288758209039",
    appId: "1:288758209039:web:a37fb3687b700d9573617a"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);



  function myf() {
    var provider = new firebase.auth.FacebookAuthProvider();

    firebase.auth().signInWithPopup(provider).then(function (result) {
        console.log(result);
       console.log('login');
    }).catch(function (error) {
        console.log(error);
       console.log('error');
    });
}