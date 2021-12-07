@US01
Feature:  System should allow any user to register with valid credentials validating the success message

  Background:
    Given Go to gmibank.com home page us01
    And Click to User Account menu and Click to Register

  @US01TC09
  Scenario: Password confirmation entry should be same with password
    And Enter the same password with valid credential "234@!Abc+="
    And click on new password box02
    Then entry should be same with password

  @US01TC10
  Scenario Outline:  System should allow any user to register with valid credentials validating the success message
    And Enter the SSN "<SSN Number>" with valid credential
    And Enter the name "<First Name>" with valid credential
    And Enter the last name "<Last Name>" with valid credential
    And Enter the Address
    And Enter the GSM "<Mobile Phone Number>" with valid credential
    And Enter the valid username "<username>" with valid credentail
    And Enter the e-mail "<email>" with valid credential
    And Enter the new "<password>" with valid credential
    And Enter the same password with valid credential "234@!Abc+="
    And Click to Register button
    Then There should be Succes message.
    Examples:
      | SSN Number  | First Name | Last Name | Mobile Phone Number | username      | email                   | password   |
      | 456-35-6634 | Hasan      | Kara      | 567-891-8294        | gmibankuser01 | gmibankuser01@gmail.com | 234@!Abc+= |
      | 456-35-6635 | Abdullah   | Kara      | 567-891-8295        | gmibankuser02 | gmibankuser02@gmail.com | 234@!Abc+# |
      | 456-35-6634 | Ayhan      | Kara      | 567-891-8296        | gmibankuser03 | gmibankuser03@gmail.com | 234@!Abc+$ |