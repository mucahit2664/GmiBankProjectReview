$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/features/US_02_invalidRegistration.feature");
formatter.feature({
  "name": "register with invalid credentials",
  "description": "",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "name": "ssn, mobile number, email fileds should not except invalid data",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@progress"
    }
  ]
});
formatter.step({
  "name": "User provides invalid data to corresponding fields \"\u003cssn\u003e\", \"\u003cmobile number\u003e\", \"\u003cemail\u003e\"",
  "keyword": "Given "
});
formatter.step({
  "name": "user clicks on register button at Registration page",
  "keyword": "And "
});
formatter.step({
  "name": "user displays invalid feedback messages",
  "keyword": "Then ",
  "rows": [
    {
      "cells": [
        "Ssn is invalid."
      ]
    },
    {
      "cells": [
        "Your mobile phone number is invalid."
      ]
    },
    {
      "cells": [
        "Your email is invalid."
      ]
    }
  ]
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "ssn",
        "mobile number",
        "email"
      ]
    },
    {
      "cells": [
        "123-000?567",
        "123 456 788o",
        "test.com"
      ]
    },
    {
      "cells": [
        "123-000-56a",
        "(126)456788",
        "test@gmail"
      ]
    }
  ]
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "Go to gmibank.com home page",
  "keyword": "Given "
});
formatter.match({
  "location": "com.gmibank.stepDefinitions.US01_StepDefts.go_to_gmibank_com_home_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click on login module",
  "keyword": "And "
});
formatter.match({
  "location": "com.gmibank.stepDefinitions.US_02_invalidRegistrationSteps.click_on_login_module()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click on register button",
  "keyword": "And "
});
formatter.match({
  "location": "com.gmibank.stepDefinitions.US_02_invalidRegistrationSteps.click_on_register_button()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "ssn, mobile number, email fileds should not except invalid data",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@progress"
    }
  ]
});
formatter.step({
  "name": "User provides invalid data to corresponding fields \"123-000?567\", \"123 456 788o\", \"test.com\"",
  "keyword": "Given "
});
formatter.match({
  "location": "com.gmibank.stepDefinitions.US_02_invalidRegistrationSteps.user_provides_invalid_data_to_corresponding_fields(java.lang.String,java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on register button at Registration page",
  "keyword": "And "
});
formatter.match({
  "location": "com.gmibank.stepDefinitions.US_02_invalidRegistrationSteps.user_clicks_on_register_button_at_Registration_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user displays invalid feedback messages",
  "rows": [
    {},
    {},
    {}
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "com.gmibank.stepDefinitions.US_02_invalidRegistrationSteps.user_displays_invalid_feedback_messages(java.util.List\u003cjava.lang.String\u003e)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "Go to gmibank.com home page",
  "keyword": "Given "
});
formatter.match({
  "location": "com.gmibank.stepDefinitions.US01_StepDefts.go_to_gmibank_com_home_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click on login module",
  "keyword": "And "
});
formatter.match({
  "location": "com.gmibank.stepDefinitions.US_02_invalidRegistrationSteps.click_on_login_module()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click on register button",
  "keyword": "And "
});
formatter.match({
  "location": "com.gmibank.stepDefinitions.US_02_invalidRegistrationSteps.click_on_register_button()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "ssn, mobile number, email fileds should not except invalid data",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@progress"
    }
  ]
});
formatter.step({
  "name": "User provides invalid data to corresponding fields \"123-000-56a\", \"(126)456788\", \"test@gmail\"",
  "keyword": "Given "
});
formatter.match({
  "location": "com.gmibank.stepDefinitions.US_02_invalidRegistrationSteps.user_provides_invalid_data_to_corresponding_fields(java.lang.String,java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on register button at Registration page",
  "keyword": "And "
});
formatter.match({
  "location": "com.gmibank.stepDefinitions.US_02_invalidRegistrationSteps.user_clicks_on_register_button_at_Registration_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user displays invalid feedback messages",
  "rows": [
    {},
    {},
    {}
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "com.gmibank.stepDefinitions.US_02_invalidRegistrationSteps.user_displays_invalid_feedback_messages(java.util.List\u003cjava.lang.String\u003e)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
});