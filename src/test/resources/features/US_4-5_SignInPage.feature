
Feature: Go To Home Page

  @Regression @Smoke
  Scenario:As an Employee User valid login
    Given Go to GMIBank home page
    And click to login module and sign in
    When employee enter "employee_username" and "employee_password"
    And click to the sign in button
    Then employee able to sign in

  @Regression @Smoke
  Scenario:As an User valid login
    Given Go to GMIBank home page
    And click to login module and sign in
    When user enter valid "user_username" and "user_password"
    And click to the sign in button
    Then user able to sign in

  @Regression @Smoke
  Scenario:As an Admin valid login
    Given Go to GMIBank home page
    And click to login module and sign in
    When admin enter valid "admin_username" and "admin_password"
    And click to the sign in button
    Then admin able to sign in

  @Regression @Smoke
  Scenario:As an Manager valid login
    Given Go to GMIBank home page
    And click to login module and sign in
    When manager enter valid "manager_username" and "manager_password"
    And click to the sign in button
    Then Manager able to sign in

  @Regression @Smoke
  Scenario: User is able to cancel login
    Given Go to GMIBank home page
    And click to login module and sign in
    When user enter valid "user_username" and "user_password"
    Then user able to cancel login

  @Regression @Smoke
  Scenario Outline: User is not able to login with invalid credentials
    Given Go to GMIBank home page
    And click to login module and sign in
    When user enter invalid "<user_username>" and "<user_password>"
    And click to the sign in button
    Then user see "<error message>"
    Examples:
      | user_username | user_password | error message                                                   |
      | Amelia        | 1710212B.a    | Failed to sign in! Please check your credentials and try again. |
      | asli          | Asli12345?    | Failed to sign in! Please check your credentials and try again. |
      | John          | 1111111Jn     | Failed to sign in! Please check your credentials and try again. |

  @Regression @Smoke
  Scenario: User should be given the option to navigate to registration page if they did not register yet
    Given Go to GMIBank home page
    And click to login module and sign in
    When click Register a new account button
    Then user navigate to the Registiration Page

  @Regression @Smoke
  Scenario: User is not able to sign in without passing username
    Given Go to GMIBank home page
    And click to login module and sign in
    When user enter empty "user_username" and valid "user_password"
    And click to the sign in button
    Then user see "Please enter your username." error message

  @Regression @Smoke
  Scenario: User is not able to sign in without passing password
    Given Go to GMIBank home page
    And click to login module and sign in
    When user enter valid "user_username" and empty "user_password"
    And click to the sign in button
    Then user see "Your password is required." password error message
