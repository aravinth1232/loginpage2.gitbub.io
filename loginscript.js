const form = document.getElementById("form")
const username = document.querySelector('#username')

const password = document.querySelector('#password')





form.addEventListener('submit',(e)=>{
   
   
    if(!validation()){
    e.preventDefault();
    }
       
    
})


function validation(){
    const usval = username.value.trim()
    const passwordval = password.value.trim()
    let s =true;

    

if(usval === ''){
    s=false;
    set(username, "Username is required")
}
else{
    sets(username)
}


if(passwordval === ''){
    s=false;
    set(password,"Password is required")
}if(passwordval.length< 8){
    s=false;
    set(password,"Pasword must be atleast 8 characters long")
}else{
    sets(password)
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
   
   
    
}









function validateEmail(email){
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };