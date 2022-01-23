$(function () {
  $("#toggler_mobile_menu button").click(function () {
    $("#mobile_menu").css("right", "0");
    $(this).addClass('hideAnim');
  });
  $(".close-menu").click(function () {
    $("#mobile_menu").css("right", "-70%");
    $('#toggler_mobile_menu button').removeClass('hideAnim');
  });
  $('#mobile_menu ul li a.d-block.w-100').click(function(e){
    e.preventDefault()
  }) 
  $("#mobile_menu ul li").click(function (e) {
    // hide outher dropdowns open
    // $('#mobile_menu nav>ul>li>.dropdown').removeClass('showAnimm');
    // $('#mobile_menu nav>ul>li>.dropdown').removeClass('d-block');
    // checked show or hide dropdown:
    if (!$(this).find(">.dropdown").hasClass("showAnimm")) {
      $(this).find(">.dropdown").addClass("d-block");
      setTimeout(() => {
        $(this).find(">.dropdown").addClass("showAnimm");
      }, 100);
    }
    // if click 'li>a' ->  hide dropdown
    else if ($(this).find(">a")[0] == $(e.target)[0]) {
      $(this).find(">.dropdown").removeClass("showAnimm");
      setTimeout(() => {
        $(this).find(">.dropdown").removeClass("d-block");
      }, 150);
    }
    /*     element=e.currentTarget
    $(this).find(".dropdown").css({
      display: "block",
      opacity: "1",
      visibility: "visible",
    }); */
  });
  //   window.addEventListener('click',e=>{
  //     // if()
  //     console.log(document.querySelector('#mobile_menu ul li'));
  //     console.log(e.target.matches(document.querySelector('#mobile_menu ul li')));
  //   })
});
$(function () {
  $(".search").click(function () {
    $("#search_box").removeClass("hideAnim");
    $("#header_menu ul").addClass("hideAnim");
  });
  $("#search_box button").click(function () {
    $("#search_box").addClass("hideAnim");
    $("#header_menu ul").removeClass("hideAnim");
  });
});
$(function () {
  const pauseBtn = document.querySelector(".pause-bg button");
  const pause = document.querySelector(".pause-bg button i");
  const videoBg = document.querySelector(".wrapper-video video");
  const imageBg = document.querySelector(".wrapper-video img");
  pauseBtn.addEventListener("click", () => {
    pause.classList.toggle("fa-play");
    let classes = Array.from(pause.classList);
    if (classes.includes("fa-play")) {
      videoBg.pause();
      imageBg.classList.remove("hideAnim");
    } else {
      videoBg.play();
      imageBg.classList.add("hideAnim");
    }
  });
});
const persianArray = ["۰", "۱", "۲", "۳", "۴", "۵", "۶", "۷", "۸", "۹"];
function persianNumber(selector, byEvent) {
  if (selector != undefined) {
    const el = document.querySelectorAll(selector);
    el.forEach(
      (item) =>
        (item.innerText = [...item.innerText]
          .map((a) => persianArray[a])
          .join(""))
    );
  } else
    byEvent.innerText = [...byEvent.innerText]
      .map((a) => persianArray[a])
      .join("");
}
persianNumber(".persian-number");
$(function () {
  $(".tour-item .fa-heart").click(function (e) {
    e.target.classList.toggle("fa");
    const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    const countLike = e.target.nextElementSibling;
    const plusCountLike = [...countLike.innerHTML]
      .map((a) => numbers[persianArray.indexOf(a)])
      .join("");
    if (Array.from(e.target.classList).includes("fa"))
      countLike.innerHTML = String(Number(plusCountLike) + 1);
    else countLike.innerHTML = String(Number(plusCountLike) - 1);
    persianNumber(undefined, countLike);
  });
});
$("section .next").click(function () {
  const el = document.querySelector(".wrapper-tour");
  // slice 'px' in left element
  let innerLeft = getComputedStyle(el).getPropertyValue("left");
  innerLeft = Number(innerLeft.substr(0, innerLeft.length - 2));
  innerLeft += 380;
  el.style.left = innerLeft + "px";
  setTimeout(() => {
    el.style.transform = `translateX(${-1 * innerLeft}px)`;
    el.append(el.firstElementChild);
  }, 500);
});
$("section .prev").click(function () {
  const el = document.querySelector(".wrapper-tour");
  // slice 'px' in left element
  let innerLeft = getComputedStyle(el).getPropertyValue("left");
  innerLeft = Number(innerLeft.substr(0, innerLeft.length - 2));
  innerLeft -= 380;
  el.style.left = innerLeft + "px";
  el.style.transform = `translateX(${
    innerLeft > 0 ? innerLeft * -1 : Math.abs(innerLeft)
  }px)`;
  el.prepend(el.lastElementChild);
});
//play youtube video
$("#video_row .banner button").click(function () {
  // hide banner video
  $(".banner").addClass("hideAnim");
  // enable autoplay video
  const newUrlVideo = $("#video_row iframe")
    .attr("src")
    .toString()
    .replace("autoplay=0", "autoplay=1");
  $("#video_row iframe").attr("src", newUrlVideo);
  // show close video
  $("#video_row .video-close").removeClass("hideAnim");
});
$("#video_row .video-close").click(function () {
  //  paused video and show banner
  $(".banner").removeClass("hideAnim");
  const newUrlVideo = $("#video_row iframe")
    .attr("src")
    .toString()
    .replace("autoplay=1", "autoplay=0");
  $("#video_row iframe").attr("src", newUrlVideo);
  // hide close video
  $("#video_row .video-close").addClass("hideAnim");
});
// format price
$(function () {
  document.querySelectorAll(".format-price").forEach((item) => {
    if (item.innerHTML.length > 3) {
      const out = Array.from(item.innerHTML);
      out.splice(-3, 0, ",");
      item.innerHTML = out.join("");
    }
  });
});
let frusits = ["bnana", "apple", "kiwi", "orange"];
$(function () {
  const stars = document.querySelectorAll(".hotel-item div .fa-star");
  stars.forEach((item) => {
    item.addEventListener("mouseover", setScore);
    item.addEventListener("click", setScore);
    function setScore(e) {
      const pr = item.parentElement.querySelectorAll(".fa-star");
      if (e.type == "click") pr[0].classList.add("txt-warning");
      pr[0].classList.add("fa");
      for (let i = 0; i < pr.length; i++) {
        if (pr[i] != e.target) {
          // set yello color start on click
          if (e.type == "click") {
            pr[i].classList.add("txt-warning");
            pr[i + 1].classList.add("txt-warning");
          }
          //   set fill star
          pr[i].classList.add("fa");
          pr[i + 1].classList.add("fa");
        } else break;
      }
    }
    item.addEventListener("mouseout", (e) => {
      const pr = item.parentElement.querySelectorAll(".fa-star");
      pr.forEach((a) => {
        const class_List = Array.from(a.classList);
        if (!class_List.includes("txt-warning")) a.classList.remove("fa");
      });
    });
  });
});
$("#comment_passengers .owl-carousel").owlCarousel({
  nav: false,
  loop: true,
  autoplay: true,
  margin: 15,
  items: 2,
  responsive: {
    0: {
      items: 1,
      nav: false,
      dots: true,
    },
    992: {
      dots: false,
    },
    1200: {
      item: 2,
      nav: true,
      dots: false,
    },
  },
});
$(".owl-next").html(`<i class="fa fa-angle-left"></i>`);
$(".owl-prev").html(`<i class="fa fa-angle-right"></i>`);
$("#news_update .owl-carousel").owlCarousel({
  items: 1,
  loop: true,
  margin: 0,
  dots: true,
  mouseDrag: false,
});
