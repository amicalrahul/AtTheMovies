import {RouteParams, CanActivate, CanDeactivate, 
	    OnActivate, OnDeactivate,
		ComponentInstruction} from "@angular/router-deprecated";
import {Component} from "@angular/core";

let canActivate = (next : ComponentInstruction, 
                   prev : ComponentInstruction) => {
	console.log("CanActivate", next, prev);
	return Promise.resolve(true);		
};

@Component({
	template: "<div>{{id}}</div>"
})
@CanActivate(canActivate)
export class MovieDetail implements 
		OnActivate, CanDeactivate, OnDeactivate{
		
	constructor(private _params : RouteParams) {
		this.id = _params.get("id");
	}
	
	routerOnActivate(next : ComponentInstruction, 
                     prev : ComponentInstruction) {
		console.log("OnActivate", next, prev);
	}
	
	routerCanDeactivate(next : ComponentInstruction, 
                   		prev : ComponentInstruction) {
		console.log("CanDeactivate", next, prev);
		return true;
	}
	
	routerOnDeactivate(next : ComponentInstruction, 
                   	   prev : ComponentInstruction) {
		console.log("OnDeactivate", next, prev);
	}
	
	id:string;
	
}


