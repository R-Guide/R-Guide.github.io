(function()
{
 "use strict";
 /*
   hook up event handlers 
 */
 function register_event_handlers()
 {
    
    
         $(document).on("click", ".uib_w_28", function(evt)
        {
         activate_subpage("#AboutUs"); 
        });
}
 $(document).ready(register_event_handlers);
})();
