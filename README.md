# webhere

Create a web server in the current directory. 

[![NPM version](https://img.shields.io/npm/v/webhere.svg?style=flat)](https://npmjs.org/package/webhere)
[![Build Status](https://travis-ci.org/smallyard/webhere.svg?branch=master)](https://travis-ci.org/smallyard/webhere)

---

## Install

```
$ npm install webhere -g 
```

## Usage
```shell
#create a web server in the current directory with default port 9000
$ webhere
```

```shell
#create a web server with port 5000
$ webhere -p 5000
```

```shell
#create a web server in the /home directory with port 5000
$ webhere -p 5000 -b /home
```

```shell
#don't open browser
$ webhere -s
```

## All options
```
  Usage: webhere [options]
  Options:
    -h, --help             output usage information
    -V, --version          output the version number
    -p, --port <n>         port of web (default 9000)
    -b, --basePath <path>  base path of web (default .)
    -s, --silent           silent mode, don't open browser
```

## Log
```
Server has started.
Server address: http://127.0.0.1:9000
```

