@reg

Feature: US009_SSN_No_Search

  Background:
    When Kullanici GMIBANK anasayfasina gider
    Then sign-in buttonuna tiklar
    Then kullanici Username textboxina gecerli bir Usarname gonderir
    Then kullanici Password textboxina gecerli bir Pasword gonderir
    Then sign in button basilir
    Then My Operations dropboxina tiklanir
    Then Dropbox dan Management Customer tiklanir
    Then Create a new customer tiklanir
    Then Geçerli SNN numarasi text box yazilir
    Then Search buttonuna basilir

  Scenario: TC01_Allert_Dogrula
    And Allert mesajinin ciktigi dogrulanir

  Scenario: TC02_Firstname_Dogrula
    And First Name data geldigi dogrulanir

  @e2e
  Scenario: TC03_Lastname_Dogrula
    And Last Name data geldigi dogrulanir

  Scenario: TC04_Middleinitial_Dogrula
    And Middle initial data geldigi dogrulanir

  Scenario: TC05_Email_Dogrula
    And Email data geldigi dogrulanir

  Scenario: TC06_MobilePhone_Dogrula
    And Mobile phone data geldigi dogrulanir

  Scenario: TC07_Phonenumber_Dogrula
    And Phone number data geldigi dogrulanir

  Scenario: TC08_ZipCode_Dogrula
    And Zip code data geldigi dogrulanir

  Scenario: TC09_Adress_Dogrula
    And Adress data geldigi dogrulanir

  Scenario: TC10_City_Dogrula
    And City data geldigi dogrulanir

  Scenario: TC11_SSN_Dogrula
    And SNN data geldigi dogrulanir

  Scenario: TC12_CreateDate_Dogrula
    And Create date data geldigi dogrulanir


  Scenario: TC13_Country_Dogrula
    And Country data geldigi dogrulanir


  Scenario: TC14_State_Dogrula
    And State data geldigi dogrulanir