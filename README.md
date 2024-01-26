# ScrollSpy Web Component

`scroll-spy` is a custom web component that highlights navigation links when the corresponding section is in view.

[See demo](https://tflx.github.io/scroll-spy/)

## Usage

First, import the `scroll-spy` component in your JavaScript or TypeScript file:

```javascript
import 'scroll-spy';
```

Then, you can use the `scroll-spy` component in your HTML:

```html
<scroll-spy>
  <nav>
    <ul>
      <li><a href="#headline1">Lorem Ipsum</a></li>
      <li><a href="#headline2">Sed Diam</a></li>
      <li><a href="#headline3">Cras Tristique</a></li>
      <li><a href="#headline4">Aliquam In</a></li>
      <li><a href="#headline5">Phasellus Elit</a></li>
    </ul>
  </nav>
</scroll-spy>

<article>
  <h2 id="headline1">Lorem Ipsum</h2>
  <p>…</p>

  <h2 id="headline2">Sed Diam</h2>
  <p>…</p>

  <h2 id="headline3">Cras Tristique</h2>
  <p>…</p>

  <h2 id="headline4">Aliquam In</h2>
  <p>…</p>

  <h2 id="headline5">Phasellus Elit</h2>
  <p>…</p>
</article>
```

## Attributes

| Attribute             | Description                                                                                   | Default Value   |
|-----------------------|-----------------------------------------------------------------------------------------------|-----------------|
| `scrollTarget`        | The query selector that targets the article element containing the sections to be observed. Must be unique. | 'article'       |
| `anchorElements`        | The query selector that targets the navigation links.                                         | 'a'             |
| `activeClass`         | The class that will be added to the active navigation link.                                   | 'active'        |
| `sectionAttribute`    | The attribute used to find the sections that will be observed.                                | 'id'            |
| `viewportTriggerPoint`| The point at which the navigation links should be active, specified as a gsap ScrollTrigger value. (Read below) | 'top top'  |


## Viewport trigger point
https://gsap.com/docs/v3/Plugins/ScrollTrigger/

_From the documentation:_
Describes a place on the trigger and a place on the scroller that must meet in order to start the ScrollTrigger. So, for example, "top center" means "when the top of the trigger hits the center of the scroller" (and the scroller is the viewport by default). "bottom 80%" means "when the bottom of the trigger hits 80% down from the top of the viewport" (assuming vertical scroll). You can use keywords like "top", "bottom", "center" (or "left" and "right" if horizontal: true) or percentages like "80%" or pixel values like "100px". Percentages and pixels are always relative to the top/left of the element/scroller. You can even use a complex relative value like "top bottom-=100px" which means "when the top of the trigger hits 100px above the bottom of the viewport/scroller"


## Example

```html

<scroll-spy
  viewporttriggerpoint="top 100px"
  scrolltarget=".myArticle"
  activeclass="myActiveClass"
  sectionattribute="data-section"
>
  <nav>
    <ul>
      <li><a href="#headline1" class="myActiveClass">Lorem Ipsum</a></li>
      <li><a href="#headline2">Sed Diam</a></li>
      <li><a href="#headline3">Cras Tristique</a></li>
      <li><a href="#headline4">Aliquam In</a></li>
      <li><a href="#headline5">Phasellus Elit</a></li>
    </ul>
  </nav>
</scroll-spy>
  

<article class="myArticle">
  <h2 data-section="headline1" id="headline1">Lorem Ipsum</h2>
  <p>…</p>

  <h2 data-section="headline2" id="headline2">Sed Diam</h2>
  <p>…</p>

  <h2 data-section="headline3" id="headline3">Cras Tristique</h2>
  <p>…</p>

  <h2 data-section="headline4" id="headline4">Aliquam In</h2>
  <p>…</p>

  <h2 data-section="headline5" id="headline5">Phasellus Elit</h2>
  <p>…</p>
</article>
```


In this example, when each section is at the top of the viewport (minus 50px), the corresponding link will have the `myActiveClass` class added to it.