const isLogIn = (localStorage.getItem("email") && localStorage.getItem("password"))?true:false;
console.log("running script in product.js");
let data;
const fecthData= async()=>{
    try{
      const response = await fetch("https://fakestoreapi.com/products");
       data = await response.json();
      displayData(data);
      console.log(data);
    }catch(error){
       console.log("error ",error);
    }
  
}

// for showing purpose it is always true
// if(isLogIn===true){
if(true){
fecthData();
}else{
  const box = document.getElementById('box');
  box.innerText = '';
  box.classList.add("background");
  const card = document.createElement("div");
  card.classList.add("loginsignupcard");
       card.innerHTML = `<div>
            <button type="button" id="pbtn1" onclick="handleClick(event)">Login</button>
            <button type="button" id="pbtn2" onclick="handleClick(event)">Signup</button>
            </div>`
            box.appendChild(card);
}

const displayData=(data)=>{
  const box = document.getElementById('box');
    box.innerHTML = '';
  
    data.forEach(product=>{
       const card = document.createElement("div");
      //  card.classList.add('product-card');
       card.classList.add('card');
         card.innerHTML = `
                       
                        <img src="${product.image}">
                        <span>adidas</span>
                        <div class="des">
                          <h4>${product.title.length>=54?"Big name of Product":product.title}</h4>
                          <div class="star">
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                          </div>
                          <h3>$${product.price}</h3>
                        </div>
                        <a href="#"><i class="fa fa-shopping-cart cart"></i></a>
                    
                     <button type="button" class="sm-btn" onClick="addToCart(${product.id})">Add to cart</button>
                     
                     `
       box.appendChild(card);
    }) 
}
 
const addToCart=(id)=>{
    
    const existingCart = JSON.parse(localStorage.getItem("cart")) || [];
    const itemIndex = existingCart.findIndex((item) => item.id === id);
    const product2 = data[id-1];
    if(itemIndex>=0){
      existingCart[itemIndex].Quantity+=1;
    }else{
      existingCart.push({...product2,Quantity:1 });
    }
    localStorage.setItem("cart", JSON.stringify(existingCart));
    alert("item added to cart");
}
const handleClick=(e)=>{
  if(e.target.innerHTML==="Login"){
    window.location.href = "/login.html";
  }
 if(e.target.innerHTML==="Signup"){
    window.location.href = "/signup.html";
  }
  
    
}
const handleChange=()=>{
     const select = document.getElementById("querySelect");
    const selectedValue = select.value;
    // console.log(selectedValue);
    let newData=[];
    if(selectedValue==="all"){
      displayData(data);
    }else{
      if(data){
        
        data.forEach(product=>{
        if(product.category===selectedValue){
            newData.push(product);
        }
      })
      }
      
    }
    displayData(newData);
}
const handleLogout =()=>{
        localStorage.removeItem("email");
        localStorage.removeItem("password");
        window.location.href = "/login.html";
}
const handleSearch =()=>{
  let filtered = [...data];
     const querySearch = document.getElementById("querySearch");
     const searchValue = querySearch.value;
     if(searchValue.trim() !==""){
      filtered = filtered.filter((product)=>
        product.title.toLowerCase().includes(searchValue.toLowerCase()));
     }
     
     displayData(filtered);
    
}
const gotohome=()=>{
  window.location.href="/index.html";
}

const btn1 = document.getElementsByClassName("btn1")[0];
// const isLogIn = (localStorage.getItem("email") && localStorage.getItem("password"))?true:false;
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
