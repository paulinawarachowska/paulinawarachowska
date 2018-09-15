// Animate Smooth Scroll
$('#view-work').on('click', function() {
  const NajlepszyFryzjerWPruszkowie = $('#NajlepszyFryzjerWPruszkowie').position().top;

  $('html, body').animate(
    {
      scrollTop: NajlepszyFryzjerWPruszkowie
    },
    900
  );
});
