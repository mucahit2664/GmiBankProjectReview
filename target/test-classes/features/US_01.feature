@US01
Feature:  System should allow any user to register with valid credentials validating the success message

  Background:
    Given Go to gmibank.com home page us01
    And Click to User Account menu and Click to Register


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
    And Enter the same password with valid credential "<password>"
    And Click to Register button
    Then There should be Succes message.
    Examples:
      | SSN Number  | First Name | Last Name | Mobile Phone Number | username      | email                   | password   |

      | 456-36-6632 | Hasan      | Kara      | 560-899-8296        | gmibankeuser04 | gmibankeuser04@gmail.com | 234@!Abc+= |
      | 456-36-6631 | Abdullah   | Kara      | 561-899-8297        | gmibankwuser05 | gmibank5user05@gmail.com | 234@!Abc+# |
      | 456-37-6633 | Ayhan      | Kara      | 563-899-8298        | gmibankouser06 | gmibank6user06@gmail.com | 234@!Abc+$ |

      | 456-36-6639 | Hasan      | Kara      | 567-899-8296        | gmibanksuser04 | gmibank4user04@gmail.com | 234@!Abc+= |
      | 456-36-6630 | Abdullah   | Kara      | 568-899-8297        | gmibankauser05 | gmibank5user05@gmail.com | 234@!Abc+# |
      | 456-37-6637 | Ayhan      | Kara      | 569-899-8298        | gmibankmuser06 | gmibank6user06@gmail.com | 234@!Abc+$ |

