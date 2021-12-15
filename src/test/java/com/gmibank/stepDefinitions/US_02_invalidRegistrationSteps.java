package com.gmibank.stepDefinitions;

import com.gmibank.pages.CommonPageElements;
import com.gmibank.pages.RegistrationPage;
import com.gmibank.utilities.CommonMethods;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import org.junit.Assert;

import java.util.List;

public class US_02_invalidRegistrationSteps {

    CommonPageElements common = new CommonPageElements();
    RegistrationPage registrant = new RegistrationPage();

    @Given("click on login module")
    public void click_on_login_module() {
        common.loginModule.click();
    }

    @Given("click on register button")
    public void click_on_register_button() {
        registrant.registerButton.click();
    }

    @Given("user clicks on register button at Registration page")
    public void user_clicks_on_register_button_at_Registration_page() {
        registrant.registerSubmitField.click();
    }

    @Then("user displays invalid feedback messages")
    public void user_displays_invalid_feedback_messages(List<String> messages) {
        for (int i = 0; i < messages.size(); i++) {
          Assert.assertTrue(registrant.getInvalidFeedback(messages.get(i)).isDisplayed());
            System.out.println(registrant.getInvalidFeedback(messages.get(i)).getText());
        }
    }

    @Given("User provides invalid data to corresponding fields {string}, {string}, {string}")
    public void user_provides_invalid_data_to_corresponding_fields(String ssn, String mobilePhoneNumber, String eMail) {
        CommonMethods.sendText(registrant.ssnTextBox, ssn );
        CommonMethods.sendText(registrant.phoneNumberTextBox, mobilePhoneNumber);
        CommonMethods.sendText(registrant.emailTextBox, eMail);
        CommonMethods.waitFor(3);
    }
}