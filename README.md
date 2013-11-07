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

Whenever you want to start the app (desktop, mobile, or timecard, cd into nodebackend and do npm start). Ctrl-C will stop it.