$(document).ready(function () {
  chrome.storage.sync.get("WebsitesFeedBack", function (obj) {
    var result = obj.WebsitesFeedBack.WebsitesFeedBack;

    var index = 1;

    result.forEach((result) => {
      var reactionIcon = "";

      if (result.feedBackReaction == "true") {
        reactionIcon = "./icon/accept.png";
      } else if (result.feedBackReaction == "false") {
        reactionIcon = "./icon/reject.png";
      }

      var iconRow = "<img src=" + reactionIcon + " width='20px' height='20px'>";

      var tblRow =
        '  <tr id="row' +
        index +
        '"> <td> ' +
        index +
        "</td> <td> " +
        result.url +
        "  </td>  <td>  " +
        iconRow +   " </td>  <td>  "+
        result.comments+
        " </td> </tr>";

      $(" #tbody ").append(tblRow);

      index++;
    });
  });
});
