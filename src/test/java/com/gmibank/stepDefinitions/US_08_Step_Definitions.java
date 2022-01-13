package com.gmibank.stepDefinitions;


import com.gmibank.pages.US_08_Page;
import com.gmibank.utilities.ConfigurationReader;
import com.gmibank.utilities.Driver;
import io.cucumber.java.en.And;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import org.junit.Assert;
import org.openqa.selenium.interactions.Actions;
import org.openqa.selenium.support.ui.Select;

public class US_08_Step_Definitions {
    US_08_Page page=new US_08_Page();

    @And("Kullanici ana sayfada insan figurune tiklar")
    public void kullaniciAnaSayfadaInsanFiguruneTiklar() {
        Driver.wait(1);
        page.humanFigure2.click();

    }

    @And("Kullanici acilan pencerede possword butonuna tiklar")
    public void kullaniciAcilanPenceredePosswordButonunaTiklar() {
        page.passwordIcone.click();
    }

    @And("Kullanici Current password textboxina gecerli password'u {string} girer.")
    public void kullaniciCurrentPasswordTextboxinaGecerliPasswordUGirer(String password) {
        page.currentPassword.clear();
        page.currentPassword.sendKeys(ConfigurationReader.getProperty(password));
    }

    @Given("Kullanici bir user olarak New password textboxina {string} girer")
    public void kullanici_bir_user_olarak_New_password_textboxina_girer(String newPassword) {
        page.newPassword.clear();
        page.newPassword.sendKeys(ConfigurationReader.getProperty(newPassword));
    }

    @Given("Kullanici New password confirmation {string} passwordu  girer.")
    public void kullanici_New_password_confirmation_passwordu_girer(String newPassword) {
        page.confirmPassword.clear();
        page.confirmPassword.sendKeys(ConfigurationReader.getProperty(newPassword));
    }

    @Given("Kullanici Save butonuna tiklar.")
    public void kullanici_Save_butonuna_tiklar() {
        page.save.click();
    }

    @Then("Kullanici dogrulama_mesaji mesajinin goruntulendigini Assert etmelidir")
    public void kullaniciDogrulama_mesajiMesajininGoruntulendiginiAssertEtmelidir() {
        Actions actions = new Actions(Driver.getDriver());
        actions.moveToElement(page.passwordChanged);
        Assert.assertTrue(page.passwordChanged.isEnabled());
    }

    //TC 02

    @Then("Kullanici Password strength deki renk degisiminin besinci seviyede yesil oldugunu assert eder")
    public void kullaniciPasswordStrengthDekiRenkDegisimininBesinciSeviyedeYesilOldugunuAssertEder() {
        Assert.assertTrue(page.yesil.isDisplayed());
    }

    //TC 03
    @Then("Kullanici Password strength de renk degisiminin dorduncu seviyede acik yesil oldugunu assert eder")
    public void kullaniciPasswordStrengthDeRenkDegisimininDorduncuSeviyedeAcikYesilOldugunuAssertEder() {
        Assert.assertTrue(page.acikYesil.isDisplayed());
    }

    //TC 04

    @Then("Kullanici Password strength de renk degisiminin ucuncu seviyede sari oldugunu assert eder")
    public void kullaniciPasswordStrengthDeRenkDegisimininUcuncuSeviyedeSariOldugunuAssertEder() {
        Assert.assertTrue(page.sari.isDisplayed());
    }

    //TC 05
    @Then("Kullanici Password strength de renk degisiminin ikinci seviyede turuncu oldugunu assert eder")
    public void kullaniciPasswordStrengthDeRenkDegisimininIkinciSeviyedeTuruncuOldugunuAssertEder() {
        Assert.assertTrue(page.turuncu.isDisplayed());
    }
    //TC 06
    @Then("Kullanici Password strength de renk degisiminin birinci seviyede kirmizi oldugu assert eder")
    public void kullaniciPasswordStrengthDeRenkDegisimininBirinciSeviyedeKirmiziOlduguAssertEder() {
        Assert.assertTrue(page.kirmizi.isDisplayed());
    }

    //TC 07

    @Then("Kullanici Your password is required to be at least four characters. Mesajinin goruntulendigi Assert edilir")
    public void kullaniciYourPasswordIsRequiredToBeAtLeastFourCharactersMesajininGoruntulendigiAssertEdilir() {
        Assert.assertEquals(ConfigurationReader.getProperty("missing_password"),page.missingCharactersMessage.getText());
    }

    //TC 08 eski sifre
    @Then("Kullanici hata mesajinin goruntulendigini Assert eder.")
    public void kullaniciHataMesajininGoruntulendiginiAssertEder() {
        Actions actions = new Actions(Driver.getDriver());
        actions.moveToElement(page.passwordChanged);
        Assert.assertFalse(page.passwordChanged.isEnabled());
    }


    @And("Kullanici password textbox'a {string} girer")
    public void kullaniciPasswordTextboxAGirer(String password08) {

    }

    @Then("Kullanici New password confirmationtextbox'inin altinda hata mesajinin goruntulendigini Assert etmelidir")
    public void kullaniciNewPasswordConfirmationtextboxIninAltindaHataMesajininGoruntulendiginiAssertEtmelidir() {
        Assert.assertEquals(ConfigurationReader.getProperty("uyusmayan_password_mesaji"),page.uyusmayanPasswordMessage.getText());
    }
}
