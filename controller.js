class Controller {
  constructor() {
    this.model = new Model({
      onMemesChange: this.handleModelMemesChange,
      onCurrentMemeIdChange: this.handelModelCurrentMemeIdChange,
      onTextTopChange: this.handleModelTextTopChange,
      onTextBottomChange: this.handleModelTextBottomChange,
    });
    this.view = new View({
      onMemeChange: this.handleViewMemeChange,
      onTextTopChange: this.handleViewTextTopChange,
      onTextBottomChange: this.handleViewTextBottomChange,
    });
    this.api = new Api();
  }

  init() {
    this.api.getMems().then((memes) => this.model.setMemes(memes)); // получаю мемы от сервера и отправляю массив обьектов мемов в Model
  }

  handleModelMemesChange = () => {
    this.view.renderMemesSelect(
      this.model.getMemes(),
      this.model.getCurrentMemeId()
    ); // получаю здесь данные (Мемы и Корректный id мема) в Controller  из Model  и передаю их в View
  };

  handleViewMemeChange = (id) => {
    this.model.setCurrentMemeId(id);
  };

  handelModelCurrentMemeIdChange = () => {
    // когда в Model меняется то делается рендер в view
    this.view.renderPreview(this.model.getPreview());
  };

  handleViewTextTopChange = (text) => {
    // проверка на количество символов
    if (text.length > 10) {
      this.view.validateTopInput("Текст больше 10 символов")
    } else {
      this.view.validateTopInputDelete("")
    }
    this.model.setTextTop(text);
  };
  handleViewTextBottomChange = (text) => {
    // проверка на количество символов
    if (text.length > 10) {
      this.view.validateBottomInput("Текст больше 10 символов")
    } else {
      this.view.validateBottomInputDelete("")
    }
    
    this.model.setTextBottom(text);
  };

  handleModelTextTopChange = () => {
    this.view.renderPreview(this.model.getPreview());
  };
  handleModelTextBottomChange = () => {
    this.view.renderPreview(this.model.getPreview());
  };
}
