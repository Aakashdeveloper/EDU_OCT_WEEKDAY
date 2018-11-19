import { Component } from '@angular/core';
import { IHome } from './home';


@Component({  
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})

export class HomeComponent  {

    title : string =  'Home Page';

    homeDetails : IHome[] = [{
       "name":"harish ningireddy",
        "education":"Masters",
        "disc":"Ever once in a while, I blow my mind by getting on board with the trends I never imagined I would. Earlier this year it was the belt bag trend and now it’s the chunky sneakers. But, I’m not surprised by my fondness for these kicks. I’ve always loved platform Ever once in a while, I blow my mind by getting on board with the trends I never imagined I would. Earlier this year it was the belt bag trend and now it’s the chunky sneakers. But, I’m not surprised by my fondness for these kicks. I’ve always loved platform Ever once in a while, I blow my mind by getting on board with the trends I never imagined I would. Earlier this year it was the belt bag trend and now it’s the chunky sneakers. But, I’m not surprised by my fondness for these kicks. I’ve always loved platform Ever once in a while, I blow my mind by getting on board with the trends I never imagined I would. Earlier this year it was the belt bag trend and now it’s the chunky sneakers. But, I’m not surprised by my fondness for these kicks. I’ve always loved platformEver once in a while, I blow my mind by getting on board with the trends I never imagined I would. Earlier this year it was the belt bag trend and now it’s the chunky sneakers. But, I’m not surprised by my fondness for these kicks. I’ve always loved platformEver once in a while, I blow my mind by getting on board with the trends I never imagined I would. Earlier this year it was the belt bag trend and now it’s the chunky sneakers. But, I’m not surprised by my fondness for these kicks. I’ve always loved platformEver once in a while, I blow my mind by getting on board with the trends I never imagined I would. Earlier this year it was the belt bag trend and now it’s the chunky sneakers. But, I’m not surprised by my fondness for these kicks. I’ve always loved platform",
        "address1":"18010 Flynn Dr",
        "address2":"Unit 6506",
        "city":"Santa Clarita",
        "zip":"91387",
        "phone":"213-952-0677",
       "email":"hningire@gmail.com"
    }]; 

   
    
}
