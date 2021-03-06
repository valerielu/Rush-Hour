import Car from "./car.js";
import Board from "./board.js";
import View from "./view.js";

$(() => {
  let $container = $('#rush-hour');
  const easyCars = () => ([new Car(2, "red", [2, 1], "right"), new Car(3, "yellow", [2, 3], "down"),
  new Car(2, "green", [5, 1], "down"), new Car(2, "orange", [5, 3], "right"), new Car(2, "blue", [5, 5], "right")]);

  const mediumCars = () => ([new Car(2, "red", [2, 3], "right"), new Car(3, "yellow", [3, 4], "down"),
  new Car(2, "green", [2, 1], "down"), new Car(2, "orange", [5, 3], "down"), new Car(2, "blue", [4, 5], "right"), new Car(2, "purple", [5, 5], "right")]);

  const hardCars = () => ([new Car(2, "red", [2, 1], "right"), new Car(3, "yellow", [3, 2], "down"),
  new Car(2, "green", [3, 4], "right"), new Car(2, "orange", [5, 4], "down"), new Car(3, "blue", [4, 2], "right"), new Car(3, "purple", [5, 5], "down")]);

  let cars = easyCars;

  let x = 0;
    window.intervalId = setInterval(function(){
        x += 1;
        $('body').css('background-position', x + 'px 0');
    }, 10);

  $('.easy-button').click(() => {
    $container.empty();
    $(".win-phrase").removeClass("show");
    $(".current-level").removeClass("current-level");
    $(".easy-button").addClass("current-level");
    setUpGame(easyCars(), $container);
    cars = easyCars;
  });

  $('.medium-button').click(() => {
    $container.empty();
    $(".win-phrase").removeClass("show");
    $(".current-level").removeClass("current-level");
    $(".medium-button").addClass("current-level");
    setUpGame(mediumCars(), $container);
    cars = mediumCars;
  });

  $('.hard-button').click(() => {
    $container.empty();
    $(".win-phrase").removeClass("show");
    $(".current-level").removeClass("current-level");
    $(".hard-button").addClass("current-level");
    setUpGame(hardCars(), $container);
    cars = hardCars;
  });

  $('.reset-button').click(() => {
    $container.empty();
    $(".win-phrase").removeClass("show");
    setUpGame(cars(), $container);
  });

  $('.scroll-button').click(() => {
    clearInterval(window.intervalId);
  });

  setUpGame(easyCars(), $container);
  $(".current-level").removeClass("current-level");
  $(".easy-button").addClass("current-level");

});

const setUpGame = (cars, container) => {
  let board = new Board(cars);
  let view = new View(board, container);
};
