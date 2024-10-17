window.onload = function () {
  var iframe = document.createElement("iframe");
  iframe.id = "chatbot-iframe";
  iframe.src = "https://chat.xerostai.com/chatbot_v1/?category=koreaTimes";
  iframe.style.width = "100%";
  iframe.style.height = "100%";
  iframe.style.border = "none";

  document.body.appendChild(iframe);
};
