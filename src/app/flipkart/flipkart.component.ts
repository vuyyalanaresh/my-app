import { Component } from '@angular/core';

@Component({
  selector: 'app-flipkart',
  templateUrl: './flipkart.component.html',
  styleUrls: ['./flipkart.component.css']
})
export class FlipkartComponent {
  products: any = [
    { name: 'pen', price: 15, rating: 3, freedelivery: 'False' },
    { name: 'book', price: 10, rating: 4, freedelivery: 'False' },
    { name: 'cap', price: 100, rating: 5, freedelivery: 'True' },
    { name: 'shirt', price: 150, rating: 3, freedelivery: 'true' },
    { name: 'watch', price: 200, rating: 5, freedelivery: 'False' },
    { name: 'shoe', price: 250, rating: 4, freedelivery: 'True' },

    
  ];
  delete(i:number){
    this.products.splice(i,1);

  }
  term:string = "";
  search(){
    this.products = this.products.filter((product:any)=>product.name.includes(this.term))
  }
  delivery(){
    this.products = this.products.filter((product:any)=>product.freedelivery==true)
  }
  priceh1(){
    this.products.sort((a:any,b:any)=>b.price-a.price);
  }
  priceh2(){
    this.products.sort((a:any,b:any)=>a.price-b.price);
  }
  ratingh2(){
    this.products.sort((a:any,b:any)=>a.rating-b.rating);
  }
  ratingh1(){
    this.products.sort((a:any,b:any)=>b.rating-a.rating);
  }
  dis(){
    this.products = this.products.map((product:any)=>
      {product.price = product.price/2;
        return product;
      })   
  }
  total(){
    let totalprice = this.products.reduce((sum:any,product:any)=>sum+product.price,0);
    alert(totalprice);
  }

  cart(){
  alert(this.products.length)
  }
  name:string ="";
price:number = 0;
rating:number = 0;
freeDelivery:boolean = true

Add(){
  let product = {
    name:this.name,
    price:this.price,
    rating:this.rating,
    freedelivery:this.freeDelivery
  
  }
  this.products.unshift(product);
  
}

}
