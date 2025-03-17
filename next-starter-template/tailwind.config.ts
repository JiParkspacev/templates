function fetchDataFromProxy() {
  var targetUrl = "https://33m2.co.kr/room/detail/12345";  // 실제 크롤링할 URL
  var proxyUrl = "https://google-sheets-proxy.your-cloudflare-id.workers.dev?url=" + encodeURIComponent(targetUrl);
  
  try {
    var response = UrlFetchApp.fetch(proxyUrl, {
      muteHttpExceptions: true,
    });
    
    Logger.log(response.getContentText());  // 가져온 HTML 확인
  } catch (error) {
    Logger.log("❌ 오류 발생: " + error.message);
  }
}
