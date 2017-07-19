NOTES_IDX = 1;
CURRENT_NOTE_COLOR = "#b7fff6";

function newNote() {
  $("#notes-section").prepend(
      `<div id="note-${NOTES_IDX}"
            class="note"
            style="background-color:${CURRENT_NOTE_COLOR}">
         <div class="button-holder">
           <button id=${NOTES_IDX}
                   type="button"
                   name="button"
                   class="x-button"
                   onClick="deleteNote('note-${NOTES_IDX}')">X
           </button>
         </div>
       <span id="span-${NOTES_IDX}"
             placeholder="Type here..."
             onClick="removePlaceholder(this.id)"
             contenteditable='true'></span></div>`);
  NOTES_IDX += 1;
}

function deleteNote(id) {
  $(`#${id}`).remove();
}

function changeNoteColor(color) {
  $(".note").css("background-color", color);
  $(".hamburger").css("background-color", color);
  $(".new-note-button").css("background-color", color);

  $(".close-background").mouseenter(function() {
    $(".close-background").css("background-color", color);
  }).mouseleave(function() {
    $(".close-background").css("background-color", "Transparent");
  });

  let backgroundColors = {
    "#fdffaa": "#FFFFEE",
    "#a0ffdd": "#E1FFF4",
    "#fddbff": "#fef2ff",
    "#b5dbff": "#d8ecff",
    "#e4b7ff": "#f2ddff",
    "#b7fff6": "#dbfffa"
  }

  $(".choose-background").css("background-color", backgroundColors[color]);
  CURRENT_NOTE_COLOR = color;
}

function openBackgroundSection() {
  $(".choose-background").fadeIn(500).css("display", "flex");
}

function closeBackgroundSection() {
  $(".choose-background").animate({opacity: 0});
  setTimeout( function() {
    $(".choose-background").css("display", "none");
    $(".choose-background").animate({opacity: 1});
  }, 500);
}

function changeBackground(src) {
  if (screen.width < 415) {
    closeBackgroundSection();
  }

  $("body").css("background-image", `url(${src})`);
}

function removePlaceholder(id) {
  $(`#${id}`).removeAttr('placeholder');
}

window.onload = function clickOutside() {
  $(document).mouseup(function(e) {
    let container = $(".choose-background");

    if (!container.is(e.target) && container.has(e.target).length === 0) {
      container.hide();
    }
  });
}
