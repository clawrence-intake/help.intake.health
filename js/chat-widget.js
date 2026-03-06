(function () {
  'use strict';

  var CHAT_API_URL = 'https://inflow-support-chat.clawrence-intake.workers.dev/api/chat';
  var WELCOME_MESSAGE = "Hi! I'm Sam, your InFlow support assistant. How can I help you today?";

  var messages = [];
  var isOpen = false;
  var isLoading = false;

  // Build DOM
  var bubble = document.createElement('button');
  bubble.className = 'chat-bubble';
  bubble.setAttribute('aria-label', 'Open support chat');
  bubble.innerHTML = '<svg viewBox="0 0 24 24"><path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 14H5.17L4 17.17V4h16v12z"/><path d="M7 9h2v2H7zm4 0h2v2h-2zm4 0h2v2h-2z"/></svg>';

  var panel = document.createElement('div');
  panel.className = 'chat-panel';
  panel.innerHTML =
    '<div class="chat-header">' +
      '<span class="chat-header-title"><span class="chat-header-dot"></span>Chat with Sam</span>' +
      '<button class="chat-close" aria-label="Close chat">&times;</button>' +
    '</div>' +
    '<div class="chat-messages"></div>' +
    '<div class="chat-input-area">' +
      '<input type="text" class="chat-input" placeholder="Type your question..." maxlength="500" aria-label="Message">' +
      '<button class="chat-send" aria-label="Send message"><svg viewBox="0 0 24 24"><path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"/></svg></button>' +
    '</div>' +
    '<div class="chat-footer">Powered by Intake Health</div>';

  document.body.appendChild(bubble);
  document.body.appendChild(panel);

  var messagesEl = panel.querySelector('.chat-messages');
  var inputEl = panel.querySelector('.chat-input');
  var sendBtn = panel.querySelector('.chat-send');
  var closeBtn = panel.querySelector('.chat-close');

  // Add welcome message
  addMessage('assistant', WELCOME_MESSAGE);

  // Events
  bubble.addEventListener('click', function () {
    toggleChat(true);
  });

  closeBtn.addEventListener('click', function () {
    toggleChat(false);
  });

  sendBtn.addEventListener('click', function () {
    sendMessage();
  });

  inputEl.addEventListener('keydown', function (e) {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  });

  function toggleChat(open) {
    isOpen = open;
    if (open) {
      panel.classList.add('open');
      bubble.style.display = 'none';
      inputEl.focus();
    } else {
      panel.classList.remove('open');
      bubble.style.display = 'flex';
    }
  }

  function addMessage(role, content) {
    var div = document.createElement('div');
    div.className = 'chat-msg ' + role;
    div.textContent = content;
    messagesEl.appendChild(div);
    scrollToBottom();
    return div;
  }

  function showTyping() {
    var div = document.createElement('div');
    div.className = 'chat-typing';
    div.innerHTML = '<span class="chat-typing-dot"></span><span class="chat-typing-dot"></span><span class="chat-typing-dot"></span>';
    messagesEl.appendChild(div);
    scrollToBottom();
    return div;
  }

  function scrollToBottom() {
    messagesEl.scrollTop = messagesEl.scrollHeight;
  }

  function sendMessage() {
    var text = inputEl.value.trim();
    if (!text || isLoading) return;

    inputEl.value = '';
    addMessage('user', text);
    messages.push({ role: 'user', content: text });

    isLoading = true;
    sendBtn.disabled = true;
    var typing = showTyping();

    fetch(CHAT_API_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ messages: messages }),
    })
      .then(function (res) {
        return res.json().then(function (data) {
          return { ok: res.ok, data: data };
        });
      })
      .then(function (result) {
        typing.remove();
        if (result.ok && result.data.response) {
          var reply = result.data.response;
          messages.push({ role: 'assistant', content: reply });
          addMessage('assistant', reply);
        } else {
          var errMsg = result.data.error || 'Something went wrong, please try again.';
          addMessage('error', errMsg);
        }
      })
      .catch(function () {
        typing.remove();
        addMessage('error', 'Something went wrong, please try again.');
      })
      .finally(function () {
        isLoading = false;
        sendBtn.disabled = false;
        inputEl.focus();
      });
  }
})();
