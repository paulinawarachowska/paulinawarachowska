// Animate Smooth Scroll
$('#view-work').on('click', function() {
  const images = $('#Najlepszy-Fryzjer-W-Pruszkowie').position().top;

  $('html, body').animate(
    {
      scrollTop: images;
    },
    900
  );
});
