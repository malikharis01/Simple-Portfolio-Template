import React from 'react'
import Image from 'next/image'
export default function About() {
  return (
    <div className='  pt-10 pb-10 flex justify-center'>
    
           

          

            <main className=" content-center items-center rounded-xl shadow-lg border-l-8 border-purple-500  border-b-8   space-x-10 flex-row flex border bg-white ">
                <div className=" pt-8 pl-8 pb-8  ">
                    <h2 className="my-6 text-4xl tracking-tight font-extrabold text-gray-900 ">
                        About me
                    </h2>

                    <p className=' text-medium text-justify w-[500px] '>
                        Donec porttitor, enim ut dapibus lobortis, lectus sem tincidunt dui, eget ornare lectus ex non
                        libero. Nam rhoncus diam ultrices porttitor laoreet. Ut mollis fermentum ex, vel viverra lorem
                        volutpat sodales. In ornare porttitor odio sit amet laoreet. Sed laoreet, nulla a posuere
                        ultrices, purus nulla tristique turpis, hendrerit rutrum augue quam ut est. Fusce malesuada
                        posuere libero, vitae dapibus eros facilisis euismod. Sed sed lobortis justo, ut tincidunt
                        velit. Mauris in maximus eros.
                    </p>
                </div>
                <div >

<Image className=' rounded-r-xl ' src="/port2.jpeg" alt="about" width={330} height={330}/>

</div>
            </main>
        </div>
    
    
  )
}
