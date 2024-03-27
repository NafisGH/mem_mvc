
class Model {
  constructor({
    onCurrentMemeIdChange,
    onMemesChange,
    onTextTopChange,
    onTextBottomChange,
  }) {
    this.memes = [];
    this.textTop = "";
    this.textBottom = "";
    this.currentMemeId = null;
    this.onCurrentMemeIdChange = onCurrentMemeIdChange;
    this.onMemesChange = onMemesChange;
    this.onTextTopChange = onTextTopChange;
    this.onTextBottomChange = onTextBottomChange;
  }

  setMemes(memes) {
    this.memes = memes;
    this.currentMemeId = memes[0].id;

    this.onMemesChange();
    this.onCurrentMemeIdChange();
  }

  setCurrentMemeId(currentMemeId) {
    this.currentMemeId = currentMemeId;

    this.onCurrentMemeIdChange();
  }

  setTextTop(text) {
    this.textTop = text;
    this.onTextTopChange();
  }
  setTextBottom(text) {
    this.textBottom = text;
    this.onTextBottomChange();
  }

  getMemes() {
    return this.memes;
  }

  getCurrentMemeId() {
    return this.currentMemeId;
  }

  // метод для получения данных в Controller
  getPreview = () => {
    return {
      textTop: this.textTop,
      textBottom: this.textBottom,
      url: this.getCurrentMeme().url,
    };
  };

  getCurrentMeme() {
    let currentMeme = null;
    this.memes.forEach((meme) => {
      if (meme.id === this.getCurrentMemeId()) {
        currentMeme = meme;
      }
    });
    return currentMeme;
  }
}
