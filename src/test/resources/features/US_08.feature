Feature:US_08 Ana sayfadaki parola bölümü düzenlenebilir olmalıdır
  Background:
    Given user goes to gmibank page
    And Kullanici bir user olarak sag ust kosede bulunan insan simgesine tiklar
    And Kullanici bir user olarak acilan menuden sign in linkine tiklar
    And Kullanici acilan alertte username textbox 'ina "US08_username" girer
    And Kullanici password textbox 'ina "US08_password" girer
    And Kullanici sign in butonuna tiklar
    And Kullanici ana sayfada insan figurune tiklar
    And Kullanici acilan pencerede possword butonuna tiklar
    And Kullanici Current password textboxina gecerli password'u "US08_password" girer.


  Scenario: TC_001_Eski_sifre
    And Kullanici bir user olarak New password textboxina "US08_password" girer
    And Kullanici New password confirmation "US08_password" passwordu  girer.
    And Kullanici Save butonuna tiklar.
    Then Kullanici hata mesajinin goruntulendigini Assert eder.

  Scenario: TC_002_yesil_password
    And Kullanici bir user olarak New password textboxina "yesil_password" girer
    Then Kullanici Password strength deki renk degisiminin besinci seviyede yesil oldugunu assert eder

  Scenario:TC_003_acikyesil_password
    And Kullanici bir user olarak New password textboxina "acik_yesil_password" girer
    Then Kullanici Password strength de renk degisiminin dorduncu seviyede acik yesil oldugunu assert eder

  Scenario: TC_004_sari_password
    And Kullanici bir user olarak New password textboxina "sari_password" girer
    Then Kullanici Password strength de renk degisiminin ucuncu seviyede sari oldugunu assert eder

  Scenario: TC_005_turuncu_password
    And Kullanici bir user olarak New password textboxina "truncu_password" girer
    Then Kullanici Password strength de renk degisiminin ikinci seviyede turuncu oldugunu assert eder

  Scenario: TC_006_zayif_kirmizi_password
    And Kullanici bir user olarak New password textboxina "kirmizi_password" girer
    Then Kullanici Password strength de renk degisiminin birinci seviyede kirmizi oldugu assert eder

  Scenario: TC_007_Uc_haneli_password
    And Kullanici bir user olarak New password textboxina "uc_haneli" girer
    Then Kullanici Your password is required to be at least four characters. Mesajinin goruntulendigi Assert edilir
  @e2e
  Scenario:TC_008_uyusmayan_password
    And Kullanici bir user olarak New password textboxina "yesil_password" girer
    And Kullanici New password confirmation "US08_password" passwordu  girer.
    And Kullanici Save butonuna tiklar.
    Then Kullanici New password confirmationtextbox'inin altinda hata mesajinin goruntulendigini Assert etmelidir
  @e2e
  Scenario:TC_009_save_etme
    And Kullanici bir user olarak New password textboxina "yesil_password" girer
    And Kullanici New password confirmation "yesil_password" passwordu  girer.
    And Kullanici Save butonuna tiklar.
    Then Kullanici dogrulama_mesaji mesajinin goruntulendigini Assert etmelidir

