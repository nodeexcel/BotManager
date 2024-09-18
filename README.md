# BotManager

A bot management wrapper tool for Steam Community developed with NodeJS. This tool allows users to customize bot actions to fit their website needs. Whether you want bots to message users during in-game reports or invite them to your group upon joining your server, this tool provides a powerful and user-friendly API.


## Features:
- GUI-Based Bot Control
- GUI-Based Messaging
- GUI-Based Trading
- 2-Factor Authentication Support + Setup
- Enable API-Key*
- Generate authentication codes on demand (for manual login)
- Manage multiple bots simultaneously
- Login using email/2-factor authentication
- API Support for third-party systems (Betting, Trading, and so on..)
- Event based interactions of a single bot or multiple
- Ability to upvote/downvote attachments on Steam Community
- Ability to import accounts into tool 
- Create new Steam accounts easily


## Requirements
- NodeJS (V6 is minimum)


## Examples:
You can check examples of bots you can build by navigating to the 'examples' folder in the root of the project.


## TODO:
- Expand API access

## Updates:
The update policy for this tool is to aim for updates every week or two. For significant changes, an announcement will be made with an estimated timeline. If you’re using a specific version of the API and newer releases lack the functionality you need, you can easily roll back using the npm package manager. Versions are organized as follows, starting with 1.0.50:
- X.0.0 (Complete release)
- 1.X.0 (Major release)
- 1.0.X (Bug fixes)


## Libraries used:
- Glob
- Jasmine
- jsdocs
- Winston
- Request
- Express

## How to contribute:
~~~
git clone https://github.com/nodeexcel/BotManager # Clone project files locally
node install # To install the tool and dependancies
~~~
The project is still in early stages, and any feedback or contribution is appreciated.

#### To contribute:
Just make your desired changes and submit your pull request. There’s no specific format to follow at this time, but please ensure the code is easy to read. Adding comments where appropriate can help expedite the approval process.


#### To help:
Install the tool and experiment with the various examples, or even create your own to test its limits. If you encounter any issues or break the tool, please let us know by reporting it on the ISSUES page.

Make sure to atleast include a log of the error message and if possible inform us about the steps to reproduce the issue.

I will ensure everything works, however I won't be building any unit-tests at this time.

---
Stable versions via npm (incase your version contains certain bugs, try these builds):
- 1.0.46
- 1.0.56

#### Git Version
The version on GitHub may not always match the latest npm version. This is because npm typically features stable releases, while GitHub may include developmental versions that could be unstable or broken. Official stable versions will be indicated in the commit messages.

### Tracking
This tool includes built-in statistics that enable the main developer to monitor its usage. This tracking is anonymous and can be disabled at any time through the configuration settings. I may use this data to verify that key features are functioning correctly and to assess the tool's usage—if it's not being used much, I may reconsider ongoing updates.