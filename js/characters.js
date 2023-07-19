$(document).ready(function ($) {
  $("#move").click(function (e) {
    e.preventDefault(); // 새로고침 방지
    $("html,body").animate({ scrollTop: $(this.hash).offset().top }, 500);
  });
});

let Harry = gsap.timeline();
Harry.from(".Harry", {
  x: 10000,
});

let Hermione = gsap.timeline();
Hermione.from(".Hermione", {
  x: -10000,
});

let Ron = gsap.timeline();
Ron.from(".Ron", {
  x: 10000,
});

let Ginny = gsap.timeline();
Ginny.from(".Ginny", {
  x: -10000,
});

let Malfoy = gsap.timeline();
Malfoy.from(".Malfoy", {
  x: 10000,
});

let Voldemort = gsap.timeline();
Voldemort.from(".Voldemort", {
  x: -10000,
});

let Snape = gsap.timeline();
Snape.from(".Snape", {
  x: 10000,
});

let Dumbledore = gsap.timeline();
Dumbledore.from(".Dumbledore", {
  x: -10000,
});

let Sirius = gsap.timeline();
Sirius.from(".Sirius", {
  x: 10000,
});

let McGonagall = gsap.timeline();
McGonagall.from(".McGonagall", {
  x: -10000,
});

let Dobby = gsap.timeline();
Dobby.from(".Dobby", {
  x: 10000,
});

ScrollTrigger.create({
  animation: Harry,
  trigger: ".trio-img", // 객체 기준 범위
  start: "top top", // 요소시작점 스크롤시작점
  end: "top center", // 요소끝점 스크롤끝점
  end: "+=0", // 스크롤의 총 길이 설정
  scrub: 2,
  pin: true,
  markers: true,
});

ScrollTrigger.create({
  animation: Hermione,
  trigger: ".Harry", // 객체 기준 범위
  start: "top top", // 요소시작점 스크롤시작점
  end: "top center", // 요소끝점 스크롤끝점
  end: "+=0", // 스크롤의 총 길이 설정
  scrub: 2,
  pin: true,
  markers: true,
});

ScrollTrigger.create({
  animation: Ron,
  trigger: ".Hermione", // 객체 기준 범위
  start: "top top", // 요소시작점 스크롤시작점
  end: "top center", // 요소끝점 스크롤끝점
  end: "+=0", // 스크롤의 총 길이 설정
  scrub: 2,
  pin: true,
  markers: true,
});

ScrollTrigger.create({
  animation: Ginny,
  trigger: ".Ron", // 객체 기준 범위
  start: "top top", // 요소시작점 스크롤시작점
  end: "top center", // 요소끝점 스크롤끝점
  end: "+=0", // 스크롤의 총 길이 설정
  scrub: 2,
  pin: true,
  markers: true,
});

ScrollTrigger.create({
  animation: Malfoy,
  trigger: ".Ginny", // 객체 기준 범위
  start: "top top", // 요소시작점 스크롤시작점
  end: "top center", // 요소끝점 스크롤끝점
  end: "+=0", // 스크롤의 총 길이 설정
  scrub: 2,
  pin: true,
  markers: true,
});

ScrollTrigger.create({
  animation: Voldemort,
  trigger: ".Malfoy", // 객체 기준 범위
  start: "top top", // 요소시작점 스크롤시작점
  end: "top center", // 요소끝점 스크롤끝점
  end: "+=0", // 스크롤의 총 길이 설정
  scrub: 2,
  pin: true,
  markers: true,
});

ScrollTrigger.create({
  animation: Snape,
  trigger: ".Voldemort", // 객체 기준 범위
  start: "top top", // 요소시작점 스크롤시작점
  end: "top center", // 요소끝점 스크롤끝점
  end: "+=0", // 스크롤의 총 길이 설정
  scrub: 2,
  pin: true,
  markers: true,
});

ScrollTrigger.create({
  animation: Dumbledore,
  trigger: ".Snape", // 객체 기준 범위
  start: "top top", // 요소시작점 스크롤시작점
  end: "top center", // 요소끝점 스크롤끝점
  end: "+=0", // 스크롤의 총 길이 설정
  scrub: 2,
  pin: true,
  markers: true,
});

ScrollTrigger.create({
  animation: Sirius,
  trigger: ".Dumbledore", // 객체 기준 범위
  start: "top top", // 요소시작점 스크롤시작점
  end: "top center", // 요소끝점 스크롤끝점
  end: "+=0", // 스크롤의 총 길이 설정
  scrub: 2,
  pin: true,
  markers: true,
});

ScrollTrigger.create({
  animation: McGonagall,
  trigger: ".Sirius", // 객체 기준 범위
  start: "top top", // 요소시작점 스크롤시작점
  end: "top center", // 요소끝점 스크롤끝점
  end: "+=0", // 스크롤의 총 길이 설정
  scrub: 2,
  pin: true,
  markers: true,
});

ScrollTrigger.create({
  animation: Dobby,
  trigger: ".McGonagall", // 객체 기준 범위
  start: "top top", // 요소시작점 스크롤시작점
  end: "top center", // 요소끝점 스크롤끝점
  end: "+=0", // 스크롤의 총 길이 설정
  scrub: 2,
  pin: true,
  markers: true,
});
