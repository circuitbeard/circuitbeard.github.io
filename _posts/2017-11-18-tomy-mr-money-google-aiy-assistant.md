---
layout: post
title: Tomy Mr Money Google AIY Assistant
excerpt: Build log for my Google AIY assistant built from a Tomy Mr Money moneybank and a Raspberry Pi Zero
masthead: /media/mh_mrmoney.jpg
tags:
 - raspberrypi
 - googleaiy
 - tomy
---

{:external: rel="nofollow" target="_blank"}

If you are a regular [MagPi magazine](https://www.raspberrypi.org/magpi/) subscriber, you'll know in issue 57 they had their most popular giveaway with the [Google AIY Project Voice Kit](https://aiyprojects.withgoogle.com/voice). Unfortunately, I was one of those unlucky people not to get my hands one. After seeing all the fun everyone was having on twitter though, I decided to do what I do best and make my own. Now, if you know me at all by now, you know I like my retro tech, so for this project, rather than just creating a plain old box for it I decided to repurpose another beloved 80s toy of mine, my Mr Money moneybox. The result? Hilarous :D

<div class="video">
    <iframe width="480" height="270" src="https://www.youtube.com/embed/PXWlnc-Qcwg?feature=oembed" frameborder="0" allowfullscreen></iframe>
</div>

## The Build

### The Core
To start with, I carefully opened up my My Money moneybank and removed all the insides to leave me with the basic shell. The inside surface of the base was pretty uneven, so I started by cutting a circular piece of acrylic to place on top of this to give a nice clean surface on which I could mount all the internals components.

Given the limited internal space, my only choice was going to be a [Raspbery Pi Zero](https://shop.pimoroni.com/products/raspberry-pi-zero-w). Thankfully the new "W" versions have wifi built in, so this allowed me to leave the USB port free for a [USB microphone](https://shop.pimoroni.com/products/mini-usb-microphone).

Even using a Pi Zero, placement of the Pi was still pretty tight, so the only real option was to mount it centrally. I knew I was going to need space either side for cables and things, so this dictated that it would need to face front to back. To fix into place I used some nylon stand offs and stacked the [Speaker pHat](https://shop.pimoroni.com/products/speaker-phat) on top. On top of this, I added an extra plate to allow me to zip tie the mic to it, which I connected to the Pi via a short [micro USB to USB female cable](https://www.ebay.co.uk/itm/Male-Micro-USB-Cable-to-female-USB-2-0-OTG-Adapter-Android-Tablet-Phone-PDA-PC/182843667522?epid=1252697875&hash=item2a9254f442:g:vAwAAOSwXrdZ6eDJ). Finally, a short [right angled micro USB extention cable](http://www.ebay.co.uk/itm/USB-Micro-5P-Female-to-5P-Male-Left-Right-Down-Up-Angled-Extension-Cable-Adapter/322653983953?hash=item4b1fad14d1:m:mGl0TaHyLj1JS6NXLCk7A0g) was fed out the back to act as a USB power connector. 

### The Arm
If you are familiar with the original Mr Money, you'll know his arm was spring mounted to feed money into the moneybank. Well, this seemed a prime candidate to convert into the button to trigger the AIY into action.


- Arm trigger
- Arm stopper
- Internal switch
- Sticker 

### The Head
- Servo Mount
- Servo + Arm
- Eyes
- Status LED
- Tongue

### The Speaker
- Speaker pHat
- Speaker mounting

### The Wiring
- Specific cables
- Micro hat hacker
- Servo cap?

## The Code

### Basic Setup
- Install
- Setup wifi

### Configure sound / mic
- Install speaker pHat driver
- Renable default sound card
- Disable VU Meter
- Combin USB mic

### Configure AIY

### Configure Servo

### Change Voice Pitch

### Memory issue

````bash
#!/bin/bash
cd /home/pi/cannonball/build
./cannonball
````

