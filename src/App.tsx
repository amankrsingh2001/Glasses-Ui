import HamburgerMenu from "./components/HamburgerMenu";

const App = ()=>{
  
        return <div className="h-screen w-screen grid grid-rows-[70px_70px_300px_1fr] grid-cols-1 bg-[#F2EFE7]">
                  <div className="flex justify-between">
                    <div className="flex justify-around px-12 items-center">
                        <div className="w-[18px] h-[18px] bg-black rounded-full"></div>
                        <div className="w-[18px] h-[18px] bg-black rounded-full"></div>
                    </div>
                    <div className="flex justify-center items-center gap-7 mr-5 px-12 ">
                        <p className="text-md font-light font-sans flex whitespace-nowrap gap-2">EN : <span className="font-light text-gray-400 mr-[4px]"> IN</span></p>
                        <p className="text-md  font-light font-sans hidden md:block ">Country : <span>India</span></p>
                        <p className="text-md  font-light font-sans hidden md:block">Profile</p>
                        <p className="text-md font-light font-sans hidden md:block">Whislist<span> [0]</span></p>
                        <p className="text-md font-light font-sans hidden md:block">Search</p>
                        <p className="ml-16 sm:block md:hidden">
                          <HamburgerMenu/>
                        </p>
                    </div>
                  </div>
                  <div className="flex gap-18 px-12 items-center overflow-x-auto navscrollbar">
                    <h4 className="uppercase font-light text-[14px] cursor-pointer hover:underline">Sun</h4>
                    <h4 className="uppercase font-light text-[14px] cursor-pointer hover:underline">Optical</h4>
                    <h4 className="uppercase font-light text-[14px] cursor-pointer hover:underline">Collections</h4>
                    <h4 className="uppercase font-light text-[14px] cursor-pointer hover:underline">Studio</h4>
                    <h4 className="uppercase font-light text-[14px] cursor-pointer hover:underline">About</h4>
                    <h4 className="uppercase font-light text-[14px] cursor-pointer hover:underline">Shops</h4>
                    <h4 className="uppercase font-light text-[14px] cursor-pointer hover:underline">Journal</h4>
                  </div>
                  <div className="flex flex-nowrap overflow-x-auto webkit scrollbar">

                    <div className="min-w-[500px] w-[55%] flex justify-end items-center shrink-0 ">
                      <h4 className="text-[25vw] sm:text-[140px] md:text-[150px] font-thin drop-shadow-lg mr-4">Trendline</h4>
                    </div>

                    <div className="min-w-[500px] w-[55%] justify-end flex items-center shrink-0 ">
                      <h4 className="text-[25vw] sm:text-[140px] md:text-[150px] font-thin drop-shadow-lg mr-4">Blender</h4>
                    </div>

                    <div className="min-w-[500px] w-[55%] flex justify-end items-center shrink-0 ">
                      <h4 className="text-[25vw] sm:text-[140px] md:text-[150px] font-thin drop-shadow-lg mr-4">Fashion</h4>
                    </div>

                  </div>
                  <div className="flex overflow-x-auto imgscrollbar">
                    <img className="shrink-0 w-full h-full object-cover object-[50%_30%]" src="https://images.unsplash.com/photo-1504131598085-4cca8500b677?q=80&w=3538&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"/>
                    <img className="shrink-0 w-full h-full object-cover object-[50%_30%]" src="https://images.unsplash.com/photo-1477814670986-8d8dccc5640d?q=80&w=3546&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"/>
                    <img className="shrink-0 w-full h-full object-cover object-[50%_30%]" src="https://images.unsplash.com/photo-1544825470-60e99eef8a70?q=80&w=3425&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"/>
                   
                  </div>
               </div>  
}

export default App;