jQuery(document).ready(function ($) {
  // Smooth scroll for the menu and links with .scrollto classes
  $('.smothscroll').on('click', function (e) {
    e.preventDefault();
    if (
      location.pathname.replace(/^\//, '') ==
        this.pathname.replace(/^\//, '') &&
      location.hostname == this.hostname
    ) {
      var target = $(this.hash);
      if (target.length) {
        $('html, body').animate(
          {
            scrollTop: target.offset().top - 62,
          },
          1500,
          'easeInOutExpo'
        );
      }
    }
  });

  $('.carousel').carousel({
    interval: 3500,
  });

  // JavaScript Chart
  var doughnutData = [
    {
      value: 70,
      color: '#1abc9c',
    },
    {
      value: 30,
      color: '#ecf0f1',
    },
  ];
  var myDoughnut = new Chart(
    document.getElementById('javascript').getContext('2d')
  ).Doughnut(doughnutData);

  // Bootstrap Chart
  var doughnutData = [
    {
      value: 90,
      color: '#1abc9c',
    },
    {
      value: 10,
      color: '#ecf0f1',
    },
  ];
  var myDoughnut = new Chart(
    document.getElementById('bootstrap').getContext('2d')
  ).Doughnut(doughnutData);

  // WordPress Chart
  var doughnutData = [
    {
      value: 55,
      color: '#1abc9c',
    },
    {
      value: 45,
      color: '#ecf0f1',
    },
  ];
  var myDoughnut = new Chart(
    document.getElementById('wordpress').getContext('2d')
  ).Doughnut(doughnutData);

  // HTML Chart
  var doughnutData = [
    {
      value: 80,
      color: '#1abc9c',
    },
    {
      value: 20,
      color: '#ecf0f1',
    },
  ];
  var myDoughnut = new Chart(
    document.getElementById('html').getContext('2d')
  ).Doughnut(doughnutData);

  // Photoshop Chart
  var doughnutData = [
    {
      value: 80,
      color: '#1abc9c',
    },
    {
      value: 20,
      color: '#ecf0f1',
    },
  ];
  var myDoughnut = new Chart(
    document.getElementById('photoshop').getContext('2d')
  ).Doughnut(doughnutData);

  // Illustrator Chart
  var doughnutData = [
    {
      value: 70,
      color: '#1abc9c',
    },
    {
      value: 30,
      color: '#ecf0f1',
    },
  ];
  var myDoughnut = new Chart(
    document.getElementById('illustrator').getContext('2d')
  ).Doughnut(doughnutData);
});

$(function () {
  var pagetop = $('#page_top');
  // ボタン非表示
  pagetop.hide();

  // 100px スクロールしたらボタン表示
  $(window).scroll(function () {
    if ($(this).scrollTop() > 100) {
      pagetop.fadeIn();
    } else {
      pagetop.fadeOut();
    }
  });
  pagetop.click(function () {
    $('body, html').animate({ scrollTop: 0 }, 500);
    return false;
  });
});
