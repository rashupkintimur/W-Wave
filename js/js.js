// accardeon
const accardeonMenu = document.querySelector(".guests__accardeons");
let lastGuest = null;

document.querySelectorAll(".guests-accardeons-content__btn").forEach(item => {
  item.tabIndex = -1;
})

accardeonMenu.addEventListener("click", function (event) {
  let eventTarget = event.target;
  const btn = eventTarget.closest(".guests-accardeons__btn");
  const listBtn = eventTarget.closest(".guests-accardeons-content__btn");

  if (btn === null && listBtn === null) return;

  if (btn) {
    const accardeonListMenu = document.querySelector(`.guests__accardeons-content-list[data-accardeon-list="${btn.dataset.accardeonBtn}"]`);

    if (accardeonListMenu.style.maxHeight) {
      closeAllAccardeon();
      btn.classList.remove("--active");

      document.querySelectorAll(".guests-accardeons-content__btn").forEach(item => {
        item.tabIndex = -1;
      });
    } else {
      closeAllAccardeon();
      btn.classList.add("--active");
      accardeonListMenu.style.maxHeight = accardeonListMenu.scrollHeight + 60 + "px";

      document.querySelectorAll(`.guests__accardeons-content-list[data-accardeon-list="${btn.nextElementSibling.dataset.accardeonList}"] .guests-accardeons-content__btn`).forEach(item => {
        item.removeAttribute("tabindex");
      });
    }
  } else {
    const noGuest = document.querySelector(".guests__no-guest");
    const guest = document.querySelector(`.guests__guest[data-accardeon-content="${listBtn.dataset.accardeonElBtn}"]`);

    if (!guest) {
      if (!lastGuest) {
        clearBtnAccardeonContent(listBtn.className);
        listBtn.classList.add("--active");
        return;
      }

      clearBtnAccardeonContent(listBtn.className);
      listBtn.classList.add("--active");

      lastGuest.style.display = "none";
      noGuest.style.display = "block";
      return;
    }

    clearBtnAccardeonContent(listBtn.className);
    listBtn.classList.add("--active");

    noGuest.style.display = "none";
    guest.style.display = "block";

    lastGuest = guest;
  }

});

function closeAllAccardeon() {
  document.querySelectorAll(".guests__accardeons-content-list").forEach(item => {
    item.style.maxHeight = null;
  });

  document.querySelectorAll(".guests-accardeons__btn").forEach(item => {
    item.classList.remove("--active");
  });

  document.querySelectorAll(".guests-accardeons-content__btn").forEach(item => {
    item.tabIndex = -1;
  });
}

function clearBtnAccardeonContent(classBtb) {
  document.querySelectorAll(`.${classBtb}`).forEach(item => {
    item.classList.remove("--active");
  })
}

// burger
const burger = document.querySelector(".header__burger");

burger.addEventListener("click", function () {
  burger.classList.toggle("--active");
  document.body.classList.toggle("--lock");
  document.querySelector(".header__nav").classList.toggle("--active");

  if (window.innerWidth <= 850) {
    document.querySelector(".header__bottom").classList.toggle("--active");
  } else {
    document.querySelector(".header__bottom").classList.remove("--active");
  }
});

// modal
const btnEnterence = document.querySelector(".header__enterence--main");
const btnEnterenceMobile = document.querySelector(".header__enterence--mobile");
const exitEnterence = document.querySelector(".enterence__exit-btn");

btnEnterenceMobile.addEventListener("click", function () {
  btnEnterenceFunc();
});

btnEnterence.addEventListener("click", function () {
  btnEnterenceFunc();
});

exitEnterence.addEventListener("click", function () {
  document.body.classList.remove("--lock");
  document.querySelector(".enterence").classList.remove("--active");
  document.querySelector(".wrapper").classList.remove("--active");
});

function btnEnterenceFunc() {
  document.body.classList.add("--lock");
  document.querySelector(".enterence").classList.add("--active");
  document.querySelector(".wrapper").classList.add("--active");
}

// ether
const etherBtnOpen = document.querySelector(".ether__top");

etherBtnOpen.addEventListener("click", function () {
  document.querySelector(".ether__top").classList.toggle("--active");
  document.querySelector(".header__ether--bottom").classList.toggle("--active");

  const etherHeader = document.querySelector(".ether__bottom");

  if (etherHeader.style.maxHeight === "" || etherHeader.style.maxHeight === "0px") {
    etherHeader.style.maxHeight = etherHeader.scrollHeight + "px";
  } else {
    etherHeader.style.maxHeight = 0;
  }
});

// search
const btnSearch = document.querySelector(".header__search");

btnSearch.addEventListener("click", function () {
  document.querySelector(".header__search-input").classList.toggle("--active");
  document.querySelector(".header-nav__list").classList.toggle("--active");
});

// start radio
const headerEther = document.querySelector(".header__ether");

headerEther.addEventListener("click", function (event) {
  const eventTarget = event.target;
  const headerStart = eventTarget.closest(".header__start");
  const headerPause = eventTarget.closest(".header__pause");

  if (headerStart) {
    headerStart.classList.add("--active");
    document.querySelector(".header__pause.--active").classList.remove("--active");
  }
  else if (headerPause) {
    headerPause.classList.add("--active");
    document.querySelector(".header__start.--active").classList.remove("--active");
  }
});

const headerEtherMobile = document.querySelector(".header__ether--bottom");

headerEtherMobile.addEventListener("click", function (event) {
  const eventTarget = event.target;
  const headerStart = eventTarget.closest(".header__start");
  const headerPause = eventTarget.closest(".header__pause");

  if (headerStart) {
    headerStart.classList.add("--active");
    document.querySelector(".header__pause.--active").classList.remove("--active");
  }
  else if (headerPause) {
    headerPause.classList.add("--active");
    document.querySelector(".header__start.--active").classList.remove("--active");
  }
});

// start podcast
const podcastsCards = document.querySelector(".podcasts__cards");

podcastsCards.addEventListener("click", function (event) {
  const eventTarget = event.target;
  const headerStart = eventTarget.closest(".pod-col__btn");
  const headerPause = eventTarget.closest(".pod-col__btn-pause");

  if (!headerStart && !headerPause) return;

  document.querySelectorAll(".pod-col__btn-pause.--active").forEach(item => {
    item.classList.remove("--active")
  });

  document.querySelectorAll(".pod-col__btn.--active").forEach(item => {
    item.classList.remove("--active")
  });

  if (headerStart) {
    headerStart.classList.add("--active");
  }
  else if (headerPause) {
    headerPause.classList.add("--active");
  }
});

// open podcasts
const btnPodcasts = document.querySelector(".podcasts__btn");

btnPodcasts.addEventListener("click", function () {
  if (window.innerWidth >= 576) {
    deletePodcastsColumnClass("podcasts__column--hidden-pc");
  } else {
    deletePodcastsColumnClass("podcasts__column--hidden-pc");
    deletePodcastsColumnClass("podcasts__column--hidden-mobile");
  }
});

function deletePodcastsColumnClass(classNameColumn) {
  document.querySelectorAll(`.${classNameColumn}`).forEach(item => {
    item.classList.remove(classNameColumn);
  });
}
