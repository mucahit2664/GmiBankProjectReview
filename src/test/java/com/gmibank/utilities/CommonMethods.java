package com.gmibank.utilities;
import org.apache.commons.io.FileUtils;
import org.openqa.selenium.*;
import org.openqa.selenium.interactions.Actions;
import org.openqa.selenium.support.ui.*;
import java.io.File;
import java.io.IOException;
import java.text.SimpleDateFormat;
import java.time.Duration;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import java.util.Random;
import java.util.function.Function;
import org.openqa.selenium.JavascriptExecutor;

public class CommonMethods {

    static Random random = new Random();

    public static String getScreenshot(String name) throws IOException {
        // naming the screenshot with the current date to avoid duplication
        String date = new SimpleDateFormat("yyyyMMddhhmmss").format(new Date());
        // TakesScreenshot is an interface of selenium that takes the screenshot
        TakesScreenshot ts = (TakesScreenshot) Driver.getDriver();
        File source = ts.getScreenshotAs(OutputType.FILE);
        // full path to the screenshot location
        String target = System.getProperty("user.dir") + "/test-output/Screenshots/" + name + date + ".png";
        File finalDestination = new File(target);
        // save the screenshot to the path given
        FileUtils.copyFile(source, finalDestination);
        return target;
    }

    //========Switching Window=====//
    public static void switchToWindow(String targetTitle) {
        String origin = Driver.getDriver().getWindowHandle();
        for (String handle : Driver.getDriver().getWindowHandles()) {
            Driver.getDriver().switchTo().window(handle);
            if (Driver.getDriver().getTitle().equals(targetTitle)) {
                return;
            }
        }
        Driver.getDriver().switchTo().window(origin);
    }

    //========Hover Over=====//
    public static void hover(WebElement element) {
        Actions actions = new Actions(Driver.getDriver());
        actions.moveToElement(element).click().perform();

    }

    //==========Return a list of string given a list of Web Element====////
    public static List<String> getElementsText(List<WebElement> list) {
        List<String> elemTexts = new ArrayList<>();
        for (WebElement el : list) {
            if (!el.getText().isEmpty()) {
                elemTexts.add(el.getText());
            }
        }
        return elemTexts;
    }

    //========Returns the Text of the element given an element locator==//
    public static List<String> getElementsText(By locator) {
        List<WebElement> elements = Driver.getDriver().findElements(locator);
        List<String> elemTexts = new ArrayList<>();
        for (WebElement el : elements) {
            if (!el.getText().isEmpty()) {
                elemTexts.add(el.getText());
            }
        }
        return elemTexts;
    }

    //   HARD WAIT WITH THREAD.SLEEP
//   waitFor(5);  => waits for 5 second
    public static void waitFor(int sec) {
        try {
            Thread.sleep(sec * 1000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
    }

    //===============Explicit Wait==============//
    public static WebElement waitForVisibility(WebElement element, int timeToWaitInSec) {
        WebDriverWait wait = new WebDriverWait(Driver.getDriver(), timeToWaitInSec);
        return wait.until(ExpectedConditions.visibilityOf(element));
    }

    public static WebElement waitForVisibility(By locator, int timeout) {
        WebDriverWait wait = new WebDriverWait(Driver.getDriver(), timeout);
        return wait.until(ExpectedConditions.visibilityOfElementLocated(locator));
    }

    public static WebElement waitForClickablility(WebElement element, int timeout) {
        WebDriverWait wait = new WebDriverWait(Driver.getDriver(), timeout);
        return wait.until(ExpectedConditions.elementToBeClickable(element));
    }

    public static WebElement waitForClickablility(By locator, int timeout) {
        WebDriverWait wait = new WebDriverWait(Driver.getDriver(), timeout);
        return wait.until(ExpectedConditions.elementToBeClickable(locator));
    }

    public static void clickWithTimeOut(WebElement element, int timeout) {
        for (int i = 0; i < timeout; i++) {
            try {
                element.click();
                return;
            } catch (WebDriverException e) {
                waitFor(1);
            }
        }
    }

    public static void waitForPageToLoad(long timeOutInSeconds) {
        ExpectedCondition<Boolean> expectation = new ExpectedCondition<Boolean>() {
            public Boolean apply(WebDriver driver) {
                return ((JavascriptExecutor) driver).executeScript("return document.readyState").equals("complete");
            }
        };
        try {
            System.out.println("Waiting for page to load...");
            WebDriverWait wait = new WebDriverWait(Driver.getDriver(), timeOutInSeconds);
            wait.until(expectation);
        } catch (Throwable error) {
            System.out.println(
                    "Timeout waiting for Page Load Request to complete after " + timeOutInSeconds + " seconds");
        }
    }

    //======Fluent Wait====//
    public static WebElement fluentWait(final WebElement webElement, int timeinsec) {
        //FluentWait<WebDriver> wait = new FluentWait<WebDriver>(Driver.getDriver()).withTimeout(timeinsec, TimeUnit.SECONDS).pollingEvery(timeinsec, TimeUnit.SECONDS);
        FluentWait<WebDriver> wait = new FluentWait<WebDriver>(Driver.getDriver())
                .withTimeout(Duration.ofSeconds(3))//Wait 3 second each time
                .pollingEvery(Duration.ofSeconds(1));//Check for the element every 1 second
        WebElement element = wait.until(new Function<WebDriver, WebElement>() {
            public WebElement apply(WebDriver driver) {
                return webElement;
            }
        });
        return element;
    }

    /**
     * Performs double click action on an element
     *
     * @param element
     */
    public static void doubleClick(WebElement element) {
        new Actions(Driver.getDriver()).doubleClick(element).build().perform();
    }

    /**
     * @param element
     * @param check
     */
    public static void selectCheckBox(WebElement element, boolean check) {
        if (check) {
            if (!element.isSelected()) {
                element.click();
            }
        } else {
            if (element.isSelected()) {
                element.click();
            }
        }
    }

    /**
     * Selects a random value from a dropdown list and returns the selected Web Element
     *
     * @param select
     * @return
     */
    public static WebElement selectRandomTextFromDropdown(Select select) {
        Random random = new Random();
        List<WebElement> weblist = select.getOptions();
        int optionIndex = 1 + random.nextInt(weblist.size() - 1);
        select.selectByIndex(optionIndex);
        return select.getFirstSelectedOption();
    }

    /**
     * This method will select value from dropDown based on the Visible Text
     */
    public static void dropDownSelectByVisibleText(WebElement element, String expectedOption) {
        Select select = new Select(element);
        List<WebElement> options = select.getOptions();
        boolean isFound = false;
        for (WebElement option : options) {
            waitForClickablility(option, 10);
            // System.out.println(option);
            if (option.getText().equals(expectedOption)) {
                select.selectByVisibleText(expectedOption);
                isFound = true;
                break;
            }
        }
        if (!isFound) {
            System.out.println("Value " + expectedOption + " was not found in the dropdown");
        }
    }

    /**
     * This method will select value from based on the text
     *
     * @param elements
     * @param expectedText
     */
    public static void radioButtonClickWithGetText(List<WebElement> elements, String expectedText) {
        for (WebElement el : elements) {
            if (el.getText().equals(expectedText)) {
                el.click();
                break;
            }
        }
    }

    /**
     * This Method will click on the element using JSExecuter
     *
     * @param element
     */
    public static void jsClick(WebElement element) {
        JavascriptExecutor js = (JavascriptExecutor) Driver.getDriver();
        js.executeScript("arguments[0].click();", element);
    }
//___________ADDITIONALS BY TEAM_61___________

    /**
     * @param element
     * @param value   This method will clear the text box and enter the text
     * @Burcu
     */
    public static void sendText(WebElement element, String value) {
        element.clear();
        element.sendKeys(value);
    }

    /**
     * @param element
     * @return String innerText
     * This Method will get the innerText from the webElement using JSExecuter
     * @Burcu
     */
    public static String jsGetInnerText(WebElement element) {
        JavascriptExecutor js = (JavascriptExecutor) Driver.getDriver();
        String innerText = js.executeScript("return arguments[0].textContent;"
                , new WebDriverWait(Driver.getDriver(), 15)
                        .until(ExpectedConditions.visibilityOf(element))).toString();
        return innerText;
    }

    /**
     * @param element, expectedOption
     * @return boolean isSelected value of expectedOption
     * use this method to assert if the given element is selected or not
     * @Burcu
     */
    public static boolean dropDownIsSelectedByVisibleText(WebElement element, String expectedOption) {
        Select select = new Select(element);
        List<WebElement> options = select.getOptions();
        boolean flag = false;
        for (WebElement option : options) {
            waitForClickablility(option, 5);
            if (option.getText().equals(expectedOption)) {
                select.selectByVisibleText(expectedOption);
                flag = true;
                break;
            }
        }
        if (!flag) {
            System.out.println("Value " + expectedOption + " was not found in the dropdown");
        }
        return flag;
    }

    /**
     * @param fileName
     * @return byte[] screenshot
     * @Burcu
     */
    public static byte[] takeScreenShot(String fileName) {
        Date date = new Date();
        SimpleDateFormat sdf = new SimpleDateFormat("yyyy_MMdd_HHmmss");
        String timeStamp = sdf.format(date.getTime());
        TakesScreenshot ts = (TakesScreenshot) Driver.getDriver();
        byte[] screenshot = ts.getScreenshotAs(OutputType.BYTES);
        File file = ts.getScreenshotAs(OutputType.FILE);
        String scrshotFile = "/target/Screenshots/" + fileName + timeStamp + ".png";
        try {
            FileUtils.copyFile(file, new File(scrshotFile));
        } catch (IOException e) {
            System.out.println("Cannot take screenshot");
        }
        return screenshot;
    }

    /**
     * @param passwordLength
     * @return String
     * @Burcu
     */
    public static String generateRandomPassword(int passwordLength) {
        String upperLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        String lowerLetters = "abcdefghijklmnopqrstuvwxyz";
        String numbers = "0123456789";
        String specialChars = "!@#$%&";
        StringBuilder password = new StringBuilder(passwordLength);
        for (int i = 0; i < passwordLength; i++) {
            if (password.toString().length() < passwordLength) {
                password.append(upperLetters.charAt(random.nextInt(upperLetters.length())));
                if (password.toString().length() < passwordLength) {
                    password.append(lowerLetters.charAt(random.nextInt(lowerLetters.length())));
                    if (password.toString().length() < passwordLength) {
                        password.append(numbers.charAt(random.nextInt(numbers.length())));
                        if (password.toString().length() < passwordLength) {
                            password.append(specialChars.charAt(random.nextInt(specialChars.length())));
                        }
                    }
                }
            }
        }
        return password.toString();
    }

    /**
     * @return random UpperCase letter String
     */
    public static String generateRandomUpperCaseLetterChar() {
        String upperLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        StringBuilder charLetter = new StringBuilder();
        charLetter.append(upperLetters.charAt(random.nextInt(upperLetters.length())));
        return charLetter.toString();
    }

    /**
     * @return random LowerCase letter char
     */
    public static String generateRandomLowerCaseLetterChar() {
        String lowerLetters = "abcdefghijklmnopqrstuvwxyz";
        StringBuilder charLetter = new StringBuilder();
        charLetter.append(lowerLetters.charAt(random.nextInt(lowerLetters.length())));
        return charLetter.toString();
    }

    /**
     * @return random number char
     */
    public static String generateRandomNumericChar() {
        String numbers = "0123456789";
        StringBuilder charNumber = new StringBuilder();
        charNumber.append(numbers.charAt(random.nextInt(numbers.length())));
        return charNumber.toString();
    }

    /**
     * @return random special char
     */
    public static String generateRandomSpecialChar() {
        String specialChars = "!@#$%&";
        StringBuilder charSpecial = new StringBuilder();
        charSpecial.append(specialChars.charAt(random.nextInt(specialChars.length())));
        return charSpecial.toString();
    }

    // ======= RGB to HEX ==== // from demoQA framework

    public static String getHexColor(WebElement element, String cssValue) {
        String color = element.getCssValue(cssValue);
        String hex = "";
        int r, g, b = 0;
        if (color.contains("rgba")) {
            String[] numbers = color.replace("rgba(", "").replace(")", "").split(",");
            r = Integer.parseInt(numbers[0].trim());
            g = Integer.parseInt(numbers[1].trim());
            b = Integer.parseInt(numbers[2].trim());
            hex = "#" + Integer.toHexString(r) + Integer.toHexString(g) + Integer.toHexString(b);
        } else {
            String[] numbers = color.replace("rgb(", "").replace(")", "").split(",");
            r = Integer.parseInt(numbers[0].trim());
            g = Integer.parseInt(numbers[1].trim());
            b = Integer.parseInt(numbers[2].trim());
            hex = "#" + Integer.toHexString(r) + Integer.toHexString(g) + Integer.toHexString(b);
        }
        return hex;
    }
}