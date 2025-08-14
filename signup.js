const form = document.getElementById("form1");
form.addEventListener("submit",function(e){
                e.preventDefault();
                const regex =  /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                const email = document.getElementById("email").value;
                if(!regex.test(email)){
                    // let element = document.getElementById("demo");
                    const element = document.createElement("h1");
                    element.innerText = "Email Should be in proper format";
                    const parent = document.getElementsByClassName("form-items")[1];
                    parent.appendChild(element);
                    return;
                }
            
                const name= document.getElementById("name").value;
                const password = document.getElementById("password").value;
                const cpassword = document.getElementById("cpassword").value;

                if(password.length<6){
                    const element = document.createElement("h1");
                    element.innerText = "Password length should be greater than 6";
                    const parent = document.getElementsByClassName("form-items")[2];
                    parent.appendChild(element);
                 return;
                }
                
                if(password!==cpassword){
                    
                     const element = document.createElement("h1");
                    element.innerText = "Password are not same check again";
                    const parent = document.getElementsByClassName("form-items")[3];
                    parent.appendChild(element); 
                    return; 
                }
                    
                localStorage.setItem("email",email);
                localStorage.setItem("password",password);
                document.getElementById("name").value = "";
                document.getElementById("email").value = "";
                document.getElementById("password").value ="";
                document.getElementById("cpassword").value ="";
                alert("form submitted successfully");
                window.location.href = "/login.html";

})
const gotosignin = () => {
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
