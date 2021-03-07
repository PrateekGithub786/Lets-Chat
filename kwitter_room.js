var firebaseConfig = {
      apiKey: "AIzaSyDr7YnsCq9n1G6hjGer0SqKiOSYD7VUBrU",
      authDomain: "kwitter-29e56.firebaseapp.com",
      databaseURL: "https://kwitter-29e56-default-rtdb.firebaseio.com",
      projectId: "kwitter-29e56",
      storageBucket: "kwitter-29e56.appspot.com",
      messagingSenderId: "293463708740",
      appId: "1:293463708740:web:3def1aaa28045a45a61811"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
//ADD YOUR FIREBASE LINKS HERE

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();


var user_name = localStorage.getItem("user");
document.getElementById("user_name").innerHTML = user_name;

function logout(){
      window.location = "index.html";
}