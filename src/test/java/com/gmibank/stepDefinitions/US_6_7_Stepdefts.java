package com.gmibank.stepDefinitions;

import com.github.javafaker.Faker;
import com.gmibank.pages.CommonPageElements;
import com.gmibank.pages.LoginPage;
import com.gmibank.pages.US_7_UserInfoPage;
import com.gmibank.utilities.ConfigurationReader;
import com.gmibank.utilities.Driver;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import org.junit.Assert;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.ui.Select;

import java.util.List;

public class US_6_7_Stepdefts {
    US_7_UserInfoPage us0607Page=new US_7_UserInfoPage();
    US_7_UserInfoPage updateInfo=new US_7_UserInfoPage();
    LoginPage loginPage=new LoginPage();
    CommonPageElements commonMethods=new CommonPageElements();


    Faker faker=new Faker();

    @Given("user goes to login page")
    public void user_goes_to_login_page() {
        Driver.getDriver().get(ConfigurationReader.getProperty("gmibank_login_url"));
        Driver.wait(2);

    }

    @Given("user provide valid username {string}")
    public void user_provide_valid_username(String string) {
        us0607Page.userName.sendKeys(string);
        Driver.wait(3);
    }
    @Given("user provide valid password {string}")
    public void user_provide_valid_password(String string) {
        us0607Page.passWord.sendKeys(string);
        Driver.wait(3);
    }
    @Given("user click sign in button")
    public void user_click_sign_in_button() {
        us0607Page.signInButton.click();
        Driver.wait(2);
    }
    @Given("user click to account menu")
    public void user_click_to_account_menu() {
        us0607Page.accountMenu.click();
        Driver.wait(2);
    }

    @Given("user click to user info")
    public void user_click_to_user_info() {

        Driver.clickWithTimeOut( us0607Page.userInfoClick,3);
    }
    @Then("Verify languages are available English and Turkish")
    public void verify_languages_are_available_English_and_Turkish() {
        us0607Page.languageSelect.click();
        Select select=new Select(us0607Page.languageSelect);
        List<WebElement> languageOptions ;
        languageOptions=select.getOptions();
        System.out.println(languageOptions.get(0).getText());
        System.out.println(languageOptions.get(1).getText());
        //Driver.closeDriver();
    }
    @Given("Click in the firstname box and type a new firstname")
    public void click_in_the_firstname_box_and_type_a_new_firstname()  {
        us0607Page.firstNameBoxClick.clear();

        Driver.wait(2);
        String firstName=faker.name().firstName();
        us0607Page.firstNameBoxClick.sendKeys(firstName);
        Driver.wait(3);
    }
    @Given("user click save in button")
    public void user_click_save_in_button() {
        us0607Page.saveButtonClick.click();
        Driver.wait(2);
    }
    @Then("Verify that my firstname  have been updated")
    public void verify_that_my_firstname_have_been_updated() {
        Driver.verifyElementDisplayed(us0607Page.settingsSaveMessage);
        //Driver.closeDriver();
    }
    @Given("Click in the lastname box and type a new lastname")
    public void click_in_the_lastname_box_and_type_a_new_lastname() {

        us0607Page.lastNameBoxClick.clear();
        Driver.wait(2);
        String lastName=faker.name().lastName();
        us0607Page.lastNameBoxClick.sendKeys(lastName);
    }
    @Then("Verify that my lastname  have been updated")
    public void verify_that_my_lastname_have_been_updated() {
        Driver.verifyElementDisplayed(us0607Page.settingsSaveMessage);
    }
    @Given("Click on the mailbox and type in a new email address")
    public void click_on_the_mailbox_and_type_in_a_new_email_address() {
        us0607Page.emailBoxClick.click();
        us0607Page.emailBoxClick.clear();
        Driver.wait(2);
        String mail =faker.internet().emailAddress();
        us0607Page.emailBoxClick.sendKeys(mail);
    }

    @Then("Verify update by adding {string} sign and {string} extension to your email")
    public void verify_update_by_adding_sign_and_extension_to_your_email(String string, String string2) {
        Driver.verifyElementDisplayed(us0607Page.settingsSaveMessage);


    }
    @Given("user send {string} into the email box")
    public void user_send_into_the_email_box(String string) {
        updateInfo.emailBoxClick.clear();
        Driver.wait(2);
        updateInfo.emailBoxClick.sendKeys(string);
        Driver.wait(2);
    }

    @Given("user click save button")
    public void user_click_save_button() {
        updateInfo.saveButtonClick.click();
        Driver.wait(3);
        System.out.println(updateInfo.invalidFeedback.getText());
    }
    //2.yol tum secenekleri bir method icinde denedim
    @Given("user send  new email into the email box")
    public void user_send_new_email_into_the_email_box() {

        updateInfo.emailBoxClick.clear();        Driver.wait(2);
        updateInfo.emailBoxClick.sendKeys("abcdefghgmail.com");Driver.wait(2);
        updateInfo.saveButtonClick.click();        Driver.wait(2);
        System.out.println(updateInfo.invalidFeedback.getText());

        updateInfo.emailBoxClick.clear();Driver.wait(2);
        updateInfo.emailBoxClick.sendKeys("abc..def@gmail.com");Driver.wait(2);
        updateInfo.saveButtonClick.click(); Driver.wait(2);
        System.out.println(updateInfo.invalidFeedback.getText());

        updateInfo.emailBoxClick.clear();Driver.wait(2);
        updateInfo.emailBoxClick.sendKeys(".abc@gmail.com");Driver.wait(2);
        updateInfo.saveButtonClick.click();        Driver.wait(2);
        System.out.println(updateInfo.invalidFeedback.getText());

        updateInfo.emailBoxClick.clear();Driver.wait(2);
        updateInfo.emailBoxClick.sendKeys("  @gmail.com");Driver.wait(2);
        updateInfo.saveButtonClick.click();        Driver.wait(2);
        System.out.println(updateInfo.invalidFeedback.getText());

        updateInfo.emailBoxClick.clear(); Driver.wait(2);
        updateInfo.emailBoxClick.sendKeys("abcdef@gmail.");Driver.wait(2);
        updateInfo.saveButtonClick.click();        Driver.wait(2);
        System.out.println(updateInfo.invalidFeedback.getText());

        updateInfo.emailBoxClick.clear();Driver.wait(2);
        updateInfo.emailBoxClick.sendKeys("abc@gmail#arcihe.com");Driver.wait(2);
        updateInfo.saveButtonClick.click();        Driver.wait(2);
        System.out.println(updateInfo.invalidFeedback.getText());

        updateInfo.emailBoxClick.clear();Driver.wait(2);
        updateInfo.emailBoxClick.sendKeys("abcdef@gmail");Driver.wait(2);
        updateInfo.saveButtonClick.click();        Driver.wait(2);
        System.out.println(updateInfo.invalidFeedback.getText());

        updateInfo.emailBoxClick.clear();Driver.wait(2);
        updateInfo.emailBoxClick.sendKeys("abc@gmail..com");Driver.wait(2);
        updateInfo.saveButtonClick.click();
        Driver.wait(2);
        System.out.println(updateInfo.invalidFeedback.getText());
        Driver.wait(2);

    }

    @Then("user assert that user account can not update with invalid email address")
    public void user_assert_that_user_account_can_not_update_with_invalid_email_address() {

        Driver.verifyElementDisplayed(updateInfo.invalidFeedback);

    }
    List<WebElement> languageOptions;
    @Given("user give an option language dropdown")
    public void user_give_an_option_language_dropdown() {

        Select select=new Select(updateInfo.languageSelect);
        languageOptions=select.getOptions();
        System.out.println(languageOptions.get(0).getText());
        System.out.println(languageOptions.get(1).getText());

    }
    @Then("user assert that there is no option other than English and Turkish")
    public void user_assert_that_there_is_no_option_other_than_English_and_Turkish() {
        for (WebElement w:languageOptions ) {
            boolean lang=w.getText().equals("Türkçe")||w.getText().equals("English") ;
            Assert.assertTrue("user can only select English or Turkish",lang);

        }


    }


}
