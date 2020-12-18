#!/bin/sh

npm install
npm run build
npm publish --registry http://0.0.0.0:4873/

#  Publish
#  http <-- 201, user: andy2(172.17.0.1), req: 'PUT /react-simply-translation', bytes: 8790/53
#  install
#  http --> 404, req: 'GET https://registry.npmjs.org/react-simply-translation' (streaming)
#  login
#  http <-- 201, user: andy(172.17.0.1), req: 'PUT /-/user/org.couchdb.user:andy', bytes: 126/73
