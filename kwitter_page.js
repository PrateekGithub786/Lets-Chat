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

function getData() {
    firebase.database().ref("/" + room_name).on('value', function (snapshot) {
          document.getElementById("output").innerHTML = "";
          snapshot.forEach(function (childSnapshot) {
                childKey = childSnapshot.key;
                childData = childSnapshot.val();
                if (childKey != "purpose") {
                      firebase_message_id = childKey;
                      message_data = childData;
                      //Start code
                      console.log(firebase_message_id);
                      console.log(message_data);
                      name1 = message_data['Name'];
                      message = message_data['Message'];
                      Like = message_data['Like'];
                      nameWithTag = "<h4>" + name1 + "<img class='user_tick' src='tick.png'></h4>";
                      msgWithTag = "<h4 class='message_h4'>" + message + "</h4>";
                      like_button = "<button class='btn btn-warning' id=" + firebase_message_id + " value=" + Like + " onclick='update_like(this.id)'>";
                      spanWithag = "<span class='glyphicon glyphicon-thumbs-up'>Like:" + Like + "</span></button><hr>";
                      row = nameWithTag + msgWithTag + like_button + spanWithag;
                      document.getElementById("output").innerHTML += row;
                      //End code
                }
          });
    });
}
getData();

function update_like(message_id) {
    console.log("Clicked on like button" + message_id);
    button_id = message_id;
    likes = document.getElementById(button_id).value;
    updated_likes = Number(likes) + 1;
    console.log(updated_likes);
    firebase.database().ref(room_name).child(message_id).update({
          Like: updated_likes
    });
}