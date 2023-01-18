// Copyright 2017 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
"use strict";

$("#commentbtn").click(function (event) {
  showCommentArea(event, "none");
});

$("#acceptbtn").click(function (event) {
  showCommentArea(event, "true");
});

$("#rejectbtn").click(function (event) {
  showCommentArea(event, "false");
});

function showCommentArea(event, feedback) {
  getCurrentTabUrl(function (url) {
    //for sending a message
    chrome.runtime.sendMessage({
      type: "addFeedback",
      options: {
        url: url,
        feedBackReaction: feedback,
        comments: $("#commentArea").val(),
      },
    });
  });

  $(".successMsg").toggle();
}


$("#optionPage").click(function(event){
    chrome.runtime.openOptionsPage()
});
function getCurrentTabUrl(callback) {
  var queryInfo = {
    active: true,
    currentWindow: true,
  };

  chrome.tabs.query(queryInfo, function (tabs) {
    var tab = tabs[0];
    var url = tab.url;
    callback(url);
  });
}

function renderURL(statusText) {
  //document.getElementById("status").textContent = statusText;
}

document.addEventListener("DOMContentLoaded", function () {
  getCurrentTabUrl(function (url) {
    renderURL(url);
  });
});
