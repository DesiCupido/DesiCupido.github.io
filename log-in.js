function login(){
    const name = document.getElementById('name').value;
    let pangalan = name.toLowerCase();

    if(pangalan === "gislaine nicole tanjuaquio" || pangalan === "gislaine nicole" || pangalan === "gislaine" || pangalan === "nicole" || pangalan === "tanjuaquio"){
        window.location.href = 'message.html';
    }else if(pangalan.length <= 0){
        alert("Pag tinanong ka sumagot ka!");
    }
    else{
        alert("Hindi ikaw baby ko sino ka?!");
    }
}