var pop_button = document.getElementById("pop_button");
var css_src=document.createElement("link");

css_src.rel = "stylesheet";
css_src.href = "css/popup.css";
css_src.type = "text/css";

pop_button.appendChild(css_src);
var button = document.createElement("button");
button.className = "pop_button";
pop_button.appendChild(button);
var content_model = document.createElement("div");
content_model.className="modal";
var modal_content = document.createElement("div");
modal_content.className = "modal__content";
content_model.appendChild(modal_content);
append_content(modal_content, 'modal__header', 'content')
append_content(modal_content, 'modal__body', 'content')
append_content(modal_content, 'modal__footer', 'content')

pop_button.appendChild(content_model);



function append_content(ele,class_type,content){
  var div = document.createElement("div");
  div.className = class_type;
  div.innerHTML=content;
  ele.appendChild(div);
}