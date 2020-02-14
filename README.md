# Accessible Tiles

Gone are the days where we should be using div elements with custom click handlers to make a selectable tile component.  That method complicates things by requiring more javascript than necessary to pass state information.  Not to mention it is not inherently accessible.  

Instead, here is an example of a tile that utilizes native HTML inputs and a little CSS.  There are a few ways to approach this, but mine uses the default behavior of an input's label to control the selection.

This can obviously be styled however you like to look prettier, but the point I am getting accross is how to make something that is compliant with WCAG 2.1 AA criteria while also saving a little bit of hastle on the scripting.

[Live Demo](https://selectable-tile.stackblitz.io)

## How It Works

These tiles are essentially just a visual mask over top of an input type="checkbox" for multi-select lists, or input type="radio" for single-select lists.  Because the input is tied to its label using for/id attributes (which should always be the case for Assistive Technologies to be able to read the name of the object) the browser will toggle the state of the input whever the label is selected.  This works for both mouse users and keyboard users with no additional scripting needed.  So if we use some CSS to style the label to look like a tile (like we would have the div in the old days) the browser will naturally handle the state change when you interract with it.