<template>
  <div id="app">
<input type="text" @keydown.esc.enter="keyEvent($event)"/>
  </div>
</template>
<script>
export default { 
  name:"App",
  data(){
    return{
   num:0,
    };
  },
  methods:{
   keyEvent(){
    console.log('恐惧是万敌之首');
   }
   
   
  },
};
</script>
<style>

</style>
