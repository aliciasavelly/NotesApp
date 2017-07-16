NOTES_IDX = 2;
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

// #FCFF79
// #71FFCD
// #F9A1FF
// #87C4FF
// #D388FF
  let backgroundSectionColor = "#E1FFF4";
  // debugger;
  if (color === "#fdffaa") {
    backgroundSectionColor = "#FFFFEE";
  } else if (color === "#a0ffdd") {
    backgroundSectionColor = "#E1FFF4";
  } else if (color === "#fddbff") {
    backgroundSectionColor = "#fef2ff";
  } else if (color === "#b5dbff") {
    backgroundSectionColor = "#d8ecff";
  } else if (color === "#e4b7ff") {
    backgroundSectionColor = "#f2ddff";
  }

  $(".choose-background").css("background-color", backgroundSectionColor);

  CURRENT_NOTE_COLOR = color;
}

function openBackgroundSection() {
  $(".choose-background").css("display", "flex");
}

function closeBackgroundSection() {
  $(".choose-background").css("display", "none");
}

function changeBackground(src) {
  $("body").css("background-image", `url(${src})`);
}
