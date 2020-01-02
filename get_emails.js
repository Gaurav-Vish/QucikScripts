var search_in = document.body.innerHTML;
string_context = search_in.toString();

array_mails = string_context.match(/([a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9._-]+)/gi);
console.log(array_mails);
