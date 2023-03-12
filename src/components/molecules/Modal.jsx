

//const Modal = ({id, name, image, cost, addToCart}) => {
const Modal = (props) => {

  
   const product= props.value,
         modalID= props.modalid
  
  const addToCart= props.addToCart

  // const ID= props.id,
  //       modalID= props.modalid,
  //       name= props.name,
  //       image = props.image,
  //       cost=props.cost;
  
  //       const addToCart= props.addToCart

  return (
    <div className="modal fade fixed top-0 left-0 hidden w-full h-full outline-none overflow-x-hidden overflow-y-auto pointer-events-none"
          id={modalID} tabIndex="-1" aria-labelledby="exampleModalFullscreenLabel" aria-hidden="true">
      <div className=" modal-dialog modal-dialog-centered modal-lg relative w-auto pointer-events-none">
        <div className="modal-content border-none shadow-lg relative flex flex-col bg-white opacity-95 w-full  bg-clip-padding rounded-md outline-none text-current pb-9">
          <div className="modal-header flex flex-shrink-0 items-center justify-between p-4 rounded-t-md pointer-events-auto">
            <button type="button" className="btn-close pointer-events-auto box-content w-4 h-4 p-1 text-fontSecondary border-none rounded-none opacity-50 focus:shadow-none focus:outline-none focus:opacity-100 hover:text-black hover:opacity-75 hover:no-underline"
                    data-bs-dismiss="modal" aria-label="Close">  
            </button>
          </div>

          <div className="relative flex flex-row h-3/4">
            <div className="relative w-5/6 flex justify-center">
              <img className="object-contain w-auto h-auto md:w-3/4 brightness-120" src= {`${product.img}` }alt="zapatos" />
            </div>
      
            <div className="flex flex-col w-2/4">
              <div className="flex justify-center h-1/4">
                <h1 className="font-extralight text-xl lg:text-2xl capitalize text-fontSecondary pointer-events-auto">
                {product.title}
                
                </h1>
              </div>
              <div className="flex justify-center h-1/4">
                <h2 className="font-sans text-2xl font-light text-fontSecondary">
                  ${product.price}
                </h2>
              </div>
              <div className="flex flex-col justify-center w-auto mx-auto text-sm list-none text-fontSecondary">
                  <li>Frente con cordones</li>
                  <li>Suela de goma</li>
                  <li>Forrado en gamuza</li>
                  <li>Plantilla acolchada</li>
                  <li>Pulido a mano</li>
              </div>
              <div className="pointer-events-auto flex justify-center w-auto mt-5">
                {/* CAMBIE EL ADDTOCART(ID) por ADDTOCART(PRODUCT) */}
              <button className="bg-[#957C65] rounded-xl p-2 text-fontSecondary " onClick={()=>addToCart(product)}> COMPRAR </button>

              </div>

            </div>
          </div> 

        
          
        </div>
      </div>
    </div>
  )
}

export default Modal;
