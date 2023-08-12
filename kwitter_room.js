var firebaseConfig = {
      apiKey: "AIzaSyC5KvScd097fplx-HqqrEsXtJrKbcJKFmc",
      authDomain: "kwitter-f2176.firebaseapp.com",
      databaseURL: "https://kwitter-f2176-default-rtdb.firebaseio.com",
      projectId: "kwitter-f2176",
      storageBucket: "kwitter-f2176.appspot.com",
      messagingSenderId: "796194198609",
      appId: "1:796194198609:web:e08c88ac58c03bb5ce1470"
    };
    firebase.initializeApp(firebaseConfig);
//ADD YOUR FIREBASE LINKS HERE
      user_name = localStorage.getItem("user_name");
      document.getElementById("user_name").innerHTML = "Welcome " + user_name + " !" ;

      function addroom()
      {
            room_name = document.getElementById("room_name").value;
            firebase.database().ref("/").child(user_name).update({ 
                  purpose: "adding user"
             }); 
             
             localStorage.setItem("room_name", room_name);
             window.location = "kwitter.html";

      }

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
       console.log("Room name- " + Room_names);
       row = "<div class = 'room_name' id="+Room_names+" onclick = 'redirectToRoomName(this.id)' > #"+Room_names+" </div> <hr> ";
       document.getElementById("output").innerHTML += row;
       
      //End code
      });});}
getData();

function redirectToRoomName(name)
{
      console.log(name);
      localStorage.setItem("room_name",name);
      window.location = "kwitter_page.html";
}
