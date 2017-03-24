(function(){

  $(document).ready(init);

    var config = {
       apiKey: "AIzaSyC1h2JEp7ys6XwBGG2b48Y3zAnQRy1qLDk",
       authDomain: "artshare-database.firebaseapp.com",
       databaseURL: "https://artshare-database.firebaseio.com",
       storageBucket: "artshare-database.appspot.com",
       messagingSenderId: "851647581572"
     };

     function init(){
       firebase.initializeApp(config);
       $('select').material_select();
       $('#submit').click(writeData);
     }

      function writeData() {
        var typeofwork = $('#typeofwork option:selected').text();
        var nameofartist =  $('#nameofartist').val();
        var nameofwork =  $('#nameofwork').val();
        var desc =  $('#desc').val();

        var project = {
          typeofwork : typeofwork,
          nameofartist : nameofartist,
          nameofwork : nameofwork,
          description : desc,
        };

        var newProjectKey = firebase.database().ref().child('Project').push().key;
        var updates = {};
        updates['/Project/' + newProjectKey] = project;

        firebase.storage().ref().child('images/projects/' + newProjectKey).put($('#uploadfile')[0].files[0]).then(function(snapshot){
            return firebase.database().ref().update(updates).then(function(){
              window.location.replace('./homepage.html');
            });
          }).catch(function(error){
            console.log(error.message);
          });
      }

  })();
