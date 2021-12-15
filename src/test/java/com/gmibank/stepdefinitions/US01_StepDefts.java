package com.gmibank.stepdefinitions;

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

   RegistrationPage us01=new RegistrationPage();




    @Given("Go to gmibank.com home page us01")
    public void go_to_gmibank_com_home_page_us01() {

        Driver.getDriver().get(ConfigurationReader.getProperty("gmi_url"));

    }

    @Given("Click to User Account menu and Click to Register")
    public void click_to_User_Account_menu_and_Click_to_Register() {

    }



    @Given("Enter the SSN {string} with valid credential")
    public void enter_the_SSN_with_valid_credential(String string) {
        us01.ssnTextBox.click();

        us01.ssnTextBox.sendKeys(string+Keys.ENTER);
    }

    @Given("Enter the name {string} with valid credential")
    public void enter_the_name_with_valid_credential(String string) {

        us01.firstNameTextBox.sendKeys(string+Keys.ENTER);

us01.firstNameTextBox.sendKeys(string+Keys.ENTER);

    }

    @Given("Enter the last name {string} with valid credential")
    public void enter_the_last_name_with_valid_credential(String string) {

        us01.lastNameTextBox.sendKeys(string+Keys.ENTER);

us01.lastNameTextBox.sendKeys(string+Keys.ENTER);

    }

    @Given("Enter the Address")
    public void enter_the_Address() {

        us01.adressTextBox.sendKeys(ConfigurationReader.getProperty("user_address"));

us01.adressTextBox.sendKeys(ConfigurationReader.getProperty("user_address"));

    }

    @Given("Enter the GSM {string} with valid credential")
    public void enter_the_GSM_with_valid_credential(String string) {

        us01.phoneNumberTextBox.sendKeys(string+Keys.ENTER);

us01.phoneNumberTextBox.sendKeys(string+Keys.ENTER);

    }

    @Given("Enter the valid username {string} with valid credentail")
    public void enter_the_valid_username_with_valid_credentail(String string) {

        us01.usernameTextBox.sendKeys(string+Keys.ENTER);

us01.usernameTextBox.sendKeys(string+Keys.ENTER);

    }

    @Given("Enter the e-mail {string} with valid credential")
    public void enter_the_e_mail_with_valid_credential(String string) {

        us01.emailTextBox.sendKeys(string+Keys.ENTER);

us01.emailTextBox.sendKeys(string+Keys.ENTER);

    }

    @Given("Enter the new {string} with valid credential")
    public void enter_the_new_with_valid_credential(String string) {

        us01.firstPasswordTextBox.sendKeys(string + Keys.ENTER);


        //  us01.firstPasswordTextBox.sendKeys(string);

      //  us01.firstPasswordTextBox.sendKeys(string);



    }


    @And("Enter the same password with valid credential {string}")
    public void enterTheSamePasswordWithValidCredential(String arg0) {
        us01.secondPasswordTextBox.sendKeys(arg0);
    }
    @Given("Click to Register button")
    public void click_to_Register_button() {

        CommonMethods.waitForClickablility(us01.registerButton,5);
        us01.registerButton.click();

    }

    @Then("There should be Succes message.")
    public void there_should_be_Succes_message() {
        CommonMethods.waitFor(1);
        String actualMessage=us01.savedMessage.getText();
        System.out.println("Actual Mesaage: "+actualMessage);
        String expectedMessage = "Registration saved! Please check your email for confirmation.\n" +
                "✖︎";

         Assert.assertEquals(expectedMessage,(actualMessage));


        Assert.assertEquals(expectedMessage,(actualMessage));

    }
}
