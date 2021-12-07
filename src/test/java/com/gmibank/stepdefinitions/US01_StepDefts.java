package com.gmibank.stepdefinitions;

import com.gmibank.pages.US01_Pages;
import com.gmibank.utilities.ConfigurationReader;
import com.gmibank.utilities.Driver;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;

public class US01_StepDefts {

    US01_Pages us01=new US01_Pages();




    @Given("Go to gmibank.com home page us01")
    public void go_to_gmibank_com_home_page_us01() {
        Driver.getDriver().get(ConfigurationReader.getProperty("gmi_url"));

    }

    @Given("Click to User Account menu and Click to Register")
    public void click_to_User_Account_menu_and_Click_to_Register() {
us01.humanHead.click();
us01.registerButonu.click();
    }

    @Given("Enter the same password with valid credential {string}")
    public void enter_the_same_password_with_valid_credential(String string) {

    }

    @Given("click on new password box02")
    public void click_on_new_password_box02() {

    }

    @Then("entry should be same with password")
    public void entry_should_be_same_with_password() {

    }

    @Given("Enter the SSN {string} with valid credential")
    public void enter_the_SSN_with_valid_credential(String string) {

    }

    @Given("Enter the name {string} with valid credential")
    public void enter_the_name_with_valid_credential(String string) {

    }

    @Given("Enter the last name {string} with valid credential")
    public void enter_the_last_name_with_valid_credential(String string) {

    }

    @Given("Enter the Address")
    public void enter_the_Address() {

    }

    @Given("Enter the GSM {string} with valid credential")
    public void enter_the_GSM_with_valid_credential(String string) {

    }

    @Given("Enter the valid username {string} with valid credentail")
    public void enter_the_valid_username_with_valid_credentail(String string) {

    }

    @Given("Enter the e-mail {string} with valid credential")
    public void enter_the_e_mail_with_valid_credential(String string) {

    }

    @Given("Enter the new {string} with valid credential")
    public void enter_the_new_with_valid_credential(String string) {

    }

    @Given("Click to Register button")
    public void click_to_Register_button() {

    }

    @Then("There should be Succes message.")
    public void there_should_be_Succes_message() {

    }

}
