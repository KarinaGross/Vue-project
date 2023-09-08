<template>
    <div>
        <!-- <my-header></my-header> -->
        <articles-comp></articles-comp>
        <!-- <my-footer></my-footer> -->
    </div>
</template>
  
<script>
// import MyHeader from './MyHeader.vue';
import ArticlesComp from './ArticlesComp.vue';
// import MyFooter from './MyFooter.vue'

export default {
    name: 'blog-details',
    components: {
        // MyHeader,
        ArticlesComp,
        // MyFooter
    }
}
</script>
  
<style>
/* * {
    padding: 0;
    margin: 0;
}

a {
    text-decoration: none;
    color: black;
}

.center {
    padding-left: calc(50% - 600px);
    padding-right: calc(50% - 600px);
} */
</style>
  