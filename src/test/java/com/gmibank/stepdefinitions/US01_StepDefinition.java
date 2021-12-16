package com.gmibank.stepdefinitions;

import com.gmibank.pages.RegistrationPage;
import com.gmibank.pages.RegistrationPage;
import com.gmibank.utilities.CommonMethods;
import com.gmibank.utilities.ConfigurationReader;
import io.cucumber.java.en.And;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import org.junit.Assert;
import org.openqa.selenium.Keys;

public class US01_StepDefinition {

    RegistrationPage us01=new RegistrationPage();



//    @Then("Enter the boxes with valid credential")
//    public void enterTheBoxesWithValidCredential() {
//        String chordLoginData = Keys.chord(ConfigurationReader.getProperty("manager_SSN"), Keys.TAB, ConfigurationReader.getProperty("manager_firstname"),Keys.TAB,
//                ConfigurationReader.getProperty("manager_lastname"),Keys.TAB,
//                ConfigurationReader.getProperty("user_address"),Keys.TAB,
//                ConfigurationReader.getProperty("user_mobilephone"),Keys.TAB,
//                ConfigurationReader.getProperty("manager_username"),Keys.TAB,
//                ConfigurationReader.getProperty("user_email"),Keys.TAB,
//                ConfigurationReader.getProperty("employee_password"),Keys.TAB,
//                ConfigurationReader.getProperty("employee_password"),Keys.TAB,
//                Keys.ENTER);
//        us01.ssnTextBox.sendKeys(chordLoginData);
//    }

    @Then("enter the boxes with valid credential {string},{string},{string},{string},{string},{string},{string}")
    public void enter_the_boxes_with_valid_credential(String string1, String string2, String string3, String string4, String string5, String string6, String string7) {

//        CommonMethods.sendText(us01.ssnTextBox,string1);
//        CommonMethods.sendText(us01.firstNameTextBox,string2);
//        CommonMethods.sendText(us01.lastNameTextBox,string3);
//        us01.adressTextBox.sendKeys(ConfigurationReader.getProperty("user_address"));
//        CommonMethods.sendText(us01.phoneNumberTextBox,string4);
//        CommonMethods.sendText(us01.usernameTextBox,string5);
//        CommonMethods.sendText(us01.emailTextBox,string6);
//        CommonMethods.sendText(us01.firstPasswordTextBox,string7);
//        CommonMethods.sendText(us01.secondPasswordTextBox,string7);
//        us01.registerButton.click();

    }

    @Then("There should be succes message.")
    public void thereShouldBeSuccesMessage() throws InterruptedException {
//       Thread.sleep(5000);
//        String actualMessage=us01.savedMessage.getText();
//        System.out.println("actual message: "+actualMessage);
//        String expectedMessage="Registration saved! Please check your email for confirmation.\n" +
//                "✖︎";
//        Assert.assertEquals(expectedMessage,actualMessage);
    }

//    @Then("And Click to Register button")
//    public void andClickToRegisterButton() {
//        us01.registerButton.click();
//    }
}
