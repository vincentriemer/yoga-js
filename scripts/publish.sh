#!/usr/bin/env bash
BRANCH="$TRAVIS_BRANCH"
PULL_REQUEST="$TRAVIS_PULL_REQUEST"
LATEST_BRANCH="master"
NEXT_BRANCH="develop"

if [ "$BRANCH" != "$LATEST_BRANCH" ] && [ "$BRANCH" != "$NEXT_BRANCH" ];
then echo "not a valid publishing branch, skipping..." && exit 1;
fi

if [ "$PULL_REQUEST" == "false"]; then;
  npm run semantic-release && set NPM_PUBLISHED=1 || echo "Unable to publish version" && set NPM_PUBLISHED=0;
fi

export PACKAGE_VERSION='cat package.json | jq .version -r'
export PACKAGE_NAME='cat package.json | jq .name -r'

if [ "NPM_PUBLISHED" == "1" ] && [ "$BRANCH" == "$LATEST_BRANCH"]; then;
  npm dist-tag add $PACKAGE_NAME@$PACKAGE_VERSION next;
fi

if [ "NPM_PUBLISHED" == "1" ] && [ "$BRANCH" == "$NEXT_BRANCH" ]; then;
  npm dist-tag add $PACKAGE_NAME@$PACKAGE_VERSION latest;
fi