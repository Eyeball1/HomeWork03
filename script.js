var alphabetw = "abcdefghijklmnopqrstuvwxyz"
var AlphaBetw = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
var numbersw = "0123456789"
var symbolsw = "!@#$%^&*()_+~`|}{[]:;?><,./-="
function myFunction () {
    function inner_func(){
        var lenght = parseInt(prompt("Length of your password (numbers)")
        
  );
  if (isNaN(lenght) === true) {
    alert("Password Length Must Be a Number");
    return;
    
  }
  if (length < 8) {
    alert("Password Length Must Be above 8");
    return;
    
  }

  if (length > 128) {
    alert("Password Length Must Be under 128");
    return;
    
  }
    }
    
    inner_func();

    
var questions = [
    { q: "Do you want lowercase letters?", a: "w" },
    { q: "Do you want uppercase letters?", a: "e" },
    { q: "Do you want numbers?", a: "r" },
    { q: "Do you want special characters?", a: "t" },
  ];

  
  


  for (var i = 0; i < questions.length; i++) {
    
    var answer = confirm(questions[i].q);

   
    var passwordCharSet
    passwordCharSet = "";
    if ((answer === true && questions[i].a === "w") ||
      (answer === false && questions[i].a === "f")) {
      
      passwordCharSet += alphabetw;
   
    }
   
    
      if ((answer === true && questions[i].a === "e") ||
      (answer === false && questions[i].a === "f")) {
     
      passwordCharSet += AlphaBetw;
    }
    
    if ((answer === true && questions[i].a === "r") ||
    (answer === false && questions[i].a === "f")) {
  
    passwordCharSet += numbersw;
    
  }
  
  if ((answer === true && questions[i].a === "t") ||
  (answer === false && questions[i].a === "f")) {

  passwordCharSet += symbolsw;
  
}

    
  }
  function inner_func2(){
      userPassword = "";
      for (let i = 0; i < length; i++) {
        userPassword += passwordCharSet.charAt(
          Math.floor(Math.random() * passwordCharSet.length)
        );
      }



}

inner_func2();






  alert("You got " + passwordCharSet + "/" + questions.length);
  alert(userPassword);
}
