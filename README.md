knockout
========

Learning to use knockout

Client dependencies:

    list1.html: knockout
    list2.html: knockout
    list3.html: knockout
    list4.html: knockout
    list5.html: knockout jquery "server code (app.js and dependencies)
    public/list6.html: knockout jquery "server code (app.js and dependencies)"

    anotherlist.html: knockout bootstrap jquery (although the committed code does not actually use jquery)
    anotherlist2.html: knockout bootstrap (this code shows that bootstrap layout is ungood for this view)

Server dependencies:

    app.js: node.js express mongodb

The server is based on node.js with Express and the MongoDB client

node.js:
    nodejs.org: used v0.10.13
    Mac: /usr/local/bin is where node and npm are installed
    Windows: C:\Program Files\nodejs

Express:
    http://blog.modulus.io/nodejs-and-express-create-rest-api
    Specify via package.json, install using "npm install"

MongoDB:
    used v2.4.5
    Mac:
        sudo brew update
        sudo brew install mongodb
        or
        sudo brew upgrade mongodb
    Windows:
        mongodb.org
        download and unzip the zip file

MongoDB client for node.js:
    Specify via package.json, install using "npm install"
    Windows:
        C:\Users\snichol\Documents\code\pynewb\knockout\node_modules\mongodb\node_modul
        es\bson\build\bson.vcxproj(18,3): error MSB4019: The imported project "C:\Micro
        soft.Cpp.Default.props" was not found. Confirm that the path in the <Import> de
        claration is correct, and that the file exists on disk.

        Install Visual Studio 2012 Express for Windows Desktop
        vcvarsall x86_amd64
        npm uninstall mongodb
        npm install mongodb
        
        This gives many warnings, but no errors

