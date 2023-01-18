chrome.runtime.onMessage.addListener(function (request, sender) {
  if (request.type == "addFeedback") {
    var feedBack = request.options;

    chrome.storage.sync.get(["WebsitesFeedBack"], function(result) {
      
      var array = result["WebsitesFeedBack"]?result["WebsitesFeedBack"].WebsitesFeedBack:[];

      array.unshift(feedBack);

      var jsonObj = {};
      jsonObj["WebsitesFeedBack"] = array;
      chrome.storage.sync.set({ "WebsitesFeedBack": jsonObj });
  });

    
  } else if (request.type == "getFeedback") {
    chrome.storage.sync.get("WebsitesFeedBack", function (obj) {
      console.log(obj);
    });
  }
});
