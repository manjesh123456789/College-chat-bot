document.addEventListener("DOMContentLoaded", () => {
    const chatForm = document.getElementById('chat-form');
    const chatBox = document.getElementById('chat-box');
    const userInput = document.getElementById('user-input');

    const defaultResponses = [
        "Hi, how can I help you?",
        "Hello! How can I assist you today?",
        "What course are you interested in?",
        "Can you please provide your EAMCET rank?",
        "What is your intermediate hall ticket number?",
        "Please provide your mobile number for further communication.",
        "What is your name?",
        "I can help you with details about our courses and admission requirements.",
        "You can check your application status here.",
        "Let me guide you through the application process step-by-step.",
        "Feel free to ask me any questions about the college.",
        "What information do you need about the courses?",
        "Are you looking for undergraduate or postgraduate courses?",
        "I can provide details about the admission deadlines.",
        "Do you need help with the application form?",
        "Our courses cover a variety of disciplines. Which one interests you?",
        "Can you tell me your preferred mode of study: full-time or part-time?",
        "Would you like information on scholarship opportunities?",
        "I can explain the admission criteria for you.",
        "Do you want to know more about campus facilities?",
        "Are you interested in accommodation options?",
        "I can help you with fee structure details.",
        "Would you like to know about the extracurricular activities?",
        "Do you have any specific questions about the college?",
        "Can I assist you with the documents required for admission?",
        "Would you like a step-by-step guide on the application process?",
        "Are you facing any issues with the online application portal?",
        "Do you need information on the courses offered?",
        "Are you interested in our engineering programs?",
        "Can I provide details on our business administration courses?",
        "Do you need help choosing the right course for you?",
        "Can I tell you about the internship opportunities available?",
        "Would you like to know about the faculty members?",
        "I can provide information on student life and activities.",
        "Are you looking for details on sports facilities?",
        "Can I assist you with the examination schedule?",
        "Would you like to know about the placement opportunities?",
        "Do you need help with course registration?",
        "Can I provide information on lab facilities?",
        "Would you like to know about our research programs?",
        "Do you need assistance with the library services?",
        "Can I help you with the transport facilities?",
        "Would you like information on the health services provided?",
        "Are you interested in cultural events organized by the college?",
        "Can I provide details on student exchange programs?",
        "Do you need help with any specific admission queries?",
        "Would you like to know about the alumni network?",
        "I can help you with information on student clubs and societies.",
        "Do you need assistance with financial aid options?"
    ];

    chatForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const userMessage = userInput.value.trim();
        if (userMessage) {
            addMessage('user', userMessage);
            userInput.value = '';

            // Simulate bot response
            setTimeout(() => {
                const botMessage = getBotResponse(userMessage);
                addMessage('bot', botMessage);
            }, 1000);
        }
    });

    function addMessage(sender, message) {
        const messageDiv = document.createElement('div');
        messageDiv.classList.add('chat-message', sender);
        messageDiv.textContent = message;
        chatBox.appendChild(messageDiv);
        chatBox.scrollTop = chatBox.scrollHeight;
    }

    function getBotResponse(message) {
        // Placeholder bot response logic for specific matching
        const lowerMessage = message.toLowerCase();
        if (lowerMessage.includes("hi") || lowerMessage.includes("hello")) {
            return "Hi, how can I help you?";
        } else if (lowerMessage.includes("course")) {
            return "What course are you interested in?";
        } else if (lowerMessage.includes("rank")) {
            return "Can you please provide your EAMCET rank?";
        } else if (lowerMessage.includes("ticket number")) {
            return "What is your intermediate hall ticket number?";
        } else if (lowerMessage.includes("mobile number")) {
            return "Please provide your mobile number for further communication.";
        } else if (lowerMessage.includes("name")) {
            return "What is your name?";
        } else if (lowerMessage.includes("admission")) {
            return "I can help you with details about our courses and admission requirements.";
        } else if (lowerMessage.includes("application status")) {
            return "You can check your application status here.";
        } else if (lowerMessage.includes("guide")) {
            return "Let me guide you through the application process step-by-step.";
        } else {
            // Randomly select a response from the default responses
            const responseIndex = Math.floor(Math.random() * defaultResponses.length);
            return defaultResponses[responseIndex];
        }
    }
});
