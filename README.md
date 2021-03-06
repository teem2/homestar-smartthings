# homestar-smart-things

IOTDB / Home☆Star Controller for SmartThings 

<img src="https://raw.githubusercontent.com/dpjanes/iotdb-homestar/master/docs/HomeStar.png" align="right" />

This [Module](https://homestar.io/about/things) allows you to control your SmartThings devices from IOTDB and Home☆Star.
**Note** that this inherently is complicated. 
You'll have to add a new app to SmartThings.
If you're not comfortable with programming-like things, please ask for help from someone who is.

# Installation

[Install Home☆Star first](https://homestar.io/about/install).

Then:

    $ homestar install homestar-smartthings
    $ homestar configure homestar-smartthings

# Quick Start

## Home☆Star

If you have correctly setup and configured your SmartThings app, all you need do is:

	$ homestar runner browser=1
	
You may have to refresh the page, as it may take a little while for your Things to be discovered.

## IOTDB

Turn a SmartThings switch off

    $ homestar configure homestar-smartthings
	$ node
	>>> iotdb = require('iotdb')
	>>> things = iotdb.connect("SmartThingsSwitch")
	>>> things.set(":on", false)

[There are many more samples available](https://github.com/dpjanes/homestar-smartthings/tree/master/samples). 
Look for the files called <code>iotdb_*.js</code>.

# Models

## SmartThingsBattery
e.g. 

    {
        "battery": 90
    }

## SmartThingsContact
e.g. 

    {
        "open": true
    }

## SmartThingsSwitch

e.g. 

    {
        "on": true
    }

## SmartThingsTemperature

In Fahrenheit

e.g. 

    {
        "temperature": 72
    }


# Models with Issues

May be affected by SmartThings API changes. If you care to investigate...

## SmartThingsMotion

<code>true</code> if there is motion.

e.g. 

    {
        "motion": true
    }

## SmartThingsThreeAxis

No particular units

e.g. 

    {
        "x": 10,
        "y": -180,
        "z": 78
    }
