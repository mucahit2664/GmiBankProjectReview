package com.gmibank.stepDefinitions;


import com.gmibank.pages.US_09_Page;
import com.gmibank.utilities.ConfigurationReader;
import com.gmibank.utilities.DateUtil;
import com.gmibank.utilities.Driver;

import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;
import org.checkerframework.checker.units.qual.C;
import org.junit.Assert;
import org.openqa.selenium.Keys;


public class US_09_Step_Definitions {

    US_09_Page us_09_page=new US_09_Page();

    @When("Kullanici GMIBANK anasayfasina gider")
    public void kullanici_GMIBANK_anasayfasina_gider() {
        Driver.getDriver().get(ConfigurationReader.getProperty("US09_gmi_url"));
    }

    @Then("sign-in buttonuna tiklar")
    public void sign_in_buttonuna_tiklar() {
        us_09_page.insan.click();
        us_09_page.signIn.click();
    }

    @Then("username text box ina  gecerli {string} girilir")
    public void username_text_box_ina_gecerli_girilir(String string) {
        us_09_page.username.sendKeys(ConfigurationReader.getProperty("username"));
    }

    @Then("password text box ina geçerli {string}  girilir")
    public void password_text_box_ina_gecerli_girilir(String string) {


        us_09_page.password.sendKeys(ConfigurationReader.getProperty("password"));

    }

    @Then("sign in button basilir")
    public void sign_in_button_basilir() throws InterruptedException {
        us_09_page.signIn2.click();

    }

    @Then("My Operations dropboxina tiklanir")
    public void my_operations_dropboxina_tiklanir() {

        us_09_page.my_operations.click();
    }

    @Then("Dropbox dan Management Customer tiklanir")
    public void dropbox_dan_management_customer_tiklanir() {
        us_09_page.manage_customers.click();
    }

    @Then("Create a new customer tiklanir")
    public void create_a_new_customer_tiklanir() {
        us_09_page.create_customer.click();
    }

    @Then("Geçerli SNN numarasi text box yazilir")
    public void gecerli_snn_numarasi_text_box_yazilir() {
        us_09_page.searchSNN.sendKeys(ConfigurationReader.getProperty("search_SNN"));
    }

    @Then("Search buttonuna basilir")
    public void search_buttonuna_basilir() throws InterruptedException {
        us_09_page.searchButton.click();
        Thread.sleep(2000);
    }

    @Then("Allert mesajinin ciktigi dogrulanir")
    public void allert_mesajinin_ciktigi_dogrulanir() throws InterruptedException {
        Assert.assertTrue(us_09_page.allert.isDisplayed());
        Thread.sleep(2000);
    }
    @Then("First Name data geldigi dogrulanir")
    public void first_Name_data_geldigi_dogrulanir() throws InterruptedException {
        Thread.sleep(5000);
        Assert.assertEquals(ConfigurationReader.getProperty("expected_firstname"),us_09_page.firstName.getAttribute("value"));
    }
    @Then("Last Name data geldigi dogrulanir")
    public void last_Name_data_geldigi_dogrulanir() throws InterruptedException {
        Thread.sleep(5000);
        Assert.assertEquals(ConfigurationReader.getProperty("expected_lastname"),us_09_page.lastName.getAttribute("value"));
    }

    @Then("Middle initial data geldigi dogrulanir")
    public void middle_initial_data_geldigi_dogrulanir() {

        Assert.assertEquals(ConfigurationReader.getProperty("expected_middleinitial"),us_09_page.middleInitial.getAttribute("value"));
    }

    @Then("Email data geldigi dogrulanir")
    public void email_data_geldigi_dogrulanir() {
        Assert.assertEquals(ConfigurationReader.getProperty("expected_email"),us_09_page.email.getAttribute("value"));
    }

    @Then("Mobile phone data geldigi dogrulanir")
    public void mobile_phone_data_geldigi_dogrulanir() {
        Assert.assertEquals(ConfigurationReader.getProperty("expected_mobilephone"),us_09_page.mobilePhoneNumber.getAttribute("value"));
    }


    @Then("Phone number data geldigi dogrulanir")
    public void phone_number_data_geldigi_dogrulanir() {
        Assert.assertEquals(ConfigurationReader.getProperty("expected_phonenumber"),us_09_page.phoneNumber.getAttribute("value"));

    }

    @Then("Zip code data geldigi dogrulanir")
    public void zip_code_data_geldigi_dogrulanir() {
        Assert.assertEquals(ConfigurationReader.getProperty("expected_zipcode"),us_09_page.zipcode.getAttribute("value"));

    }

    @Then("Adress data geldigi dogrulanir")
    public void adress_data_geldigi_dogrulanir() {
        Assert.assertEquals(ConfigurationReader.getProperty("expected_address"),us_09_page.address.getAttribute("value"));

    }

    @Then("City data geldigi dogrulanir")
    public void city_data_geldigi_dogrulanir() {
        Assert.assertEquals(ConfigurationReader.getProperty("expected_city"),us_09_page.city.getAttribute("value"));

    }

    @Then("SNN data geldigi dogrulanir")
    public void snn_data_geldigi_dogrulanir() {
        Assert.assertEquals(ConfigurationReader.getProperty("search_SNN"),us_09_page.SSN.getAttribute("value"));

    }

    @Then("Create date data geldigi dogrulanir")
    public void create_date_data_geldigi_dogrulanir() {
        Assert.assertEquals(DateUtil.todaysDate4(),us_09_page.createDate.getAttribute("value"));

    }

    @Then("Country data geldigi dogrulanir")
    public void country_data_geldigi_dogrulanir() {
        Assert.assertEquals(ConfigurationReader.getProperty("expected_country"),us_09_page.country.getAttribute("value"));

    }

    @Then("State data geldigi dogrulanir")
    public void state_data_geldigi_dogrulanir() {
        Assert.assertEquals(ConfigurationReader.getProperty("expected_state"),us_09_page.state.getAttribute("value"));

    }

}




