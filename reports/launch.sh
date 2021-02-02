#!/bin/bash
# The .env file wil be loaded automatically by dotenv module npm
# Build a .env file
echo 'DOCKER_ENGINE=true
BUILD_NUMBER='${BUILD_NUMBER}'
BUILD_USER='${BUILD_USER}'
TEST_ENV='${env}'
browser='${browser}'
test='${test}'
testcase='${testcase}'
tag='${tag}'
groups='${groups}'
skipgroup='${skipgroup}'
recipients_report='${recipients_report} > .env
# Print .env file
cat .env
# Create script npm to run tests
NIGHTWATCH="npm test -- --env ${browser}"
# Add arg test
if [ -n "${test}" ]; then
  NIGHTWATCH="${NIGHTWATCH} --test ${test}"
fi
# Add arg testcase
if [ -n "${testcase}" ]; then
  NIGHTWATCH="${NIGHTWATCH} --testcase ${testcase}"
fi
# Add arg tag
if [ -n "${tag}" ]; then
  IFS=','
  read -ra tagsArray <<< "$tag"
  tags=''
  for i in ${tagsArray[@]}; do tags="${tags} --tag ${i}"; done
  NIGHTWATCH="${NIGHTWATCH} ${tags}"
  IFS=' '
fi
# Add arg group
if [ -n "${groups}" ]; then
  NIGHTWATCH="${NIGHTWATCH} --group ${groups}"
fi
# Skip group
if [ -n "${skipgroup}" ]; then
  NIGHTWATCH="${NIGHTWATCH} --skipgroup ${skipgroup}"
fi
echo "NIGHTWATCH Command: " ${NIGHTWATCH}
#
echo "Running Nightwatch Docker"
eval "${NIGHTWATCH}"
#
echo "Sending email report"
npm run sendEmail
#
echo "End Nightwatch"