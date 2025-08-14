function point(){
     if(localStorage.getItem("email") && localStorage.getItem("password")){
    console.log("login successfull");
    window.location.href = "file:///C:/Users/Pushpendra%20Yadav/HotwaxAssignment/ShoppingApp2/home.html";
    }
}
setTimeout(point,3000);

const gotosignup=()=>{
    window.location.href = "/signup.html"
}
const gotohome=()=>{
  window.location.href="/home.html";
}

const form2 = document.getElementById('form2');
form2.addEventListener("submit",function (e){
         e.preventDefault();
         const email = document.getElementById("email").value.trim();
         const password = document.getElementById("password").value;

         if(localStorage.getItem("email")===email && localStorage.getItem("password")===password){
                                alert("login successful");
                                window.location.href = "/products.html"
         }
})

const ham = document.getElementsByClassName("ham")[0];
const cross = document.getElementsByClassName("cross")[0];
const navlist = document.getElementsByClassName("nav-list")[0];
ham.addEventListener('click',()=>{
  console.log("clicked");
      navlist.style.display = 'flex'; 
      navlist.style.flexDirection = 'column'; 
      navlist.style.backgroundColor = '#084d96ff'; 
      navlist.style.position = 'fixed'; 
      navlist.style.top = '0px'; 
      navlist.style.right = '0px'; 
      navlist.style.width = '200px'; 
      navlist.style.color = '#16160fff'; 
       
     
     cross.style.display = 'flex';
     cross.style.alignItems = 'center'; 
     cross.style.justifyContent ='center';
})
cross.addEventListener('click',()=>{
  cross.style.display = 'none';
  navlist.style.display = 'none';
})

const btn1 = document.getElementsByClassName("btn1")[0];
const isLogIn = (localStorage.getItem("email") && localStorage.getItem("password"))?true:false;
if(isLogIn){
  btn1.innerHTML = "Logout";
  btn1.addEventListener('click',()=>{
    handleLogout();
  })
}else{
  btn1.innerHTML = "Login";
  btn1.addEventListener("click",()=>{
    window.location.href= "/login.html";
  })
}
