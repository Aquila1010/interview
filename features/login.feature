Feature: The Internet Guinea Pig Website

  Scenario Outline: As a user, I can log into the secure area

    Given I am on the login page
    When I login with <username> and <password>
    Then I click login

    Examples:
      | username | password             |
      | tomsmith | SuperSecretPassword! |
      | foobar   | barfoo               |
