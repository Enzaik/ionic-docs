# Slides

We recommend <a href="http://swiperjs.com/" target="_blank" rel="noopener noreferrer">Swiper.js</a> if you need a modern touch slider component. It powers our `ion-slides` component, but we now recommend that developers use Swiper for Vue directly.

This guide will go over how to get Swiper for Vue set up in your Ionic Framework application. It will also go over any migration information you may need to move from `ion-slides` to the official Swiper Vue integration.

## Getting Started

To get started, install the Swiper dependency in your project:

```shell
npm install swiper
```

### Typescript (optional)

TypeScript users will need to add the following to their `shims-vue.d.ts` file:

```typescript
declare module 'swiper/vue' {
  import _Vue from 'vue';
  export class Swiper extends _Vue {}
  export class SwiperSlide extends _Vue {}
}
```

Swiper Vue does not have complete support for TypeScript, so this code bridges the gap. Follow https://github.com/nolimits4web/swiper/issues/3916 for updates on this issue.

You may need to restart your development server after adding this.

## Swiping with Style

Next, we need to import the base Swiper styles. We recommend importing the styles in the component in which Swiper is being used. This ensures that the styles are only loaded when needed:

```html
<script>
  import { defineComponent } from 'vue';
  
  import 'swiper/swiper-bundle.min.css';
  
  export default defineComponent({
    ...
  });
</script>
```

Ionic Framework also provides some default styles, as well as the CSS Variables that were used inside of the old `ion-slides`. If you would like to continue to use those styles and CSS Variables, be sure to import the `ionic-swiper.css` file:

```html
<script>
  import { defineComponent } from 'vue';
  
  import 'swiper/swiper-bundle.min.css';
  import '@ionic/vue/css/ionic-swiper.css';
  
  export default defineComponent({
    ...
  });
</script>
```

You should also update any selectors to target the correct Swiper classes. If you were targeting `ion-slides`, you should target `.swiper-container`. If you were targeting `ion-slide`, you should target `.swiper-slide`.

### Pre-processors (optional)

For developers using SCSS or Less styles, Swiper also provides imports for those files. The difference here is that each Swiper module is broken out into its own file, so you may have to import multiple stylesheets if you are using modules such as transition effects, zoom, or pagination.

If you wanted to import the base Swiper styles and the pagination styles, you would do the following:

```html
<script>
  import { defineComponent } from 'vue';
  
  import 'swiper.scss';
  import 'swiper/components/pagination/pagination.scss';
  import '@ionic/vue/css/ionic-swiper.css';
  
  export default defineComponent({
    ...
  });
</script>
```

Swiper has a complete list of the stylesheets you can import here: <a href="https://swiperjs.com/vue#styles" target="_blank" rel="noopener noreferrer">https://swiperjs.com/vue#styles</a>.

## Using Components

Swiper exports two components: `Swiper` and `SwiperSlide`. The `Swiper` component is the equivalent of `IonSlides`, and `SwiperSlide` is the equivalent of `IonSlide`.

These components are imported from `swiper/vue` and provided to your Vue component:

```html
<template>
  <ion-page>
    <ion-content>
      <swiper>
        <swiper-slide>Slide 1</swiper-slide>
        <swiper-slide>Slide 3</swiper-slide>
        <swiper-slide>Slide 3</swiper-slide>
      </swiper>
    </ion-content>
  </ion-page>
</template>

<script>
  import { defineComponent } from 'vue';
  import { Swiper, SwiperSlide } from 'swiper/vue';
  import { IonContent, IonPage } from '@ionic/vue';
  
  import 'swiper/swiper-bundle.min.css';
  import '@ionic/vue/css/ionic-swiper.css';
  
  export default defineComponent({
    components: {
      Swiper, 
      SwiperSlide, 
      IonContent, 
      IonPage
    }
  });
</script>
```

## The IonicSwiper Module

There are a few edge cases in Ionic Framework where Swiper may not be able to compute the slider dimensions properly. As a result, we have created the `IonicSwiper` module to resolve some of these issues.

To install it, we first need to import the core Swiper library and the IonicSwiper module:

```javascript
import SwiperCore from 'swiper';
import { IonicSwiper } from '@ionic/vue';
```

Then we can install the module:

```html
<script>
  import { defineComponent } from 'vue';
  import SwiperCore from 'swiper';
  import { Swiper, SwiperSlide } from 'swiper/vue';
  import { IonContent, IonPage, IonicSwiper } from '@ionic/vue';
    
  import 'swiper/swiper-bundle.min.css';
  import '@ionic/vue/css/ionic-swiper.css';
  
  SwiperCore.use([IonicSwiper]);
  
  export default defineComponent({
    components: {
      Swiper, 
      SwiperSlide, 
      IonContent, 
      IonPage
    }
  });
</script>
```

## Additional Modules

By default, Swiper for Vue uses the core version of Swiper and does not import any additional modules. To use modules such as Navigation or Pagination, you need to import them first.

`ion-slides` automatically included the Pagination, Scrollbar, Autoplay, Keyboard, and Zoom modules. If you used any of these features, be sure to import them in your application.

The following example shows how to install the Navigation and Pagination plugins:

```html
<template>
  <ion-page>
    <ion-content>
      <swiper
        :pagination="{ clickable: true }"
        navigation
      >
        <swiper-slide>Slide 1</swiper-slide>
        <swiper-slide>Slide 3</swiper-slide>
        <swiper-slide>Slide 3</swiper-slide>
      </swiper>
    </ion-content>
  </ion-page>
</template>
<script>
  import { defineComponent } from 'vue';
  import SwiperCore, { Navigation, Pagination } from 'swiper';
  import { Swiper, SwiperSlide } from 'swiper/vue';
  import { IonContent, IonPage, IonicSwiper } from '@ionic/vue';
  
  import 'swiper/swiper-bundle.min.css';
  import '@ionic/vue/css/ionic-swiper.css';
  
  SwiperCore.use([IonicSwiper, Navigation, Pagination]);
  
  export default defineComponent({
    components: { Swiper, SwiperSlide, IonContent, IonPage }
  });
</script>
```

:::note
Importing `swiper-bundle.min.css` imports styles for all modules. When using the SCSS or Less styles, you will need to import the styles for each module. See <a href="https://swiperjs.com/vue#styles" target="_blank" rel="noopener noreferrer">https://swiperjs.com/vue#styles</a> for a full list of stylesheets.
:::

## Properties

Swiper options are provided as props directly on the `<swiper>` component rather than via the `options` object in `ion-slides`.

Let's say in an app with `ion-slides` we had the `slidesPerView` and `loop` options set:

```html
<template>
  <ion-slides
    :options="{ slidesPerView: true, loop: true }"
  >
    <ion-slide>Slide 1</ion-slide>
    <ion-slide>Slide 3</ion-slide>
    <ion-slide>Slide 3</ion-slide>
  </ion-slides>
</template>
```

To migrate, we would move these options out of the `options` object and onto the `<swiper>` component directly as properties:

```html
<template>
  <swiper
    :slides-per-view="3"
    :loop="true"
  >
    <swiper-slide>Slide 1</swiper-slide>
    <swiper-slide>Slide 3</swiper-slide>
    <swiper-slide>Slide 3</swiper-slide>
  </swiper>
</template>
```

Below is a full list of property changes when going from `ion-slides` to Swiper Vue:

| Name      | Notes |
| --------- | ----- |
| options   | Set each option as a property directly on the `<swiper>` component. |
| mode      | For different styles based upon the mode, you can target the slides with `.ios .swiper-container` or `.md .swiper-container` |
| pager     | Use the `pagination` property instead. Requires installation of the Pagination module. |
| scrollbar | You can continue to use the `scrollbar` property, just be sure to install the Scrollbar module first. |

All properties available in Swiper Vue can be found at <a href="https://swiperjs.com/vue#swiper-props" target="_blank" rel="noopener noreferrer">https://swiperjs.com/vue#swiper-props</a>.

## Events

Since the `Swiper` component is not provided by Ionic Framework, event names will not have an `ionSlide` prefix to them.

Let's say in an app with `ion-slides` we used the `ionSlideDidChange` event:

```html
<template>
  <ion-slides 
    @ionSlideDidChange="onSlideChange"
  >
    <ion-slide>Slide 1</ion-slide>
    <ion-slide>Slide 3</ion-slide>
    <ion-slide>Slide 3</ion-slide>
  </ion-slides>
</template>
```

To migrate, we would change the name of the event to `slideChange`:

```html
<template>
  <swiper
    @slideChange="onSlideChange"
  >
    <swiper-slide>Slide 1</swiper-slide>
    <swiper-slide>Slide 3</swiper-slide>
    <swiper-slide>Slide 3</swiper-slide>
  </swiper>
</template>
```

Below is a full list of event name changes when going from `ion-slides` to Swiper Vue:

| ion-slides Event        | Swiper Event |
| ----------------------- | ------------ |
| ionSlideWillChange      | slideChangeTransitionStart |
| ionSlideDidChange       | slideChangeTransitionEnd |
| ionSlideDoubleTap       | doubleTap |
| ionSlideDrag            | sliderMove |
| ionSlideNextStart       | slideNextTransitionStart |
| ionSlideNextEnd         | slideNextTransitionEnd |
| ionSlidePrevStart       | slidePrevTransitionStart |
| ionSlidePrevEnd         | slidePrevTransitionEnd |
| ionSlideReachStart      | reachBeginning |
| ionSlideReachEnd        | reachEnd |
| ionSlideTap             | tap |
| ionSlideTouchStart      | touchStart |
| ionSlideTouchEnd        | touchEnd |
| ionSlideTransitionStart | transitionStart |
| ionSlideTransitionEnd   | transitionEnd |
| ionSlidesDidLoad        | init |

All events available in Swiper Vue can be found at <a href="https://swiperjs.com/vue#swiper-events" target="_blank" rel="noopener noreferrer">https://swiperjs.com/vue#swiper-events</a>.

## Methods

Most methods have been removed in favor of accessing the `<swiper>` props directly. When calling methods, you no longer need to access `$el` first.

Accessing these properties can be tricky as you want to access the properties on the Swiper instance itself, not your Vue component. To do this, we recommend getting a reference to the `Swiper` instance via `@swiper`:

```html
<template>
  <swiper
    @swiper="setSwiperInstance"
  >
    ...
  </swiper>
</template>

<script>
import { defineComponent, ref } from 'vue';
export default defineComponent({
  ...,
  setup() {
    const slides = ref();
    const setSwiperInstance = (swiper: any) => {
      slides.value = swiper;
    }
    return { setSwiperInstance };
  }
});
</script>
```

From here, if you wanted to access a property on the Swiper instance you would access `slides.value`. For example, if you wanted to check the `isBeginning` property, you could do: `slides.value.isBeginning`. Make sure `slides.value` is defined first though!

Below is a full list of method changes when going from `ion-slides` to Swiper Vue:

| Name               | Notes |
| ------------------ | ----- |
| getActiveIndex()   | Use the `activeIndex` property instead. |
| getPreviousIndex() | Use the `previousIndex` property instead. |
| getSwiper()        | Get a reference to the Swiper instance using `@swiper`. See example above. |
| isBeginning()      | Use the `isBeginning` property instead. |
| isEnd()            | Use the `isEnd` property instead. |
| length()           | Use the `slides` property instead. (i.e swiperRef.slides.length) |
| lockSwipeToNext()  | Use the `allowSlidesNext` property instead. |
| lockSwipeToPrev()  | Use the `allowSlidePrev` property instead. |
| lockSwipes()       | Use the `allowSlideNext`, `allowSlidePrev`, and `allowTouchMove` properties instead. |
| startAutoplay()    | Use the `autoplay` property instead. |
| stopAutoplay()     | Use the `autoplay` property instead. |

## Effects

If you are using effects such as Cube or Fade, you can install them similar to how you installed the other modules:

```html
<template>
  <swiper effect="fade">
    <swiper-slide>Slide 1</swiper-slide>
    <swiper-slide>Slide 2</swiper-slide>
    <swiper-slide>Slide 3</swiper-slide>
    ...
  </swiper>
</template>
<script>
  import { defineComponent } from 'vue';
  import SwiperCore, { EffectFade } from 'swiper';
  import { Swiper, SwiperSlide } from 'swiper/vue';
  
  import 'swiper/swiper-bundle.min.css';
  import '@ionic/vue/css/ionic-swiper.css';
  
  SwiperCore.use([EffectFade]);
  
  export default defineComponent({
    ...
  });
</script>
```

For more information on effects in Swiper, please see <a href="https://swiperjs.com/vue#effects" target="_blank" rel="noopener noreferrer">https://swiperjs.com/vue#effects</a>.

## Wrap Up

Now that you have Swiper installed, there is a whole set of new Swiper features for you to enjoy. We recommend starting with the <a href="https://swiperjs.com/vue" target="_blank" rel="noopener noreferrer">Swiper Vue Introduction</a> and then referencing <a href="https://swiperjs.com/swiper-api" target="_blank" rel="noopener noreferrer">the Swiper API docs</a>.

### Where do I file issues?

Before opening an issue, please consider creating a post on the <a href="https://github.com/nolimits4web/swiper/discussions" target="_blank" rel="noopener noreferrer">Swiper Discussion Board</a> or the <a href="https://forum.ionicframework.com" target="_blank">Ionic Forum</a> to see if your issue can be resolved by the community.

If you are running into problems with the Swiper library, new bugs should be filed on the Swiper repo: <a href="https://github.com/nolimits4web/swiper/issues" target="_blank" rel="noopener noreferrer">https://github.com/nolimits4web/swiper/issues</a>

If you are running into problems with the `IonicSwiper` module, new bugs should be filed on the Ionic Framework repo: <a href="https://github.com/ionic-team/ionic-framework/issues" target="_blank" rel="noopener noreferrer">https://github.com/ionic-team/ionic-framework/issues</a>