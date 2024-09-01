mkdir -p $RUNNER_TEMP/dist
cp -a * $RUNNER_TEMP/dist
cp -a .github $RUNNER_TEMP/dist
cp .* $RUNNER_TEMP/dist
mv $RUNNER_TEMP/dist dist

cd dist

# modify package.json
cat package.json | jq '.version="0.0.0" | del(.optionalDependencies)' > package.json.tmp
mv -f package.json.tmp package.json

sed -i .gitignore \
-e '/bun.lockb/d'

# modify workflows
cd .github/workflows

rm sync.yml
rm sync.sh
