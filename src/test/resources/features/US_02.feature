@US01
Feature: register with invalid credentials

  Background:
    Given Go to gmibank.com home page us01
    And Click to User Account menu and Click to Register



  Scenario: Any field on the registration page should not be left blank
    Given user clicks on register button at Registration page
    Then user displays invalid feedback messages
      | Please enter your social security number. |
      | Please enter your first name.             |
      | Please enter your last name.              |
      | Please enter your address.                |
      | Please enter your mobile phone number.    |
      | Your username is required.                |
      | Please enter your email.                  |
      | Your password is required.                |
      | Your confirmation password is required.   |

  @progress
  Scenario Outline: ssn, mobile number, email fileds should not except invalid data
    Given User provides invalid data to corresponding fields "<ssn>", "<mobile number>", "<email>"
    And user clicks on register button at Registration page
    Then user displays invalid feedback messages
      | Ssn is invalid.                      |
      | Your mobile phone number is invalid. |
      | Your email is invalid.               |

    Examples:
      | ssn         | mobile number | email      |
      | 123-000?567 | 123 456 788o  | test.com   |
      | 123-000-56a | (126)456788 | test@gmail |