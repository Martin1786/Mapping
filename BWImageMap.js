var app = new Vue({
    el: '#app',
    data: {
       
        seen: true,
        message:'Hello Martin'
   }
})
var app2 = new Vue({
   el: '#app-2',
   data: {
     message: 'You loaded this page on ' + new Date().toLocaleString()
   }
 })
 var app4 = new Vue({
   el: '#app-4',
   data: {
     todos: [
       { text: 'Learn JavaScript' },
       { text: 'Learn Vue' },
       { text: 'Build something awesome' }
     ]
   }
 });
