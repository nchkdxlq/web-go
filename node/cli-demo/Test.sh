#!/usr/bin

node ./bin/cli.js pod
exitCode=$?
echo "$exitCode"
if [ $exitCode == 8 ]; then 
  echo "== 8"
else
  echo "!= 8"
fi

node ./bin/cli.js pod
echo "$?"