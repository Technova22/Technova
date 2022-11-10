const firebaseConfig = {
    apiKey: "AIzaSyBUF2U2mTQQp0vrEbJPFzMqRaPmYynfceI",
    authDomain: "technova22-f21f2.firebaseapp.com",
    projectId: "technova22-f21f2",
    storageBucket: "technova22-f21f2.appspot.com",
    messagingSenderId: "499347388002",
    appId: "1:499347388002:web:bf50994f21a1000585c33b",
    measurementId: "G-KV5PJT08MG"
  };

  firebase.initializeApp(firebaseConfig);
  // const analytics = getAnalytics(app);
  const auth = firebase.auth()
  const database = firebase.database()



  const validate_rollno=(rollno)=>{
    try
    // Add this user to Firebase Database
    {var database_ref = database.ref()
    var user = auth.currentUser
    // const rollno = signUpForm['signup-rollno'].value; 
    database_ref.child("users/"+rollno +"/rollno/").once("value",snapshot =>{
      if(snapshot.exists()){
        // const userData = snapshot.val();
        console.log("user exist",snapshot.val());
        
      
         
          throw new Error(`User exists already with ${rollno}`)
          // console.log("userrrrrrrt",snapshot.val());
        
       
      }
       else{
        console.log("user created");
        late();
       }
    })}
      catch(err){
    alert('user already exists');
     console.log(err.message);
    }
  }

  function late(){
    // console.log("fuck")
  auth.createUserWithEmailAndPassword(email, password)
  .then(function() {
    // Declare user variable
    var user = auth.currentUser
    // console.log(user);

    // Add this user to Firebase Database
    var database_ref = database.ref()

    // Create User data
    var user_data = {
      uid:user.uid,
      rollno:rollno,
      email : email,
      fullname : fullname,
     password :password,
      last_login : Date.now()
    }
     
    // Push to Firebase Database
    
    
    database_ref.child('users/' + rollno).set(user_data)

    // DOne
    alert('User Created!!')
    
  })
  .catch(function(error) {
    // Firebase will use this to alert of its errors
    var error_code = error.code
    var error_message = error.message

    alert(error_message);
  })
// Validate input fields
// if( validate_rollno(rollno)== true ){
//   alert("hello")
// }else{
}
  
// Set up our register function
const signup=async() =>{
    // Get all our input fields
    rollno = document.getElementById('rollno').value
    fullname = document.getElementById('fullname').value
    email = document.getElementById('email').value
    password  = document.getElementById('password').value
    confirmpassword  = document.getElementById('confirmpassword').value
    // let flag=false
    // await validate_rollno(rollno).then(flag=true).catch(flag=false)
    
        if(validate_rollno(rollno)){
          console.log("ok")
      }

      if ( validate_field(password) == false ) {
       
        alert('One or More Extra Fields is Outta Line!!');
        return;
      } 
  
      if (validate_email(email) == false) {
  
        alert('Email or Password is Outta Line!!')
        return
        // Don't continue running the code
      }
    
    
  
     
      // Move on with Auth
    
  }
  
  
  // Set up our login function
  function login () {
    // Get all our input fields
    email = document.getElementById('emaillogin').value
    password = document.getElementById('passwordlogin').value
  
    // Validate input fields
    if (validate_email(email) == false || validate_password(password) == false) {
      alert('Email or Password is Outta Line!!')
      return
      // Don't continue running the code
    }
  
    auth.signInWithEmailAndPassword(email, password)
    .then(function() {
      // Declare user variable
      var user = auth.currentUser
  
      // Add this user to Firebase Database
      var database_ref = database.ref()
  
      // Create User data
      var user_data = {
        last_login : Date.now()
      }
  
      // Push to Firebase Database
      database_ref.child('users/' + rollno).update(user_data)
  
      // DOne
      alert('User Logged In!!')
  
    })
    .catch(function(error) {
      // Firebase will use this to alert of its errors
      var error_code = error.code
      var error_message = error.message
  
      alert(error_message)
    })
  }
  
  
  
  
  // Validate Functions
  function validate_email(email) {
    expression = /^[^@]+@\w+(\.\w+)+\w$/
    if (expression.test(email) == true) {
      // Email is good
      return true
    } else {
      // Email is not good
      return false
    }
  }
  
  function validate_password(password) {
    // Firebase only accepts lengths greater than 6
    var passw=  /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{6,20}$/;
      if(password.match(passw)) 
      { 
      // alert('Correct')
      return true;
      }
      else
      { 
      alert('Should containne 6-20 atleast one lowercase letter, one uppercase letter, one numeric digit, and one special character ')
      return false;
      }
  }
  
  function validate_field(field) {
    if (field == null) {
      return false
    }
  
    if (field.length <= 0) {
      return false
    } 
  }
  