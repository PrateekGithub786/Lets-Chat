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
    document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!"; 
    
    function add_room(){
          roomName = document.getElementById("roomName").value;
          firebase.database().ref("/").child(roomName).update({purpose: "Adding Room Name"});
          localStorage.setItem("room Name", roomName);
          window.location = "kwitter_page.html";
    }
    
    function getData() {
          firebase.database().ref("/").on('value', function (snapshot) {
                document.getElementById("output").innerHTML = "";
                snapshot.forEach(function (childSnapshot) {
                      childKey = childSnapshot.key;
                      Room_names = childKey;
                      //Start code
                      console.log("Room Name: "+Room_names);
                      row = "<div class='room_name' id=" + Room_names + "onclick='redirectToPage(this.id)'>#" + Room_names + "</div><hr>"
                      document.getElementById("output").innerHTML += row;
                      //End code
                });
          });
    }
    getData();
    
    function redirectToPage(name){
          console.log(name);
          localStorage.setItem("room Name", name);
          window.location = "kwitter_page.html";
    }

    function logout(){
          window.location = "kwitter_room.html";
    }