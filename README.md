# numeral-calc

Solve the ECMAScript language **large number calculation** and **floating point number** problem.

The underlying method relies on the **BigInt** data type.

Supports scientific numeration calculations.

[![Build Status](https://travis-ci.com/NickLJudy/num-calc.svg?branch=main)](https://travis-ci.com/NickLJudy/num-calc)
[![Version](https://img.shields.io/npm/v/numeral-calc.svg?maxAge=300&label=version&colorB=007ec6&maxAge=300)](./package.json)
![last-commit-date-logo](https://img.shields.io/github/last-commit/NickLJudy/numeral-calc)
## Installation

The numeral-calc package lives in [npm](https://www.npmjs.com/get-npm). To install the latest stable version, run the following command:

```shell
npm i numeral-calc
```

Or if you're using [yarn](https://classic.yarnpkg.com/en/docs/install/):

```shell
yarn add numeral-calc
```
## Usage

[Codepen Demo](https://codepen.io/nickljudy/pen/XWRyQbq)


```js
import { add, sub, multi, devide, calc } from 'numeral-calc';

add(0.1,0.2) // "0.3"
In the same way: calc(0.1,0.2,"+")  //  "+" can be replaced by "and" or "plus" or "add"

sub(0.3,0.1) // "0.2"
In the same way: calc(0.3,0.1,"-")  //  "-" can be replaced by "minus" or "sub" or "subtract"
/* Support for custom scientific notation. */
sub(1.02e1,1.3e-4)  //  "10.19987"

multi(1.15,100) // "115"
In the same way: calc(1.15,100,"*")   //  "*" can be replaced by "x" or "multi" or "multiply"

devide(9007199254740997,2) // "4503599627370498.5"
In the same way: calc(9007199254740997,2,"/")   //  "/" can be replaced by "divide"

```