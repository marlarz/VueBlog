<template>
  <pre class="hljs pa-2 rounded" :class="{ 'd-inline-block py-0' : inlineCode }"
       style="margin: 1px 0;"
       ref="code"><code class="hljs"><slot></slot></code></pre>
</template>

<script>
import hljs from 'highlight.js/lib/core';
import 'highlight.js/styles/github-dark-dimmed.css';
import javascript from 'highlight.js/lib/languages/javascript';
import css from 'highlight.js/lib/languages/scss';
import xml from 'highlight.js/lib/languages/xml';

hljs.registerLanguage('xml', xml);
hljs.registerLanguage('javascript', javascript);
hljs.registerLanguage('undefined', css);
hljs.registerLanguage('scss', css);

export default {
  name: 'Code',
  data() {
    return {
      inlineCode: false,
    };
  },
  created() {
    const slotText = this.$slots.default[0].text;
    const wordsCounter = slotText.split(' ').length;
    this.inlineCode = wordsCounter <= 1;
  },
  mounted() {
    hljs.highlightElement(this.$refs.code);
  },
};
</script>

<style scoped>

</style>
