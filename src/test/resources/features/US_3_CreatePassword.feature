#Burcu
Feature: restrict password usage at registration page

  Background:
    Given Go to gmibank.com home page
    And click on login module
    And click on register button

  Scenario: There should be at least 1 lower case char
    Given user clicks on New password field
    And  user provides lower case char
    Then user displays red color on the strength bar

  Scenario: There should be at least 1 upper case char
    Given user clicks on New password field
    And  user provides lower case char
    And  user provides upper case char
    Then user displays orange color on the strength bar

  Scenario: There should be at least 1 digit char
    Given user clicks on New password field
    And  user provides lower case char
    And  user provides upper case char
    And  user provides digit char
    Then user displays yellow color on the strength bar

  Scenario: There should be at least 1 special case char
    Given user clicks on New password field
    And  user provides lower case char
    And  user provides upper case char
    And  user provides digit char
    And  user provides special char
    Then user displays green color on the strength bar


  Scenario: There should be at least 7 chars for a stronger password
    Given user clicks on New password field
    And  user provides at least 7 chars as lower case, upper case, digit and special char
    Then user displays strength bar completely green
