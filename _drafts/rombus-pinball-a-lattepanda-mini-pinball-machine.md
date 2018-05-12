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

Well, I've gone and done it again. I've built another arcade machine. Man, these things are rather addictive to build :)

It started with the [Rombus3000](/2015/09/12/rombus3000-a-raspberry-pi-mini-arcade-machine) followed by the [RombusCT](/2016/05/02/rombus-ct-raspberry-pi-powered-mini-cocktail-arcade/) and then most recently the [Tomy Turning Dashboard Outrun Arcade](/2017/08/28/tomy-turnin-turbo-dashboard-outrun-arcade/) (which I had actually code-named RombusGT), but this time I've taken on another classic, the pinball machine. And so I present to you, [insert drumroll here], the Rombus Pinball.

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
I generally start my projects by thinking about the hardware that I'm going to want to use as I'll need to know sizes when it comes to the design phase. My first thought was to go with a Rasberry Pi as it's what I'm familiar with and it's what I've used for my other arcades, but after looking online, there really didn't seem to be any good options for pinball emulation on Linux at all. It all seemed to be windows based. Thankfully I remembered reading about a single board Windows computer called a LattePanda so I thought why not give that a go and so this was the approach I ended up taking.

[![](/media/rombuspinball/07.jpg)](/media/rombuspinball/07.jpg)
[![](/media/rombuspinball/06.jpg)](/media/rombuspinball/06.jpg)
{:.gallery}

A good thing about the LattePanda is that it already has an inbuilt Arduino Leonardo which was perfect for handling the controls, as well as support for multiple monitors which is ultimately what made the live "back glass" possible.

For the screens themselves I used the official [LattePanda 7" display](https://thepihut.com/products/7-inch-1024x600-ips-display-for-lattepanda){:external} for the playing area, and a cheap 5" HDMI display for the back glass. Other key hardware elements include an [Adafruit 3.7W stereo amp](https://shop.pimoroni.com/products/adafruit-stereo-3-7w-class-d-audio-amplifier){:external} combined with a pair of [4ohm mini speakers from Pimoroni](https://shop.pimoroni.com/products/mini-speaker-4-3w){:external} and lastly a selection of arcade buttons from [Arcade World](https://www.arcadeworlduk.com/){:external} and your friendly online auction site.

## The Build

### Design
The design was all worked out in InkScape by hand. The core elements which dictated the size of the machine were really the 2 monitors. I started with the playing area, leaving space for a bezel as well as the aluminium edging then worked out the sides and overall base dimensions from this. A comfortable button location was worked out, and then the back layout was designed to house the speakers, power socket, auxiliary buttons and a fan which was pretty important to keep the LattePanda cool.

[![](/media/rombuspinball/78.jpg)](/media/rombuspinball/78.jpg)
[![](/media/rombuspinball/79.jpg)](/media/rombuspinball/79.jpg)
[![](/media/rombuspinball/80.jpg)](/media/rombuspinball/80.jpg)
{:.gallery}

The backglass housing was then worked out in a similar way, starting with the screen dimensions and worked out from there, leaving enough space around for the HDMI and mini USB connectors needed.

### Prototype
As this was a pretty experimental build I did a lot of prototyping as I went along, so it wasn't really a case of design it and build it, there was actually quite a bit of back and forth.

The first prototype I did was for some internal scaffolding design I came up with in order to hold the screen into position. I didn't want to have too many screws used, so I came up with some inner walls and beams to hold the screen where I needed it whilst keeping the internal space for wiring and components. It ended up working really well and is the solution I went with in the final build. Though in the final build I did tweak it slightly to incorporate some captive nuts for the side rails which I'll get on to later.

[![](/media/rombuspinball/08.jpg)](/media/rombuspinball/08.jpg)
[![](/media/rombuspinball/09.jpg)](/media/rombuspinball/09.jpg)
{:.gallery}

From hear I then experimented with the main cabinet itself trying out button hole placement and different connection methods. Again, I didn't want a load of screws everywhere so I ended up going with a notched edge system and wood glue. My prototypes were made with 3mm laser ply which I had intended to switch to MDF for the final build as I thought it would be too flimsy, but actually, after building the prototype, I found it to be quite rigid yet light so I actually ended up using it in the final build too.

[![](/media/rombuspinball/10.jpg)](/media/rombuspinball/10.jpg)
[![](/media/rombuspinball/11.jpg)](/media/rombuspinball/11.jpg)
[![](/media/rombuspinball/12.jpg)](/media/rombuspinball/12.jpg)
{:.gallery}

Whilst working on the base, I was originally going to make the back removable, but when I found I could fit all the peripheral components on it, it made sense to just fit it into place and go in through the playing field area if I needed access to anything later on. This whole area did end up being pretty tight and awkward to work in, but it was manageable so I was happy with it.

[![](/media/rombuspinball/13.jpg)](/media/rombuspinball/13.jpg)
[![](/media/rombuspinball/14.jpg)](/media/rombuspinball/14.jpg)
{:.gallery}

With the base fully mocked up, the next bit was to work out the side rails and legs. I ended up using aluminium angle for this and cut it down using my Dremel tool and then gave it a light sanding for a brushed aluminium look. Whilst this was just a prototype at this stage, I did make sure to take care with this element as I knew I wanted whatever I made now to be the final solution too. I was planning to just mount the "lockdown bar" over the top of the side rails, but when I tried it, it didn't look very nice so I ended up notching the side rails instead so that it would sit flush, which looked much neater. 

[![](/media/rombuspinball/15.jpg)](/media/rombuspinball/15.jpg)
[![](/media/rombuspinball/16.jpg)](/media/rombuspinball/16.jpg)
[![](/media/rombuspinball/17.jpg)](/media/rombuspinball/17.jpg)
{:.gallery}

In terms of mounting everything, the lockdown bar would be mounted to the actual front glass (sandwiching a bezel cutout too) which had notches cut into to locate it in the base. The side rails would then be screwed to the sides holding the front glass safely in position and hiding the locating notches. As mentioned earlier, to make this mounting easier, I designed some captive nuts into the screen scaffold so that they could be held in position when I came to closing things up at the end as there was no way I would have access to hold them in place myself.

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

The last element to prototype was the back glass. I ended up doing a few of these as on the earlier designed I left quite a lot of space around the monitor which made it totally the wrong scale, but in the end, reduced it as much as I could to be more in scale with the base. This did mean the HDMI / USB connectors for the monitor are pretty tight internally, but they worked, so I was happy.

[![](/media/rombuspinball/36.jpg)](/media/rombuspinball/36.jpg)
[![](/media/rombuspinball/29.jpg)](/media/rombuspinball/29.jpg)
[![](/media/rombuspinball/30.jpg)](/media/rombuspinball/30.jpg)
[![](/media/rombuspinball/31.jpg)](/media/rombuspinball/31.jpg)
{:.gallery}

Also on the early designs, I did plan to have the glass/bezel fix into the sides/top with notches but then changed this later on to keep the side and top clean by instead creating a lip around the front and wedging everything inside up against this lip to keep everything in position. As part of this element, I also came up with a mounting strategy for the monitor, creating a backplate for it to mount against using the supplied standoffs and having this fit snugly in the housing with the wedges pushing against this to keep it and the front glass in place. This was another thing that worked out really well in the end.

[![](/media/rombuspinball/32.jpg)](/media/rombuspinball/32.jpg)
[![](/media/rombuspinball/33.jpg)](/media/rombuspinball/33.jpg)
[![](/media/rombuspinball/34.jpg)](/media/rombuspinball/34.jpg)
[![](/media/rombuspinball/35.jpg)](/media/rombuspinball/35.jpg)
{:.gallery}

The last step for the back glass housing was a removable back, so for this, I had it notch into the top of the casing, and then used a cool fastening system I picked up from the Pimoroni gang of using a notch and O ring to keep it closed. Cheap and effective. PERFECT!

[![](/media/rombuspinball/37.jpg)](/media/rombuspinball/37.jpg)
[![](/media/rombuspinball/38.jpg)](/media/rombuspinball/38.jpg)
[![](/media/rombuspinball/39.jpg)](/media/rombuspinball/39.jpg)
{:.gallery}


### Decals
One of the first decals that I did was the coin mech button. I did a similar effect on the RombusCT so thought I'd do the same again for this project as it really works quite nicely. This was mocked up in InkScape printed on some acetate and then inserted into an illuminating push button.

[![](/media/rombuspinball/40.jpg)](/media/rombuspinball/40.jpg)
[![](/media/rombuspinball/41.jpg)](/media/rombuspinball/41.jpg)
{:.gallery}

For the main cabinet art, I spent quite a bit of time coming up with suitably retro logo and then a simple but bold striped pattern to go around the sides. I also came up with a cool fiery pinball design for the side of the back glass housing for some added pizzazz.

Once I was happy with the designs, I printed them out on paper and mounted them on the prototype to check I was happy with everything.

[![](/media/rombuspinball/42.jpg)](/media/rombuspinball/42.jpg)
[![](/media/rombuspinball/43.jpg)](/media/rombuspinball/43.jpg)
[![](/media/rombuspinball/44.jpg)](/media/rombuspinball/44.jpg)
[![](/media/rombuspinball/45.jpg)](/media/rombuspinball/45.jpg)
{:.gallery}

As part of the decals phase I also laser cut some screen bezels to go around the 2 monitors, originally in red card to test, but then from 0.8mm black plastic sheets for the final build. These were to help hide the screen edges whilst giving a nice clean outline to the displays.

[![](/media/rombuspinball/46.jpg)](/media/rombuspinball/46.jpg)
[![](/media/rombuspinball/47.jpg)](/media/rombuspinball/47.jpg)
{:.gallery}

### Build
With the prototype and decals honed in, it was time to go for the main cabinet build. I did this all in one day. First re-cutting out all the wood pieces then glueing them together with wood glue and a glue gun (the wood glue is the permanent fix, but the glue gun gives an instance temporary fix so I don't have to wait for stuff to dry). 

[![](/media/rombuspinball/48.jpg)](/media/rombuspinball/48.jpg)
[![](/media/rombuspinball/49.jpg)](/media/rombuspinball/49.jpg)
[![](/media/rombuspinball/50.jpg)](/media/rombuspinball/50.jpg)
[![](/media/rombuspinball/51.jpg)](/media/rombuspinball/51.jpg)
[![](/media/rombuspinball/52.jpg)](/media/rombuspinball/52.jpg)
{:.gallery}

At this point, I also did a bit of edge painting. The decals that I had designed in the previous phase were all made to be 1 or 2mm away from the edge. This meant I didn't have to get them perfectly aligned. In order that you couldn't see any raw wood edges, however, I gave all visible areas a black covering. For this, I just used an Oil based black marker. On my RombusCT build, I spend hours painting, but I found the marker approach to be a really nice and quick way to get a similar finish.

[![](/media/rombuspinball/53.jpg)](/media/rombuspinball/53.jpg)
[![](/media/rombuspinball/54.jpg)](/media/rombuspinball/54.jpg)
[![](/media/rombuspinball/55.jpg)](/media/rombuspinball/55.jpg)
[![](/media/rombuspinball/56.jpg)](/media/rombuspinball/56.jpg)
{:.gallery}

With the glue and paint dry I went ahead and assembled everything, printed out and stuck on the decals using sticker vinyl, cutting the black plastic bezels, attaching all the peripherals (speakers, fan, buttons, etc) and screwed on the legs.

[![](/media/rombuspinball/63.jpg)](/media/rombuspinball/63.jpg)
[![](/media/rombuspinball/64.jpg)](/media/rombuspinball/64.jpg)
[![](/media/rombuspinball/57.jpg)](/media/rombuspinball/57.jpg)
[![](/media/rombuspinball/58.jpg)](/media/rombuspinball/58.jpg)
[![](/media/rombuspinball/59.jpg)](/media/rombuspinball/59.jpg)
[![](/media/rombuspinball/65.jpg)](/media/rombuspinball/65.jpg)
[![](/media/rombuspinball/60.jpg)](/media/rombuspinball/60.jpg)
{:.gallery}

### Wiring
For the wiring, I started by mounting the LattePanda in the base. I'd taken care to plot the mount holes in the design files and had also created a load of vent holes beneath it to ensure good airflow when the fan is on, keeping the LattePanda cool, which is extremely important. Unfortunately the LattePanda doesn't have any pins for external power switches so I also had to plan holes in the based for me to be able to reach a finger in to turn it on.

[![](/media/rombuspinball/61.jpg)](/media/rombuspinball/61.jpg)
[![](/media/rombuspinball/62.jpg)](/media/rombuspinball/62.jpg)
{:.gallery}

The LattePanda itself is mounted with some standoffs and then also has on top a custom cut acrylic panel I made to hold the audio amp and a little strip of headers to act as a power distribution area. Power will come from a 5v 4A power supply, via a panel mount barrel jack in the back, and feed into this strip where all the different peripherals can then take a spur off.

[![](/media/rombuspinball/66.jpg)](/media/rombuspinball/66.jpg)
[![](/media/rombuspinball/75.jpg)](/media/rombuspinball/75.jpg)
{:.gallery}

An import thing to take note of with the power lines is to make sure you use the right wiring gauge. Originally I just used some cheap jumper jerky wires from the barrel jack and then to the LattePanda and I had some serious power issues with the device constantly browning out. It wasn't until I switched the wires for some 22AWG solid core wire (thanks Pimoroni for helping work this one out) that these issues went away. Moral of the story, don't underestimate the need for good quality wiring.

The peripheral wiring was pretty straightforward (if a little fiddly). All buttons connected to pins on the LattePanda headers as well as to ground. The fan connected directly to the power rail. The Speakers connected to the amp, and then wire connected to a headphone jack with screw terminal ends was used to feed audio into the amp. And a custom micro USB adapter was made to feed power to the back glass monitor.

[![](/media/rombuspinball/67.jpg)](/media/rombuspinball/67.jpg)
[![](/media/rombuspinball/68.jpg)](/media/rombuspinball/68.jpg)
[![](/media/rombuspinball/69.jpg)](/media/rombuspinball/69.jpg)
[![](/media/rombuspinball/70.jpg)](/media/rombuspinball/70.jpg)
{:.gallery}

Most of the buttons used were all pretty standard buttons, with one exception, the plunger. I had originally hoped to make this actually plunge, but in the end, I decided to use a decorative metal knob to represent the plunger but made it capacitive touch instead. It wouldn't spring, but it would perform the same function. For this, I used a cheap capacitive touch module I had lying around. Soldering on a little metal spacer I could put between the knob and the fastening screw. Truth be told, this can be a little buggy and a little over sensitive (you can actually fire a ball without touching it), but for the most part, it's close enough.

[![](/media/rombuspinball/71.jpg)](/media/rombuspinball/71.jpg)
[![](/media/rombuspinball/72.jpg)](/media/rombuspinball/72.jpg)
[![](/media/rombuspinball/73.jpg)](/media/rombuspinball/73.jpg)
[![](/media/rombuspinball/74.jpg)](/media/rombuspinball/74.jpg)
{:.gallery}

The last thing to connect up was the monitors. For the back glass monitor, a slim HDMI cable was fed into the base and into the LattePandas HDMI socket, and the main playing field was attached to the dedicated onboard socket. The cable from the monitor though was pretty short, so I did buy an extra ribbon cable and an adapter I found on eBay to add some extra length and make it easier to be able to remove without damaging the cable. 

[![](/media/rombuspinball/88.jpg)](/media/rombuspinball/88.jpg)
[![](/media/rombuspinball/76.jpg)](/media/rombuspinball/76.jpg)
[![](/media/rombuspinball/89.jpg)](/media/rombuspinball/89.jpg)
{:.gallery}

## The Software

### Arduino Button Controls Setup
As I mentioned before, one of the nice things about the LattePanda is that it already comes with an Arduino Leonardo on board. This worked out perfectly for handling button controls. In order to make the buttons work with the emulator though, I would need to convert these button presses into keyboard key presses. Thankfully, the Arduino Leonardo has the ability to emulate a keyboard, so this would be perfect.

To make this happen though a sketch was needed to map the buttons to the required keys. I actually cheated a little here and repurposed the [Picade sketch](https://github.com/pimoroni/Picade-Sketch){:.external} used for the Picade board (which is effectively an Arduino Leonardo under the hood) stripping out the bits I didn't need and modifying the key mappings to suit my setup.

All the scripts for this project can be found in my [Rombus Pinball GitHub repository](https://github.com/circuitbeard/rombus-pinball){:.external} which I assume is placed in a folder called `RombusPinball` on the LattePandas desktop. The key Arduino files are `RombusPinball.h` and `RombusPinball.ino` (there are some libraries needed in the repo as well, but I won't explain them here, just make sure you have them sat next to the main scripts).

The `RombusPinball.h` file simply defines some variables to make referencing our buttons and the button state a bit easier.

````c++
#include <arduino.h>
#include <Keyboard.h>

#define RP_BUTTON_COUNT         11

#define BTN_FLIPPER_LEFT        11 // Green
#define BTN_FLIPPER_RIGHT        5 // Purple
#define BTN_MAGNA_SAVE_LEFT     12 // Yellow
#define BTN_MAGNA_SAVE_RIGHT     4 // Grey
#define BTN_START               10 // Blue
#define BTN_COIN                13 // Brown
#define BTN_PLUNGER              6 // White

// Back buttons labelled as if looking
// directly at them with the back of 
// the pinball machine facing you

#define BTN_BACK_LEFT_TOP       A0 // Blue
#define BTN_BACK_LEFT_BOTTOM    A1 // Orange
#define BTN_BACK_RIGHT_TOP      A3 // Yellow
#define BTN_BACK_RIGHT_BOTTOM   A4 // Green

typedef struct
{
  uint8_t state; // what state was the input last in ( HIGH/LOW )
  unsigned long last_change;
} button_state;

````

Where the `RombusPinball.ino` file contains the main routine for handling and mapping the button presses.

````c++
/* 
 *  Borrowed heavily from Pimoronis Picade sketch at https://github.com/pimoroni/Picade-Sketch/tree/master/Picade
 */

#include "RombusPinball.h"
#include "TimerOne.h"
#include <Keyboard.h>

#define DEBOUNCE_DELAY 25

const uint8_t rp_pins[] = { BTN_FLIPPER_LEFT, BTN_FLIPPER_RIGHT, BTN_MAGNA_SAVE_LEFT, BTN_MAGNA_SAVE_RIGHT, BTN_START, BTN_COIN, BTN_PLUNGER, BTN_BACK_LEFT_TOP, BTN_BACK_LEFT_BOTTOM, BTN_BACK_RIGHT_TOP, BTN_BACK_RIGHT_BOTTOM };
const uint8_t rp_keys[] = { KEY_LEFT_ARROW,   KEY_RIGHT_ARROW,   KEY_LEFT_CTRL,       KEY_RIGHT_CTRL,       '1',       '5',      KEY_RETURN,  'u',               'd',                  'q',                KEY_ESC               };

static button_state button_states[RP_BUTTON_COUNT] = {};

void setup() {
  Serial.begin(9600);
  //while(!Serial);
  Serial.setTimeout(100);

  // Setup pins as input with pullup resistor
  for ( uint8_t i = 0; i < RP_BUTTON_COUNT; i++ ) {
    if (rp_pins[i] == BTN_PLUNGER) {
        pinMode(rp_pins[i], INPUT);
    } else {
        pinMode(rp_pins[i], INPUT_PULLUP);
    }
  }

  Timer1.initialize(5000);
  Timer1.attachInterrupt(update);
  Timer1.start(); 
}

void update(void) {
  for (int i = 0; i < RP_BUTTON_COUNT; i++)
  {
    uint8_t state;
    state = !digitalRead(rp_pins[i]);
    if (state != button_states[i].state && (millis() - button_states[i].last_change) > DEBOUNCE_DELAY) // has this input changed state since the last time we checked?
    {
      button_states[i].state = state; // update our state map so we know what's happening with this key in future
      button_states[i].last_change = millis();
      handle_key(i, state);
    }
  }
}

bool handle_key(uint8_t i, uint8_t state) {
  uint8_t pin = rp_pins[i];
  uint8_t key = rp_keys[i];
  
  if (pin == BTN_PLUNGER) {
    state = state ? LOW : HIGH;
  }
  
  if (state) {
    Keyboard.press(key);
  } else {
    Keyboard.release(key);
  }
}

void loop() {
  // Do nothing...
}
````

Hopefully, it's pretty self explanatory, but really it's just watching for button press/releases constantly and converts them into keyboard key press/releases. The only little spanner was that the cap touch sensor was active high (which you can make active low like the rest of the buttons, but I didn't realise till after) so we handle that explicitly and flip the `HIGH` and `LOW` values.

With the sketch written it can be uploaded via the onboard Arduino IDE and, and that's our controller setup and we are now ready to set up the emulator.

[![](/media/rombuspinball/81.jpg)](/media/rombuspinball/81.jpg)
[![](/media/rombuspinball/82.jpg)](/media/rombuspinball/82.jpg)
{:.gallery}

### Emulator Setup
This is the section of the blog post I've been somewhat dreading. From my Rombus3000 and RombusCT builds, the emulator setup was a pretty easy step using RetroPie, however, the pinball emulation scene is completely different, and is extremely fragmented. If you are going to tackle a pinball build yourself I'm afraid there is no way around it but getting on the [forums](http://www.vpforums.org/){:.external} and researching. From my findings there are 2 main emulators, [Visual Pinball](http://www.vpforums.org/){:.external} and [Future Pinball](https://futurepinball.com/){:.external}, however, both of these need further mods to work with back glass displays and DMD displays (the Dot Matrix Displays which show your score etc), and then you are going to want a table selector UI to make launching the tables a nicer experience too, which again seem to be two main options. [Hyperspin](http://www.hyperspin-fe.com/){:.external} or [Pinball X](http://www.pinballx.com/){:.external}.

For my build, I decided to go with Visual Pinball and Pinball X for the front end.

Now, I'm afraid I'm not going to be able to give a step by step for this part as, frankly, it was a lot of trial and error to get everything setup and in all honesty, I don't know which steps I took were necessary and resulted in the thing finally working as I needed so I'm just going to have to be pretty vague and just say do your homework if you want to build one for yourself.

Essentially what you want to get working is Visual Pinball with DirectB2S, which is the back glass driver. There should be a package on the VPForums that has both of these together, which should make the install a bit easier. You'll want to make sure you have both monitors on and setup before you run the installer though as there are steps to select the monitors to use for the playing field and backglass.

You'll also want to download some tables from the same forums, which, you've guessed it, isn't exactly a one-step process either. All I'll say though is search for "B2S" tables as these will work best with the configuration we have set up.

With at least one table installed, you should be able to test Visual Pinball and ensure the configuration is how you need it (especially the Key configuration to work without controller config) and that everything works as expected. If it doesn't, be sure to check the forums for help.

[![](/media/rombuspinball/83.jpg)](/media/rombuspinball/83.jpg)
[![](/media/rombuspinball/84.jpg)](/media/rombuspinball/84.jpg)
{:.gallery}

With Visual Pinball working, you'll then want to get Pinball X installed. Sorry to say it, but again, this isn't the most straightforward thing in the world. You'll want to get it installed and run through the config wizard to set it up as you like. With it set up, you then need to find and download media packs for the various tables you have installed in VP. With those installed, you'll then be able to select them in the front end UI and this will launch Visual Pinball for you.

[![](/media/rombuspinball/85.jpg)](/media/rombuspinball/85.jpg)
[![](/media/rombuspinball/86.jpg)](/media/rombuspinball/86.jpg)
[![](/media/rombuspinball/87.jpg)](/media/rombuspinball/87.jpg)
{:.gallery}

As I say, this is all a little vague and really oversimplifies this whole process, but I hope it at least gives you a structure in which to work from if you do want to attempt the same.

### Hacks and Tweaks
At this point I was hoping everything would play nicely, however, there were I few extra things I had to tweak. 

The first was that for some reason the LattePanda would occasionally wipe whatever sketch was on the Arduino when it booted up, so I ended up having to write a batch script to flash the firmware to the Arduino whenever the Pinball X UI was launched (hint, there is an option in the Pinball X setup that lets you configure a script to run before the app launches).

Secondly, I also had an issue where the Visual Pinball windows weren't opening in the right order, and more importantly, the main playing field wasn't being made the active window, meaning it was unresponsive until you clicked on the window with the mouse. This wasn't going to work, so I ended up having to use an app called [AutoHotKey](https://autohotkey.com/){:.external} to maintain the playing field as the active window. I also have a similar problem with the DMD window appearing behind the back glass which I have tried to fix with the same approach, however, I'm yet to get this to work so it is still a bit of a problem. To activate this script on startup, a shortcut to the script was created in the `C:\Users\LattePanda\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup` folder.

Both of these scripts can be found in my [Rombus Pinball GitHub repository](https://github.com/circuitbeard/rombus-pinball/){:.external}.

## Conclusion
I entered into this project thinking it would be another nice emulator project, similar to what I had done before, but it was actually a lot harder working with the pinball emulators than I had expected. This ultimately forced me to make some compromises but in the end, I still think what I produced was something rather cool and special. I don't think it can really compete with a true dedicated PC based pinball emulator with 4K displays like the pros are making, but for a casual gamer like myself, it's a fun little thing that doesn't require a lot of space, so it suites my needs perfectly.

[![](/media/rombuspinball/01.jpg)](/media/rombuspinball/01.jpg)
[![](/media/rombuspinball/03.jpg)](/media/rombuspinball/03.jpg)
[![](/media/rombuspinball/05.jpg)](/media/rombuspinball/05.jpg)
[![](/media/rombuspinball/02.jpg)](/media/rombuspinball/02.jpg)
[![](/media/rombuspinball/04.jpg)](/media/rombuspinball/04.jpg)
{:.gallery .margin-bottom-none}

<div class="video">
    <iframe width="480" height="270" src="https://www.youtube.com/embed/IaK3vMy60gk?feature=oembed" frameborder="0" allowfullscreen></iframe>
</div>