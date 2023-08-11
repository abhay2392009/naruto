var firebaseConfig = {
      apiKey: "AIzaSyAo3nMd-IPa72PJDO6GaHtPJI0jKSV95ec",
      authDomain: "kwitter-project-3ec9f.firebaseapp.com",
      projectId: "kwitter-project-3ec9f",
      storageBucket: "kwitter-project-3ec9f.appspot.com",
      messagingSenderId: "979966844577",
      appId: "1:979966844577:web:e458b06ec7b42633455ae0",
      measurementId: "G-QQ9YJR1GBB"
    };
    firebase.initializeApp(firebaseConfig);
//ADD YOUR FIREBASE LINKS HERE

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
