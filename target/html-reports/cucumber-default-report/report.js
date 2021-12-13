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
formatter.step({
  "name": "Go to gmibank.com home page us01",
  "keyword": "Given "
});
formatter.match({
  "location": "com.gmibank.stepdefinitions.US01_StepDefts.go_to_gmibank_com_home_page_us01()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click to User Account menu and Click to Register",
  "keyword": "And "
});
formatter.match({
  "location": "com.gmibank.stepdefinitions.US01_StepDefts.click_to_User_Account_menu_and_Click_to_Register()"
});
formatter.result({
  "status": "passed"
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
  "location": "com.gmibank.stepdefinitions.US01_StepDefts.enter_the_SSN_with_valid_credential(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Enter the name \"Hasan\" with valid credential",
  "keyword": "And "
});
formatter.match({
  "location": "com.gmibank.stepdefinitions.US01_StepDefts.enter_the_name_with_valid_credential(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Enter the last name \"Kara\" with valid credential",
  "keyword": "And "
});
formatter.match({
  "location": "com.gmibank.stepdefinitions.US01_StepDefts.enter_the_last_name_with_valid_credential(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Enter the Address",
  "keyword": "And "
});
formatter.match({
  "location": "com.gmibank.stepdefinitions.US01_StepDefts.enter_the_Address()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Enter the GSM \"560-899-8296\" with valid credential",
  "keyword": "And "
});
formatter.match({
  "location": "com.gmibank.stepdefinitions.US01_StepDefts.enter_the_GSM_with_valid_credential(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Enter the valid username \"gmibankeuser04\" with valid credentail",
  "keyword": "And "
});
formatter.match({
  "location": "com.gmibank.stepdefinitions.US01_StepDefts.enter_the_valid_username_with_valid_credentail(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Enter the e-mail \"gmibankeuser04@gmail.com\" with valid credential",
  "keyword": "And "
});
formatter.match({
  "location": "com.gmibank.stepdefinitions.US01_StepDefts.enter_the_e_mail_with_valid_credential(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Enter the new \"234@!Abc+\u003d\" with valid credential",
  "keyword": "And "
});
formatter.match({
  "location": "com.gmibank.stepdefinitions.US01_StepDefts.enter_the_new_with_valid_credential(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Enter the same password with valid credential \"234@!Abc+\u003d\"",
  "keyword": "And "
});
formatter.match({
  "location": "com.gmibank.stepdefinitions.US01_StepDefts.enterTheSamePasswordWithValidCredential(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click to Register button",
  "keyword": "And "
});
formatter.match({
  "location": "com.gmibank.stepdefinitions.US01_StepDefts.click_to_Register_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "There should be Succes message.",
  "keyword": "Then "
});
formatter.match({
  "location": "com.gmibank.stepdefinitions.US01_StepDefts.there_should_be_Succes_message()"
});
formatter.result({
  "error_message": "org.junit.ComparisonFailure: expected:\u003c[Registration saved! Please check your email for confirmation.]\n✖︎\u003e but was:\u003c[translation-not-found[error.ssnexists]]\n✖︎\u003e\r\n\tat org.junit.Assert.assertEquals(Assert.java:117)\r\n\tat org.junit.Assert.assertEquals(Assert.java:146)\r\n\tat com.gmibank.stepdefinitions.US01_StepDefts.there_should_be_Succes_message(US01_StepDefts.java:104)\r\n\tat ✽.There should be Succes message.(file:///C:/Users/BEST%20TECH/IdeaProjects/GmiBankProjectReview/src/test/resources/features/US_01.feature:21)\r\n",
  "status": "failed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "Go to gmibank.com home page us01",
  "keyword": "Given "
});
formatter.match({
  "location": "com.gmibank.stepdefinitions.US01_StepDefts.go_to_gmibank_com_home_page_us01()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click to User Account menu and Click to Register",
  "keyword": "And "
});
formatter.match({
  "location": "com.gmibank.stepdefinitions.US01_StepDefts.click_to_User_Account_menu_and_Click_to_Register()"
});
formatter.result({
  "status": "passed"
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
  "location": "com.gmibank.stepdefinitions.US01_StepDefts.enter_the_SSN_with_valid_credential(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Enter the name \"Abdullah\" with valid credential",
  "keyword": "And "
});
formatter.match({
  "location": "com.gmibank.stepdefinitions.US01_StepDefts.enter_the_name_with_valid_credential(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Enter the last name \"Kara\" with valid credential",
  "keyword": "And "
});
formatter.match({
  "location": "com.gmibank.stepdefinitions.US01_StepDefts.enter_the_last_name_with_valid_credential(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Enter the Address",
  "keyword": "And "
});
formatter.match({
  "location": "com.gmibank.stepdefinitions.US01_StepDefts.enter_the_Address()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Enter the GSM \"561-899-8297\" with valid credential",
  "keyword": "And "
});
formatter.match({
  "location": "com.gmibank.stepdefinitions.US01_StepDefts.enter_the_GSM_with_valid_credential(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Enter the valid username \"gmibankwuser05\" with valid credentail",
  "keyword": "And "
});
formatter.match({
  "location": "com.gmibank.stepdefinitions.US01_StepDefts.enter_the_valid_username_with_valid_credentail(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Enter the e-mail \"gmibank5user05@gmail.com\" with valid credential",
  "keyword": "And "
});
formatter.match({
  "location": "com.gmibank.stepdefinitions.US01_StepDefts.enter_the_e_mail_with_valid_credential(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Enter the new \"234@!Abc+#\" with valid credential",
  "keyword": "And "
});
formatter.match({
  "location": "com.gmibank.stepdefinitions.US01_StepDefts.enter_the_new_with_valid_credential(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Enter the same password with valid credential \"234@!Abc+#\"",
  "keyword": "And "
});
formatter.match({
  "location": "com.gmibank.stepdefinitions.US01_StepDefts.enterTheSamePasswordWithValidCredential(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click to Register button",
  "keyword": "And "
});
formatter.match({
  "location": "com.gmibank.stepdefinitions.US01_StepDefts.click_to_Register_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "There should be Succes message.",
  "keyword": "Then "
});
formatter.match({
  "location": "com.gmibank.stepdefinitions.US01_StepDefts.there_should_be_Succes_message()"
});
formatter.result({
  "error_message": "org.junit.ComparisonFailure: expected:\u003c[Registration saved! Please check your email for confirmation.]\n✖︎\u003e but was:\u003c[translation-not-found[error.ssnexists]]\n✖︎\u003e\r\n\tat org.junit.Assert.assertEquals(Assert.java:117)\r\n\tat org.junit.Assert.assertEquals(Assert.java:146)\r\n\tat com.gmibank.stepdefinitions.US01_StepDefts.there_should_be_Succes_message(US01_StepDefts.java:104)\r\n\tat ✽.There should be Succes message.(file:///C:/Users/BEST%20TECH/IdeaProjects/GmiBankProjectReview/src/test/resources/features/US_01.feature:21)\r\n",
  "status": "failed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "Go to gmibank.com home page us01",
  "keyword": "Given "
});
formatter.match({
  "location": "com.gmibank.stepdefinitions.US01_StepDefts.go_to_gmibank_com_home_page_us01()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click to User Account menu and Click to Register",
  "keyword": "And "
});
formatter.match({
  "location": "com.gmibank.stepdefinitions.US01_StepDefts.click_to_User_Account_menu_and_Click_to_Register()"
});
formatter.result({
  "status": "passed"
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
  "location": "com.gmibank.stepdefinitions.US01_StepDefts.enter_the_SSN_with_valid_credential(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Enter the name \"Ayhan\" with valid credential",
  "keyword": "And "
});
formatter.match({
  "location": "com.gmibank.stepdefinitions.US01_StepDefts.enter_the_name_with_valid_credential(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Enter the last name \"Kara\" with valid credential",
  "keyword": "And "
});
formatter.match({
  "location": "com.gmibank.stepdefinitions.US01_StepDefts.enter_the_last_name_with_valid_credential(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Enter the Address",
  "keyword": "And "
});
formatter.match({
  "location": "com.gmibank.stepdefinitions.US01_StepDefts.enter_the_Address()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Enter the GSM \"563-899-8298\" with valid credential",
  "keyword": "And "
});
formatter.match({
  "location": "com.gmibank.stepdefinitions.US01_StepDefts.enter_the_GSM_with_valid_credential(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Enter the valid username \"gmibankouser06\" with valid credentail",
  "keyword": "And "
});
formatter.match({
  "location": "com.gmibank.stepdefinitions.US01_StepDefts.enter_the_valid_username_with_valid_credentail(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Enter the e-mail \"gmibank6user06@gmail.com\" with valid credential",
  "keyword": "And "
});
formatter.match({
  "location": "com.gmibank.stepdefinitions.US01_StepDefts.enter_the_e_mail_with_valid_credential(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Enter the new \"234@!Abc+$\" with valid credential",
  "keyword": "And "
});
formatter.match({
  "location": "com.gmibank.stepdefinitions.US01_StepDefts.enter_the_new_with_valid_credential(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Enter the same password with valid credential \"234@!Abc+$\"",
  "keyword": "And "
});
formatter.match({
  "location": "com.gmibank.stepdefinitions.US01_StepDefts.enterTheSamePasswordWithValidCredential(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click to Register button",
  "keyword": "And "
});
formatter.match({
  "location": "com.gmibank.stepdefinitions.US01_StepDefts.click_to_Register_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "There should be Succes message.",
  "keyword": "Then "
});
formatter.match({
  "location": "com.gmibank.stepdefinitions.US01_StepDefts.there_should_be_Succes_message()"
});
formatter.result({
  "error_message": "org.junit.ComparisonFailure: expected:\u003c[Registration saved! Please check your email for confirmation.]\n✖︎\u003e but was:\u003c[translation-not-found[error.ssnexists]]\n✖︎\u003e\r\n\tat org.junit.Assert.assertEquals(Assert.java:117)\r\n\tat org.junit.Assert.assertEquals(Assert.java:146)\r\n\tat com.gmibank.stepdefinitions.US01_StepDefts.there_should_be_Succes_message(US01_StepDefts.java:104)\r\n\tat ✽.There should be Succes message.(file:///C:/Users/BEST%20TECH/IdeaProjects/GmiBankProjectReview/src/test/resources/features/US_01.feature:21)\r\n",
  "status": "failed"
});
});