import "./Product.css"
function Product(){
    
    return(
        <div className="Product">
            <div className="img-box">
                <img src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
            </div>
            <div className="text-content">
            <h3>Product Title</h3>
            <h5>Product Description</h5>
            </div>
            
        </div>
    );
}
export default Product;