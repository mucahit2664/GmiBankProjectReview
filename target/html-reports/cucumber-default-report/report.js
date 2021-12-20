$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/features/US_01.feature");
formatter.feature({
  "name": "System should allow any user to register with valid credentials validating the success message",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@US01"
    }
  ]
});
formatter.scenarioOutline({
  "name": "System should allow any user to register with valid credentials validating the success message",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@US01TC10"
    }
  ]
});
formatter.step({
  "name": "Enter the SSN \"\u003cSSN Number\u003e\" with valid credential",
  "keyword": "And "
});
formatter.step({
  "name": "Enter the name \"\u003cFirst Name\u003e\" with valid credential",
  "keyword": "And "
});
formatter.step({
  "name": "Enter the last name \"\u003cLast Name\u003e\" with valid credential",
  "keyword": "And "
});
formatter.step({
  "name": "Enter the Address",
  "keyword": "And "
});
formatter.step({
  "name": "Enter the GSM \"\u003cMobile Phone Number\u003e\" with valid credential",
  "keyword": "And "
});
formatter.step({
  "name": "Enter the valid username \"\u003cusername\u003e\" with valid credentail",
  "keyword": "And "
});
formatter.step({
  "name": "Enter the e-mail \"\u003cemail\u003e\" with valid credential",
  "keyword": "And "
});
formatter.step({
  "name": "Enter the new \"\u003cpassword\u003e\" with valid credential",
  "keyword": "And "
});
formatter.step({
  "name": "Enter the same password with valid credential \"\u003cpassword\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "Click to Register button",
  "keyword": "And "
});
formatter.step({
  "name": "There should be Succes message.",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "SSN Number",
        "First Name",
        "Last Name",
        "Mobile Phone Number",
        "username",
        "email",
        "password"
      ]
    },
    {
      "cells": [
        "456-36-6632",
        "Hasan",
        "Kara",
        "560-899-8296",
        "gmibankeuser04",
        "gmibankeuser04@gmail.com",
        "234@!Abc+\u003d"
      ]
    },
    {
      "cells": [
        "456-36-6631",
        "Abdullah",
        "Kara",
        "561-899-8297",
        "gmibankwuser05",
        "gmibank5user05@gmail.com",
        "234@!Abc+#"
      ]
    },
    {
      "cells": [
        "456-37-6633",
        "Ayhan",
        "Kara",
        "563-899-8298",
        "gmibankouser06",
        "gmibank6user06@gmail.com",
        "234@!Abc+$"
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
  "status": "skipped"
});
formatter.step({
  "name": "Go to gmibank.com home page",
  "keyword": "Given "
});
formatter.match({
  "location": "com.gmibank.stepDefinitions.US01_StepDefts.go_to_gmibank_com_home_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "click on login module",
  "keyword": "And "
});
formatter.match({
  "location": "com.gmibank.stepDefinitions.US_02_invalidRegistrationSteps.click_on_login_module()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "click on register button",
  "keyword": "And "
});
formatter.match({
  "location": "com.gmibank.stepDefinitions.US_02_invalidRegistrationSteps.click_on_register_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "name": "System should allow any user to register with valid credentials validating the success message",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@US01"
    },
    {
      "name": "@US01TC10"
    }
  ]
});
formatter.step({
  "name": "Enter the SSN \"456-36-6632\" with valid credential",
  "keyword": "And "
});
formatter.match({
  "location": "com.gmibank.stepDefinitions.US01_StepDefts.enter_the_SSN_with_valid_credential(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Enter the name \"Hasan\" with valid credential",
  "keyword": "And "
});
formatter.match({
  "location": "com.gmibank.stepDefinitions.US01_StepDefts.enter_the_name_with_valid_credential(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Enter the last name \"Kara\" with valid credential",
  "keyword": "And "
});
formatter.match({
  "location": "com.gmibank.stepDefinitions.US01_StepDefts.enter_the_last_name_with_valid_credential(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Enter the Address",
  "keyword": "And "
});
formatter.match({
  "location": "com.gmibank.stepDefinitions.US01_StepDefts.enter_the_Address()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Enter the GSM \"560-899-8296\" with valid credential",
  "keyword": "And "
});
formatter.match({
  "location": "com.gmibank.stepDefinitions.US01_StepDefts.enter_the_GSM_with_valid_credential(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Enter the valid username \"gmibankeuser04\" with valid credentail",
  "keyword": "And "
});
formatter.match({
  "location": "com.gmibank.stepDefinitions.US01_StepDefts.enter_the_valid_username_with_valid_credentail(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Enter the e-mail \"gmibankeuser04@gmail.com\" with valid credential",
  "keyword": "And "
});
formatter.match({
  "location": "com.gmibank.stepDefinitions.US01_StepDefts.enter_the_e_mail_with_valid_credential(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Enter the new \"234@!Abc+\u003d\" with valid credential",
  "keyword": "And "
});
formatter.match({
  "location": "com.gmibank.stepDefinitions.US01_StepDefts.enter_the_new_with_valid_credential(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Enter the same password with valid credential \"234@!Abc+\u003d\"",
  "keyword": "And "
});
formatter.match({
  "location": "com.gmibank.stepDefinitions.US01_StepDefts.enterTheSamePasswordWithValidCredential(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Click to Register button",
  "keyword": "And "
});
formatter.match({
  "location": "com.gmibank.stepDefinitions.US01_StepDefts.click_to_Register_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "There should be Succes message.",
  "keyword": "Then "
});
formatter.match({
  "location": "com.gmibank.stepDefinitions.US01_StepDefts.there_should_be_Succes_message()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "status": "skipped"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "skipped"
});
formatter.step({
  "name": "Go to gmibank.com home page",
  "keyword": "Given "
});
formatter.match({
  "location": "com.gmibank.stepDefinitions.US01_StepDefts.go_to_gmibank_com_home_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "click on login module",
  "keyword": "And "
});
formatter.match({
  "location": "com.gmibank.stepDefinitions.US_02_invalidRegistrationSteps.click_on_login_module()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "click on register button",
  "keyword": "And "
});
formatter.match({
  "location": "com.gmibank.stepDefinitions.US_02_invalidRegistrationSteps.click_on_register_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "name": "System should allow any user to register with valid credentials validating the success message",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@US01"
    },
    {
      "name": "@US01TC10"
    }
  ]
});
formatter.step({
  "name": "Enter the SSN \"456-36-6631\" with valid credential",
  "keyword": "And "
});
formatter.match({
  "location": "com.gmibank.stepDefinitions.US01_StepDefts.enter_the_SSN_with_valid_credential(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Enter the name \"Abdullah\" with valid credential",
  "keyword": "And "
});
formatter.match({
  "location": "com.gmibank.stepDefinitions.US01_StepDefts.enter_the_name_with_valid_credential(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Enter the last name \"Kara\" with valid credential",
  "keyword": "And "
});
formatter.match({
  "location": "com.gmibank.stepDefinitions.US01_StepDefts.enter_the_last_name_with_valid_credential(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Enter the Address",
  "keyword": "And "
});
formatter.match({
  "location": "com.gmibank.stepDefinitions.US01_StepDefts.enter_the_Address()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Enter the GSM \"561-899-8297\" with valid credential",
  "keyword": "And "
});
formatter.match({
  "location": "com.gmibank.stepDefinitions.US01_StepDefts.enter_the_GSM_with_valid_credential(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Enter the valid username \"gmibankwuser05\" with valid credentail",
  "keyword": "And "
});
formatter.match({
  "location": "com.gmibank.stepDefinitions.US01_StepDefts.enter_the_valid_username_with_valid_credentail(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Enter the e-mail \"gmibank5user05@gmail.com\" with valid credential",
  "keyword": "And "
});
formatter.match({
  "location": "com.gmibank.stepDefinitions.US01_StepDefts.enter_the_e_mail_with_valid_credential(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Enter the new \"234@!Abc+#\" with valid credential",
  "keyword": "And "
});
formatter.match({
  "location": "com.gmibank.stepDefinitions.US01_StepDefts.enter_the_new_with_valid_credential(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Enter the same password with valid credential \"234@!Abc+#\"",
  "keyword": "And "
});
formatter.match({
  "location": "com.gmibank.stepDefinitions.US01_StepDefts.enterTheSamePasswordWithValidCredential(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Click to Register button",
  "keyword": "And "
});
formatter.match({
  "location": "com.gmibank.stepDefinitions.US01_StepDefts.click_to_Register_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "There should be Succes message.",
  "keyword": "Then "
});
formatter.match({
  "location": "com.gmibank.stepDefinitions.US01_StepDefts.there_should_be_Succes_message()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "status": "skipped"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "skipped"
});
formatter.step({
  "name": "Go to gmibank.com home page",
  "keyword": "Given "
});
formatter.match({
  "location": "com.gmibank.stepDefinitions.US01_StepDefts.go_to_gmibank_com_home_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "click on login module",
  "keyword": "And "
});
formatter.match({
  "location": "com.gmibank.stepDefinitions.US_02_invalidRegistrationSteps.click_on_login_module()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "click on register button",
  "keyword": "And "
});
formatter.match({
  "location": "com.gmibank.stepDefinitions.US_02_invalidRegistrationSteps.click_on_register_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "name": "System should allow any user to register with valid credentials validating the success message",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@US01"
    },
    {
      "name": "@US01TC10"
    }
  ]
});
formatter.step({
  "name": "Enter the SSN \"456-37-6633\" with valid credential",
  "keyword": "And "
});
formatter.match({
  "location": "com.gmibank.stepDefinitions.US01_StepDefts.enter_the_SSN_with_valid_credential(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Enter the name \"Ayhan\" with valid credential",
  "keyword": "And "
});
formatter.match({
  "location": "com.gmibank.stepDefinitions.US01_StepDefts.enter_the_name_with_valid_credential(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Enter the last name \"Kara\" with valid credential",
  "keyword": "And "
});
formatter.match({
  "location": "com.gmibank.stepDefinitions.US01_StepDefts.enter_the_last_name_with_valid_credential(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Enter the Address",
  "keyword": "And "
});
formatter.match({
  "location": "com.gmibank.stepDefinitions.US01_StepDefts.enter_the_Address()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Enter the GSM \"563-899-8298\" with valid credential",
  "keyword": "And "
});
formatter.match({
  "location": "com.gmibank.stepDefinitions.US01_StepDefts.enter_the_GSM_with_valid_credential(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Enter the valid username \"gmibankouser06\" with valid credentail",
  "keyword": "And "
});
formatter.match({
  "location": "com.gmibank.stepDefinitions.US01_StepDefts.enter_the_valid_username_with_valid_credentail(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Enter the e-mail \"gmibank6user06@gmail.com\" with valid credential",
  "keyword": "And "
});
formatter.match({
  "location": "com.gmibank.stepDefinitions.US01_StepDefts.enter_the_e_mail_with_valid_credential(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Enter the new \"234@!Abc+$\" with valid credential",
  "keyword": "And "
});
formatter.match({
  "location": "com.gmibank.stepDefinitions.US01_StepDefts.enter_the_new_with_valid_credential(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Enter the same password with valid credential \"234@!Abc+$\"",
  "keyword": "And "
});
formatter.match({
  "location": "com.gmibank.stepDefinitions.US01_StepDefts.enterTheSamePasswordWithValidCredential(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Click to Register button",
  "keyword": "And "
});
formatter.match({
  "location": "com.gmibank.stepDefinitions.US01_StepDefts.click_to_Register_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "There should be Succes message.",
  "keyword": "Then "
});
formatter.match({
  "location": "com.gmibank.stepDefinitions.US01_StepDefts.there_should_be_Succes_message()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "status": "skipped"
});
formatter.uri("file:src/test/resources/features/US_02.feature");
formatter.feature({
  "name": "register with invalid credentials",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@US01"
    }
  ]
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "skipped"
});
formatter.step({
  "name": "Go to gmibank.com home page",
  "keyword": "Given "
});
formatter.match({
  "location": "com.gmibank.stepDefinitions.US01_StepDefts.go_to_gmibank_com_home_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "click on login module",
  "keyword": "And "
});
formatter.match({
  "location": "com.gmibank.stepDefinitions.US_02_invalidRegistrationSteps.click_on_login_module()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "click on register button",
  "keyword": "And "
});
formatter.match({
  "location": "com.gmibank.stepDefinitions.US_02_invalidRegistrationSteps.click_on_register_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "name": "Any field on the registration page should not be left blank",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@US01"
    }
  ]
});
formatter.step({
  "name": "user clicks on register button at Registration page",
  "keyword": "Given "
});
formatter.match({
  "location": "com.gmibank.stepDefinitions.US_02_invalidRegistrationSteps.user_clicks_on_register_button_at_Registration_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user displays invalid feedback messages",
  "rows": [
    {},
    {},
    {},
    {},
    {},
    {},
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
  "status": "skipped"
});
formatter.after({
  "status": "skipped"
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
  "status": "skipped"
});
formatter.step({
  "name": "Go to gmibank.com home page",
  "keyword": "Given "
});
formatter.match({
  "location": "com.gmibank.stepDefinitions.US01_StepDefts.go_to_gmibank_com_home_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "click on login module",
  "keyword": "And "
});
formatter.match({
  "location": "com.gmibank.stepDefinitions.US_02_invalidRegistrationSteps.click_on_login_module()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "click on register button",
  "keyword": "And "
});
formatter.match({
  "location": "com.gmibank.stepDefinitions.US_02_invalidRegistrationSteps.click_on_register_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "name": "ssn, mobile number, email fileds should not except invalid data",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@US01"
    },
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
  "status": "skipped"
});
formatter.step({
  "name": "user clicks on register button at Registration page",
  "keyword": "And "
});
formatter.match({
  "location": "com.gmibank.stepDefinitions.US_02_invalidRegistrationSteps.user_clicks_on_register_button_at_Registration_page()"
});
formatter.result({
  "status": "skipped"
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
  "status": "skipped"
});
formatter.after({
  "status": "skipped"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "skipped"
});
formatter.step({
  "name": "Go to gmibank.com home page",
  "keyword": "Given "
});
formatter.match({
  "location": "com.gmibank.stepDefinitions.US01_StepDefts.go_to_gmibank_com_home_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "click on login module",
  "keyword": "And "
});
formatter.match({
  "location": "com.gmibank.stepDefinitions.US_02_invalidRegistrationSteps.click_on_login_module()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "click on register button",
  "keyword": "And "
});
formatter.match({
  "location": "com.gmibank.stepDefinitions.US_02_invalidRegistrationSteps.click_on_register_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "name": "ssn, mobile number, email fileds should not except invalid data",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@US01"
    },
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
  "status": "skipped"
});
formatter.step({
  "name": "user clicks on register button at Registration page",
  "keyword": "And "
});
formatter.match({
  "location": "com.gmibank.stepDefinitions.US_02_invalidRegistrationSteps.user_clicks_on_register_button_at_Registration_page()"
});
formatter.result({
  "status": "skipped"
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
  "status": "skipped"
});
formatter.after({
  "status": "skipped"
});
formatter.uri("file:src/test/resources/features/US_02_invalidRegistration.feature");
formatter.feature({
  "name": "register with invalid credentials",
  "description": "",
  "keyword": "Feature"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "skipped"
});
formatter.step({
  "name": "Go to gmibank.com home page",
  "keyword": "Given "
});
formatter.match({
  "location": "com.gmibank.stepDefinitions.US01_StepDefts.go_to_gmibank_com_home_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "click on login module",
  "keyword": "And "
});
formatter.match({
  "location": "com.gmibank.stepDefinitions.US_02_invalidRegistrationSteps.click_on_login_module()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "click on register button",
  "keyword": "And "
});
formatter.match({
  "location": "com.gmibank.stepDefinitions.US_02_invalidRegistrationSteps.click_on_register_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "name": "Any field on the registration page should not be left blank",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "user clicks on register button at Registration page",
  "keyword": "Given "
});
formatter.match({
  "location": "com.gmibank.stepDefinitions.US_02_invalidRegistrationSteps.user_clicks_on_register_button_at_Registration_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user displays invalid feedback messages",
  "rows": [
    {},
    {},
    {},
    {},
    {},
    {},
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
  "status": "skipped"
});
formatter.after({
  "status": "skipped"
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
  "status": "skipped"
});
formatter.step({
  "name": "Go to gmibank.com home page",
  "keyword": "Given "
});
formatter.match({
  "location": "com.gmibank.stepDefinitions.US01_StepDefts.go_to_gmibank_com_home_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "click on login module",
  "keyword": "And "
});
formatter.match({
  "location": "com.gmibank.stepDefinitions.US_02_invalidRegistrationSteps.click_on_login_module()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "click on register button",
  "keyword": "And "
});
formatter.match({
  "location": "com.gmibank.stepDefinitions.US_02_invalidRegistrationSteps.click_on_register_button()"
});
formatter.result({
  "status": "skipped"
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
  "status": "skipped"
});
formatter.step({
  "name": "user clicks on register button at Registration page",
  "keyword": "And "
});
formatter.match({
  "location": "com.gmibank.stepDefinitions.US_02_invalidRegistrationSteps.user_clicks_on_register_button_at_Registration_page()"
});
formatter.result({
  "status": "skipped"
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
  "status": "skipped"
});
formatter.after({
  "status": "skipped"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "skipped"
});
formatter.step({
  "name": "Go to gmibank.com home page",
  "keyword": "Given "
});
formatter.match({
  "location": "com.gmibank.stepDefinitions.US01_StepDefts.go_to_gmibank_com_home_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "click on login module",
  "keyword": "And "
});
formatter.match({
  "location": "com.gmibank.stepDefinitions.US_02_invalidRegistrationSteps.click_on_login_module()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "click on register button",
  "keyword": "And "
});
formatter.match({
  "location": "com.gmibank.stepDefinitions.US_02_invalidRegistrationSteps.click_on_register_button()"
});
formatter.result({
  "status": "skipped"
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
  "status": "skipped"
});
formatter.step({
  "name": "user clicks on register button at Registration page",
  "keyword": "And "
});
formatter.match({
  "location": "com.gmibank.stepDefinitions.US_02_invalidRegistrationSteps.user_clicks_on_register_button_at_Registration_page()"
});
formatter.result({
  "status": "skipped"
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
  "status": "skipped"
});
formatter.after({
  "status": "skipped"
});
formatter.uri("file:src/test/resources/features/US_3_Create_Password.feature");
formatter.feature({
  "name": "restrict password usage at registration page",
  "description": "",
  "keyword": "Feature"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "skipped"
});
formatter.step({
  "name": "Go to gmibank.com home page",
  "keyword": "Given "
});
formatter.match({
  "location": "com.gmibank.stepDefinitions.US01_StepDefts.go_to_gmibank_com_home_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "click on login module",
  "keyword": "And "
});
formatter.match({
  "location": "com.gmibank.stepDefinitions.US_02_invalidRegistrationSteps.click_on_login_module()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "click on register button",
  "keyword": "And "
});
formatter.match({
  "location": "com.gmibank.stepDefinitions.US_02_invalidRegistrationSteps.click_on_register_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "name": "There should be at least 1 lower case char",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "user clicks on New password field",
  "keyword": "Given "
});
formatter.match({
  "location": "com.gmibank.stepDefinitions.US_3_Create_PasswordSteps.user_clicks_on_New_password_field()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user provides lower case char",
  "keyword": "And "
});
formatter.match({
  "location": "com.gmibank.stepDefinitions.US_3_Create_PasswordSteps.user_provides_lower_case_char()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user displays red color on the strength bar",
  "keyword": "Then "
});
formatter.match({
  "location": "com.gmibank.stepDefinitions.US_3_Create_PasswordSteps.user_displays_red_color_on_the_strength_bar()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "status": "skipped"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "skipped"
});
formatter.step({
  "name": "Go to gmibank.com home page",
  "keyword": "Given "
});
formatter.match({
  "location": "com.gmibank.stepDefinitions.US01_StepDefts.go_to_gmibank_com_home_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "click on login module",
  "keyword": "And "
});
formatter.match({
  "location": "com.gmibank.stepDefinitions.US_02_invalidRegistrationSteps.click_on_login_module()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "click on register button",
  "keyword": "And "
});
formatter.match({
  "location": "com.gmibank.stepDefinitions.US_02_invalidRegistrationSteps.click_on_register_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "name": "There should be at least 1 upper case char",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "user clicks on New password field",
  "keyword": "Given "
});
formatter.match({
  "location": "com.gmibank.stepDefinitions.US_3_Create_PasswordSteps.user_clicks_on_New_password_field()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user provides lower case char",
  "keyword": "And "
});
formatter.match({
  "location": "com.gmibank.stepDefinitions.US_3_Create_PasswordSteps.user_provides_lower_case_char()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user provides upper case char",
  "keyword": "And "
});
formatter.match({
  "location": "com.gmibank.stepDefinitions.US_3_Create_PasswordSteps.user_provides_upper_case_char()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user displays orange color on the strength bar",
  "keyword": "Then "
});
formatter.match({
  "location": "com.gmibank.stepDefinitions.US_3_Create_PasswordSteps.user_displays_orange_color_on_the_strength_bar()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "status": "skipped"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "skipped"
});
formatter.step({
  "name": "Go to gmibank.com home page",
  "keyword": "Given "
});
formatter.match({
  "location": "com.gmibank.stepDefinitions.US01_StepDefts.go_to_gmibank_com_home_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "click on login module",
  "keyword": "And "
});
formatter.match({
  "location": "com.gmibank.stepDefinitions.US_02_invalidRegistrationSteps.click_on_login_module()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "click on register button",
  "keyword": "And "
});
formatter.match({
  "location": "com.gmibank.stepDefinitions.US_02_invalidRegistrationSteps.click_on_register_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "name": "There should be at least 1 digit char",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "user clicks on New password field",
  "keyword": "Given "
});
formatter.match({
  "location": "com.gmibank.stepDefinitions.US_3_Create_PasswordSteps.user_clicks_on_New_password_field()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user provides lower case char",
  "keyword": "And "
});
formatter.match({
  "location": "com.gmibank.stepDefinitions.US_3_Create_PasswordSteps.user_provides_lower_case_char()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user provides upper case char",
  "keyword": "And "
});
formatter.match({
  "location": "com.gmibank.stepDefinitions.US_3_Create_PasswordSteps.user_provides_upper_case_char()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user provides digit char",
  "keyword": "And "
});
formatter.match({
  "location": "com.gmibank.stepDefinitions.US_3_Create_PasswordSteps.user_provides_digit_char()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user displays yellow color on the strength bar",
  "keyword": "Then "
});
formatter.match({
  "location": "com.gmibank.stepDefinitions.US_3_Create_PasswordSteps.user_displays_yellow_color_on_the_strength_bar()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "status": "skipped"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "skipped"
});
formatter.step({
  "name": "Go to gmibank.com home page",
  "keyword": "Given "
});
formatter.match({
  "location": "com.gmibank.stepDefinitions.US01_StepDefts.go_to_gmibank_com_home_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "click on login module",
  "keyword": "And "
});
formatter.match({
  "location": "com.gmibank.stepDefinitions.US_02_invalidRegistrationSteps.click_on_login_module()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "click on register button",
  "keyword": "And "
});
formatter.match({
  "location": "com.gmibank.stepDefinitions.US_02_invalidRegistrationSteps.click_on_register_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "name": "There should be at least 1 special case char",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "user clicks on New password field",
  "keyword": "Given "
});
formatter.match({
  "location": "com.gmibank.stepDefinitions.US_3_Create_PasswordSteps.user_clicks_on_New_password_field()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user provides lower case char",
  "keyword": "And "
});
formatter.match({
  "location": "com.gmibank.stepDefinitions.US_3_Create_PasswordSteps.user_provides_lower_case_char()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user provides upper case char",
  "keyword": "And "
});
formatter.match({
  "location": "com.gmibank.stepDefinitions.US_3_Create_PasswordSteps.user_provides_upper_case_char()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user provides digit char",
  "keyword": "And "
});
formatter.match({
  "location": "com.gmibank.stepDefinitions.US_3_Create_PasswordSteps.user_provides_digit_char()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user provides special char",
  "keyword": "And "
});
formatter.match({
  "location": "com.gmibank.stepDefinitions.US_3_Create_PasswordSteps.user_provides_special_char()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user displays green color on the strength bar",
  "keyword": "Then "
});
formatter.match({
  "location": "com.gmibank.stepDefinitions.US_3_Create_PasswordSteps.user_displays_green_color_on_the_strength_bar()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "status": "skipped"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "skipped"
});
formatter.step({
  "name": "Go to gmibank.com home page",
  "keyword": "Given "
});
formatter.match({
  "location": "com.gmibank.stepDefinitions.US01_StepDefts.go_to_gmibank_com_home_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "click on login module",
  "keyword": "And "
});
formatter.match({
  "location": "com.gmibank.stepDefinitions.US_02_invalidRegistrationSteps.click_on_login_module()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "click on register button",
  "keyword": "And "
});
formatter.match({
  "location": "com.gmibank.stepDefinitions.US_02_invalidRegistrationSteps.click_on_register_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "name": "There should be at least 7 chars for a stronger password",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "user clicks on New password field",
  "keyword": "Given "
});
formatter.match({
  "location": "com.gmibank.stepDefinitions.US_3_Create_PasswordSteps.user_clicks_on_New_password_field()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user provides at least 7 chars as lower case, upper case, digit and special char",
  "keyword": "And "
});
formatter.match({
  "location": "com.gmibank.stepDefinitions.US_3_Create_PasswordSteps.user_provides_at_least_chars_as_lower_case_upper_case_digit_and_special_char(int)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user displays strength bar completely green",
  "keyword": "Then "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.after({
  "status": "skipped"
});
});