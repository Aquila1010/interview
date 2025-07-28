Feature: The Internet Guinea Pig Website

  Scenario Outline: As a user, I can log into the secure area

    Given I am on the login page
    When I login with <username> and <password>
    #Step that verifies whether or not user has successfully logged on
    Examples:
      | username | password             |
      | tomsmith | SuperSecretPassword! |
      | foobar   | barfoo               |
