$(".navigation-list").clone().appendTo(".mobile-menu-body");

$(".hamburger").on("click", function () {
  if (!$(".mobile-menu").hasClass("mobile-view")) {
    $(".mobile-menu").addClass("mobile-view");
  } else {
    $(".mobile-menu").removeClass("mobile-view");
  }
});

AOS.init({
  disable: function () {
    var maxWidth = 800;
    return window.innerWidth < maxWidth;
  },
});
$("#menu-close").on("click", function () {
  $(".mobile-menu").removeClass("mobile-view");
  $(".dropdown-li").removeClass("open");
  $(".dropdown-li").find(">.dropdown-list").hide(200);
});

$(".mobile-menu .dropdown-li>a").append('<i class="fa fa-angle-right"></i>');

$(".mobile-menu .dropdown-li>a").click(function () {
  const parent = $(this).parent(".dropdown-li");
  if (!parent.hasClass("open")) {
    const ulParent = parent.parent();
    ulParent.find(".dropdown-li.open").find(">.dropdown-list").hide(200);
    ulParent.find(".dropdown-li.open").removeClass("open");
    parent.addClass("open");
    parent.find(">.dropdown-list").show(200);
  } else {
    parent.removeClass("open");
    parent.find(">.dropdown-list").hide(200);
  }
});

$(".animated-progress span").each(function () {
  $(this).animate(
    {
      width: $(this).attr("data-progress") + "%",
    },
    4000
  );
  $(this).text($(this).attr("data-progress") + "%");
});


// Youtube video
// Replace 'YOUR_API_KEY' with your actual YouTube API key
var player;
function onYouTubeIframeAPIReady() {
    player = new YT.Player('video-container', {
        videoId: 'VIDEO_ID', // Replace 'VIDEO_ID' with the ID of the YouTube video you want to play
        playerVars: {
            autoplay: 1,
            controls: 0,
            showinfo: 0,
            loop: 1,
            playlist: 'VIDEO_ID' // Replace 'VIDEO_ID' with the same video ID
        },
        events: {
            'onReady': onPlayerReady,
        }
    });
}

function onPlayerReady(event) {
    event.target.mute(); // Mute the video
}


// Form Validation
(() => {
  'use strict'

  // Fetch all the forms we want to apply custom Bootstrap validation styles to
  const forms = document.querySelectorAll('.needs-validation')

  // Loop over them and prevent submission
  Array.from(forms).forEach(form => {
    form.addEventListener('submit', event => {
      if (!form.checkValidity()) {
        event.preventDefault()
        event.stopPropagation()
      }

      form.classList.add('was-validated')
    }, false)
  })
})()


// Text Animation
