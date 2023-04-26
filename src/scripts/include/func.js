import { Fancybox } from "@fancyapps/ui"

// slider with Owl framework (need JQuery)
export const carousel = () => {
  $(document).ready(() => {
    const owl = $('.owl-carousel');
    owl.owlCarousel({
      loop: true,
      margin: 5,
      items: 1,
      smartSpeed: 500,
    });

    $('.header__right_nav-next').click(() => {
      owl.trigger('next.owl.carousel');
    });

    $('.header__right_nav-prev').click(() => {
      owl.trigger('prev.owl.carousel');
    });
  });
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
  const status = document.querySelector(".contacts_form-status");
  const form = document.querySelector(".contacts_form");
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
