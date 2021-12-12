function Cart(){
    const Product=["Milk","Tea","Rice","Wheat Floor","Sugar"]
   const Price=[30,45,60,45,100];
   var PQty=[0,0,0,0,0];
   var [Qty,SetQty]=React.useState(PQty);
   var [TotalQty, SetTotalQty]=React.useState(0);
     
    var CalulateQty=()=>{
      var total=0;
      Qty.forEach(q=> {
        total +=q;
      });
      return total;
    };
    
   var CalcluateAmount = () => {
       var total = 0;
       Qty.forEach((q, index) => {
         total += q * Price[index];
       });
   
       return total;
     };
     
    var AddToCart = index => {
       SetQty(Qty.map((q, i) => i == index ? q + 1 : q));
     };
   
     function RemoveCart(index) {
       SetQty(Qty.map((q, i) => i == index && q > 0 ? q - 1 : q));
     };
   
     return (
       React.createElement("div", null,
       Product.map((nm, index) => 
       React.createElement("div", { key: index }, 
       React.createElement("h3", null, nm, " : ", Price[index], ", Qty: ",
       Qty[index]), 
       React.createElement("button", { onClick: () => AddToCart(index) }, "Add"), 
       React.createElement("button", { onClick: () => RemoveCart(index) }, "Remove"))), 
   
       React.createElement("h4", null, "Total Quantity :- ", CalulateQty()), 
       React.createElement("h4", null, "Total Amount :- ", CalcluateAmount())));
   };
   ReactDOM.render( 
     <Cart/>,
    document.getElementById("root")
 );
 