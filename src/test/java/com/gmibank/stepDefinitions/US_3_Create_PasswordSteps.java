package com.gmibank.stepDefinitions;
import com.gmibank.pages.RegistrationPage;
import com.gmibank.utilities.CommonMethods;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import org.junit.Assert;
public class US_3_Create_PasswordSteps {
    // rgb(255, 0, 0)--> red
// rgb(255, 153, 0)--> orange
// rgb(255, 255, 0)--> yellow
// rgb(153, 255, 0)--> green
// rgb(0, 255, 0) --> if all green

    RegistrationPage registrant = new RegistrationPage();

    @Given("user clicks on New password field")
    public void user_clicks_on_New_password_field() {
        registrant.firstPasswordTextBox.click();
    }

    @Given("user provides lower case char")
    public void user_provides_lower_case_char() throws InterruptedException {
        registrant.firstPasswordTextBox.sendKeys(CommonMethods.generateRandomLowerCaseLetterChar());
    }

    @Then("user displays red color on the strength bar")
    public void user_displays_red_color_on_the_strength_bar() {
        Assert.assertTrue(registrant.strengthBarColorRgb(255,0,0).isDisplayed());
    }

    @Given("user provides upper case char")
    public void user_provides_upper_case_char() {
        registrant.firstPasswordTextBox.sendKeys(CommonMethods.generateRandomUpperCaseLetterChar());
    }

    @Then("user displays orange color on the strength bar")
    public void user_displays_orange_color_on_the_strength_bar() {
        Assert.assertTrue(registrant.strengthBarColorRgb(255,153,0).isDisplayed());
    }

    @Given("user provides digit char")
    public void user_provides_digit_char() {
        registrant.firstPasswordTextBox.sendKeys(CommonMethods.generateRandomNumericChar());
    }

    @Then("user displays yellow color on the strength bar")
    public void user_displays_yellow_color_on_the_strength_bar() {
        Assert.assertTrue(registrant.strengthBarColorRgb(255,255,0).isDisplayed());
    }

    @Given("user provides special char")
    public void user_provides_special_char() {
        registrant.firstPasswordTextBox.sendKeys(CommonMethods.generateRandomSpecialChar());
    }

    @Then("user displays green color on the strength bar")
    public void user_displays_green_color_on_the_strength_bar() {
        Assert.assertTrue(registrant.strengthBarColorRgb(153,255,0).isDisplayed());
    }

    @Given("user provides at least {int} chars as lower case, upper case, digit and special char")
    public void user_provides_at_least_chars_as_lower_case_upper_case_digit_and_special_char(int passwordLength ) {
        registrant.firstPasswordTextBox.sendKeys(CommonMethods.generateRandomPassword(passwordLength));
        // New password confirmation filed'a gondermek icin random uretilen passwordu bir Stringe store ettim
        String password = registrant.firstPasswordTextBox.getAttribute("value");

    }

    @Then("user displays strength bar completely green")
    public void user_displays_strength_bar_completely_green() {
        Assert.assertTrue(registrant.strengthBarColorRgb(0,255,0).isDisplayed());
    }
}
