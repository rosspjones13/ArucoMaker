let markerCount = 0;

//FUNCTION TO GENERATE ARUCO MARKER ON SUBMIT FORM
const generateArucoMarker = (event) => {
  event.preventDefault();
  const inputCaseTagID = $("#inputCaseTagID").val();
  console.log(inputCaseTagID);

  const myMarker = new ArucoMarker(inputCaseTagID);
  const svg1 = myMarker.toSVG("200px");
  const svg2 = myMarker.toSVG("200px");

  const arucoMarkers = $("#arucoMarkers");
  const markerId1 = "marker-" + ++markerCount;
  const markerId2 = "marker-" + ++markerCount;
  arucoMarkers.append(
    `<div id="${markerId1}" class="marker">` +
      svg1 +
      "</div>"`<div id="${markerId2}" class="marker">` +
      svg2 +
      "</div>"
  );
};

$(document).ready(function ($) {
  $(document).on("submit", "#arucoMarkerForm", generateArucoMarker);
});
