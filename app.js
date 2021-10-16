var img = document.getElementById('userimg')
var email = document.getElementById("useremail")
var Name = document.getElementById("userName")



function gsignin(){

    var provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithPopup(provider)
    .then((res)=>{
        console.log(res.user)
        console.log(res.user.email)
        console.log(res.user.displayName)
        console.log(res.user.photoURL)
        
        var user = res.user 
        img.src=user.photoURL
        email.innerText = user.email
        Name.innerText = user.displayName
        
        
    })
    .catch((err)=>{
        console.log(err)
    })

    console.log(provider)


}
