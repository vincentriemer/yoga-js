#!/usr/bin/env bash

LATEST_BRANCH="master"
NEXT_BRANCH="develop"

if [ "$BRANCH" != "master" ] && [ "$BRANCH" != "develop" ];
then echo "not a valid publishing branch, skipping..." && exit 1;
fi

if [ "$PULL_REQUEST" == "false"];
then (npm run semantic-release && set NPM_PUBLISHED=1)
|| (echo Unable to publish version && set NPM_PUBLISHED=0);
fi

export PACKAGE_VERSION='cat package.json | jq .version -r'
export PACKAGE_NAME='cat package.json | jq .name -r'

if [ "NPM_PUBLISHED" == "1" && "$BRANCH" == "develop"]; then;
  npm dist-tag add $PACKAGE_NAME@$PACKAGE_VERSION next;
fi

if [ "NPM_PUBLISHED" == "1" && "$BRANCH" == "master" ]; then;
  npm dist-tag add $PACKAGE_NAME@$PACKAGE_VERSION latest;
fi