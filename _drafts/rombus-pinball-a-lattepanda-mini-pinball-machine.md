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

It started with the [Rombus3000](/2015/09/12/rombus3000-a-raspberry-pi-mini-arcade-machine) followed by the [RombusCT](/2016/05/02/rombus-ct-raspberry-pi-powered-mini-cocktail-arcade/) and then most recently the [Tomy Turning Dashboard Outrun Arcade](/2017/08/28/tomy-turnin-turbo-dashboard-outrun-arcade/) (which I had actually code named RombusGT), but this time I've taken on another classic, the pinball machine. And so I present to you, [insert drumbroll here], the Rombus Pinball.

[![](/media/rombuspinball/.jpg)](/media/rombuspinball/.jpg)
[![](/media/rombuspinball/.jpg)](/media/rombuspinball/.jpg)
{:.gallery .margin-bottom-none}

<div class="video">
    <iframe width="480" height="270" src="https://www.youtube.com/embed/IaK3vMy60gk?feature=oembed" frameborder="0" allowfullscreen></iframe>
</div>

## The Hardware
I gernally start my projects by thinking about the hardware that I'm going to want to use as I'll need to know sizes when it comes to the design phase. My first thought was to go with a Rasberry Pi as it's what I'm familar with and it's what I've used for my other arcades, but after looking online, there really didn't seem to be any good options for pinball emulation on Linux at all. It all seemed to be windows based. Thankfully I remembered reading about a single board Windows computer called a LattePanda so I thought why not give that a go and so this was the route I ended up going.

A good thing about the LattePanda is that it already has an inbuilt Arduino Leonardo which was perfect for handling the controls, as well as support for multiple monitors which is ultimately what made the live "back glass" possible.

For the screens themselves I used the official 7" display for the playing area, and a cheap 5" HDMI for the back glass. Other key hardware elements include an [Adafruit 3.7W stereo amp](https://shop.pimoroni.com/products/adafruit-stereo-3-7w-class-d-audio-amplifier){:external} combined with a pair of [4ohm mini speakers from Pimoroni](https://shop.pimoroni.com/products/mini-speaker-4-3w){:external} and lastly a selection of arcade buttons from [Arcade World](https://www.arcadeworlduk.com/){:external} and your friendly online auction site.

## The Cabinet
With the core hardware list set, it was then time to make a start on the cabinet itself.

### Design
The design was all worked out in InkScape by hand. The core elements which dictated the machines size were really the 2 monitors. I started with the playing area, leaving space for a bezel as well as the aluminium edging then worked out the sides and overal base dimensions from this. A confortable button location was worked out, and then the back layout was designed to house the speakers, power socket, auxilary buttons and a fan which was pretty important to keep the LattePanda cool.

The backglass housing was then worked out in a similar way, starting with the screen dimensions and worked out from there, leaving enough space around for the HDMI and mini USB connectors needed.

### Prototype
As this was a pretty experimental build I did a lot of prototyping as I went along, so it wasn't really a case of design it and build it, there was actually quite a bit of back and forth.

The first prototype I did was for some internal scaffolding design I came up with in order to hold the screen into position. I didn't want to hav too many screws used, so I same up with some inner walls and beams to hold the screen where I needed it whilst keeping the internal space for wiring and components. It ended up working really well and is the solution I went with in the final build. Though in the final build I did tweak it slightly to incorporate some captive nuts for the side rails which I'll get on to later.

From hear I then experimented with the main cabinet itself trying out button hole placement and different connection methods. Again, I didn't want a load of screws everywhere so I ended up going with a notched edge system and wood glue. My prototypes were made with 3mm lazer ply which I had intended to switch to MDF for the final build as I thought it would be to flimsy, but actually after building the prototype, I found it to be quite rigidge yet light so I actually ended up using it in the final build too.

Whilst working on the base, I was originally going to make the back removable, but when I found I could fit all the peripheral components on it, it made sense to just fit it in to place and go in through the playing field area if I needed access to anything later on. This whole area did end up being pretty tight and awkward to work in, but it was manageable so I was happy with it.

With the base fully mocked up, the next bit was to work out the side rails and legs. I ended up using aluminium angle for this and cut it down using my dremel tool and then gave it a light sanding for a brushed aliminium look. Whilst this was just a prototype at this stage, I did make sure to take care with this element as I knew I wanted whatever I made now to be the final solution too. I was planning to just mount the "lockdown bar" over the top of the side rails, but when I tried it, it didn't look very nice so I ended up notching the side railes instead so that it would sit flush, which looked much neater. In terms of mounting everything, the lockdown bar would be mounted to the actual front glass (sandwiching a bezel cutout too) which had notches cut into to locate it in the based. The side rails would then be screwed to the sides holding the front glass safely in position and hiding the locating notches. As mentioned earlier, to make this mounting easier, I designed some captive nuts into the screen scaffold so that they could be heald in position when I came to closing things up at the end as there was no way I would have access to hold them in place myself.

For the legs, these were cut to size and then a small jig was used to work out hole placements with the holes themselves being drilled on my drill press.

It was also at this point that I quickly designed up and 3D printed some little feet for the legs to so that they wouldn't scratch any surfaces it gets played on. They may have been a small element, but I was actually really pleased with how these looked in the end. It's the little details.

The last element to prototype was the back glass. I ended up doing a few of these as on the earlier designed I left quite a lot of space around the monitor which made it totally the wrong scale, but in the end reduced it as much as I could to be more in scale with the base. This did mean the HDMI / USB connectors for the monitor are pretty tight internally, but they worked, so I was happy.

Also on the early designs I did plan to have the glass / bezel fix into the sides / top with notches, but then changed this later on to keep the side and top clean by instead creating a lip around the front and wedging everything inside up against this lip to keep everything in position. As part of this element, I also came up with a mounting strategy for the monitor, creating a back plate for it to mount against using the supplied standoffs and having this fit snugley in the housing with the wedges pushing against this to keep it and the front glass in place. This was another thing that worked out really well in the end.

The last step for the back glass housing was a removable back, so for this I had it notch into the top of the casing, and then used a cool fastening system I picked up from the Pimoroni gang of using a notch and O ring to keep it closed. Cheap and effective. PERFECT!

### Decals


### Build

### Wiring


## The Software

### Arduino Button Controls Setup
With all the hardware side complete, it was time to move on to the code side of things.

### Emulator Setup

### Hacks and Tweaks

## Conclusion


<div class="video">
    <iframe width="480" height="270" src="https://www.youtube.com/embed/PXWlnc-Qcwg?feature=oembed" frameborder="0" allowfullscreen></iframe>
</div>
