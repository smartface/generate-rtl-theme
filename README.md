
     ____                       _    __                      _       
    / ___| _ __ ___   __ _ _ __| |_ / _| __ _  ___ ___      (_) ___  
    \___ \| '_ ` _ \ / _` | '__| __| |_ / _` |/ __/ _ \     | |/ _ \ 
     ___) | | | | | | (_| | |  | |_|  _| (_| | (_|  __/  _  | | (_) |
    |____/|_| |_| |_|\__,_|_|   \__|_|  \__,_|\___\___| (_) |_|\___/ 
    -----------------------------------------------------------------

# RTL Theme Generator from Smartface
[![Twitter: @Smartface_io](https://img.shields.io/badge/contact-@Smartface_io-blue.svg?style=flat)](https://twitter.com/smartface_io)
[![License](https://img.shields.io/badge/license-MIT-green.svg?style=flat)](https://raw.githubusercontent.com/smartface/generate-rtl-theme/master/LICENSE)

An extension to generate RTL themes for your existing themes with Smartface Native Framework.

## Installation
```shell
yarn add @smartface/generate-rtl-theme
```
## How to Use the Tool
 

```shell
npx generate-rtl-theme [--path] [--themeName] [--font] [--replaceFontStyle] [-w] [-h, --help]
```

### Recommended Usage

Add an option in the package.json scripts to launch and/or watch":
```json
{
    "scripts": {
        "generate-rtl": "npx generate-rtl-theme",
        "generate-rtl:watch": "npx generate-rtl-theme -w"
    }
}
```
And add the script to your sf(Smartface) script in order to include the automatic generation on your build:
```json
{
    "scripts": {
        "build:sf": "cross-env ROOT_PATH=$PWD transpiler --standalone && yarn run generate-rtl",
    }
}
```

---

### Other Usages

If you want to give a specific path for your themes, use:
```shell
npx generate-rtl-theme --path="/projects/workspace/scripts/generated/themes"
```

If you want to give a specific theme name, use:
```shell
npx generate-rtl-theme --themeName="darkTheme.json"
```

If you want to set a new font family, use:
```shell
npx generate-rtl-theme --font="Barlow"
```

If you want to convert e.g. Bold to SemiBold, you can use this command(?), use:
```shell
npx generate-rtl-theme --replaceFontStyle="Semi"
```

If you want to run with the watcher, use:
```shell
npx generate-rtl-theme -w
```

If you want to see helper, use:
```shell
npx generate-rtl-theme -h
```

## How to Implement Generated Theme on Your Smartface Project
After generation, you should manually change the theme using [ThemeService.changeTheme](https://github.com/smartface/helloworld-boilerplate/blob/main/scripts/theme.ts#L33) on your Smartface Native project.
Example usage can be found at [Smartface Docs on Theme Usage](https://docs.smartface.io/smartface-cloud-development/cloud-ide/using-ui-editor-and-classes#changing-theme-on-runtime)

## Need Help?

Please [submit an issue](https://github.com/smartface/generate-rtl-theme/issues) on GitHub and provide information about your problem.

## Support & Documentation & Useful Links
- [Guides](https://docs.smartface.io/)
- [API Docs](http://ref.smartface.io/)

## Code of Conduct
We are committed to making participation in this project a harassment-free experience for everyone, regardless of the level of experience, gender, gender identity and expression, sexual orientation, disability, personal appearance, body size, race, ethnicity, age, religion, or nationality.
Please read and follow our [Code of Conduct](./CODE_OF_CONDUCT.md).

## License

This project is licensed under the terms of the MIT license. See the [LICENSE](./LICENSE) file. Within the scope of this license, all modifications to the source code, regardless of the fact that it is used commercially or not, shall be committed as a contribution back to this repository.
