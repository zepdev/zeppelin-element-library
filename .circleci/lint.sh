#!/bin/bash
# this script needs the circleci CLI https://circleci.com/docs/2.0/local-cli/ and yamllint https://github.com/adrienverge/yamllint
# lint yaml file
yamllint -v -d "{extends: default, rules: {document-start: {present: false}, line-length: {max: 120}}}" config.yml
# validate circleci configuration
circleci config validate config.yml