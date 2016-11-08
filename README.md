# toggle.js

Display and hide elements without custom JS code

## Usage

Toggle has a very simple API. All configuration is made by defining HTML attributes on the
toggle elements and the target elements.

### data-target (required)

Use this attribute on the toggle switch. It defines the selector which will be used to
find the target elements if the switch is clicked on. You can use any CSS selector supported
by the `querySelector` API.

Example: data-target="#profile-picture"

### data-on (required)

Use this attribute on the toggle switch. It defined what value of the `display`-Property is
considered as visible. This is typically `block` or `inline`, depending on your needs.

### data-off (required)

Use this attribute on the toggle switch. It defined what value of the `display`-Property is
considered as hidden. This is typically `none`, depending on your needs.

### data-accordeon (optional)

Use this attribute on the toggle switch. If you want to show one element and hide all other
elements of a group, you can define the group name you wish to target here. This works similar
to a radiobutton group.

### data-accordeon-group (optional)

Use this attribute on the target elements. If you want to show one element and hide all other
elements of a group, you can define the group name an element belongs to here. This works similar
to a radiobutton group.

## Examples

### Simple show/hide

```html
<div class="toggle" data-target=".details-view" data-on="block" data-off="none">show/hide details</div>

<div class="details-view">
    <p>Exact location: Berne, Switzerland</p>
</div>
```

[JSFiddle](https://jsfiddle.net/d2ecm68L/)

### Accordeon group

```html
<div class="toggle" data-target=".details-name"
    data-on="block" data-off="none" data-accordeon="attributes">show/hide name</div>

<div class="details-name" data-accordeon-group="attributes">
    <p>Name: Toggle.js conference</p>
</div>

<div class="toggle" data-target=".details-location"
    data-on="block" data-off="none" data-accordeon="attributes">show/hide location</div>

<div class="details-location" data-accordeon-group="attributes">
    <p>Exact location: Berne, Switzerland</p>
</div>
```

[JSFiddle](https://jsfiddle.net/9781vL5a/)
