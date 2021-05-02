`use strict`;

(function () {
  const sendBtn = document.querySelector(`.content__btn`);
  const messagesList = document.querySelector(`.content__messages`);
  const textArea = document.querySelector(`.content__textarea`);

  const renderMessage = function (text) {
    const messageTemplate = document.querySelector(`#message`)
      .content
      .querySelector(`.message`);

    const messageElement = messageTemplate.cloneNode(true);

    messageElement.querySelector(`.text`).textContent = text;

    return messageElement;
  }

  sendBtn.addEventListener(`click`, function (evt) {
    evt.preventDefault();

    if (textArea.value !== ``) {
      messagesList.appendChild(renderMessage(textArea.value));
      textArea.value = ``;
    }
  });
})();