export default () => {
    return(
        <div className="md:grid md:grid-cols-4 mx-6 my-6 sm:grid sm:grid-rows-3">
          
            <div className="overflow-hidden group/zoom h-slide2 mr-4 md:col-span-2  ">
              <img src="https://demo2.posthemes.com/pos_junno/img/cms/1_1.jpg " alt="" 
              className="group-hover/zoom:scale-110 duration-500 "/>
            </div>
          
            <div className="overflow-hidden group/zoom h-slide2 mr-4 mb-3 md:col-span-1 ">
              <img src="https://demo2.posthemes.com/pos_junno/img/cms/2_1.jpg" alt="" 
              className="group-hover/zoom:scale-110 duration-500 h-full w-full"/>
            </div>                
            

            <div className="overflow-hidden group/zoom h-slide2 mr-4 mb-3 md:col-span-1 sm:h-slide">
              <img src="https://demo2.posthemes.com/pos_junno/img/cms/3_1.jpg" alt="" 
              className="group-hover/zoom:scale-110 duration-500 h-full w-full "/>
            </div>
                
      </div>
    )
}

