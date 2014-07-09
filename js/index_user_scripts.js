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
        
        $(document).on("click", ".uib_w_41", function(evt)
        {
         activate_subpage("#FunctionSyntax"); 
        });
        $(document).on("click", ".uib_w_42", function(evt)
        {
         activate_subpage("#CallingFunctions"); 
        });
        $(document).on("click", ".uib_w_43", function(evt)
        {
         activate_subpage("#GoodPractice"); 
        });
        
        $(document).on("click", "#FunctionBack", function(evt)
        {
         activate_subpage("#item5_pagesub"); 
        });
        $(document).on("click", "#CallingBack", function(evt)
        {
         activate_subpage("#item5_pagesub"); 
        });
        $(document).on("click", "#PracticeBack", function(evt)
        {
         activate_subpage("#item5_pagesub"); 
        });
        $(document).on("click", "#IfElseBack", function(evt)
        {
         activate_subpage("#item4_pagesub"); 
        });
        $(document).on("click", "#Back42", function(evt)
        {
         activate_subpage("#item4_pagesub"); 
        });
        $(document).on("click", "#BackFor", function(evt)
        {
         activate_subpage("#item4_pagesub"); 
        });
        $(document).on("click", "#CommonBack", function(evt)
        {
         activate_subpage("#item3_pagesub"); 
        });
        $(document).on("click", ".uib_w_64", function(evt)
        {
         activate_subpage("#item3_pagesub"); 
        });
        $(document).on("click", ".uib_w_61", function(evt)
        {
         activate_subpage("#item3_pagesub"); 
        });
        $(document).on("click", "#BasicMathBack", function(evt)
        {
         activate_subpage("#item3_pagesub"); 
        });
        $(document).on("click", ".uib_w_111", function(evt)
        {
        /* your code goes here */ 
        });
        $(document).on("click", "#ComFunc", function(evt)
        {
         activate_subpage("#CommonFunctions"); 
        });
}
 $(document).ready(register_event_handlers);
})();
