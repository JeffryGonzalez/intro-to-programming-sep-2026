# Semantic Versioning

- All versioning sucks and has problems. Never trust it totally.
- Semver (Semantic Versioning) (semver.org) is one of the least sucky ways to do versioning. [Semver](https://semver.org/)


Semantic Versioning has three part version numbers. Major, Minor, Patch.

Angular: 22.1.0

- 22 is the *Major*
    - if this increments, it indicates that there is *at least one* breaking change*
- 1 is the *Minor*
    - If this increments, it indicates backward compatible* new features.
- 0 is the *Patch*
    - If this increments, it indicates backward compatible* bug fixes.


- 22.1.0
- 22.1.1
- 22.1.2
- 22.2.0
- 22.2.1


## Daily 

- Fetch latest from source code control
- If anything in package.json or package-lock.json changed:
    - run `npm ci` (Clean Install)