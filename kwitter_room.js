
const firebaseConfig = {
      apiKey: "AIzaSyAnTODdBvDW1tdegno1ZlLRcFS3PprbYBw",
      authDomain: "kwitter-e80b6.firebaseapp.com",
      databaseURL: "https://kwitter-e80b6-default-rtdb.firebaseio.com",
      projectId: "kwitter-e80b6",
      storageBucket: "kwitter-e80b6.appspot.com",
      messagingSenderId: "613359161260",
      appId: "1:613359161260:web:f180b2b90523ab27283409"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

    user_name=localStorage.getItem("user_name");
    room_name=localStorage.getItem("room_name");

    document.getElementById("user_name").innerHTML="Welcome   " + user_name + "!";
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("Room Name-" + room_name);
      row="<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)'>#"+Room_names+"</div><hr>";
      document.getElementById("output").innerHTML=row;
      //End code
      });});}
getData();

function addRoom(){
      room_name=document.getElementById("room_name").value;

      firebase.database().ref("/" ).child(room_name).update({
            purpose:"adding room name"
      });

      localStorage.setItem("room_name", room_name);
      window.location="kwitter_page.html";
}

function redirectToRoomName(name){
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location="kwitter_page.html";
}

function logout(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location="index.html";
}
