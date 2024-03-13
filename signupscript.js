const form = document.getElementById("form")
const username = document.querySelector('#username')
const email = document.querySelector('#email')
const password = document.querySelector('#password')
const cpassword = document.querySelector('#cpassword')






form.addEventListener('submit',(e)=>{

   
   

    if(!validation()){
    e.preventDefault();
    e.stopImmediatePropagation();
    }
       
    
})


function validation(){
    const usval = username.value.trim()
    const mailval = email.value.trim()
    const passwordval = password.value.trim()
    const cpasswordval = cpassword.value.trim()
    let s =true;

    

if(usval === '' || usval===null){
    s=false;
    set(username, "Username is required")
}
else{
    sets(username, "Username is required")
}

if(mailval === ''){
    s=false;
    set(email,"Email is required")
}else if(!validateEmail(mailval)){
    s=false;
    set(email,"Email is invalid")
}else{
    sets(email,"Email is invalid")
}
 

if(passwordval === ''){
    s=false;
    set(password,"Password is required")
}else if(passwordval.length< 8){
    s=false;
    set(password,"Pasword must be atleast 8 characters long")
}else{
    sets(password, "Password is required")
}


if(cpasswordval===''){
    s=false;
    set(cpassword,"Password is required")
}else if(cpasswordval!==passwordval){
    s=false;
    set(cpassword,"Password doesn't match")
}else{
    sets(cpassword, "Password is required")
}


return s;



}



function set(element,message){

 

    const first = element.parentElement;
    
    const parent = first.parentElement;
    const error = parent.querySelector(".erro")

    error.innerText = message

    error.style.color="rgb(238, 129, 129)";
    parent.classList.add('erro')
    parent.classList.remove('succ')
    
    // console.log(error)
    

}

function sets(element,message){

 

    const first = element.parentElement;
    
    const parent = first.parentElement;
    const error = parent.querySelector(".erro")

    error.innerText =message;

    error.style.color="transparent";
    parent.classList.add('succ')
    parent.classList.remove('erro')
   
   console.log(message);
    
}





function validateEmail(email){
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };




