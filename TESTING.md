# CINIkids - Testing

![markup examples](#)

Visit the deployed site: [CINIkids](#)

---

## CONTENTS

- [CINIkids - Testing](#cinikids---testing)
  - [CONTENTS](#contents)
  - [AUTOMATED TESTING](#automated-testing)
    - [W3C Validator](#w3c-validator)
    - [Lighthouse](#lighthouse)
        - [Opportunities to Improve Performance](#opportunities-to-improve-performance)
    - [WAVE Testing](#wave-testing)
  - [MANUAL TESTING](#manual-testing)
    - [Testing User Stories](#testing-user-stories)
    - [Full Testing](#full-testing)
  - [BUGS](#bugs)
    - [Solved Bugs](#solved-bugs)
    - [Known Bugs](#known-bugs)

---

## AUTOMATED TESTING

### W3C Validator

[W3C](https://validator.w3.org/) was used to validate the HTML on all pages of the website.

- Index Page:
- Contact Page:

[Jigsaw W3C](https://jigsaw.w3.org/css-validator/) was used to validate the CSS stylesheet.

- css:

---

### Lighthouse

    __Index Page Desktop__

- ![Index Page Desktop](#)

    __Index Page Mobile__

- ![Index Page Mobile](#)

    __Contact Page Desktop__

- ![Contact Page Desktop](#)

    __Contact Page Mobile__

- ![Contact Page Mobile](#)

##### Opportunities to Improve Performance

---

### WAVE Testing

Wave Initial Results

[WAVE](http://wave.webaim.org/) (Web Accessibility Evaluation Tool)

![Initial result](#)

Wave Final Results

![Wave contrast editor 1](#)

![Wave contrast editor 2](#)

![Final result](#)

---

## MANUAL TESTING

### Testing User Stories

| Goals                 | How are they achieved? |---- |  
|---------------------------------------------------------------------------------------------------------------------------------------- |-------------------------------------------------------------------------------------------------------------------------------------------- |----------------------------------------------------------------------- |
| `First Time Visitors` | |
| Browse new and popular films |  |   |
| Browse diffferent film catagories |  | |
| Search for a specific film  |  |  |
| Know how highly rated a film is |  | |
| See for a summary about the film |  |
| `Returning Visitors`  |
| All first time user goals |  |       |
| See what's new since I last looked for a film to watch |  |  |
| `Admin User`          |
| Provide a safe website for children to choose films | Modal form created, not yet linked |       |
| Show clear and easy to follow information to allow independent use |  |       |
| Maintain the API connection to allow full functionality |  |       |
| Be able to update the features with ease |  |       |

---

### Full Testing

Full testing was performed using [amiresponsive](https://ui.dev/amiresponsive?url=https://al-ell.github.io/index.html):

Each device tested the site using the following browsers:

| Feature | Expected Outcome | Testing Performed | Result | Pass/Fail |
| ------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------ | ---------------------------------- |
| `Navbar` | all links tested on all pages  |

| `Footer`             |

| `Home Page`          |

| `Contact Page`          |

| `Accessability` |

![amiresponsive result](#)

---

## JAVASCRIPT TESTING

### Manual Testing

| Feature | Testing | Image |
|---------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|--------------------------------------------------------------------------------------------------------------------| 
| Movie results on homepage | Use of <code>console.log(data.results)</code> to show results prior to adding to DOM | <img src="/assets/documentation/javascriptTesting/testingInitialResults.png" alt="console log screenhot" width="50px"> |
| Testing looping through the genre | Visibility of all genre buttons | <img src="/assets/documentation/javascriptTesting/testingLoopThroughGenre.png" alt="genre buttons on display" width="50px"> |
| Genre buttons | clicking on buttons to check it links to genre id array | <img src="/assets/documentation/javascriptTesting/testingClickOnGenre.png" alt="console log with id displayed" width="50px"> |
| Testing missing poster | searched for a movie with a missing poster | <img src="/assets/documentation/javascriptTesting/testingMissingPoster.png" alt="cinema seats in place of broken link" width="50px"> |
---

## BUGS

### Solved Bugs

| No. | Bug | How I solved the issue | Image |
|---|---------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|--------------------------------------------------------------------------------------------------------------------

---

### Known Bugs

| No  | Bug | Image |
| ------ |--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
