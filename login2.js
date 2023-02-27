function validate()
{
var username=document.getElementById("username").value;
var password=document.getElementById("password").value;
if(username=="Gaurav"&& password=="1234")
{
    window.open("index.html");
    return false;

}
else
{
    alert("login failed");
}


}