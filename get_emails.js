var search_in = document.body.innerHTML;
string_context = search_in.toString();

var array_mails = string_context.match(/([a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9._-]+)/gi);

for(i=0; i<array_mails.length;i++){
  console.log(i+" "+array_mails[i])
}
