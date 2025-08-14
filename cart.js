console.log("script running");

const helpFunction=()=>{

            const cart = JSON.parse(localStorage.getItem("cart"));
            const box2 = document.getElementById('box2');
            // console.log("box 2",box2)
            box2.innerHTML = '';

              cart.forEach(product=>{
                          const card = document.createElement("div");
                          card.classList.add("card")
                          
                          // console.log(cart);
                          const title = product.title;
                          const image = product.image;
                          const price = product.price;
                          const Quantity = product.Quantity;
                          if(Quantity<=0){
                              return;
                          }
                          // console.log(title,image,price);
                          card.innerHTML = ` 
                                <img src="${image}" />
                                <h4>${product.title.length>=54?"Big name of Product":product.title}</h4>
                                
                                <h4>Price:  $${price}</h4>
                                <h3>Available Quantity:  ${Quantity}</h3>
                                <button type="button" class="sm-btn" onClick="handleClick2(${product.id})">Remove from cart</button>
                                `

              box2.appendChild(card);
              })
              }
             helpFunction();
             const handleClick2=(id)=>{
            
            const existingCart = JSON.parse(localStorage.getItem("cart")) || [];
            const itemIndex = existingCart.findIndex((item) => item.id === id);
            // const product2 = data[id-1];
            if(itemIndex>=0){
              existingCart[itemIndex].Quantity-=1;
            }
            localStorage.setItem("cart", JSON.stringify(existingCart));
            alert("item removed from cart");
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