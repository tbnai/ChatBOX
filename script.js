document.addEventListener("DOMContentLoaded", function () {
    const userInput = document.getElementById("user-input");

    // Listen for "Enter" key
    userInput.addEventListener("keypress", function (event) {
        if (event.key === "Enter") {
            sendMessage();
        }
    });
});

function sendMessage() {
    const userInput = document.getElementById("user-input");
    const chatBox = document.getElementById("chat-box");

    if (userInput.value.trim() === "") return;

    // Add user message
    const userMessage = document.createElement("div");
    userMessage.classList.add("message", "user");
    userMessage.textContent = userInput.value;
    chatBox.appendChild(userMessage);

    // Get bot response
    setTimeout(() => {
        const botMessage = document.createElement("div");
        botMessage.classList.add("message", "bot");
        botMessage.textContent = getBotResponse(userInput.value.trim().toLowerCase());
        chatBox.appendChild(botMessage);
        chatBox.scrollTop = chatBox.scrollHeight;
    }, 500);

    userInput.value = "";
}

function getBotResponse(input) {
    // Trim and convert input to lowercase
    input = input.toLowerCase().trim();

    // Check if the input exactly matches a known response
    const responses = {
        "hi": "Hi there! How can I assist you?",
        "hello": "Hello! What can I do for you?",
        "how are you": "I'm just a bot, but I'm doing great! Thanks for asking.",
        "bye": "Goodbye! Have a great day!",
        "what is your name": "I'm your friendly chatbot!"
    };

    // Direct match first
    if (responses[input]) {
        return responses[input];
    }

    // Check for keywords
    if (input.includes("name")) {
        return "I'm your friendly chatbot!";
    } else if (input.includes("help")) {
        return "Sure! What do you need help with?";
    }

    return "Sorry, I don't understand that. Can you rephrase?";
}
