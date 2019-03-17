import createElement from './create-element.js';
export default class Task {
  constructor(data) {
    this._title = data.title;
    this._dueDay = data.dueDay;
    this._tags = data.tags;
    this._picute = data.picture;
    this._repeatingDays = data.repeatingDays;
    this._color = data.color;

    this._element = null;
    this._state = {
      // isEdit: false
    };
    this._onEdit = null;

  }
  _isRepeating() {
    return Object.values(this._repeatingDays).some((it) => it === true);
  }
  _onEditButtonClick() {
    // this._state.isEdit = this._state.isEdit;
    // this.update();
    return typeof this._onEdit === `function` && this._onEdit();
  }
  get element() {
    return this._element;
  }

  set onEdit(fn) {
    this._onEdit = fn;
  }

  get template() {
    return `<article class="card card--${this._color} ${this._isRepeating() ? `card--repeat` : ``}">
            <form class="card__form" method="get">
              <div class="card__inner">
                <div class="card__control">
                  <button type="button" class="card__btn card__btn--edit">edit</button>
                  <button type="button" class="card__btn card__btn--archive">archive</button>
                  <button type="button" class="card__btn card__btn--favorites card__btn--disabled">favorites</button>
                </div>

                <div class="card__color-bar">
                  <svg width="100%" height="10">
                    <use xlink:href="#wave"></use>
                  </svg>
                </div>

                <div class="card__textarea-wrap">
                  <label>
                    <textarea class="card__text" placeholder="Start typing your text here..." filterName="text">${this._title}</textarea>
                  </label>
                </div>

                <div class="card__settings">
                  <div class="card__details">
                    <div class="card__dates">
                      <button class="card__date-deadline-toggle" type="button">
                        date: <span class="card__date-status">${this._dueDate}</span>
                      </button>

                      <fieldset class="card__date-deadline" disabled>
                        <label class="card__input-deadline-wrap">
                          <input class="card__date" type="text" placeholder="23 September" filterName="date" />
                        </label>
                        <label class="card__input-deadline-wrap">
                          <input class="card__time" type="text" placeholder="11:15 PM" filterName="time" />
                        </label>
                      </fieldset>

                      <button class="card__repeat-toggle" type="button">
                        repeat:<span class="card__repeat-status"></span>
                      </button>
                    <div class="card__hashtag">
                      <div class="card__hashtag-list">${Array.from(this._tags).map((tag) => (`<span class="card__hashtag-inner">
                      <input type="hidden" name="hashtag" value="${tag}" class="card__hashtag-hidden-input" />
                      <button type="button" class="card__hashtag-name">#${tag}</button>
                      <button type="button" class="card__hashtag-delete">delete</button>
                    </span>`.trim())).join(``)}</div>

                      <label>
                        <input type="text" class="card__hashtag-input" filterName="hashtag-input" placeholder="Type new hashtag here" />
                      </label>
                    </div>
                  </div>

                  <label class="card__img-wrap card__img-wrap--empty">
                    <input type="file" class="card__img-input visually-hidden" filterName="img" />
                    <img
                      src="${this._picture}"
                      alt="task picture"
                      class="card__img"
                    />
                  </label>


                </div>

                <div class="card__status-btns">
                  <button class="card__save" type="submit">save</button>
                  <button class="card__delete" type="button">delete</button>
                </div>
              </div>
            </form>
          </article>`.trim();
  }
  bind() {
    this._element.querySelector(`.card__btn--edit`).addEventListener(`click`, this._onEditButtonClick.bind(this));
  }
  update() {
    if (this._state.isEdit) {
      return this._element.classlistAdd(`card--edit`);
    }
    return this._element.classList.remove(`card--edit`);
  }
  render() {
    this._element = createElement(this.template);
    this.bind();
    return this._element;
  }
  unbind() {
    this._element.querySelector(`.card__btn--edit`).removeEventListener(`click`, this._onEditButtonClick);
  }
  unrender() {
    this.unbind();
    this._element = null;
  }
}
