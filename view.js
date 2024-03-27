class View {
  constructor({ onMemeChange, onTextTopChange, onTextBottomChange }) {
    this.onMemeChange = onMemeChange;
    this.onTextTopChange = onTextTopChange;
    this.onTextBottomChange = onTextBottomChange;

    this.previewTopTextNode = document.querySelector(".js-top-text");
    this.previewBottomTextNode = document.querySelector(".js-bottom-text");
    this.previewImagetNode = document.querySelector(".js-image");

    this.settingsSelectNode = document.querySelector(".js-memes-select");
    this.textTopInputNode = document.querySelector(".js-text-top-input");
    this.textBottomInputNode = document.querySelector(".js-text-bottom-input");

    this.validateTopInputNode = document.querySelector(".js-validate-top-input")
    this.validateBottomInputNode = document.querySelector(".js-validate-bottom-input")

    this.settingsSelectNode.addEventListener("change", this._handleSelectChange);
    
    this.textTopInputNode.addEventListener("input", this.handleTextTopChange);
    this.textBottomInputNode.addEventListener("input", this.handleTextBottomChange);
  }

  validateTopInput(errorText) {
    this.validateTopInputNode.innerText = errorText
  }
  validateTopInputDelete(errorText) {
    this.validateTopInputNode.innerText = errorText
  }
  validateBottomInput(errorText) {
    this.validateBottomInputNode.innerText = errorText
  }
  validateBottomInputDelete(errorText) {
    this.validateBottomInputNode.innerText = errorText
  }

  renderPreview(preview) {
    const { url, textTop, textBottom } = preview;
    this.previewTopTextNode.innerText = textTop;
    this.previewBottomTextNode.innerText = textBottom;
    this.previewImagetNode.src = url;
  }

  renderMemesSelect(memes, currentMemeId) {
    memes.forEach((meme) => {
      const { id, name } = meme;
      const optionNode = document.createElement("option");
      optionNode.setAttribute("value", id);
      optionNode.innerText = name;
      if (id === currentMemeId) {
        optionNode.setAttribute("selected", true);
      }
      this.settingsSelectNode.append(optionNode);
    });
  }

  _handleSelectChange = () => {
    const id = this.settingsSelectNode.value;
    this.onMemeChange(id);
  };

  handleTextTopChange = (event) => {
    this.onTextTopChange(event.target.value);
  };
  handleTextBottomChange = (event) => {
    this.onTextBottomChange(event.target.value);
  };

  handleValidateInput() {

  }

}
