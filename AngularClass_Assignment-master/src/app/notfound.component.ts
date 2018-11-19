import { Component } from '@angular/core';


@Component({  
    template: `<div class="row col-md-12">
    <div class="panel panel-primary ">  
        <div class="panel-heading" align="left">  
         <b>  {{title}} </b>
        </div>
        <h2> Page not Found!! </h2>          
      </div>       

</div>  `,
})

export class NotFoundComponent  {
    title : string =  'Not Found Page';
}