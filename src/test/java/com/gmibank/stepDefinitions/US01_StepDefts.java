package com.gmibank.stepDefinitions;

import com.gmibank.pages.RegistrationPage;
import com.gmibank.utilities.CommonMethods;
import com.gmibank.utilities.ConfigurationReader;
import com.gmibank.utilities.Driver;
import io.cucumber.java.en.And;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import org.junit.Assert;
import org.openqa.selenium.Keys;

public class US01_StepDefts {

    RegistrationPage registrant = new RegistrationPage();


    @Given("Go to gmibank.com home page")
    public void go_to_gmibank_com_home_page() {

        Driver.getDriver().get(ConfigurationReader.getProperty("gmi_url"));

    }

    @Given("Enter the SSN {string} with valid credential")
    public void enter_the_SSN_with_valid_credential(String string) {
        registrant.ssnTextBox.click();

        registrant.ssnTextBox.sendKeys(string + Keys.ENTER);
    }

    @Given("Enter the name {string} with valid credential")
    public void enter_the_name_with_valid_credential(String string) {

        registrant.firstNameTextBox.sendKeys(string + Keys.ENTER);

        registrant.firstNameTextBox.sendKeys(string + Keys.ENTER);

    }

    @Given("Enter the last name {string} with valid credential")
    public void enter_the_last_name_with_valid_credential(String string) {

        registrant.lastNameTextBox.sendKeys(string + Keys.ENTER);

        registrant.lastNameTextBox.sendKeys(string + Keys.ENTER);

    }

    @Given("Enter the Address")
    public void enter_the_Address() {

        registrant.adressTextBox.sendKeys(ConfigurationReader.getProperty("user_address"));


    }

    @Given("Enter the GSM {string} with valid credential")
    public void enter_the_GSM_with_valid_credential(String string) {

        registrant.phoneNumberTextBox.sendKeys(string + Keys.ENTER);

        registrant.phoneNumberTextBox.sendKeys(string + Keys.ENTER);

    }

    @Given("Enter the valid username {string} with valid credentail")
    public void enter_the_valid_username_with_valid_credentail(String string) {

        registrant.usernameTextBox.sendKeys(string + Keys.ENTER);

        registrant.usernameTextBox.sendKeys(string + Keys.ENTER);

    }

    @Given("Enter the e-mail {string} with valid credential")
    public void enter_the_e_mail_with_valid_credential(String string) {

        registrant.emailTextBox.sendKeys(string + Keys.ENTER);

        registrant.emailTextBox.sendKeys(string + Keys.ENTER);

    }

    @Given("Enter the new {string} with valid credential")
    public void enter_the_new_with_valid_credential(String string) {

        registrant.firstPasswordTextBox.sendKeys(string + Keys.ENTER);


        //  us01.firstPasswordTextBox.sendKeys(string);

        //  us01.firstPasswordTextBox.sendKeys(string);


    }


    @And("Enter the same password with valid credential {string}")
    public void enterTheSamePasswordWithValidCredential(String arg0) {
        registrant.secondPasswordTextBox.sendKeys(arg0);
    }

    @Given("Click to Register button")
    public void click_to_Register_button() {

        CommonMethods.waitForClickablility(registrant.registerButton, 5);
        registrant.registerButton.click();

    }

    @Then("There should be Succes message.")
    public void there_should_be_Succes_message() {
        CommonMethods.waitFor(1);
        String actualMessage = registrant.savedMessage.getText();
        System.out.println("Actual Mesaage: " + actualMessage);
        String expectedMessage = "Registration saved! Please check your email for confirmation.\n" +
                "✖︎";

        Assert.assertEquals(expectedMessage, (actualMessage));


        Assert.assertEquals(expectedMessage, (actualMessage));

    }
}
