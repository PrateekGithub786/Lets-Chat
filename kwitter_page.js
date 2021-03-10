var firebaseConfig = {
    apiKey: "AIzaSyCWDKRiL-1A6CZDKqhUHw1_H-DPubpyJpQ",
    authDomain: "kwitter-2-d6287.firebaseapp.com",
    databaseURL: "https://kwitter-2-d6287-default-rtdb.firebaseio.com",
    projectId: "kwitter-2-d6287",
    storageBucket: "kwitter-2-d6287.appspot.com",
    messagingSenderId: "66664388042",
    appId: "1:66664388042:web:d3a625c025fe2362e3ab33"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  user_name = localStorage.getItem("user");
  room_name = localStorage.getItem("room Name");

function logout(){
    localStorage.removeItem("user");
    localStorage.removeItem("room Name");
    window.location = "index.html";
}

function send(){
    msg = document.getElementById("msg").value;
    firebase.database().ref(room_name).push({
        Name: user_name,
        Message: msg,
        Like: 0
    });

    document.getElementById("msg").value = "";
}