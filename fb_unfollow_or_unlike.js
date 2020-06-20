var button = document.getElementsByClassName('className')

for(var i = 0; i < button.length; i++){
   button[i].click();
}

console.log(button.length-1)

//scroll a page
window.scrollTo(0,document.body.scrollHeight);
