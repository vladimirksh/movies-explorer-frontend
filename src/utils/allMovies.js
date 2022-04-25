function importAll(r) {
  return r.keys().map(r);
}

const images = importAll(require.context('../images/movies', false, /\.(png|jpe?g|svg)$/));

const imageSrc = images.map((image) => image.default);

const duration = '1ч 42м';

const defaultMovies = [
  {
    title: '33 слова о дизайне',
    duration,
    isSaved: true,
  },
  {
    title: 'Киноальманах «100 лет дизайна»',
    duration,
    isSaved: false,
  },
  {
    title: 'В погоне за Бенкси',
    duration,
    isSaved: false,
  },
  {
    title: 'Баския: Взрыв реальности',
    duration,
    isSaved: false,
  },
  {
    title: 'Бег это свобода',
    duration,
    isSaved: true,
  },
  {
    title: 'Книготорговцы',
    duration,
    isSaved: true,
  },
  {
    title: 'Когда я думаю о Германии ночью',
    duration,
    isSaved: false,
  },
  {
    title: 'Gimme Danger: История Игги и The Stooges',
    duration,
    isSaved: false,
  },
  {
    title: 'Дженис: Маленькая девочка грустит',
    duration,
    isSaved: true,
  },
  {
    title: 'Соберись перед прыжком',
    duration,
    isSaved: false,
  },
  {
    title: 'Пи Джей Харви: A dog called money',
    duration,
    isSaved: false,
  },
  {
    title: 'По волнам: Искусство звука в кино',
    duration,
    isSaved: false,
  },
  {
    title: 'Рудбой',
    duration,
    isSaved: false,
  },
  {
    title: 'Скейт - кухня ',
    duration,
    isSaved: false,
  },
  {
    title: 'Войня искуств',
    duration,
    isSaved: false,
  },
  {
    title: 'Зона',
    duration,
    isSaved: true,
  },
];

/*добавляю к масиву картинки*/
export const moviesList = defaultMovies.map((movie, index) => {
  const newMovie = { ...movie, image: imageSrc[index] };
  return newMovie;
});

/*фильтрую новый массив по сохранениям*/
export const moviesSaved = moviesList.filter((movie) => movie.isSaved === true);