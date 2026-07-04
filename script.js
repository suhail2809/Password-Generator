const characters =
"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+[]{}<>?/";

function randomPasswords(){

    let password="";

    for (let i=0; i<15; i++){
        let randomindex= Math.floor(Math.random()*characters.length);
        password+=characters[randomindex];
    }
    return password;
}

function generatePasswords(){
    document.getElementById("pass1").textContent=randomPasswords();
    document.getElementById("pass2").textContent=randomPasswords();
}