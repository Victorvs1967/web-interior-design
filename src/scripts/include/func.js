import { Fancybox, Carousel } from "@fancyapps/ui"

// slider with Fancybox framework
export const carousell = () => {

  const container = document.getElementById("carousel"),
  containerPortfolio = document.getElementById("carousel-portfolio"),
  btnNext = document.getElementById('nav-next'),
  btnPrev = document.getElementById('nav-prev');

  // header slider
  const fc = new Carousel(container, {
    infinite: true,
    gap: 20,
    adaptiveHeight: true,
    Navigation: false,
    friction: 2,
    transition: 'slide',
  });

  btnNext.addEventListener('click', () => fc.slideNext());
  btnPrev.addEventListener('click', () => fc.slidePrev());

  // portfolio slider
  const fc1 = new Carousel(containerPortfolio, {
    infinite: true,
    gap: 10,
    adaptiveHeight: true,
    Navigation: true,
    friction: 2,
    transition: 'slide',
    Dots: {
      minCount: 2,
    },
    friction: 1,
  });

  fc1.setViewportHeight(200);

  const caruselRemove = () => {
    fc1.destroy();
    containerPortfolio.classList.remove('f-carousel');
    containerPortfolio.style.display = 'grid';
  };

  const carouselAdd = () => {
    containerPortfolio.classList.add('f-carousel');
    containerPortfolio.style.display = 'block';
    fc1.reInit();
  };

  if (window.innerWidth >= 768) caruselRemove();
  window.addEventListener('resize', () => window.innerWidth >= 768 ? caruselRemove() : carouselAdd());
};

// picture gallery with Fancybox framework
export const gallery = () => {
  Fancybox.bind("[data-fancybox]", {
    Thumbs: false,
    Toolbar: {
      display: {
        left: [],
        middle: [],
        right: ["close"],
      },
    },
  });
};

// send email from formspree.io service with ajax
export const sendMsg = () => {
  const status = document.querySelector(".contacts__form-status"),
        form = document.querySelector(".contacts__form");

  const handleSubmit = async event => {
    event.preventDefault();
    const data = new FormData(event.target);

    fetch(event.target.action, {
      method: form.method,
      body: data,
      headers: { 'Accept': 'application/json' }
    }).then(response => {
      if (response.ok) {
        status.classList.remove('error');
        status.classList.add('success');
        status.innerHTML = "Thanks for your attention!";
        form.reset();
      } else {
        response.json().then(data => {
          if (Object.hasOwn(data, 'errors')) {
            status.classList.add('error');
            status.innerHTML = data["errors"].map(error => error["message"]).join(", ")
          } else {
            status.classList.add('error');
            status.innerHTML = "Oops! There was a problem submitting your form"
          }
        });
      }
    }).catch(error => {
      status.classList.add('error');
      status.innerHTML = "Oops! There was a problem submitting your form"
    });
  };

  form.addEventListener("submit", handleSubmit);
};
