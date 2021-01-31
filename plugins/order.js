module.exports = {
  plugins: ['stylelint-order'],

  extends: ['stylelint-config-idiomatic-order'],

  rules: {
    'order/order': [
      /**
       * SASS Extend
       *
       * @example
       * ```scss
       * .my-component {
       *   @extend: .custom-class;
       * }
       * ```
       */
      { type: 'at-rule', name: 'extend' },

      /**
       * SASS Include
       *
       * @example
       * ```scss
       * .my-component {
       *   @include: mixins;
       * }
       * ```
       */
      { type: 'at-rule', name: 'include' },

      /**
       * SASS Variables
       *
       * @example
       * ```scss
       * .my-component {
       *   $color: red;
       * }
       * ```
       */
      'dollar-variables',

      /**
       * LESS Variables
       *
       * @example
       * ```scss
       * .my-component {
       *   @color: red;
       * }
       * ```
       */
      'at-variables',

      /**
       * CSS
       *
       * @example
       * ```scss
       * .my-component {
       *   --color: red;
       * }
       * ```
       */
      'custom-properties',

      /**
       * Declarations
       *
       * @example
       * ```scss
       * .my-component {
       *   color: red;
       * }
       * ```
       */
      'declarations',

      /**
       * BEM modifiers
       *
       * @example
       * ```scss
       * .my-component {
       *   &--modifier {}
       * }
       * ```
       */
      { type: 'rule', selector: /--/ },

      /**
       * Pseudo Elements
       *
       * @example
       * ```scss
       * .my-component {
       *   &::before {}
       * }
       * ```
       */
      { type: 'rule', selector: '::after' },
      { type: 'rule', selector: '::backdrop' },
      { type: 'rule', selector: '::before' },
      { type: 'rule', selector: '::cue' },
      { type: 'rule', selector: '::first-letter' },
      { type: 'rule', selector: '::first-line' },
      { type: 'rule', selector: '::grammar-error' },
      { type: 'rule', selector: '::marker' },
      { type: 'rule', selector: '::placeholder' },
      { type: 'rule', selector: '::selection' },
      { type: 'rule', selector: '::slotted' },
      { type: 'rule', selector: '::spelling-error' },
      /**
       * Pseudo Classes
       *
       * @example
       * ```scss
       * .my-component {
       *   &:empty {}
       * }
       * ```
       */
      { type: 'rule', selector: ':active' },
      { type: 'rule', selector: ':any' },
      { type: 'rule', selector: ':any-link' },
      { type: 'rule', selector: ':blank' },
      { type: 'rule', selector: ':checked' },
      { type: 'rule', selector: ':default' },
      { type: 'rule', selector: ':defined' },
      { type: 'rule', selector: ':dir' },
      { type: 'rule', selector: ':disabled' },
      { type: 'rule', selector: ':empty' },
      { type: 'rule', selector: ':enabled' },
      { type: 'rule', selector: ':first' },
      { type: 'rule', selector: ':first-child' },
      { type: 'rule', selector: ':first-of-type' },
      { type: 'rule', selector: ':focus' },
      { type: 'rule', selector: ':focus-visible' },
      { type: 'rule', selector: ':focus-within' },
      { type: 'rule', selector: ':fullscreen' },
      { type: 'rule', selector: ':has' },
      { type: 'rule', selector: ':host' },
      { type: 'rule', selector: ':host-context' },
      { type: 'rule', selector: ':hover' },
      { type: 'rule', selector: ':in-range' },
      { type: 'rule', selector: ':indeterminate' },
      { type: 'rule', selector: ':invalid' },
      { type: 'rule', selector: ':is' },
      { type: 'rule', selector: ':lang' },
      { type: 'rule', selector: ':last-child' },
      { type: 'rule', selector: ':last-of-type' },
      { type: 'rule', selector: ':left' },
      { type: 'rule', selector: ':link' },
      { type: 'rule', selector: ':matches' },
      { type: 'rule', selector: ':not' },
      { type: 'rule', selector: ':nth-child' },
      { type: 'rule', selector: ':nth-last-child' },
      { type: 'rule', selector: ':nth-last-of-type' },
      { type: 'rule', selector: ':nth-of-type' },
      { type: 'rule', selector: ':only-child' },
      { type: 'rule', selector: ':only-of-type' },
      { type: 'rule', selector: ':optional' },
      { type: 'rule', selector: ':out-of-range' },
      { type: 'rule', selector: ':placeholder-shown' },
      { type: 'rule', selector: ':read-only' },
      { type: 'rule', selector: ':read-write' },
      { type: 'rule', selector: ':required' },
      { type: 'rule', selector: ':right' },
      { type: 'rule', selector: ':root' },
      { type: 'rule', selector: ':scope' },
      { type: 'rule', selector: ':target' },
      { type: 'rule', selector: ':valid' },
      { type: 'rule', selector: ':visited' },
      { type: 'rule', selector: ':where' },

      /**
       * CSS [attribute*=value] Selector
       *
       * @example
       * ```scss
       * .my-component {
       *   &[class*="custom"] {}
       * }
       * ```
       */
      { type: 'rule', selector: /\[accept/ },
      { type: 'rule', selector: /\[accept-charset/ },
      { type: 'rule', selector: /\[accesskey/ },
      { type: 'rule', selector: /\[action/ },
      { type: 'rule', selector: /\[align/ },
      { type: 'rule', selector: /\[alt/ },
      { type: 'rule', selector: /\[async/ },
      { type: 'rule', selector: /\[autocomplete/ },
      { type: 'rule', selector: /\[autofocus/ },
      { type: 'rule', selector: /\[autoplay/ },
      { type: 'rule', selector: /\[bgcolor/ },
      { type: 'rule', selector: /\[border/ },
      { type: 'rule', selector: /\[charset/ },
      { type: 'rule', selector: /\[checked/ },
      { type: 'rule', selector: /\[cite/ },
      { type: 'rule', selector: /\[class/ },
      { type: 'rule', selector: /\[color/ },
      { type: 'rule', selector: /\[cols/ },
      { type: 'rule', selector: /\[colspan/ },
      { type: 'rule', selector: /\[content/ },
      { type: 'rule', selector: /\[contenteditable/ },
      { type: 'rule', selector: /\[controls/ },
      { type: 'rule', selector: /\[coords/ },
      { type: 'rule', selector: /\[data/ },
      { type: 'rule', selector: /\[data-/ },
      { type: 'rule', selector: /\[datetime/ },
      { type: 'rule', selector: /\[default/ },
      { type: 'rule', selector: /\[defer/ },
      { type: 'rule', selector: /\[dir/ },
      { type: 'rule', selector: /\[dirname/ },
      { type: 'rule', selector: /\[disabled/ },
      { type: 'rule', selector: /\[download/ },
      { type: 'rule', selector: /\[draggable/ },
      { type: 'rule', selector: /\[enctype/ },
      { type: 'rule', selector: /\[for/ },
      { type: 'rule', selector: /\[form/ },
      { type: 'rule', selector: /\[formaction/ },
      { type: 'rule', selector: /\[headers/ },
      { type: 'rule', selector: /\[height/ },
      { type: 'rule', selector: /\[hidden/ },
      { type: 'rule', selector: /\[high/ },
      { type: 'rule', selector: /\[href/ },
      { type: 'rule', selector: /\[hreflang/ },
      { type: 'rule', selector: /\[http-equiv/ },
      { type: 'rule', selector: /\[id/ },
      { type: 'rule', selector: /\[ismap/ },
      { type: 'rule', selector: /\[kind/ },
      { type: 'rule', selector: /\[label/ },
      { type: 'rule', selector: /\[lang/ },
      { type: 'rule', selector: /\[list/ },
      { type: 'rule', selector: /\[loop/ },
      { type: 'rule', selector: /\[low/ },
      { type: 'rule', selector: /\[max/ },
      { type: 'rule', selector: /\[maxlength/ },
      { type: 'rule', selector: /\[media/ },
      { type: 'rule', selector: /\[method/ },
      { type: 'rule', selector: /\[min/ },
      { type: 'rule', selector: /\[multiple/ },
      { type: 'rule', selector: /\[muted/ },
      { type: 'rule', selector: /\[name/ },
      { type: 'rule', selector: /\[novalidate/ },
      { type: 'rule', selector: /\[onabort/ },
      { type: 'rule', selector: /\[onafterprint/ },
      { type: 'rule', selector: /\[onbeforeprint/ },
      { type: 'rule', selector: /\[onbeforeunload/ },
      { type: 'rule', selector: /\[onblur/ },
      { type: 'rule', selector: /\[oncanplay/ },
      { type: 'rule', selector: /\[oncanplaythrough/ },
      { type: 'rule', selector: /\[onchange/ },
      { type: 'rule', selector: /\[onclick/ },
      { type: 'rule', selector: /\[oncontextmenu/ },
      { type: 'rule', selector: /\[oncopy/ },
      { type: 'rule', selector: /\[oncuechange/ },
      { type: 'rule', selector: /\[oncut/ },
      { type: 'rule', selector: /\[ondblclick/ },
      { type: 'rule', selector: /\[ondrag/ },
      { type: 'rule', selector: /\[ondragend/ },
      { type: 'rule', selector: /\[ondragenter/ },
      { type: 'rule', selector: /\[ondragleave/ },
      { type: 'rule', selector: /\[ondragover/ },
      { type: 'rule', selector: /\[ondragstart/ },
      { type: 'rule', selector: /\[ondrop/ },
      { type: 'rule', selector: /\[ondurationchange/ },
      { type: 'rule', selector: /\[onemptied/ },
      { type: 'rule', selector: /\[onended/ },
      { type: 'rule', selector: /\[onerror/ },
      { type: 'rule', selector: /\[onfocus/ },
      { type: 'rule', selector: /\[onhashchange/ },
      { type: 'rule', selector: /\[oninput/ },
      { type: 'rule', selector: /\[oninvalid/ },
      { type: 'rule', selector: /\[onkeydown/ },
      { type: 'rule', selector: /\[onkeypress/ },
      { type: 'rule', selector: /\[onkeyup/ },
      { type: 'rule', selector: /\[onload/ },
      { type: 'rule', selector: /\[onloadeddata/ },
      { type: 'rule', selector: /\[onloadedmetadata/ },
      { type: 'rule', selector: /\[onloadstart/ },
      { type: 'rule', selector: /\[onmousedown/ },
      { type: 'rule', selector: /\[onmousemove/ },
      { type: 'rule', selector: /\[onmouseout/ },
      { type: 'rule', selector: /\[onmouseover/ },
      { type: 'rule', selector: /\[onmouseup/ },
      { type: 'rule', selector: /\[onmousewheel/ },
      { type: 'rule', selector: /\[onoffline/ },
      { type: 'rule', selector: /\[ononline/ },
      { type: 'rule', selector: /\[onpagehide/ },
      { type: 'rule', selector: /\[onpageshow/ },
      { type: 'rule', selector: /\[onpaste/ },
      { type: 'rule', selector: /\[onpause/ },
      { type: 'rule', selector: /\[onplay/ },
      { type: 'rule', selector: /\[onplaying/ },
      { type: 'rule', selector: /\[onpopstate/ },
      { type: 'rule', selector: /\[onprogress/ },
      { type: 'rule', selector: /\[onratechange/ },
      { type: 'rule', selector: /\[onreset/ },
      { type: 'rule', selector: /\[onresize/ },
      { type: 'rule', selector: /\[onscroll/ },
      { type: 'rule', selector: /\[onsearch/ },
      { type: 'rule', selector: /\[onseeked/ },
      { type: 'rule', selector: /\[onseeking/ },
      { type: 'rule', selector: /\[onselect/ },
      { type: 'rule', selector: /\[onstalled/ },
      { type: 'rule', selector: /\[onstorage/ },
      { type: 'rule', selector: /\[onsubmit/ },
      { type: 'rule', selector: /\[onsuspend/ },
      { type: 'rule', selector: /\[ontimeupdate/ },
      { type: 'rule', selector: /\[ontoggle/ },
      { type: 'rule', selector: /\[onunload/ },
      { type: 'rule', selector: /\[onvolumechange/ },
      { type: 'rule', selector: /\[onwaiting/ },
      { type: 'rule', selector: /\[onwheel/ },
      { type: 'rule', selector: /\[open/ },
      { type: 'rule', selector: /\[optimum/ },
      { type: 'rule', selector: /\[pattern/ },
      { type: 'rule', selector: /\[placeholder/ },
      { type: 'rule', selector: /\[poster/ },
      { type: 'rule', selector: /\[preload/ },
      { type: 'rule', selector: /\[readonly/ },
      { type: 'rule', selector: /\[rel/ },
      { type: 'rule', selector: /\[required/ },
      { type: 'rule', selector: /\[reversed/ },
      { type: 'rule', selector: /\[rows/ },
      { type: 'rule', selector: /\[rowspan/ },
      { type: 'rule', selector: /\[sandbox/ },
      { type: 'rule', selector: /\[scope/ },
      { type: 'rule', selector: /\[selected/ },
      { type: 'rule', selector: /\[shape/ },
      { type: 'rule', selector: /\[size/ },
      { type: 'rule', selector: /\[sizes/ },
      { type: 'rule', selector: /\[span/ },
      { type: 'rule', selector: /\[spellcheck/ },
      { type: 'rule', selector: /\[src/ },
      { type: 'rule', selector: /\[srcdoc/ },
      { type: 'rule', selector: /\[srclang/ },
      { type: 'rule', selector: /\[srcset/ },
      { type: 'rule', selector: /\[start/ },
      { type: 'rule', selector: /\[step/ },
      { type: 'rule', selector: /\[style/ },
      { type: 'rule', selector: /\[tabindex/ },
      { type: 'rule', selector: /\[target/ },
      { type: 'rule', selector: /\[title/ },
      { type: 'rule', selector: /\[translate/ },
      { type: 'rule', selector: /\[type/ },
      { type: 'rule', selector: /\[usemap/ },
      { type: 'rule', selector: /\[value/ },
      { type: 'rule', selector: /\[width/ },
      { type: 'rule', selector: /\[/ },

      /**
       * At Rules
       *
       * @example
       * ```scss
       * .my-component {
       *   @media screen and (max-width: 992px) {}
       * }
       * ```
       */
      { type: 'at-rule', name: 'at-root' },
      'at-rules',
      { type: 'at-rule', name: 'media' },
      { type: 'at-rule', name: 'keyframes' },

      /**
       * Rules
       *
       * @example
       * ```scss
       * .my-component {
       *   & + div {}
       * }
       * ```
       */
      { type: 'rule', selector: /\*/ },
      { type: 'rule', selector: /~/ },
      { type: 'rule', selector: /\+/ },
      { type: 'rule', selector: />\s/ },
      { type: 'rule', selector: /\./ },
      { type: 'rule', selector: /#/ },
      'rules',

      /**
       * Deep Operators
       *
       * @example
       * ```scss
       * .my-component {
       *   & ::v-deep {
       *     & .child-component {}
       *   }
       * }
       * ```
       */
      { type: 'rule', selector: /::v-deep/ },
      { type: 'rule', selector: />>>/ },
      { type: 'rule', selector: /\/deep\// },
    ],
  },
  'order/properties-alphabetical-order': true,
};
