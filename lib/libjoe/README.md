# libjoe
- author: [mateusdigital](https://mateus.digital)
- date: 2024-09-09

## VERSION
v1.0.0 

## Intro 

```libjoe``` is a helper library used among all meta-services of UniqKiller.


## Philosophy

```libjoe``` is meant to be used to solve a problem and solve a problem well. 
If we find that we are repeating code too much or we can extract something of 
value that can be general enough to be usable in various contexts - ```libjoe``` 
is the place for such code.


## Structure:

- ```Execptions``` - Custom exceptions that we might want to capture to give better handling.
- ```Response```  - Things to handle creating a response from server.
- ```ApiResult``` - ???
- ```Assert``` - Utilities to create assertions.
- ```Debug``` - Utilities to help the debug.
- ```Utils``` - Myriad of other functions.


## SEMVER

This project follows the Semantic Versioning ([semver.org](semver.org)) - this means that ***API changes are not guaranteed*** among MAJOR releases.