function confetti1() {
  [{
    bg: 'transparent',
    position: Math.random() * $('html').width(),
    internal: '😄',
  }, {
    bg: 'transparent',
    position: Math.random() * $('html').width(),
    internal: '😄',
  }, {
    bg: 'transparent',
    position: Math.random() * $('html').width(),
    internal: '😄',
  }, {
    bg: 'transparent',
    position: Math.random() * $('html').width(),
    internal: '😄',
  }, {
    bg: 'transparent',
    position: Math.random() * $('html').width(),
    internal: '😄',
  }, {
    bg: 'transparent',
    position: Math.random() * $('html').width(),
    internal: '😄',
  }].map(options => {
    const c = $(`<div class="confetti1" style="background:${options.bg};left:${options.position}px;">${options.internal || ''}</div>`);
    $('body').append(c);
    setTimeout(() => c.remove(), 1900);
  });
}

function confetti2() {
  [{
    bg: 'transparent',
    position: Math.random() * $('html').width(),
    internal: '🥰',
  }, {
    bg: 'transparent',
    position: Math.random() * $('html').width(),
    internal: '🥰',
  }, {
    bg: 'transparent',
    position: Math.random() * $('html').width(),
    internal: '🥰',
  }, {
    bg: 'transparent',
    position: Math.random() * $('html').width(),
    internal: '🥰',
  }, {
    bg: 'transparent',
    position: Math.random() * $('html').width(),
    internal: '🥰',
  }, {
    bg: 'transparent',
    position: Math.random() * $('html').width(),
    internal: '🥰',
  }].map(options => {
    const c = $(`<div class="confetti2" style="background:${options.bg};left:${options.position}px;">${options.internal || ''}</div>`);
    $('body').append(c);
    setTimeout(() => c.remove(), 1900);
  });
}

function confetti3() {
  [{
    bg: 'transparent',
    position: Math.random() * $('html').width(),
    internal: '😭',
  }, {
    bg: 'transparent',
    position: Math.random() * $('html').width(),
    internal: '😭',
  }, {
    bg: 'transparent',
    position: Math.random() * $('html').width(),
    internal: '😭',
  }, {
    bg: 'transparent',
    position: Math.random() * $('html').width(),
    internal: '😭',
  }, {
    bg: 'transparent',
    position: Math.random() * $('html').width(),
    internal: '😭',
  }, {
    bg: 'transparent',
    position: Math.random() * $('html').width(),
    internal: '😭',
  }].map(options => {
    const c = $(`<div class="confetti3" style="background:${options.bg};left:${options.position}px;">${options.internal || ''}</div>`);
    $('body').append(c);
    setTimeout(() => c.remove(), 1900);
  });
}

$('.mui-button1').mousedown(e => {
  const offset = $(e.target).offset();
  confetti1();
});

$('.mui-button2').mousedown(e => {
  const offset = $(e.target).offset();
  confetti2();
});

$('.mui-button3').mousedown(e => {
  const offset = $(e.target).offset();
  confetti3();
});