Ping-Pong Store
===============

To get set up...

1. Clone that and `cd` into *nodebackend*.
2. `npm install` to install the dependences
3. Make a directory called "public" (`mkdir public`).
4. Do some symlinking:

        ln -s ../mobileapp public/mobile
        ln -s ../desktopapp public/desktop
        ln -s ../timecard public/timecard

5. Create a MySQL database named "orders", and create its schemas using the createSchema(WithData).sql script found in the dbschema directory.
6. Update nodebackend/config.json with the correct information for connecting to your MySQL database.

Whenever you want to start the app (desktop, mobile, or timecard, cd into nodebackend and do npm start). Ctrl-C will stop it.