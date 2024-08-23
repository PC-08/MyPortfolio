let chatbotMsgList = ["Hi", "Hey", "Good Morning", "Good Evening", "How can I help you?", "Thank You"];
let chatContainer = document.getElementById("chatContainer");
let userInput = document.getElementById("userInput");
let sendMsgBtn = document.getElementById("sendMsgBtn");







function re() {
    let msg_from_chatbot_container = document.createElement("div");
    let msg_from_chatbot = document.createElement("span");

    let chatbotMsglength = chatbotMsgList.length;
    let chatbxreply = Math.ceil(Math.random() * chatbotMsglength - 1);
    msg_from_chatbot.textContent = chatbotMsgList[chatbxreply];
    msg_from_chatbot.classList.add("msg-from-chatbot");
    msg_from_chatbot_container.classList.add("msg-from-chatbot-container");
    msg_from_chatbot_container.appendChild(msg_from_chatbot);
    chatContainer.appendChild(msg_from_chatbot_container);
}


function Hi(userValue) {
    let msg_to_chatbot_container = document.createElement("div");
    let msg_to_chatbot = document.createElement("span");
    msg_to_chatbot.textContent = userValue;
    msg_to_chatbot.classList.add("msg-to-chatbot");
    msg_to_chatbot_container.classList.add("msg-to-chatbot-container");
    msg_to_chatbot_container.appendChild(msg_to_chatbot);
    chatContainer.appendChild(msg_to_chatbot_container);
    re(userValue);

}

sendMsgBtn.onclick = function() {
    let userValue = userInput.value;

    Hi(userValue);
    userInput.value = "";

}