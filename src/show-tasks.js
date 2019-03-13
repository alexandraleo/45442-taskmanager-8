
import {getTask} from './get-task.js';

// const taskNode = document.querySelector(`.board__tasks`);

// export default function showTasks(quantity) {
//   let taskElementString = ``;
//   const fragment = document.createDocumentFragment();
//   const parser = new DOMParser();
//   const tasksSet = new Set();
//   for (let i = 0; i < quantity; i++) {
//     tasksSet.add(getTask());
//     console.log(tasksSet);
//     taskElementString += templateTask(getTask());
//     const taskElementObj = parser.parseFromString(taskElementString, `text/html`);
//     fragment.appendChild(taskElementObj.body.childNodes[0]);
//   }
//   taskNode.appendChild(fragment);
// }

export const showRandomTasks = (dest, quantity) => {
  dest.insertAdjacentHTML(`beforeend`, new Array(quantity).fill(``).map(() => templateTask(getTask())).join(``));
};

const templateTask = (task) => `<article class="card card--edit card--${task.color} ${task.isRepeating ? `card--repeat` : ``}">
            <form class="card__form" method="get">
              <div class="card__inner">
                <div class="card__control">
                  <button type="button" class="card__btn card__btn--edit">
                    edit
                  </button>
                  <button type="button" class="card__btn card__btn--archive">
                    archive
                  </button>
                  <button
                    type="button"
                    class="card__btn card__btn--favorites card__btn--disabled"
                  >
                    favorites
                  </button>
                </div>

                <div class="card__color-bar">
                  <svg width="100%" height="10">
                    <use xlink:href="#wave"></use>
                  </svg>
                </div>

                <div class="card__textarea-wrap">
                  <label>
                    <textarea
                      class="card__text"
                      placeholder="Start typing your text here..."
                      filterName="text"
                    >
${task.title}</textarea
                    >
                  </label>
                </div>

                <div class="card__settings">
                  <div class="card__details">
                    <div class="card__dates">
                      <button class="card__date-deadline-toggle" type="button">
                        date: <span class="card__date-status">${task.dueDate}</span>
                      </button>

                      <fieldset class="card__date-deadline" disabled>
                        <label class="card__input-deadline-wrap">
                          <input
                            class="card__date"
                            type="text"
                            placeholder="23 September"
                            filterName="date"
                          />
                        </label>
                        <label class="card__input-deadline-wrap">
                          <input
                            class="card__time"
                            type="text"
                            placeholder="11:15 PM"
                            filterName="time"
                          />
                        </label>
                      </fieldset>

                      <button class="card__repeat-toggle" type="button">
                        repeat:<span class="card__repeat-status"></span>
                      </button>

                      <fieldset class="card__repeat-days" disabled>
                        <div class="card__repeat-days-inner">
                          <input
                            class="visually-hidden card__repeat-day-input"
                            type="checkbox"
                            id="repeat-mo-1"
                            filterName="repeat"
                            value="mo"
                            ${task.isRepeating.Mo ? `checked` : ``}
                          />
                          <label class="card__repeat-day" for="repeat-mo-1"
                            >mo</label
                          >
                          <input
                            class="visually-hidden card__repeat-day-input"
                            type="checkbox"
                            id="repeat-tu-1"
                            filterName="repeat"
                            value="tu"
                            ${task.isRepeating.Tu ? `checked` : ``}
                          />
                          <label class="card__repeat-day" for="repeat-tu-1"
                            >tu</label
                          >
                          <input
                            class="visually-hidden card__repeat-day-input"
                            type="checkbox"
                            id="repeat-we-1"
                            filterName="repeat"
                            value="we"
                            ${task.isRepeating.We ? `checked` : ``}
                          />
                          <label class="card__repeat-day" for="repeat-we-1"
                            >we</label
                          >
                          <input
                            class="visually-hidden card__repeat-day-input"
                            type="checkbox"
                            id="repeat-th-1"
                            filterName="repeat"
                            value="th"
                            ${task.isRepeating.Th ? `checked` : ``}
                          />
                          <label class="card__repeat-day" for="repeat-th-1"
                            >th</label
                          >
                          <input
                            class="visually-hidden card__repeat-day-input"
                            type="checkbox"
                            id="repeat-fr-1"
                            filterName="repeat"
                            value="fr"
                            ${task.isRepeating.Fr ? `checked` : ``}
                          />
                          <label class="card__repeat-day" for="repeat-fr-1"
                            >fr</label
                          >
                          <input
                            class="visually-hidden card__repeat-day-input"
                            type="checkbox"
                            filterName="repeat"
                            value="sa"
                            id="repeat-sa-1"
                            ${task.isRepeating.Sa ? `checked` : ``}
                          />
                          <label class="card__repeat-day" for="repeat-sa-1"
                            >sa</label
                          >
                          <input
                            class="visually-hidden card__repeat-day-input"
                            type="checkbox"
                            id="repeat-su-1"
                            filterName="repeat"
                            value="su"
                            ${task.isRepeating.Su ? `checked` : ``}
                          />
                          <label class="card__repeat-day" for="repeat-su-1"
                            >su</label
                          >
                        </div>
                      </fieldset>
                    </div>

                    <div class="card__hashtag">
                      <div class="card__hashtag-list">${task.tags}</div>

                      <label>
                        <input
                          type="text"
                          class="card__hashtag-input"
                          filterName="hashtag-input"
                          placeholder="Type new hashtag here"
                        />
                      </label>
                    </div>
                  </div>

                  <label class="card__img-wrap card__img-wrap--empty">
                    <input
                      type="file"
                      class="card__img-input visually-hidden"
                      filterName="img"
                    />
                    <img
                      src="${task.picture}"
                      alt="task picture"
                      class="card__img"
                    />
                  </label>

                  <div class="card__colors-inner">
                    <h3 class="card__colors-title">Color</h3>
                    <div class="card__colors-wrap">
                      <input
                        type="radio"
                        id="color-black-1"
                        class="card__color-input card__color-input--black visually-hidden"
                        filterName="color"
                        value="black"
                        checked
                      />
                      <label
                        for="color-black-1"
                        class="card__color card__color--black"
                        >black</label
                      >
                      <input
                        type="radio"
                        id="color-yellow-1"
                        class="card__color-input card__color-input--yellow visually-hidden"
                        filterName="color"
                        value="yellow"
                      />
                      <label
                        for="color-yellow-1"
                        class="card__color card__color--yellow"
                        >yellow</label
                      >
                      <input
                        type="radio"
                        id="color-blue-1"
                        class="card__color-input card__color-input--blue visually-hidden"
                        filterName="color"
                        value="blue"
                      />
                      <label
                        for="color-blue-1"
                        class="card__color card__color--blue"
                        >blue</label
                      >
                      <input
                        type="radio"
                        id="color-green-1"
                        class="card__color-input card__color-input--green visually-hidden"
                        filterName="color"
                        value="green"
                      />
                      <label
                        for="color-green-1"
                        class="card__color card__color--green"
                        >green</label
                      >
                      <input
                        type="radio"
                        id="color-pink-1"
                        class="card__color-input card__color-input--pink visually-hidden"
                        filterName="color"
                        value="pink"
                      />
                      <label
                        for="color-pink-1"
                        class="card__color card__color--pink"
                        >pink</label
                      >
                    </div>
                  </div>
                </div>

                <div class="card__status-btns">
                  <button class="card__save" type="submit">save</button>
                  <button class="card__delete" type="button">delete</button>
                </div>
              </div>
            </form>
          </article>`;
