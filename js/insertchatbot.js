window.onload = function () {
  var iframe = document.createElement("iframe");
  iframe.id = "chatbot-iframe";
  iframe.src = "https://chat.xerostai.com/chatbot_v1/?category=koreaTimes";
  iframe.style.width = "100%";
  iframe.style.height = "100%";
  iframe.style.border = "none";

  var targetElement = document.getElementById("d3_company_name");
  if (targetElement) {
    targetElement.appendChild(iframe);
  } else {
    console.error("Element with id 'd3_company_name' not found.");
  }
};
