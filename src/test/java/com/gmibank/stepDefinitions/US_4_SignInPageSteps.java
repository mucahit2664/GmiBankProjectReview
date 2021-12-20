package com.gmibank.stepDefinitions;

import com.gmibank.pages.CommonPageElements;
import com.gmibank.utilities.CommonMethods;
import com.gmibank.utilities.ConfigurationReader;
import com.gmibank.utilities.Driver;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;
import org.junit.Assert;
import org.testng.asserts.SoftAssert;

public class US_4_SignInPageSteps {
    CommonPageElements common=new CommonPageElements();

    @Given("Go to GMIBank home page")
    public void go_to_https_gmibank_com() {
        Driver.getDriver().get(ConfigurationReader.getProperty("gmi_url"));
    }

    @When("click to login module and sign in")
    public void click_to_login_module_and_sign_in() {
        common.loginModule.click();
        CommonMethods.waitForClickablility(common.homePageSignIn,2000);
        common.homePageSignIn.click();
    }

    @When("employee enter {string} and {string}")
    public void employee_enter_and(String string, String string2) {
        common.userName.sendKeys(ConfigurationReader.getProperty("employee_username"));
        common.password.sendKeys(ConfigurationReader.getProperty("employee_password"));
    }

    @When("user enter valid {string} and {string}")
    public void user_enter_valid_and(String string, String string2) {
        common.userName.sendKeys(ConfigurationReader.getProperty("user_username"));
        common.password.sendKeys(ConfigurationReader.getProperty("user_password"));
    }

    @When("admin enter valid {string} and {string}")
    public void admin_enter_valid_and(String string, String string2) {
        common.userName.sendKeys(ConfigurationReader.getProperty("admin_username"));
        common.password.sendKeys(ConfigurationReader.getProperty("admin_password"));
    }

    @When("manager enter valid {string} and {string}")
    public void manager_enter_valid_and(String string, String string2) {
        common.userName.sendKeys(ConfigurationReader.getProperty("manager_username"));
        common.password.sendKeys(ConfigurationReader.getProperty("manager_password"));
    }

    @When("click to the sign in button")
    public void click_to_the_sign_in_button() throws InterruptedException {
        common.signInButton.click();
        Thread.sleep(3000);
    }
  
    @Then("user able to sign in")
    public void user_able_to_sign_in() {
        String ExpectedText= ConfigurationReader.getProperty("user_firstname")+" "+ConfigurationReader.getProperty("user_lastname");
        Assert.assertEquals("Username is not displayed",common.CurrentUserNameTextBox.getText(),ExpectedText);
    }
  
    @Then("employee able to sign in")
    public void employee_able_to_sign_in() {
        String ExpectedText= ConfigurationReader.getProperty("employee_firstname")+" "+ConfigurationReader.getProperty("employee_lastname");
        Assert.assertEquals("Username is not displayed",common.CurrentUserNameTextBox.getText(),ExpectedText);
    }

    @Then("admin able to sign in")
    public void admin_able_to_sign_in() {
        String ExpectedText= ConfigurationReader.getProperty("admin_firstname")+" "+ConfigurationReader.getProperty("admin_lastname");
        Assert.assertEquals("Username is not displayed",common.CurrentUserNameTextBox.getText(),ExpectedText);
    }

    @Then("Manager able to sign in")
    public void manager_able_to_sign_in() {
        String ExpectedText= ConfigurationReader.getProperty("manager_firstname")+" "+ConfigurationReader.getProperty("manager_lastname");
        Assert.assertEquals("Username is not displayed",common.CurrentUserNameTextBox.getText(),ExpectedText);
    }
  
    @Then("user able to cancel login")
    public void user_able_to_cancel_login() {
       CommonMethods.waitForClickablility(common.cancelButton,3000);
        common.cancelButton.click();
        String expectedDisplay="";
        String userDisplay=common.CurrentUserNameTextBox.getText();
        Assert.assertEquals("User name should not display",expectedDisplay,userDisplay);
    }
    @When("user enter invalid {string} and {string}")
    public void user_enter_invalid_and(String string, String string2) {
        common.userName.sendKeys(string);
        common.password.sendKeys(string2);
    }

    @Then("user see {string}")
    public void user_see(String errorMessage) {
        String actualErrorMessage=common.signInErrorMessage.getText();
        SoftAssert soft=new SoftAssert();
        soft.assertEquals(actualErrorMessage,errorMessage,"User is not able to see error message");
        soft.assertAll();
    }
    @When("click Register a new account button")
    public void click_Register_a_new_account_button() throws InterruptedException {
        CommonMethods.jsClick( common.registerANewAccountButton);
    }

    @Then("user navigate to the Registiration Page")
    public void user_navigate_to_the_Registiration_Page() {
       String registrationPageTitle= common.registrationPageTitle.getText();
       Assert.assertEquals("User is not able to navigate Registration Page","Registration",registrationPageTitle);
    }

    @When("user enter empty {string} and valid {string}")
    public void user_enter_empty_and_valid(String string, String string2) {
        common.userName.sendKeys("");
        common.password.sendKeys(ConfigurationReader.getProperty("user_password"));
    }
    @Then("user see {string} error message")
    public void user_see_error_message(String string) {
        String actual=common.usernameInvalidFeedback.getText();
        Assert.assertEquals("User didn't see username is required message",string,actual);
    }
    @When("user enter valid {string} and empty {string}")
    public void user_enter_valid_and_empty(String string, String string2) {
       common.userName.sendKeys(ConfigurationReader.getProperty("user_username"));
       common.password.sendKeys("");
    }

    @Then("user see {string} password error message")
    public void user_see_password_error_message(String string) {
       Assert.assertEquals("User didn't see password is required message",string,common.passwordInvalidFeedback.getText());
    }
}

