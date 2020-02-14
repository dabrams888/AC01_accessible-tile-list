# Accessible Tiles

Gone are the days where we should be using <code>div</code> elements with custom click handlers to make a selectable tile component.  That method complicates things by requiring more javascript than necessary to pass state information.  Not to mention it is not inherently accessible.  

Instead, here is an example of a tile that utilizes native HTML inputs and a little CSS.  There are a few ways to approach this, but mine uses the default behavior of an input's <code>label</code> to control the selection.

This can obviously be styled however you like to look prettier, but the point I am getting accross is how to make something that is compliant with WCAG 2.1 AA criteria while also saving a little bit of hastle on the scripting.

[Live Demo](https://selectable-tile.stackblitz.io)

## How It Works

These tiles are essentially just a visual mask over top of an <code>input type="checkbox"</code> for multi-select lists, or <code>input type="radio"</code> for single-select lists.  Because the <code>input</code> is tied to its <code>label</code> using for/id attributes (which should always be the case for Assistive Technologies to be able to read the name of the object) the browser will toggle the state of the <code>input</code> whever the <code>label</code> is selected.  This works for both mouse users and keyboard users with no additional scripting needed.  So if we use some CSS to style the <code>label</code> to look like a tile (like we would have the div in the old days) the browser will naturally handle the state change when you interract with it.

## Angular Components

This example is broken down into two Angular components, TileComponent and TileListComponent.  In order to use the tiles in your application you will need to import them into your application module... 

<pre><code>
import { TileComponent } from './tile/tile.component';
import { TileListComponent } from './tile-list/tile-list.component';
</code></pre>

and add these components to your declarations...

<pre><code>
declarations: [ AppComponent, TileComponent, TileListComponent]
</code></pre>

In the demo you'll notice one additional import <code>RemovewhitespacesPipe</code>.  This is something I used to help construct the input id's based off of the component's properties.  You could use a UUID to generate the id's instead.

From here, just place the <code>tile</code> element in your template and pass in the details to the component properties.

<pre><code>
&lt;tile-list type="checkbox" legend="Checkbox List" [labels]="['checkbox 1', 'checkbox 2', 'checkbox 3 with a longer label']"&gt;&lt;/tile-list&gt;
</code></pre>

### Parameters

| Name    | Value                 | Description                         | 
| ------- | --------------------- | -----------                         |
| type    | "checkbox" or "radio" |                                     |
| legend  | Any string            |                                     |
| labels  | Array of strings      |                                     |