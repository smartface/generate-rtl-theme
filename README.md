
     ____                       _    __                      _       
    / ___| _ __ ___   __ _ _ __| |_ / _| __ _  ___ ___      (_) ___  
    \___ \| '_ ` _ \ / _` | '__| __| |_ / _` |/ __/ _ \     | |/ _ \ 
     ___) | | | | | | (_| | |  | |_|  _| (_| | (_|  __/  _  | | (_) |
    |____/|_| |_| |_|\__,_|_|   \__|_|  \__,_|\___\___| (_) |_|\___/ 
    -----------------------------------------------------------------

# RTL Theme Generator from Smartface
[![Twitter: @Smartface_io](https://img.shields.io/badge/contact-@Smartface_io-blue.svg?style=flat)](https://twitter.com/smartface_io)
[![License](https://img.shields.io/badge/license-MIT-green.svg?style=flat)](https://raw.githubusercontent.com/smartface/generate-rtl-theme/master/LICENSE)

An extension to generate Arabic themes for your existing themes with Smartface Native Framework.

## Installation
By default, RTL Theme Generator Extension is installed on any Smartface Project. If not installed or accidentally deleted, you can install it via:
```shell
(cd /projects/workspace/scripts && npm i @smartface/generate-rtl-theme)
```
## How to use
Smartface RTL Theme Generator Extension behaves like a normal npm package. You require/import the packages and you can use your Smartface Application on stereoids!

```shell
generate-rtl-theme [--path] [--themeName] [--font] [--replaceFontStyle] [-w]
```

If you want to give a specific path for your themes,
it via:
```shell
generate-rtl-theme --path="/projects/workspace/scripts/generated/themes"
```

If you want to give a specific theme name,
it via:
```shell
generate-rtl-theme --themeName="darkTheme.json"
```

If you want to set a new font family,
it via:
```shell
generate-rtl-theme --font="Barlow"
```

If you want to remove some styles,
it via:
```shell
generate-rtl-theme --replaceFontStyle="Semi"
```

If you want to run with the watcher,
it via:
```shell
generate-rtl-theme  -w
```

## Need Help?

Please [submit an issue](https://github.com/smartface/generate-rtl-theme/issues) on GitHub and provide information about your problem.

## Support & Documentation & Useful Links
- [Guides](https://docs.smartface.io/)
- [API Docs](http://ref.smartface.io/)
- [Smartface Cloud Dashboard](https://ide.smartface.io)

## Code of Conduct
We are committed to making participation in this project a harassment-free experience for everyone, regardless of the level of experience, gender, gender identity and expression, sexual orientation, disability, personal appearance, body size, race, ethnicity, age, religion, or nationality.
Please read and follow our [Code of Conduct](./CODE_OF_CONDUCT.md).

## License

This project is licensed under the terms of the MIT license. See the [LICENSE](./LICENSE) file. Within the scope of this license, all modifications to the source code, regardless of the fact that it is used commercially or not, shall be committed as a contribution back to this repository.
