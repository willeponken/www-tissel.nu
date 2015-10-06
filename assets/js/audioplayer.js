$(document).ready(function(){
  $("#jquery_jplayer_1").jPlayer({
    ready: function () {
      $(this).jPlayer("setMedia", {
        title: "Tissel Studentradio",
        mp3: "http://radio.tissel.nu/low.mp3",
        ogg: "http://radio.tissel.nu/low.ogg"
      });
    },
    cssSelectorAncestor: "#jp_container_1",
    supplied: "mp3, ogg",
    keyEnabled: true,
  });
});
