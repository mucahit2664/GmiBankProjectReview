Feature:  System should allow any user to register with valid credentials validating the success message

  Background:
    Given Go to gmibank.com home page us01
    And Click to User Account menu and Click to Register


# @deneme
 # Scenario:  System should allow any user to register with credentials validating the success message
  #Then Enter the boxes with valid credential

  Scenario Outline: System should allow any user to register with credentials validating the success message
    And enter the boxes with valid credential "<SSN Number>","<First Name>","<Last Name>","<Mobile Phone Number>","<username>","<email>","<password>"
    #Then  And Click to Register button
    Then There should be succes message.
    Examples:
      | SSN Number  | First Name | Last Name | Mobile Phone Number | username       | email                    | password   |
      | 496-36-4712 | Ayla       | Kara      | 560-899-8297        | gmibankauser72 | gmibankauser72@gmail.com | 234@!Abc+= |
     # | 456-36-6631 | Abdullah   | Kara      | 561-899-8297        | gmibankwuser05 | gmibank5user05@gmail.com | 234@!Abc+# |
     # | 456-37-6633 | Ayhan      | Kara      | 563-899-8298        | gmibankouser06 | gmibank6user06@gmail.com | 234@!Abc+$ |