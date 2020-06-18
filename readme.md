# Automated testing with Node.js and Selenium Webdriver

College project to Software Quality course of Computer Science Program at Universidade Federal de Santa Maria.

## Getting Started 🚀

_Automated testing with Node.js and Selenium Webdriver._

### Requirements 📋

_Node.js._

_Geckodriver (for firefox)._ [Tutorial](https://youtu.be/fj0Ud16YJJw?t=110) _until 5:45_

### Run Application 🔧

_Clone the repository._

```sh
git clone https://github.com/muriloleal13/seleniumTestsASU
```

_Install dependencies._

```sh
npm i faker@4.1.0 mocha@7.2.0 mochawesome@6.1.1 selenium-webdriver@4.0.0-alpha.7 --save-dev --unsafe-perm=true --allow-root
```

## Run Test ⚙️

```sh
npm test
```

## Folder Structure 🛠️

    ├── ...
    │
    ├── lib                         # Helper methods
    │   ├── base_page.js            # Generic functionality for tests
    │   └── home_page_.js           # Home page testing functionality
    │
    ├── test                        # Test suite
    │   └── site.test.js            # Testing in home page
    │
    ├── utils                       # Utility files for testing
    │   ├── fake_data.js            # Generating random keyword for searching
    │   └── locator.js              # CSS identifier for elements to test

## Autor ✒️

* **Murilo Leal** - [mukkaL13](https://github.com/muriloleal13)


---
