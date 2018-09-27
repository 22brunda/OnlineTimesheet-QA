$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("login.feature");
formatter.feature({
  "line": 2,
  "name": "As a end User I should able to Login to the Application",
  "description": "",
  "id": "as-a-end-user-i-should-able-to-login-to-the-application",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@Login"
    }
  ]
});
formatter.before({
  "duration": 2415111795,
  "status": "passed"
});
formatter.scenario({
  "line": 5,
  "name": "Trying to Login to the Application",
  "description": "",
  "id": "as-a-end-user-i-should-able-to-login-to-the-application;trying-to-login-to-the-application",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 4,
      "name": "@ValidLogin"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "I am on OnlineTimeSheet Home Page",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "I Enter Valid Credentials",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "I should able to see the onlinetime sheet page",
  "keyword": "Then "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.after({
  "duration": 68841715,
  "status": "passed"
});
});