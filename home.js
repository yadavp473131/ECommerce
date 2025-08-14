const handleClick=(e)=>{
  if(e.target.innerHTML==="Login"){
    // window.location.href = "file:///C:/Users/Pushpendra%20Yadav/HotwaxAssignment/ShoppingApp/login.html";
    window.location.href = "/login.html";
  }
 if(e.target.innerHTML==="Signup"){
    window.location.href = "/signup.html";
  }
  
    
}
 
const handleLogout =()=>{
        localStorage.removeItem("email");
        localStorage.removeItem("password");
        window.location.href = "/login.html";
}

const gotohome=()=>{
  window.location.href="/home.html";
}

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
