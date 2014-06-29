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
        $(document).on("click", ".uib_w_31", function(evt)
        {
         activate_subpage("#BasicMath"); 
        });
        $(document).on("click", ".uib_w_37", function(evt)
        {
         activate_subpage("#ForLoops"); 
        });
        $(document).on("click", ".uib_w_38", function(evt)
        {
         activate_subpage("#WhileLoops"); 
        });
        $(document).on("click", ".uib_w_39", function(evt)
        {
         activate_subpage("#IfElseStatements"); 
        });
        $(document).on("click", ".uib_w_32", function(evt)
        {
         activate_subpage("#LogicalOperations"); 
        });
        $(document).on("click", ".uib_w_33", function(evt)
        {
         activate_subpage("#MatrixOperations"); 
        });
        $(document).on("click", ".uib_w_35", function(evt)
        {
         activate_subpage("#CommonFunctions"); 
        });
        
}
 $(document).ready(register_event_handlers);
})();
