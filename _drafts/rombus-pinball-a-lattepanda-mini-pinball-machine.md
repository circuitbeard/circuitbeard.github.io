---
layout: post
title: Rombus Pinball - A LattePanda Mini Pinball Machine
excerpt: Build log for my Rombus Pinball, a custom built mini pinball machine with a LattePanda core
masthead: /media/mh_rombuspinball.jpg
tags:
 - lattepanda
 - pinball
 - rombus
---

{:external: rel="nofollow" target="_blank"}

Well, I've gone and done it again. I've built another arcade machine. Man these things are rather adictive to build :)

It started with the [Rombus3000](/2015/09/12/rombus3000-a-raspberry-pi-mini-arcade-machine) followed by the [RombusCT](/2016/05/02/rombus-ct-raspberry-pi-powered-mini-cocktail-arcade/) and then most recently the [Tomy Turning Dashboard Outrun Arcade](/2017/08/28/tomy-turnin-turbo-dashboard-outrun-arcade/) (which I had actually code named RombusGT), but this time I've taken on another classic, the pinball machine. 

And so I present to you, [insert drumbroll here], the Rombus Pinball.

[![](/media/rombuspinball/01.jpg)](/media/rombuspinball/01.jpg)
[![](/media/rombuspinball/03.jpg)](/media/rombuspinball/03.jpg)
[![](/media/rombuspinball/05.jpg)](/media/rombuspinball/05.jpg)
[![](/media/rombuspinball/02.jpg)](/media/rombuspinball/02.jpg)
[![](/media/rombuspinball/04.jpg)](/media/rombuspinball/04.jpg)
{:.gallery .margin-bottom-none}

<div class="video">
    <iframe width="480" height="270" src="https://www.youtube.com/embed/IaK3vMy60gk?feature=oembed" frameborder="0" allowfullscreen></iframe>
</div>

## The Hardware
I generally start my projects by thinking about the hardware that I'm going to want to use as I'll need to know sizes when it comes to the design phase. My first thought was to go with a Rasberry Pi as it's what I'm familar with and it's what I've used for my other arcades, but after looking online, there really didn't seem to be any good options for pinball emulation on Linux at all. It all seemed to be windows based. Thankfully I remembered reading about a single board Windows computer called a LattePanda so I thought why not give that a go and so this was the approach I ended up taking.

[![](/media/rombuspinball/07.jpg)](/media/rombuspinball/07.jpg)
[![](/media/rombuspinball/06.jpg)](/media/rombuspinball/06.jpg)
{:.gallery}

A good thing about the LattePanda is that it already has an inbuilt Arduino Leonardo which was perfect for handling the controls, as well as support for multiple monitors which is ultimately what made the live "back glass" possible.

For the screens themselves I used the official [LattePanda 7" display](https://thepihut.com/products/7-inch-1024x600-ips-display-for-lattepanda){:external} for the playing area, and a cheap 5" HDMI display for the back glass. Other key hardware elements include an [Adafruit 3.7W stereo amp](https://shop.pimoroni.com/products/adafruit-stereo-3-7w-class-d-audio-amplifier){:external} combined with a pair of [4ohm mini speakers from Pimoroni](https://shop.pimoroni.com/products/mini-speaker-4-3w){:external} and lastly a selection of arcade buttons from [Arcade World](https://www.arcadeworlduk.com/){:external} and your friendly online auction site.

[TODO: Hardware pictures?]

## The Build

### Design
The design was all worked out in InkScape by hand. The core elements which dictated the machines size were really the 2 monitors. I started with the playing area, leaving space for a bezel as well as the aluminium edging then worked out the sides and overal base dimensions from this. A confortable button location was worked out, and then the back layout was designed to house the speakers, power socket, auxilary buttons and a fan which was pretty important to keep the LattePanda cool.

[TODO: Inkscape screenshots]

The backglass housing was then worked out in a similar way, starting with the screen dimensions and worked out from there, leaving enough space around for the HDMI and mini USB connectors needed.

### Prototype
As this was a pretty experimental build I did a lot of prototyping as I went along, so it wasn't really a case of design it and build it, there was actually quite a bit of back and forth.

The first prototype I did was for some internal scaffolding design I came up with in order to hold the screen into position. I didn't want to hav too many screws used, so I same up with some inner walls and beams to hold the screen where I needed it whilst keeping the internal space for wiring and components. It ended up working really well and is the solution I went with in the final build. Though in the final build I did tweak it slightly to incorporate some captive nuts for the side rails which I'll get on to later.

[![](/media/rombuspinball/08.jpg)](/media/rombuspinball/08.jpg)
[![](/media/rombuspinball/09.jpg)](/media/rombuspinball/09.jpg)
{:.gallery}

From hear I then experimented with the main cabinet itself trying out button hole placement and different connection methods. Again, I didn't want a load of screws everywhere so I ended up going with a notched edge system and wood glue. My prototypes were made with 3mm lazer ply which I had intended to switch to MDF for the final build as I thought it would be to flimsy, but actually after building the prototype, I found it to be quite rigidge yet light so I actually ended up using it in the final build too.

[![](/media/rombuspinball/10.jpg)](/media/rombuspinball/10.jpg)
[![](/media/rombuspinball/11.jpg)](/media/rombuspinball/11.jpg)
[![](/media/rombuspinball/12.jpg)](/media/rombuspinball/12.jpg)
{:.gallery}

Whilst working on the base, I was originally going to make the back removable, but when I found I could fit all the peripheral components on it, it made sense to just fit it in to place and go in through the playing field area if I needed access to anything later on. This whole area did end up being pretty tight and awkward to work in, but it was manageable so I was happy with it.

[![](/media/rombuspinball/13.jpg)](/media/rombuspinball/13.jpg)
[![](/media/rombuspinball/14.jpg)](/media/rombuspinball/14.jpg)
{:.gallery}

With the base fully mocked up, the next bit was to work out the side rails and legs. I ended up using aluminium angle for this and cut it down using my dremel tool and then gave it a light sanding for a brushed aliminium look. Whilst this was just a prototype at this stage, I did make sure to take care with this element as I knew I wanted whatever I made now to be the final solution too. I was planning to just mount the "lockdown bar" over the top of the side rails, but when I tried it, it didn't look very nice so I ended up notching the side railes instead so that it would sit flush, which looked much neater. 

[![](/media/rombuspinball/15.jpg)](/media/rombuspinball/15.jpg)
[![](/media/rombuspinball/16.jpg)](/media/rombuspinball/16.jpg)
[![](/media/rombuspinball/17.jpg)](/media/rombuspinball/17.jpg)
{:.gallery}

In terms of mounting everything, the lockdown bar would be mounted to the actual front glass (sandwiching a bezel cutout too) which had notches cut into to locate it in the based. The side rails would then be screwed to the sides holding the front glass safely in position and hiding the locating notches. As mentioned earlier, to make this mounting easier, I designed some captive nuts into the screen scaffold so that they could be heald in position when I came to closing things up at the end as there was no way I would have access to hold them in place myself.

[![](/media/rombuspinball/18.jpg)](/media/rombuspinball/18.jpg)
[![](/media/rombuspinball/21.jpg)](/media/rombuspinball/21.jpg)
[![](/media/rombuspinball/19.jpg)](/media/rombuspinball/19.jpg)
[![](/media/rombuspinball/20.jpg)](/media/rombuspinball/20.jpg)
{:.gallery}

For the legs, these were cut to size and then a small jig was used to work out hole placements with the holes themselves being drilled on my drill press.

[![](/media/rombuspinball/22.jpg)](/media/rombuspinball/22.jpg)
[![](/media/rombuspinball/23.jpg)](/media/rombuspinball/23.jpg)
[![](/media/rombuspinball/24.jpg)](/media/rombuspinball/24.jpg)
{:.gallery}

It was also at this point that I quickly designed up and 3D printed some little feet for the legs to so that they wouldn't scratch any surfaces it gets played on. They may have been a small element, but I was actually really pleased with how these looked in the end. It's the little details.

[![](/media/rombuspinball/25.jpg)](/media/rombuspinball/25.jpg)
[![](/media/rombuspinball/26.jpg)](/media/rombuspinball/26.jpg)
[![](/media/rombuspinball/27.jpg)](/media/rombuspinball/27.jpg)
[![](/media/rombuspinball/28.jpg)](/media/rombuspinball/28.jpg)
{:.gallery}

The last element to prototype was the back glass. I ended up doing a few of these as on the earlier designed I left quite a lot of space around the monitor which made it totally the wrong scale, but in the end reduced it as much as I could to be more in scale with the base. This did mean the HDMI / USB connectors for the monitor are pretty tight internally, but they worked, so I was happy.

[![](/media/rombuspinball/36.jpg)](/media/rombuspinball/36.jpg)
[![](/media/rombuspinball/29.jpg)](/media/rombuspinball/29.jpg)
[![](/media/rombuspinball/30.jpg)](/media/rombuspinball/30.jpg)
[![](/media/rombuspinball/31.jpg)](/media/rombuspinball/31.jpg)
{:.gallery}

Also on the early designs I did plan to have the glass / bezel fix into the sides / top with notches, but then changed this later on to keep the side and top clean by instead creating a lip around the front and wedging everything inside up against this lip to keep everything in position. As part of this element, I also came up with a mounting strategy for the monitor, creating a back plate for it to mount against using the supplied standoffs and having this fit snugley in the housing with the wedges pushing against this to keep it and the front glass in place. This was another thing that worked out really well in the end.

[![](/media/rombuspinball/32.jpg)](/media/rombuspinball/32.jpg)
[![](/media/rombuspinball/33.jpg)](/media/rombuspinball/33.jpg)
[![](/media/rombuspinball/34.jpg)](/media/rombuspinball/34.jpg)
[![](/media/rombuspinball/35.jpg)](/media/rombuspinball/35.jpg)
{:.gallery}

The last step for the back glass housing was a removable back, so for this I had it notch into the top of the casing, and then used a cool fastening system I picked up from the Pimoroni gang of using a notch and O ring to keep it closed. Cheap and effective. PERFECT!

[![](/media/rombuspinball/37.jpg)](/media/rombuspinball/37.jpg)
[![](/media/rombuspinball/38.jpg)](/media/rombuspinball/38.jpg)
[![](/media/rombuspinball/39.jpg)](/media/rombuspinball/39.jpg)
{:.gallery}


### Decals
One of the first decals that I did was the coin mech button. I did a similar effect on the RombusCT so thought I'd do the same again for this project as it really works quite nicely. This was mocked up in InkScape printed on some acetate and then inserted into an eluminating push button.

[![](/media/rombuspinball/40.jpg)](/media/rombuspinball/40.jpg)
[![](/media/rombuspinball/41.jpg)](/media/rombuspinball/41.jpg)
{:.gallery}

For the main cabinet art, I spent quite a bit of time coming up with suitably retro logo and then a simple but bold striped pattern to go around the sides. I also came up with a cool firy pinball design for the side of the back glass housing for some added pizzazz.

Once I was happy with the designs, I printed them out on paper and mounted them on the prototype to check I was happy with everything.

[![](/media/rombuspinball/42.jpg)](/media/rombuspinball/42.jpg)
[![](/media/rombuspinball/43.jpg)](/media/rombuspinball/43.jpg)
[![](/media/rombuspinball/44.jpg)](/media/rombuspinball/44.jpg)
[![](/media/rombuspinball/45.jpg)](/media/rombuspinball/45.jpg)
{:.gallery}

As part of the decals phase I also laser cut some screen bezels to go around the 2 monitors, originaly in red card to test, but then from 0.8mm black plastic sheets for the final build. These were to help hide the screen edges whilst giving a nice clean outline to the displays.

[![](/media/rombuspinball/46.jpg)](/media/rombuspinball/46.jpg)
[![](/media/rombuspinball/47.jpg)](/media/rombuspinball/47.jpg)
{:.gallery}

### Build
With the prototype and decals honed in, it was time to go for the main cabinet build. I did this all in one day. First re-cutting out all the wood pieces then gluing them together with wood glue and a glue gun (the wood glue is the perminant fix, but the glue gun gives an instance temporary fix so I don't have to wait for stuff to dry). 

At this point I also did a bit of edge painting. The decals that I had designed in the previous phase were all made to be 1 or 2mm away from the edge. This meant I didn't have to get them perfectly aligned. In orde that you couldn't see any raw wood edges however, I gave all visible areas a black covering. For this I just used an Oil based black marker. On my RombusCT build I spend hours painting, but I found the marker approach to be a really nice and quick way to get a similar finish.

With the glue and paint dry I went ahead and assembled everything and attached the legs too.

### Wiring
For the wiring, I started by mounting the LattePanda in the base. I'd taken care to plot the mount holes in the design files and had also created a load of vent holes beneath it to ensure good air flow when the fan is on, keeping the LattePanda cool, which is extremly important. Unfortnately the LattePanda doesn't have any pins for external power switches so I also had to plan holes in the based for me to be able to reach a finger in to turn it on.

The LattePanda itself is mounted with some standoffs and then also has on top a custom cut acrylic panel I made to hold the audio amp and a little strip of headers to act as a power distribution area. Power will come from a 5v 4A power supply, via a panel mount barel jack in the back, and feed into this strip where all the different peripherals can then take a spur off.

An import thing to take note of with the power lines is to make sure you use the right wiring guage. Originally I just used some cheap jumpper jerky wires from the barel jack and then to the LattePanda and I had some serious power issues with the device constantly browning out. It wasn't untill I switched the wires for some 22AWG solid core wire (thanks Pimoroni for helping work this one out) that these issues went away. Moral of the story, don't underestimate the need for good quality wiring.

Most of the peripheral wiring was pretty straight forward (if a little fiddly). All buttons connected to pins on the LattePanda headers as well as to ground. The fan connected directly to the power rail. The Speakers connected to the amp, and then wire connected to a headphone jack with screw terminal ends was used to feed audio into the amp. And a custom micro usb adapater was made to feed power to the back glass monitor.

Most of the buttons used were all pretty standard buttons, with one exception, the plunger. I had originally hoped to make this actually plunge, but in the end I decided to use a decorative metal knob to represent the plunger, but made it capacative touch instead. It wouldn't spring, but it would perform the same function. For this I used a cheap capacative touch module I had lying around. Soldering on a little metal spacer I could put between the knob and the fastening screw. Truth be told, this can be a little buggy and a little over sensative (you can actually fire a ball without touching it), but for the most part it's close enough.

The last thing to connect up was the monitors. For the back glass monitor, a slim HDMI cable was fed into the base and into the LattePandas HDMI socket, and the main playing field was attached to the dedicated onboard sockect. The cable from the monitor though was pretty short, so I did buy an extra ribbon cable and an adapter I found on ebay to add some extra length and make it easier to be able to remove without damaging the cable. 

## The Software

### Arduino Button Controls Setup
As I mentioned before, one of the nice things about the LattePanda is that it already comes with an Arduino Leonardo on board. This worked out perfectly for handling button controls. In order to make the buttons work with the emulator though, I would need to convert these button presses into keyboard key pressess. Thanfully, the Arduino Leonardo has the ability to emulate a keyboard, so this would be perfect.

To make this happen though a sketch was needed to map the buttons to the required keys. I actually cheated a little here and repurposed the Picade sketch used for the Picade board (which is effectively an Arduino Leonardo under the hood) stripping out the bits I didn't need and modifying the key mappings to suite my setup.

With the sketch written and uploaded via the onboard Arduino IDE I now had my button presses coming through as key presses and was ready to set up the emulator.

### Emulator Setup
Now, this is the section of the blog post I've been somewhat dreading. From my Rombus3000 and RombusCT builds, the emulator setup was a pretty easy step using RetroPie, however the pinball emulation scene is completely different, and is extremly fragmented. If you are going to tackle a pinball build yourself I'm affraid there is no way around it but getting on the forums and researching. From my findings there are 2 main emulators, Visual Pinball and Future Pinball, however both of these need further mods to work with back glass displays and DMD displays (the Dot Matrix Displays which show your score etc), and then you are going to want a table selector UI to make launching the tables a nicer experience too, which again seem to be two main options. Hyperspin or Pinball X.

For my build I decided to go with Visual Pinball and Pinball X for the front end.

Now, I'm affraid I'm not going to be able to give a step by step for this part as, frankly, it was a lot of trial and error to get everything setup and in all honesty, I don't know which steps I took were necesary and resulted in the thing finally working as I needed so I'm just going to have to be pretty vauge and just say do your homework if you want to build one for yourself.

Essentially what you want to get working is Visual Pinball with DirectB2S, which is the back glass driver. There should be a package on the VPForums that has both of these together, which should make the install a bit easier. You'll want to make sure you have both monitors on and setup before you run the installer though as there are steps to select the monitors to use for the playing field and backglass.

You'll also want to download some tables from the same forums. Again, this is exactly a one step process. All I'll say though is search for "B2S" tables as these will work best with the configuration we have setup.

With at least one table installed, you should be able to test Visual Pinball and ensure the configuration is how you need it (especially the Key confirguration to work with out controller config) and that everything works as expected. If it doesn't, be sure to check the forums for help.

With Visual Pinball working, you'll then want to get Pinball X installed. Sorry to say it, but again, this isn't the most straight forward thing in the world. You'll want to get it installed, and run through the config wizard to set it up as you like. With it setup, you then need to find and download media packs for the various tables you have installed in VP. With those installed, you'll then be able to select them in the front end UI and this will launch Visual Pinball for you.

As I say, this is all a little vague and really over simplifies this whole process, but I hope it at least gives you a structure in which to work from if you do want to attempt the same.

### Hacks and Tweaks
At this point I was hoping everthing would play nicely, however there were I few extra things I had to tweak. 

The first was that for some reason the LattePanda would occassionally wipe whatever sketch was on the Arduino when it booted up, so I ended up having to write a batch script to flash the firmware to the Arduino whenever the Pinball X UI was launched (hint, there is an option in the Pinball X setup tha lets you configure a script to run before the app launches).

Secondly, I also had an issue where the Visual Pinball windows weren't opening in the right order, and more importantly the main playing field wasn't being made the active window, meaning it was unresponsive untill you clicked on the window with the mouse. This wasn't going to work, so I ended up having to use an app called AutoHotKeys to maintain the playing field as the active window. I also have a simililar problem with the DMD window appearing behind the back glass which I have tried to fix with the same approach, however I'm yet to get this to work so it is till a bit of a problem.

## Conclusion
I entered in to this project thinking it would be another nice emulator project, similair to what I had done before, but it was actually a lot harder working with the pinball emulators than I had expected. This ultimately forced me to make some compromises but in the end I still think what I produced was something rather cool and special. I don't think it can really compete with a true dedicated PC based pinball emulator with 4K displays like the pros are making, but for a casual gamer like myself, it's a fun little thing that doesn't require a lot of space, so it suites my needs perfectly.

[![](/media/rombuspinball/01.jpg)](/media/rombuspinball/01.jpg)
[![](/media/rombuspinball/03.jpg)](/media/rombuspinball/03.jpg)
[![](/media/rombuspinball/05.jpg)](/media/rombuspinball/05.jpg)
[![](/media/rombuspinball/02.jpg)](/media/rombuspinball/02.jpg)
[![](/media/rombuspinball/04.jpg)](/media/rombuspinball/04.jpg)
{:.gallery .margin-bottom-none}

<div class="video">
    <iframe width="480" height="270" src="https://www.youtube.com/embed/IaK3vMy60gk?feature=oembed" frameborder="0" allowfullscreen></iframe>
</div>
