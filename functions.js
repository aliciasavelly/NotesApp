NOTES_IDX = 1;
CURRENT_NOTE_COLOR = "#a0ffdd";

function newNote() {
  $("#notes-section").prepend(`<div id="note-${NOTES_IDX}"
                                    class='note'
                                    style="background-color:${CURRENT_NOTE_COLOR}">
                               <div class="button-holder">
                               <button type="button"
                                       name="button"
                                       class="x-button"
                                       onClick="deleteNote('note-${NOTES_IDX}')">X</button></div>
                               <span placeholder='Type here...'
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

  let backgroundColors = {
    "#fdffaa": "#FFFFEE",
    "#a0ffdd": "#E1FFF4",
    "#fddbff": "#fef2ff",
    "#b5dbff": "#d8ecff",
    "#e4b7ff": "#f2ddff"
  }

  $(".choose-background").css("background-color", backgroundColors[color]);
  CURRENT_NOTE_COLOR = color;
}

function toggleBackgroundSection(state) {
  $(".choose-background").css("display", state);
}

function changeBackground(src) {
  $("body").css("background-image", `url(${src})`);
}

window.onload = function clickOutside() {
  $(document).mouseup(function(e) {
    var container = $(".choose-background");

    // if the target of the click isn't the container nor a descendant of the container
    if (!container.is(e.target) && container.has(e.target).length === 0)
    {
      container.hide();
    }
  });
}
